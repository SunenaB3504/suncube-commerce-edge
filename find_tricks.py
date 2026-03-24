import os
import re

files = [
    "apps/entrance-pro/src/data/general-aptitude/quantitative.data.js",
    "apps/entrance-pro/src/data/general-aptitude/logical-reasoning.data.js"
]

results = []

for filepath in files:
    full_path = os.path.join("C:\\Users\\Admin\\Neil\\suncube-commerce-edge", filepath)
    if not os.path.exists(full_path):
        continue
    
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract question blocks. A simple way is to split by 'id: ' or 'question:'
    # Better: findall using regex for the question object
    blocks = re.findall(r'\{\s*id:.*?question:\s*"(.*?)".*?(?:explanation|solution_steps):.*?\}', content, re.DOTALL)
    
    # We will just iterate line by line to capture the question object loosely
    question_pattern = re.compile(r'question:\s*"(.*?)"')
    explanation_pattern = re.compile(r'explanation:\s*"(.*?)"')
    
    # Let's extract all questions and their explanations
    # Because JS objects can be nested and multi-line, regex might fail if not strict.
    # An easier way is to match `{ id: ..., question: "...", ..., explanation: "..." }`
    q_blocks = re.finditer(r'\{[^{}]*id:\s*["\'](.*?)["\'][^{}]*question:\s*["\'](.*?)["\'][^{}]*explanation:\s*["\'](.*?)["\'][^{}]*\}', content, re.DOTALL)
    
    for match in q_blocks:
        qid = match.group(1)
        qtext = match.group(2)
        qexpl = match.group(3)
        
        # Check if explanation already has a hack
        has_hack = re.search(r'(?i)(hacker|shortcut|trick|unit digit|fast)', qexpl)
        
        # Check if question is suitable for Vedic math: 
        # - large numbers to multiply
        # - perfect squares/cubes
        # - percentages
        is_vedic = re.search(r'\d{2,}\s*\*\s*\d{2,}|\b(11|25|99|999)\b|square|cube|\%', qtext)
        
        if has_hack or is_vedic:
            results.append(f"### {qid}\n**Q:** {qtext}\n**Current Logic/Hack:** {qexpl}\n")

with open("C:\\Users\\Admin\\Neil\\suncube-commerce-edge\\gat_tricks.md", 'w', encoding='utf-8') as f:
    f.write("# GAT Questions Suitable for Shortcuts & Vedic Maths\n\n")
    for r in results:
        f.write(r + "\n")
print(f"Found {len(results)} questions.")
