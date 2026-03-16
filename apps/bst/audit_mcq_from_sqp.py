import os, re, json

# Directory containing unit folders
base_dir = r'C:\Users\Admin\Neil\bstudies-cbse-class-XII\data'
report = []

# Regex patterns to capture fields in sqp.ts
question_pattern = re.compile(r'question\s*:\s*`([^`]+)`', re.IGNORECASE)
optionA_pattern = re.compile(r'optionA\s*:\s*`([^`]+)`', re.IGNORECASE)
optionB_pattern = re.compile(r'optionB\s*:\s*`([^`]+)`', re.IGNORECASE)
optionC_pattern = re.compile(r'optionC\s*:\s*`([^`]+)`', re.IGNORECASE)
optionD_pattern = re.compile(r'optionD\s*:\s*`([^`]+)`', re.IGNORECASE)
type_pattern = re.compile(r'type\s*:\s*["\']MCQ["\']', re.IGNORECASE)
answer_pattern = re.compile(r'answer\s*:\s*`([^`]+)`', re.IGNORECASE)

for unit_folder in os.listdir(base_dir):
    unit_path = os.path.join(base_dir, unit_folder)
    if not os.path.isdir(unit_path):
        continue
    sqp_file = os.path.join(unit_path, 'sqp.ts')
    if not os.path.isfile(sqp_file):
        continue
    with open(sqp_file, encoding='utf-8') as f:
        content = f.read()
    # Split into question objects (assuming they are separated by '},' )
    entries = content.split('},')
    for entry in entries:
        if not type_pattern.search(entry):
            continue
        q_match = question_pattern.search(entry)
        a_match = answer_pattern.search(entry)
        optA = optionA_pattern.search(entry)
        optB = optionB_pattern.search(entry)
        optC = optionC_pattern.search(entry)
        optD = optionD_pattern.search(entry)
        report.append({
            'unit': unit_folder,
            'question': q_match.group(1).strip() if q_match else None,
            'answer': a_match.group(1).strip() if a_match else None,
            'options': {
                'A': optA.group(1).strip() if optA else None,
                'B': optB.group(1).strip() if optB else None,
                'C': optC.group(1).strip() if optC else None,
                'D': optD.group(1).strip() if optD else None,
            }
        })

print(json.dumps(report, indent=2, ensure_ascii=False))
