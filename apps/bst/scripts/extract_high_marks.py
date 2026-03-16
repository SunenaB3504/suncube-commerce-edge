import os
import re

units = [1, 2, 3, 4]
base_dir = os.path.join(os.path.dirname(__file__), '..', 'data')

for unit in units:
    file_path = os.path.join(base_dir, f'unit{unit}', 'sqp.ts')
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    blocks = content.split('{')
    for block in blocks:
        if 'id:' not in block:
            continue
            
        marks_match = re.search(r'marks:\s*(\d+)', block)
        if marks_match:
            marks = int(marks_match.group(1))
            if marks >= 3:
                id_match = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]', block)
                q_match = re.search(r'question:\s*[`\'"]([\s\S]*?)[`\'"],', block)
                ans_match = re.search(r'answer:\s*[`\'"]([\s\S]*?)[`\'"],', block)
                if id_match and q_match and ans_match:
                    print(f"Unit {unit} | ID: {id_match.group(1)} | Marks: {marks}")
                    print(f"Q: {q_match.group(1).strip()}")
                    print(f"A: {ans_match.group(1).strip()}")
                    print("-" * 40)
