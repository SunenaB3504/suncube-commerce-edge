import os
import re
import json
from collections import Counter

units = [
    'unit1-national-income', 'unit2-money-banking', 'unit3-income-determination',
    'unit4-govt-budget', 'unit5-bop-forex', 'unit6-ied-intro',
    'unit7-ied-challenges', 'unit8-ied-comparison'
]

base_path = r'c:\Users\Admin\Neil\economics-cbse-class-XII\src\data'
stop_words = set(['the', 'is', 'in', 'and', 'of', 'to', 'a', 'for', 'on', 'with', 'as', 'by', 'that', 'this', 'it', 'are', 'be', 'an', 'at', 'which', 'from', 'we', 'or', 'can', 'not', 'have', 'has', 'but', 'also', 'their', 'they', 'our', 'what', 'when', 'how', 'all', 'any', 'these', 'those', 'such', 'more', 'some', 'other', 'into', 'only', 'would', 'will', 'was', 'were', 'been', 'about', 'if', 'so', 'up', 'out', 'one', 'two', 'than', 'its', 'do', 'does', 'did', 'no', 'marks', 'teacher', 'voice', 'here', 'lock', 'your', 'explain', 'state', 'meaning', 'following', 'read', 'carefully', 'statements', 'statement', 'choose', 'correct', 'alternative', 'figure', 'given', 'below'])


def extract_sqp_texts(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception:
        return []
    
    questions = []
    blocks = content.split("id: 'u")
    
    for block in blocks[1:]:
        try:
            ms_match = re.search(r'markingScheme:\s*(?:[\'"`])(.*?)(?:[\'"`]),\s*\n', block, re.DOTALL)
            ms_text = ms_match.group(1) if ms_match else ""
            
            ai_match = re.search(r'aiExplanation:\s*(?:[\'"`])(.*?)(?:[\'"`])', block, re.DOTALL)
            ai_text = ai_match.group(1) if ai_match else ""
            
            combined_target = f"{ms_text} {ai_text}".lower().replace("\\n", " ").replace("\\'", "'")
            questions.append(combined_target)
        except Exception:
            pass
    return questions

def get_words(text):
    words = re.findall(r'\b[a-z]{5,}\b', text.lower()) 
    return [w for w in words if w not in stop_words]

uncovered_overall = Counter()

for unit in units:
    sqp_path = os.path.join(base_path, unit, 'sqp.ts')
    master_path = os.path.join(base_path, unit, 'masterTable.ts')
    
    sqp_texts = extract_sqp_texts(sqp_path)
    
    try:
        with open(master_path, 'r', encoding='utf-8') as f:
            master_content = f.read().lower()
    except Exception:
        master_content = ""
        
    master_keywords = set(get_words(master_content))
    
    sqp_all_words = []
    for text in sqp_texts:
        sqp_all_words.extend(get_words(text))
        
    uncovered_words = [w for w in sqp_all_words if w not in master_keywords]
    uncovered_overall.update(uncovered_words)

print("Top Missing 'Buzzwords' from SQP Answers:")
for word, count in uncovered_overall.most_common(50):
    print(f"{word}: {count}")

