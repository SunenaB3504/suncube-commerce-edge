import os
import re

stop_words = set(['the', 'is', 'in', 'and', 'of', 'to', 'a', 'for', 'on', 'with', 'as', 'by', 'that', 'this', 'it', 'are', 'be', 'an', 'at', 'which', 'from', 'we', 'or', 'can', 'not', 'have', 'has', 'but', 'also', 'their', 'they', 'our', 'what', 'when', 'how', 'all', 'any', 'these', 'those', 'such', 'more', 'some', 'other', 'into', 'only', 'would', 'will', 'was', 'were', 'been', 'about', 'if', 'so', 'up', 'out', 'one', 'two', 'than', 'its', 'do', 'does', 'did', 'no', 'marks', 'teacher', 'voice', 'here', 'lock', 'your', 'explain', 'state', 'meaning', 'following', 'read', 'carefully', 'statements', 'statement', 'choose', 'correct', 'alternative', 'figure', 'given', 'below'])


def get_keywords(text):
    words = re.findall(r'\b[a-z]{4,}\b', text.lower()) 
    return set([w for w in words if w not in stop_words])

# UNIT 5
with open(r'c:\Users\Admin\Neil\economics-cbse-class-XII\src\data\unit5-bop-forex\sqp.ts', 'r', encoding='utf-8') as f:
    u5_sqp = f.read()

with open(r'c:\Users\Admin\Neil\economics-cbse-class-XII\src\data\unit5-bop-forex\masterTable.ts', 'r', encoding='utf-8') as f:
    u5_master = f.read()

u5_master_kw = get_keywords(u5_master)

import json

blocks = u5_sqp.split("id: 'u")
for block in blocks[1:]:
    block = "id: 'u" + block
    id_match = re.search(r"id:\s*'([^']+)'", block)
    q_id = id_match.group(1) if id_match else 'unk'
    
    ms_match = re.search(r"markingScheme:\s*(?:['\"`])(.*?)(?:['\"`]),\s*\n", block, re.DOTALL)
    answer_match = re.search(r"answer:\s*(?:['\"`])(.*?)(?:['\"`]),\s*\n", block, re.DOTALL)
    ai_match = re.search(r"aiExplanation:\s*(?:['\"`])(.*?)(?:['\"`])", block, re.DOTALL)
    
    ms = ms_match.group(1) if ms_match else ""
    ans = answer_match.group(1) if answer_match else ""
    ai = ai_match.group(1) if ai_match else ""
    
    target = f"{ms} {ans} {ai}".lower()
    target = target.replace("\\n", " ").replace("\\'", "'")
    q_kw = get_keywords(target)
    if not q_kw: continue
    
    matches = [k for k in q_kw if k in u5_master_kw]
    ratio = len(matches) / len(q_kw) if len(q_kw) > 0 else 0
    print(f"{q_id}: {len(matches)}/{len(q_kw)} = {ratio:.2f}")
    if ratio < 0.45:
        missing = [k for k in q_kw if k not in u5_master_kw]
        print(f"  Missing: {missing}")

print("-------------------")
# UNIT 3
with open(r'c:\Users\Admin\Neil\economics-cbse-class-XII\src\data\unit3-income-determination\sqp.ts', 'r', encoding='utf-8') as f:
    u3_sqp = f.read()

with open(r'c:\Users\Admin\Neil\economics-cbse-class-XII\src\data\unit3-income-determination\masterTable.ts', 'r', encoding='utf-8') as f:
    u3_master = f.read()

u3_master_kw = get_keywords(u3_master)


blocks = u3_sqp.split("id: 'u")
for block in blocks[1:]:
    block = "id: 'u" + block
    id_match = re.search(r"id:\s*'([^']+)'", block)
    q_id = id_match.group(1) if id_match else 'unk'
    
    ms_match = re.search(r"markingScheme:\s*(?:['\"`])(.*?)(?:['\"`]),\s*\n", block, re.DOTALL)
    answer_match = re.search(r"answer:\s*(?:['\"`])(.*?)(?:['\"`]),\s*\n", block, re.DOTALL)
    ai_match = re.search(r"aiExplanation:\s*(?:['\"`])(.*?)(?:['\"`])", block, re.DOTALL)
    
    ms = ms_match.group(1) if ms_match else ""
    ans = answer_match.group(1) if answer_match else ""
    ai = ai_match.group(1) if ai_match else ""
    
    target = f"{ms} {ans} {ai}".lower()
    target = target.replace("\\n", " ").replace("\\'", "'")
    q_kw = get_keywords(target)
    if not q_kw: continue
    
    matches = [k for k in q_kw if k in u3_master_kw]
    ratio = len(matches) / len(q_kw) if len(q_kw) > 0 else 0
    print(f"{q_id}: {len(matches)}/{len(q_kw)} = {ratio:.2f}")
    if ratio < 0.45:
        missing = [k for k in q_kw if k not in u3_master_kw]
        print(f"  Missing: {missing}")
