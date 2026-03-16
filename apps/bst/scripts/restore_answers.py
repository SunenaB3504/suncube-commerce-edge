import os
import re
import subprocess

units = range(1, 13)
base_dir = os.path.join(os.path.dirname(__file__), '..', 'data')

# The commit before the generic text was added is 8b1456f^
COMMIT_HASH = '8b1456f^'

for unit in units:
    file_path = os.path.join(base_dir, f'unit{unit}', 'sqp.ts')
    if not os.path.exists(file_path):
        continue
    
    # Get old content
    try:
        old_content = subprocess.check_output(['git', 'show', f'{COMMIT_HASH}:data/unit{unit}/sqp.ts']).decode('utf-8')
    except Exception as e:
        print(f"Skipping unit {unit} due to error {e}")
        continue
    
    # Parse old answers mapped by id
    old_answers = {}
    old_blocks = old_content.split('id: ')
    for ob in old_blocks[1:]:
        # extract id
        id_match = re.match(r'^[\'"]([^\'"]+)[\'"]', ob)
        if not id_match: continue
        q_id = id_match.group(1)
        
        # extract answer and markingScheme
        ans_match = re.search(r'answer:\s*[`\'"]([\s\S]*?)[`\'"],', ob)
        # Note: some didn't have markingScheme previously, or had it.
        # Just grab the answer
        if ans_match:
            old_answers[q_id] = ans_match.group(1)
            
    # Now read current file and replace generic answers with old answers
    with open(file_path, 'r', encoding='utf-8') as f:
        current_content = f.read()
        
    def replacer(match):
        q_id = match.group(1)
        rest = match.group(2)
        old_ans = old_answers.get(q_id, "")
        if old_ans:
            # We recreate the answer and markingScheme using the old answer
            # We must escape backticks if we use them
            safe_ans = old_ans.replace('`', '\\`')
            return f'id: \'{q_id}\'{rest}answer: `{safe_ans}`,\n      markingScheme: `{safe_ans}`,'
        return match.group(0)

    # Regex to match id: 'xyz', ..., answer: `...`, markingScheme: `...`,
    # We want to replace answer and markingScheme.
    # A block starts with id: '...' and goes down to markingScheme: '...',
    pattern = r'id:\s*[\'"]([^\'"]+)[\'"](.*?[\n\s]*)answer:\s*[`\'"][\s\S]*?[`\'"],[\n\s]*markingScheme:\s*[`\'"][\s\S]*?[`\'"],'
    
    new_content = re.sub(pattern, replacer, current_content, flags=re.DOTALL)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Restored answers for Unit {unit}")
