import os
import fitz  # PyMuPDF

pdf_dir = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\Eco-SQPs"

for filename in os.listdir(pdf_dir):
    if filename.endswith(".pdf"):
        pdf_path = os.path.join(pdf_dir, filename)
        txt_path = os.path.join(pdf_dir, filename.replace(".pdf", ".txt"))
        
        # Don't overwrite if it already exists to save time, unless we want to
        if not os.path.exists(txt_path):
            try:
                doc = fitz.open(pdf_path)
                full_text = []
                for page in doc:
                    full_text.append(page.get_text("text"))
                
                with open(txt_path, "w", encoding="utf-8") as f:
                    f.write("\n".join(full_text))
                print(f"Extracted {filename} to TXT.")
            except Exception as e:
                print(f"Failed to process {filename}: {e}")
        else:
            print(f"Skipping {filename}, TXT already exists.")
