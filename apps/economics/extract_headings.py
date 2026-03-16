import os
import fitz
import json
import re

pdf_dir = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\ECO-Chapters"
pdf_files = [f for f in os.listdir(pdf_dir) if f.endswith('.pdf')]

results = {}

for f in pdf_files:
    path = os.path.join(pdf_dir, f)
    try:
        doc = fitz.open(path)
        text = ""
        for i in range(len(doc)):
            page = doc[i]
            text += page.get_text() + "\n"
        
        # Look for headings like "1.2 SOME TITLE" or "2.1 INTRODUCTION"
        # We will extract the chapter number from the filename mapping roughly, or just match \d+\.\d+\s+[A-Z].*
        headings = []
        for line in text.split('\n'):
            line = line.strip()
            # Match formats like "1.1 INTRODUCTION" or "2.3.1 Sub topic"
            if re.match(r'^\d+\.\d+(\.\d+)?\s+[A-Z]', line):
                # Check if it's mostly uppercase or just looks like a heading
                if len(line) < 100:  # Avoid matching entire paragraphs that happen to start with numbers
                    headings.append(line)
        
        # Deduplicate while preserving order
        unique_headings = []
        for h in headings:
            if h not in unique_headings:
                unique_headings.append(h)

        results[f] = unique_headings
    except Exception as e:
        results[f] = ["Error: " + str(e)]

with open(r"c:\Users\Admin\Neil\economics-cbse-class-XII\pdf_headings.json", "w", encoding="utf-8") as out:
    json.dump(results, out, indent=2)

print("Heading extraction complete.")
