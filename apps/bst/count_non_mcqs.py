import os, re

base_dir = r"C:\Users\Admin\Neil\bstudies-cbse-class-XII\data"

total_qs = 0
total_mcqs = 0

for unit in sorted(os.listdir(base_dir)):
    unit_path = os.path.join(base_dir, unit)
    if not os.path.isdir(unit_path): continue
    sqp_file = os.path.join(unit_path, "sqp.ts")
    if not os.path.isfile(sqp_file): continue
    
    with open(sqp_file, encoding="utf-8") as f:
        content = f.read()

    blocks = content.split("id:")
    # length minus 1 because first block is everything before first id
    total_qs += max(0, len(blocks) - 1)
    
    mcq_count = len(re.findall(r"type\s*:\s*['\"]MCQ['\"]", content, re.IGNORECASE))
    total_mcqs += mcq_count

print(f"Total Questions: {total_qs}")
print(f"Total MCQs: {total_mcqs}")
print(f"Total Non-MCQs: {total_qs - total_mcqs}")
