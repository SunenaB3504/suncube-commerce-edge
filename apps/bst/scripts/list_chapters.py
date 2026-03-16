import os
import re

data_dir = r"c:\Users\Admin\Neil\bstudies-cbse-class-XII\data"

print(f"{'Folder Name':<20} {'Chapter Name':<40}")
print("-" * 60)

# Sort logically 1 to 12
chapter_indices = range(1, 13)

for i in chapter_indices:
    unit_name = f"unit{i}"
    file_name = f"{unit_name}/index.ts"
    path = os.path.join(data_dir, file_name)
    
    chapter_title = "Unknown"
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            # Look for name: '...' or name: "..."
            match = re.search(r"name:\s*['\"](.*?)['\"]", content)
            if match:
                chapter_title = match.group(1)
    
    print(f"{unit_name:<20} {chapter_title:<40}")
