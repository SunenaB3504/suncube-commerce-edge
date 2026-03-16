import os
import re

def remove_latex(text):
    # Simple direct replacements
    text = text.replace(r'\bar{c}', 'c_bar')
    text = text.replace(r'\bar{C}', 'C_bar')
    text = text.replace(r'\Delta', 'Δ')
    text = text.replace(r'\rightarrow', '->')
    text = text.replace(r'\implies', '=>')
    text = text.replace(r'\times', '×')
    text = text.replace(r'\uparrow', '↑')
    text = text.replace(r'\downarrow', '↓')
    
    # Process \text{...} -> just the text inside
    text = re.sub(r'\\text{([^}]+)}', r'\1', text)
    
    # Process \frac{num}{den} -> (num)/(den) 
    text = re.sub(r'\\frac{([^}]+)}{([^}]+)}', r'(\1) / (\2)', text)
    
    # Remove paired $$ first (used for block math)
    text = re.sub(r'\$\$(.*?)\$\$', r'\1', text)
    
    # Remove paired $ ... $ but avoid currency like $1.00
    # If the text inside the $ starts with a digit, it's likely currency, so skip it.
    def replacer(m):
        inner = m.group(1)
        if inner.lstrip().startswith(('0','1','2','3','4','5','6','7','8','9')):
            return f'${inner}$'
        return inner
        
    text = re.sub(r'\$([^\$]+?)\$', replacer, text)
    
    return text

def process_dir(dirpath):
    count = 0
    for root, dirs, files in os.walk(dirpath):
        for file in files:
            if file.endswith('.ts') or file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = remove_latex(content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    count += 1
                    print(f"Cleaned {path}")
    print(f"Total files cleaned: {count}")

if __name__ == '__main__':
    process_dir('src/data')
