import os
import re

base_dir = os.path.join(os.path.dirname(__file__), '..', 'data')

for unit_dir in os.listdir(base_dir):
    if not unit_dir.startswith('unit'):
        continue
    
    sqp_file = os.path.join(base_dir, unit_dir, 'sqp.ts')
    if os.path.exists(sqp_file):
        with open(sqp_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix types
        content = re.sub(r'paperType:\s*[\'"]CBSE SQP[\'"]', 'paperType: "SQP"', content)
        content = re.sub(r'paperType:\s*[\'"]CBSE Board[\'"]', 'paperType: "Board"', content)
        content = re.sub(r'type:\s*[\'"]Subjective[\'"]', 'type: "SA"', content)

        # Fix duplicate keys (simple cleanup)
        # Find blocks and remove duplicate paperType or type lines if they appear consecutively or nearby
        # Just simple line-based dedup within a block
        new_lines = []
        current_keys = set()
        for line in content.split('\n'):
            if line.strip() in ['{', '},', '}']:
                current_keys = set()
                new_lines.append(line)
                continue
            
            # Simple heuristic
            m = re.match(r'\s*([a-zA-Z0-9_]+):', line)
            if m:
                key = m.group(1)
                if key in current_keys and key in ['paperType', 'type', 'year', 'marks', 'id']:
                    continue # Skip duplicate
                current_keys.add(key)
            new_lines.append(line)

        with open(sqp_file, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))

# Fix unit1/index.ts
unit1_idx = os.path.join(base_dir, 'unit1', 'index.ts')
if os.path.exists(unit1_idx):
    with open(unit1_idx, 'r', encoding='utf-8') as f:
        c = f.read()
    c = c.replace('cheatSheet,', 'CHEAT_SHEET,')
    with open(unit1_idx, 'w', encoding='utf-8') as f:
        f.write(c)

# Fix components/RevisionHQ.tsx
rev_hq = os.path.join(os.path.dirname(__file__), '..', 'components', 'RevisionHQ.tsx')
if os.path.exists(rev_hq):
    with open(rev_hq, 'r', encoding='utf-8') as f:
        c = f.read()
    # Find type: 'jpeg' and replace with type: 'jpeg' as any
    c = c.replace("type: 'jpeg', quality: 0.98", "type: 'jpeg' as 'jpeg' | 'png' | 'webp', quality: 0.98")
    with open(rev_hq, 'w', encoding='utf-8') as f:
        f.write(c)
