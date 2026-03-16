import os, re

base_dir = r"C:\Users\Admin\Neil\bstudies-cbse-class-XII\data"

for unit in sorted(os.listdir(base_dir)):
    unit_path = os.path.join(base_dir, unit)
    if not os.path.isdir(unit_path): continue
    sqp_file = os.path.join(unit_path, "sqp.ts")
    if not os.path.isfile(sqp_file): continue
    
    with open(sqp_file, encoding="utf-8") as f:
        content = f.read()
        
    # Split by { to find objects loosely
    blocks = content.split('{\n')
    if len(blocks) == 1:
        blocks = content.split('{ \n')
    if len(blocks) == 1:
        blocks = content.split('{\r\n')
    if len(blocks) == 1:
        blocks = content.split('{')
        
    for block in blocks:
        if re.search(r"type\s*:\s*['\"]MCQ['\"]", block, re.IGNORECASE):
            if not re.search(r"optionA\s*:", block, re.IGNORECASE):
                id_match = re.search(r"id\s*:\s*['\"]([^'\"]+)['\"]", block)
                q_id = id_match.group(1) if id_match else "unknown"
                print(f"[{unit}] missing options for: {q_id}")
                # Now extract question and answer to see what they are
                q = re.search(r"question\s*:\s*[`'\"]([^`'\"]+)[`'\"]", block)
                if q:
                    print(f"  Q: {q.group(1).strip()[:80]}")
                a = re.search(r"answer\s*:\s*[`'\"]([^`'\"]+)[`'\"]", block)
                if a:
                    print(f"  A: {a.group(1).strip()[:80]}")
                print()
