import os
import re

DATA_DIR = r"c:\Users\Admin\Neil\bstudies-cbse-class-XII\data"
chars_to_find = ['&', '->', '<', '>', '"', "'"]

print("Auditing mind maps for potentially breaking characters...")

for i in range(2, 13):
    mm_path = os.path.join(DATA_DIR, f"unit{i}", "mindMap.ts")
    if os.path.exists(mm_path):
        with open(mm_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        found_chars = []
        for char in chars_to_find:
            if char in content:
                found_chars.append(char)
        
        if found_chars:
            print(f"\n[Unit {i}] Found potentially breaking chars: {', '.join(found_chars)}")
            lines = content.split('\n')
            for idx, line in enumerate(lines):
                if 'label:' in line:
                    for char in chars_to_find:
                        if char in line:
                            print(f"  Line {idx + 1}: {line.strip()}")
                            break # don't print line twice if two chars match
    else:
        print(f"[Unit {i}] No mindMap.ts found")
