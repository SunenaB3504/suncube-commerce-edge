import os
from pypdf import PdfReader

def convert_pdfs_to_text(source_dir, dest_dir):
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)
        
    for filename in os.listdir(source_dir):
        if filename.endswith(".pdf"):
            pdf_path = os.path.join(source_dir, filename)
            txt_filename = os.path.splitext(filename)[0] + ".txt"
            txt_path = os.path.join(dest_dir, txt_filename)
            
            print(f"Converting {filename}...")
            
            try:
                reader = PdfReader(pdf_path)
                text = ""
                for page in reader.pages:
                    text += page.extract_text(extraction_mode="layout") + "\n\n"
                    
                with open(txt_path, "w", encoding="utf-8") as f:
                    f.write(text)
                
                print(f"Saved to {txt_filename}")
                
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")

if __name__ == "__main__":
    source = r"c:\Users\Admin\Neil\XII-Commerce\SQPs\Acc-Chapters"
    dest = r"c:\Users\Admin\Neil\XII-Commerce\SQPs\Acc-Chapters\Converted-Text"
    convert_pdfs_to_text(source, dest)
