import os
import re

base_dir = r'c:\Users\Admin\Neil\bstudies-cbse-class-XII\data'

print('Chapter | Subtopics | Illustrations | Flashcards | SQPs')
print('---|---|---|---|---')

for i in range(1, 13):
    unit_dir = os.path.join(base_dir, f'unit{i}')
    
    # Topics
    topics_file = os.path.join(unit_dir, 'topics.ts')
    topics = 0
    illustrations = 0
    if os.path.exists(topics_file):
        with open(topics_file, 'r', encoding='utf-8') as f:
            content = f.read()
            # Count objects in the topics array (approximate)
            topics = len(re.findall(r'id:\s*[\'"]', content))
            # But wait, visualizations also have IDs. 
            # A better way for topics: count 'content: [' as every topic has content
            topics = len(re.findall(r'content:\s*\[', content))
            
            # Visualizations
            illustrations = len(re.findall(r'type:\s*[\'"]', content))
            
    # Flashcards
    flash_file = os.path.join(unit_dir, 'flashcards.ts')
    flashcards = 0
    if os.path.exists(flash_file):
        with open(flash_file, 'r', encoding='utf-8') as f:
            content = f.read()
            flashcards = len(re.findall(r'question:\s*', content))

    # SQPs
    sqp_file = os.path.join(unit_dir, 'sqp.ts')
    sqps = 0
    if os.path.exists(sqp_file):
        with open(sqp_file, 'r', encoding='utf-8') as f:
            content = f.read()
            # Count objects
            sqps = len(re.findall(r'question:\s*', content))
            
    print(f'{i} | {topics} | {illustrations} | {flashcards} | {sqps}')
