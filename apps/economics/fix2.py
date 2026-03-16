import os

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix Unit 6 string
    content = content.replace("'Detailed analysis of India\\'s inward-looking trade strategy and industrial development.'", '"Detailed analysis of India\\'s inward-looking trade strategy and industrial development."')
    content = content.replace("'Detailed analysis of India\\\\'s inward-looking trade strategy and industrial development.'", '"Detailed analysis of India\\'s inward-looking trade strategy and industrial development."')

    # Fix Unit 7 string
    content = content.replace("'State of India\\'s Environment'", '"State of India\\'s Environment"')
    content = content.replace("'State of India\\\\'s Environment'", '"State of India\\'s Environment"')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

fix_file(r'src\data\unit6-ied-intro\topics.ts')
fix_file(r'src\data\unit7-ied-challenges\topics.ts')

print("Applied fixes")
