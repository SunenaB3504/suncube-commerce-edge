import os
import re

units = [
    "unit1-national-income",
    "unit2-money-banking",
    "unit3-income-determination",
    "unit4-govt-budget",
    "unit5-bop-forex",
    "unit6-ied-intro",
    "unit7-ied-challenges",
    "unit8-ied-comparison"
]

base_path = "src/data"

def count_in_file(file_path):
    if not os.path.exists(file_path):
        return 0, 0, 0, 0
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Count IDs
    ids = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", content)
    return len(ids)

def count_topics_and_visualizations(file_path):
    if not os.path.exists(file_path):
        return 0, 0
    
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    topic_count = 0
    viz_count = 0
    
    for line in lines:
        if re.search(r"^    id:", line):
            topic_count += 1
        elif re.search(r"^        id:", line):
            viz_count += 1
            
    return topic_count, viz_count

print("| Unit # | Topics | Flashcards | Illustrations (Visualizations) | SQPs |")
print("|--------|--------|------------|-------------------------------|------|")

for i, unit in enumerate(units, 1):
    unit_path = os.path.join(base_path, unit)
    
    topics_file = os.path.join(unit_path, "topics.ts")
    flashcards_file = os.path.join(unit_path, "flashcards.ts")
    sqp_file = os.path.join(unit_path, "sqp.ts")
    
    topics, viz = count_topics_and_visualizations(topics_file)
    flashcards = count_in_file(flashcards_file)
    sqps = count_in_file(sqp_file)
    
    print(f"| {i} | {topics} | {flashcards} | {viz} | {sqps} |")
