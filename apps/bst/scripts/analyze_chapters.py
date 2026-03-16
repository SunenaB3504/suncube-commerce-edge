import os
import re

def analyze_unit(unit_path):
    stats = {
        "subtopics": 0,
        "illustrations": 0,
        "flashcards": 0,
        "sqps": 0
    }
    
    # Analyze topics.ts
    topics_path = os.path.join(unit_path, "topics.ts")
    if os.path.exists(topics_path):
        with open(topics_path, 'r', encoding='utf-8') as f:
            content = f.read()
            # Count subtopics by counting 'content:' which is a mandatory field for TheoryTopic
            stats["subtopics"] = len(re.findall(r'content\s*:', content))
            # Count illustrations by counting 'type:' inside the file, assuming only visualizations use 'type' in topics.ts
            stats["illustrations"] = len(re.findall(r'type\s*:', content))

    # Analyze flashcards.ts
    fc_path = os.path.join(unit_path, "flashcards.ts")
    if os.path.exists(fc_path):
        with open(fc_path, 'r', encoding='utf-8') as f:
            content = f.read()
            # Count flashcards by counting 'question:'
            stats["flashcards"] = len(re.findall(r'question\s*:', content))

    # Analyze sqp.ts
    sqp_path = os.path.join(unit_path, "sqp.ts")
    if os.path.exists(sqp_path):
        with open(sqp_path, 'r', encoding='utf-8') as f:
            content = f.read()
            # Count questions
            stats["sqps"] = len(re.findall(r'question\s*:', content))
            
    return stats

data_dir = r"c:\Users\Admin\Neil\bstudies-cbse-class-XII\data"

print(f"{'Chapter #':<10} {'Subtopics':<12} {'Illustrations':<15} {'Flash Cards':<15} {'SQPs':<15}")
print("-" * 70)

# Sort logically 1 to 12
chapter_indices = range(1, 13)

for i in chapter_indices:
    unit_name = f"unit{i}"
    path = os.path.join(data_dir, unit_name)
    if os.path.exists(path):
        s = analyze_unit(path)
        print(f"{i:<10} {s['subtopics']:<12} {s['illustrations']:<15} {s['flashcards']:<15} {s['sqps']:<15}")
