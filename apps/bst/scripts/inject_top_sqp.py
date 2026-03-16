import os
import re

APP_DATA_DIR = r"C:\Users\Admin\Neil\bstudies-cbse-class-XII\data"

def extract_top_questions(sqp_content):
    # Regex to extract blocks that represent a question object
    # We look for blocks bounded by { and } roughly.
    blocks = re.split(r'\},\s*\{', sqp_content)
    top_questions = []
    
    for block in blocks:
        # We want subjective questions (SA, LA) and high marks (3, 4, 5, 6)
        if ('type: "SA"' in block or "type: 'SA'" in block or 'type: "LA"' in block or "type: 'LA'" in block) and ('marks: 3' in block or 'marks: 4' in block or 'marks: 5' in block or 'marks: 6' in block):
            
            q_match = re.search(r'question:\s*(?:`([^`]*)`|"([^"]*)"|\'([^\']*)\')', block)
            if not q_match:
                continue
                
            q = q_match.group(1) or q_match.group(2) or q_match.group(3)
            q = q.replace('\n', ' ').strip().replace('"', "'")
            
            a = ""
            exp_match = re.search(r'aiExplanation:\s*(?:`([^`]*)`|"([^"]*)"|\'([^\']*)\')', block)
            if exp_match:
                ai_exp = exp_match.group(1) or exp_match.group(2) or exp_match.group(3)
                if "Comprehensive Revision Points" in ai_exp:
                    rev_part = ai_exp.split("Comprehensive Revision Points")[1]
                    lines = [line.strip().replace('•', '').strip().replace('*', '').strip() for line in rev_part.split('\n') if line.strip() and line.strip().startswith('•')]
                    a = " | ".join(lines[:3]) # Take top 3 points
            
            if not a:
                a_match = re.search(r'answer:\s*(?:`([^`]*)`|"([^"]*)"|\'([^\']*)\')', block)
                if a_match:
                    a = a_match.group(1) or a_match.group(2) or a_match.group(3)
                    a = a.split('\n')[0].strip().replace('"', "'")
                    
            if a and len(a) > 250:
                 a = a[:247] + "..."
                 
            if q and a:
                # Replace markdown boldness with regular string for cleanly formatting in the array
                q = re.sub(r'\*\*(.*?)\*\*', r'\1', q)
                a = re.sub(r'\*\*(.*?)\*\*', r'\1', a)
                # Ensure no unescaped strings
                q = q.replace('\n', ' ').replace('\r', '').replace('"', "'").strip()
                a = a.replace('\n', ' ').replace('\r', '').replace('"', "'").strip()
                top_questions.append(f"**Q: {q}** A: {a}")
                
            if len(top_questions) >= 5: # Top 5 to keep it readable per unit
                break
                
    return top_questions

def inject_cheat_sheet(unit, questions):
    if not questions:
        print(f"No subjective questions found for Unit {unit}.")
        return
        
    cheat_path = os.path.join(APP_DATA_DIR, f"unit{unit}", "cheatSheet.ts")
    if not os.path.exists(cheat_path):
        return
        
    with open(cheat_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    if "Top SQP Questions" in content:
        print(f"Unit {unit} already has Top SQP Questions.")
        return
        
    last_bracket_idx = content.rfind("];")
    if last_bracket_idx == -1:
        print(f"Could not find end of array in Unit {unit}")
        return
        
    points_str = ",\n            ".join([f'"{q}"' for q in questions])
    
    new_block = f""",
    {{
        title: "Top SQP Questions",
        points: [
            {points_str}
        ]
    }}
"""
    new_content = content[:last_bracket_idx].rstrip() + new_block + content[last_bracket_idx:]
    
    with open(cheat_path, "w", encoding="utf-8") as f:
        f.write(new_content)
        
    print(f"Injected {len(questions)} top questions into Unit {unit} cheat sheet.")

for i in range(1, 13):
    sqp_path = os.path.join(APP_DATA_DIR, f"unit{i}", "sqp.ts")
    if os.path.exists(sqp_path):
        with open(sqp_path, "r", encoding="utf-8") as f:
            sqp_content = f.read()
        
        top_qs = extract_top_questions(sqp_content)
        inject_cheat_sheet(i, top_qs)
