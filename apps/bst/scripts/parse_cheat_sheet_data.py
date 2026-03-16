import os
import fitz # PyMuPDF
import re

chapters_dir = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\BS-Chapters"
sqps_dir = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\BS-SQPs"

def extract_text_from_pdf(filepath):
    text = ""
    try:
        doc = fitz.open(filepath)
        for page in doc:
            text += page.get_text()
        doc.close()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
    return text

def parse_units():
    unit_data = {i: {"text": "", "sqp_text": ""} for i in range(1, 13)}
    
    # Very basic mapping assumption based on filenames for Chapters
    if os.path.exists(chapters_dir):
        for filename in os.listdir(chapters_dir):
            if filename.endswith(".pdf"):
                filepath = os.path.join(chapters_dir, filename)
                text = extract_text_from_pdf(filepath)
                # Map by number prefix (e.g., 01_Nature_and_Significance_of_Management.pdf)
                match = re.search(r'^(\d+)', filename)
                if match:
                    unit_num = int(match.group(1))
                    if 1 <= unit_num <= 12:
                        unit_data[unit_num]["text"] += text + "\n"
                        
    # Very basic mapping for SQPs - read all into all units for general pitfall analysis
    if os.path.exists(sqps_dir):
        sqp_global_text = ""
        for filename in os.listdir(sqps_dir):
            if filename.endswith(".pdf"):
                 filepath = os.path.join(sqps_dir, filename)
                 sqp_global_text += extract_text_from_pdf(filepath) + "\n"
        for i in range(1, 13):
            unit_data[i]["sqp_text"] = sqp_global_text
            
    return unit_data

# For this test, just extract abbreviations and formulas from Unit 1-4
data = parse_units()

print("--- UNIT 1-4 EXTRACTION FOR CHEAT SHEETS ---")

for u in range(1, 4):
    print(f"\\nUNIT {u} ABBREVIATIONS/ACRONYMS CANDIDATES:")
    # look for caps
    abbrs = set(re.findall(r'\b[A-Z]{2,5}\b', data[u]["text"]))
    print(abbrs)
