import os
import re
import PyPDF2
import json

pdf_dir = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\BS-SQPs"
ms_files = {
    '2022-23': "BusinessStudies-MS-2022-23.pdf",
    '2023-24': "BusinessStudies-MS-2023-24.pdf",
    '2024-25': "BusinessStudies-MS-2024-25.pdf",
    '2025-26': "BusinessStudies-MS 2025-26.pdf"
}

def extract_ms(filepath):
    text = ""
    try:
        with open(filepath, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            for page in reader.pages:
                text += page.extract_text() + "\n"
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
    return text

all_ms_data = {}

for year, filename in ms_files.items():
    filepath = os.path.join(pdf_dir, filename)
    if os.path.exists(filepath):
        text = extract_ms(filepath)
        all_ms_data[year] = text

# We will save this raw text temporarily so we can analyze the question patterns
with open("raw_ms_text.json", "w", encoding='utf-8') as f:
    json.dump(all_ms_data, f, indent=2)

print("Extracted all MS text")
