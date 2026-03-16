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
        
        # Look for references like "Table 1.1", "Fig 2.3", "Box 4.2", "Chart"
        visuals = []
        for line in text.split('\n'):
            line = line.strip()
            # Match formats like "Table X.Y", "Fig. X.Y", "Figure X.Y", "Box X.Y", "Chart X.Y"
            match = re.search(r'(Table\s+\d+\.\d+|Fig\.?\s+\d+\.\d+|Figure\s+\d+\.\d+|Box\s+\d+\.\d+|Chart\s+\d+\.\d+)(.*)', line, re.IGNORECASE)
            if match:
                # Get the visual identifier and its title (up to 100 chars to avoid grabbing paragraphs)
                visual_text = match.group(0)[:100]
                if visual_text not in visuals:
                    visuals.append(visual_text)
                    
        results[f] = visuals
    except Exception as e:
        results[f] = ["Error: " + str(e)]

with open(r"c:\Users\Admin\Neil\economics-cbse-class-XII\pdf_visuals.json", "w", encoding="utf-8") as out:
    json.dump(results, out, indent=2)

print("Visual extraction complete.")
