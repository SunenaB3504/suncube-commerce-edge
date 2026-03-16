import os
import PyPDF2

pdf_dir = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\BS-SQPs"
ms_files = [
    "BusinessStudies-MS-2022-23.pdf",
    "BusinessStudies-MS-2023-24.pdf",
    "BusinessStudies-MS-2024-25.pdf",
    "BusinessStudies-MS 2025-26.pdf"
]

for filename in ms_files:
    filepath = os.path.join(pdf_dir, filename)
    if os.path.exists(filepath):
        print(f"--- Extracting abstract from: {filename} ---")
        try:
            with open(filepath, 'rb') as f:
                reader = PyPDF2.PdfReader(f)
                num_pages = len(reader.pages)
                # Print the first 1000 characters of the first page to get a sense of structure
                if num_pages > 0:
                    text = reader.pages[0].extract_text()
                    print(text[:1000])
                    print("...\n")
        except Exception as e:
            print(f"Error reading {filename}: {e}")
    else:
        print(f"File not found: {filepath}")
