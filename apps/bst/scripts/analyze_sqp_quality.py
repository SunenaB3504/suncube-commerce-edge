import os
import re
import json

APP_DATA_DIR = r"c:\Users\Admin\Neil\bstudies-cbse-class-XII\data"

def extract_content(text, key):
    # Extremely basic regex to extract field values like question: '...', answer: '...', etc.
    # Note: Handles both single and double quotes, and template literals somewhat loosely.
    pattern = re.compile(rf"{key}:\s*([`\'\"])(.*?)\1", re.DOTALL)
    match = pattern.search(text)
    if match:
        return match.group(2).strip()
    return ""

def extract_marks(text):
    pattern = re.compile(r"marks:\s*(\d+)")
    match = pattern.search(text)
    return int(match.group(1)) if match else 0

def analyze_sqps():
    total_mcqs = 0
    total_subjective = 0
    
    # Track word counts by marks
    marks_stats = {
        1: {'q_len': [], 'a_len': [], 'exp_len': []},
        3: {'q_len': [], 'a_len': [], 'exp_len': []},
        4: {'q_len': [], 'a_len': [], 'exp_len': []},
        5: {'q_len': [], 'a_len': [], 'exp_len': []},
        6: {'q_len': [], 'a_len': [], 'exp_len': []},
    }

    for unit in range(1, 13):
        sqp_file = os.path.join(APP_DATA_DIR, f"unit{unit}", "sqp.ts")
        if not os.path.exists(sqp_file):
            continue
            
        with open(sqp_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Split by object roughly
        blocks = content.split("id: '")
        for block in blocks[1:]:
            question = extract_content(block, 'question')
            answer = extract_content(block, 'answer')
            explanation = extract_content(block, 'aiExplanation')
            marks = extract_marks(block)
            q_type = extract_content(block, 'type')
            
            q_words = len(question.split())
            a_words = len(answer.split())
            e_words = len(explanation.split())
            
            if q_type == 'MCQ':
                total_mcqs += 1
            else:
                total_subjective += 1
                
            if marks in marks_stats:
                marks_stats[marks]['q_len'].append(q_words)
                marks_stats[marks]['a_len'].append(a_words)
                marks_stats[marks]['exp_len'].append(e_words)

    print("=== SQP CONTENT DEPTH ANALYSIS ===")
    print(f"Total MCQs: {total_mcqs}")
    print(f"Total Subjective: {total_subjective}\n")
    
    for mark, stats in marks_stats.items():
        if not stats['q_len']:
            continue
        avg_q = sum(stats['q_len']) / len(stats['q_len'])
        avg_a = sum(stats['a_len']) / len(stats['a_len'])
        avg_e = sum(stats['exp_len']) / len(stats['exp_len'])
        
        print(f"--- {mark} Mark Questions (Count: {len(stats['q_len'])}) ---")
        print(f"Average Question Length: {avg_q:.1f} words")
        print(f"Average Answer Length:   {avg_a:.1f} words")
        print(f"Average Explanation Length:{avg_e:.1f} words\n")
        
        if mark >= 4 and avg_a < 40:
            print(f"  [!] WARNING: Answers for {mark}-mark questions seem highly summarized (under 40 words).")
        if mark >= 4 and avg_e < 20:
            print(f"  [!] WARNING: AI Explanations for {mark}-mark questions seem shallow (under 20 words).")

if __name__ == '__main__':
    analyze_sqps()
