import os
import re
from collections import Counter

APP_DATA_DIR = r"C:\Users\Admin\Neil\bstudies-cbse-class-XII\data"

STOP_WORDS = set([
    "the", "and", "is", "in", "to", "of", "it", "for", "with", "as", "by", "on", "are", "be", "that", 
    "this", "or", "an", "at", "from", "which", "not", "but", "can", "also", "has", "have", "will", "would",
    "should", "could", "their", "there", "they", "we", "you", "he", "she", "what", "how", "why", "when", 
    "where", "who", "whom", "whose", "which", "these", "those", "such", "than", "then", "been", "was",
    "were", "does", "do", "did", "done", "its", "all", "any", "both", "each", "few", "more", "most", 
    "other", "some", "such", "no", "nor", "too", "very", "can", "point", "marks", "mark", "explanation",
    "justification", "comprehensive", "revision", "points", "see", "marking", "scheme", "answer", "provided",
    "question", "identify", "explain", "describe", "discuss", "state", "list", "give", "name", "from",
    "above", "below", "following", "statement", "case", "study", "paragraph", "lines", "quoted", "quote",
    "about", "any", "two", "three", "four", "five", "six", "one", "only", "must", "may", "might", "shall",
    "options", "carefully", "before", "selecting", "eliminate", "clearly", "incorrect", "correct", "awarded",
    "direct", "concept", "approach", "read", "total", "each", "valid", "explained", "stated", "meaning"
])

def extract_content(file_path):
    if not os.path.exists(file_path):
        return ""
    with open(file_path, "r", encoding="utf-8") as f:
        return f.read()

def get_keywords(text):
    words = re.findall(r'\b[a-zA-Z]{5,}\b', text.lower()) # Look for longer, meatier words
    return [w for w in words if w not in STOP_WORDS]

def find_missing_buzzwords():
    sqp_words_all = []
    
    # Pass 1: Collect ALL words from ALL SQPs
    for i in range(1, 13):
        sqp_path = os.path.join(APP_DATA_DIR, f"unit{i}", "sqp.ts")
        if os.path.exists(sqp_path):
            content = extract_content(sqp_path)
            # Only extract words from answers and marking schemes
            blocks = content.split('{')
            for block in blocks:
                ans_match = re.search(r'answer:\s*`([^`]*)`', block)
                if not ans_match:
                     ans_match = re.search(r"answer:\s*'([^']*)'", block)
                     
                ms_match = re.search(r'markingScheme:\s*`([^`]*)`', block)
                if not ms_match:
                     ms_match = re.search(r"markingScheme:\s*'([^']*)'", block)
                
                ans_text = (ans_match.group(1) if ans_match else "") + " " + (ms_match.group(1) if ms_match else "")
                if "See marking scheme" not in ans_text:
                    sqp_words_all.extend(get_keywords(ans_text))
                
    # Count frequency of SQP words
    sqp_word_counts = Counter(sqp_words_all)
    
    # Pass 2: Check what's missing in Cheat Sheets
    for i in range(1, 3): # Let's test just units 1 and 3 which are low
        cheat_path = os.path.join(APP_DATA_DIR, f"unit{i}", "cheatSheet.ts")
        sqp_path = os.path.join(APP_DATA_DIR, f"unit{i}", "sqp.ts")
        
        if not os.path.exists(cheat_path):
            continue
            
        cheat_content = extract_content(cheat_path)
        cheat_keywords = set(get_keywords(cheat_content))
        
        unit_sqp_content = extract_content(sqp_path)
        unit_sqp_keywords = get_keywords(unit_sqp_content)
        unit_sqp_counts = Counter(unit_sqp_keywords)
        
        missing_buzzwords = []
        for word, count in unit_sqp_counts.most_common(20):
            if word not in cheat_keywords and count > 1: # Word appears multiple times in SQP but NOT in cheat sheet
                # Also ensure it's a common word globally across all SQPs
                if sqp_word_counts[word] > 3:
                    missing_buzzwords.append((word, count))
                    
        print(f"\n--- Top Missing Buzzwords in Unit {i} Cheat Sheet ---")
        for word, count in missing_buzzwords:
            print(f"- '{word}': appears {count} times in Unit {i} SQP, but 0 times in Cheat Sheet.")

find_missing_buzzwords()
