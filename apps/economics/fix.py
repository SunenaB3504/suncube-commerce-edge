import os

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # replace backslash+backtick with just backtick
    content = content.replace("\\`", "`")
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

fix_file(r'src\data\unit6-ied-intro\topics.ts')
fix_file(r'src\data\unit7-ied-challenges\topics.ts')
print("Fixed files.")
