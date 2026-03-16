
import os
from pypdf import PdfReader

def extract_text(pdf_path):
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text
    except Exception as e:
        return str(e)

base_path = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\Physical Education\PhysicalEducation-SQPs"
files = [
    "PhysicalEducation-SQP-2025-26.pdf"
]

for file in files:
    path = os.path.join(base_path, file)
    print(f"Processing {file}...")
    content = extract_text(path)
    with open("sqp_text_dump.txt", "a", encoding="utf-8") as f:
        f.write(f"--- START {file} ---\n")
        f.write(content)
        f.write(f"\n--- END {file} ---\n")
