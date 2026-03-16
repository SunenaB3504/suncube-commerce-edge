import os
import re

chapters = [
    "unit1-national-income",
    "unit2-money-banking",
    "unit3-income-determination",
    "unit4-govt-budget",
    "unit5-bop-forex",
    "unit6-ch1-eve-of-independence",
    "unit6-ch2-planning-era",
    "unit6-ch3-lpg-reforms",
    "unit7-ch4-hcf",
    "unit7-ch5-rural",
    "unit7-ch6-employment",
    "unit7-ch7-environment",
    "unit8-ied-comparison"
]

base_path = "src/data"

def get_content(file_path):
    if not os.path.exists(file_path):
        return ""
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.read()

def count_flashcards(content):
    # Each flashcard usually has an id: '...'
    return len(re.findall(r"id:\s*['\"][^'\"]+['\"]", content))

def count_sqps(content):
    # Each SQP question usually has an id: '...'
    # For SQPs, we should be more specific to avoid counting other IDs if any
    return len(re.findall(r"id:\s*['\"][^'\"]+['\"]", content))

def count_topics(content):
    # Topics in the array. Each has a title and id.
    # Pattern: { id: '...', title: '...' }
    return len(re.findall(r"title:\s*['\"][^'\"]+['\"]", content))

def count_subtopics(content):
    # Count 'label:' inside subPoints or blocks
    return len(re.findall(r"label:\s*['\"][^'\"]+['\"]", content))

print("| Chapter | Topics | Sub-topics | Flashcards | SQPs |")
print("| :--- | :--- | :--- | :--- | :--- |")

total_t, total_st, total_f, total_s = 0, 0, 0, 0

for chapter in chapters:
    p = os.path.join(base_path, chapter)
    t = count_topics(get_content(os.path.join(p, "topics.ts")))
    # For subtopics, we also want to look in masterTable.ts if it exists
    st = count_subtopics(get_content(os.path.join(p, "topics.ts")))
    st += count_subtopics(get_content(os.path.join(p, "masterTable.ts")))
    
    f = count_flashcards(get_content(os.path.join(p, "flashcards.ts")))
    s = count_sqps(get_content(os.path.join(p, "sqp.ts")))
    
    # Adjust: if it's Unit 8, it might have more in masterTable
    if chapter == "unit8-ied-comparison":
        t += count_topics(get_content(os.path.join(p, "masterTable.ts")))
    
    print(f"| {chapter} | {t} | {st} | {f} | {s} |")
    total_t += t
    total_st += st
    total_f += f
    total_s += s

print(f"| **TOTAL** | **{total_t}** | **{total_st}** | **{total_f}** | **{total_s}** |")
