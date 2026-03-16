import os
import re
import json

units = [
    'unit1-national-income', 'unit2-money-banking', 'unit3-income-determination',
    'unit4-govt-budget', 'unit5-bop-forex', 'unit6-ied-intro',
    'unit7-ied-challenges', 'unit8-ied-comparison'
]

base_path = r'c:\Users\Admin\Neil\economics-cbse-class-XII\src\data'
stop_words = set(['the', 'is', 'in', 'and', 'of', 'to', 'a', 'for', 'on', 'with', 'as', 'by', 'that', 'this', 'it', 'are', 'be', 'an', 'at', 'which', 'from', 'we', 'or', 'can', 'not', 'have', 'has', 'but', 'also', 'their', 'they', 'our', 'what', 'when', 'how', 'all', 'any', 'these', 'those', 'such', 'more', 'some', 'other', 'into', 'only', 'would', 'will', 'was', 'were', 'been', 'about', 'if', 'so', 'up', 'out', 'one', 'two', 'than', 'its', 'do', 'does', 'did', 'no', 'marks', 'teacher', 'voice', 'here', 'lock', 'your', 'explain', 'state', 'meaning', 'following', 'read', 'carefully', 'statements', 'statement', 'choose', 'correct', 'alternative', 'figure', 'given', 'below'])


def get_keywords(text):
    words = re.findall(r'\b[a-z]{4,}\b', text.lower()) 
    return set([w for w in words if w not in stop_words])

def extract_sqp_questions_and_ms(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return []
    
    questions = []
    
    blocks = content.split("id: 'u")
    
    for block in blocks[1:]:
        try:
            block = "id: 'u" + block
            
            marks_match = re.search(r'marks:\s*(\d+)', block)
            marks = int(marks_match.group(1)) if marks_match else 0
            
            start_target = len(block)
            for key in ['markingScheme:', 'answer:', 'aiExplanation:']:
                idx = block.find(key)
                if idx != -1 and idx < start_target:
                    start_target = idx
                    
            if start_target < len(block):
                combined_target = block[start_target:].lower()
            else:
                combined_target = ""
                
            combined_target = combined_target.replace("\\n", " ").replace("\\'", "'")
            
            questions.append({
                'marks': marks,
                'target_text': combined_target
            })
        except Exception as e:
            pass
    return questions

report = {}

for unit in units:
    sqp_path = os.path.join(base_path, unit, 'sqp.ts')
    master_path = os.path.join(base_path, unit, 'masterTable.ts')
    
    sqp_qs = extract_sqp_questions_and_ms(sqp_path)
    
    try:
        with open(master_path, 'r', encoding='utf-8') as f:
            master_content = f.read().lower()
    except Exception:
        master_content = ""
        
    master_keywords = get_keywords(master_content)
    
    total_marks = 0
    covered_marks = 0
    total_questions = len(sqp_qs)
    covered_questions = 0
    
    for q in sqp_qs:
        total_marks += q['marks']
        q_keywords = get_keywords(q['target_text'])
        
        if not q_keywords:
            continue
            
        matches = [k for k in q_keywords if k in master_keywords]
        
        coverage_ratio = len(matches) / len(q_keywords) if len(q_keywords) > 0 else 0
        
        if coverage_ratio >= 0.45:
            covered_marks += q['marks']
            covered_questions += 1
            
    report[unit] = {
        'total_questions': total_questions,
        'covered_questions': covered_questions,
        'total_marks': total_marks,
        'covered_marks': covered_marks,
        'marks_coverage_percent': round((covered_marks / total_marks * 100) if total_marks > 0 else 0, 1),
        'question_coverage_percent': round((covered_questions / total_questions * 100) if total_questions > 0 else 0, 1)
    }

print("=== IMPROVED SQP Coverage Analysis (Based on Marking Scheme Logic vs Cheat Sheet) ===")
print(f"{'Unit':<30} | {'Marks Recoverable':<20} | {'Questions Recoverable':<25}")
print("-" * 80)

total_possible_marks = 0
total_achieved_marks = 0

for unit, data in report.items():
    print(f"{unit:<30} | {data['covered_marks']}/{data['total_marks']} ({data['marks_coverage_percent']}%) | {data['covered_questions']}/{data['total_questions']} ({data['question_coverage_percent']}%)")
    total_possible_marks += data['total_marks']
    total_achieved_marks += data['covered_marks']

print("-" * 80)
overall_marks_percent = round((total_achieved_marks / total_possible_marks * 100) if total_possible_marks > 0 else 0, 1)
print(f"OVERALL MARKS POTENTIAL FROM CHEAT SHEETS: {total_achieved_marks} / {total_possible_marks} ({overall_marks_percent}%)")

with open('sqp_coverage_report.json', 'w') as f:
    json.dump(report, f, indent=4)
