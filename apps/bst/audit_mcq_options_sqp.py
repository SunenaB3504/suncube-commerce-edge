import os, re, json

base_dir = r'C:\Users\Admin\Neil\bstudies-cbse-class-XII\data'
summary = {}

# patterns
type_mcq = re.compile(r"type\s*:\s*['\"]MCQ['\"]", re.IGNORECASE)
question_pat = re.compile(r"question\s*:\s*`([^`]+)`", re.IGNORECASE)
optionA_pat = re.compile(r"optionA\s*:\s*`([^`]+)`", re.IGNORECASE)

for unit in os.listdir(base_dir):
    unit_path = os.path.join(base_dir, unit)
    if not os.path.isdir(unit_path):
        continue
    sqp_file = os.path.join(unit_path, 'sqp.ts')
    if not os.path.isfile(sqp_file):
        continue
    with open(sqp_file, encoding='utf-8') as f:
        content = f.read()
    entries = content.split('},')  # crude split
    total = 0
    with_opt = 0
    missing = 0
    samples = []
    for entry in entries:
        if not type_mcq.search(entry):
            continue
        total += 1
        if optionA_pat.search(entry):
            with_opt += 1
        else:
            missing += 1
            q_match = question_pat.search(entry)
            q_text = q_match.group(1).strip() if q_match else '(no question)'
            if len(samples) < 3:
                samples.append(q_text)
    summary[unit] = {
        'total_mcq': total,
        'with_optionA': with_opt,
        'missing_optionA': missing,
        'sample_missing_questions': samples
    }

print(json.dumps(summary, indent=2, ensure_ascii=False))
