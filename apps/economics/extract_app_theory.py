import os
import re
import json

app_dir = r"C:\Users\Admin\Neil\economics-cbse-class-XII\src\data"
units = [d for d in os.listdir(app_dir) if d.startswith("unit")]

results = {}

for unit in sorted(units):
    topics_file = os.path.join(app_dir, unit, "topics.ts")
    if os.path.exists(topics_file):
        with open(topics_file, "r", encoding="utf-8") as f:
            content = f.read()
            # extract titles using simple regex
            titles = re.findall(r"title:\s*['\"]([^'\"]+)['\"]", content)
            results[unit] = titles

with open(r"c:\Users\Admin\Neil\economics-cbse-class-XII\app_theory_summary.json", "w", encoding="utf-8") as out:
    json.dump(results, out, indent=2)

print("App theory extraction complete. Saved to app_theory_summary.json")
