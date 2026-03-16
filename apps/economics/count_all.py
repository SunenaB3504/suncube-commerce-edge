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

def count_in_file(file_path):
    if not os.path.exists(file_path):
        return 0
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    # Count occurrences of id: '...' or id: "..."
    # We want to count distinct items. Usually flashcards and SQPs have unique IDs.
    ids = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", content)
    return len(ids)

def count_topics_details(file_path):
    if not os.path.exists(file_path):
        return 0, 0, 0
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Topics are { id: 'uX-tY', ... } at the top level of the array
    # Visualizations are inside topics
    # Sub-topics/points are 'subPoints' or 'points'
    
    topic_ids = re.findall(r"id:\s*['\"]u\d+-[ct]\d+['\"]", content) # u8-t1 etc
    # Actually topics in unit 6/7 are u6-ch1-t1 etc.
    # Let's just count top level objects in the array.
    # A better way: count occurrences of "id: 'u" at start of object
    
    # Simple count based on indentation or pattern
    topics = len(re.findall(r"id:\s*['\"]u\d+(-ch\d+)?-t\d+['\"]", content))
    viz = len(re.findall(r"id:\s*['\"]u\d+(-ch\d+)?-v\d+['\"]", content))
    
    # Sub-topics: count 'label:' inside subPoints
    sub_topics = len(re.findall(r"label:\s*['\"]", content))
    
    # If topic count is 0, try a more generic pattern for older units
    if topics == 0:
        topics = len(re.findall(r"id:\s*['\"]u\d+-t\d+['\"]", content))
    
    return topics, sub_topics, viz

print("| Chapter | Topics | Sub-topics | Flashcards | SQPs | Visuals |")
print("| :--- | :---: | :---: | :---: | :---: | :---: |")

for chapter in chapters:
    path = os.path.join(base_path, chapter)
    t_file = os.path.join(path, "topics.ts")
    f_file = os.path.join(path, "flashcards.ts")
    s_file = os.path.join(path, "sqp.ts")
    
    topics, sub_topics, viz = count_topics_details(t_file)
    flashcards = count_in_file(f_file)
    sqps = count_in_file(s_file)
    
    # Identify if it's a "Master Interrelationships" topic which often has many visuals/points
    # but might not match the simple Regex.
    
    print(f"| {chapter} | {topics} | {sub_topics} | {flashcards} | {sqps} | {viz} |")
