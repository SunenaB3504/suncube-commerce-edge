import os
import re

stop_words = set(['the', 'is', 'in', 'and', 'of', 'to', 'a', 'for', 'on', 'with', 'as', 'by', 'that', 'this', 'it', 'are', 'be', 'an', 'at', 'which', 'from', 'we', 'or', 'can', 'not', 'have', 'has', 'but', 'also', 'their', 'they', 'our', 'what', 'when', 'how', 'all', 'any', 'these', 'those', 'such', 'more', 'some', 'other', 'into', 'only', 'would', 'will', 'was', 'were', 'been', 'about', 'if', 'so', 'up', 'out', 'one', 'two', 'than', 'its', 'do', 'does', 'did', 'no', 'marks', 'teacher', 'voice', 'here', 'lock', 'your', 'explain', 'state', 'meaning', 'following', 'read', 'carefully', 'statements', 'statement', 'choose', 'correct', 'alternative', 'figure', 'given', 'below'])


def get_keywords(text):
    words = re.findall(r'\b[a-z]{4,}\b', text.lower()) 
    return set([w for w in words if w not in stop_words])

units = ['unit2-money-banking', 'unit7-ied-challenges']
base_path = r'c:\Users\Admin\Neil\economics-cbse-class-XII\src\data'

for unit in units:
    sqp_path = os.path.join(base_path, unit, 'sqp.ts')
    master_path = os.path.join(base_path, unit, 'masterTable.ts')
    
    with open(sqp_path, 'r', encoding='utf-8') as f:
        sqp = f.read()

    with open(master_path, 'r', encoding='utf-8') as f:
        master = f.read()
        
    master_kw = get_keywords(master)
    print(f"\n======== {unit.upper()} ========\n")
    blocks = sqp.split("id: 'u")
    for block in blocks[1:]:
        block = "id: 'u" + block
        id_match = re.search(r"id:\s*'([^']+)'", block)
        q_id = id_match.group(1) if id_match else 'unk'
        
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
        q_kw = get_keywords(combined_target)
        if not q_kw: continue
        
        matches = [k for k in q_kw if k in master_kw]
        ratio = len(matches) / len(q_kw) if len(q_kw) > 0 else 0
        if ratio < 0.45:
            missing = [k for k in q_kw if k not in master_kw]
            print(f"{q_id} ({ratio:.2f}): Missing: {missing}")
