import sys
import os

def extract_pdf(pdf_path, output_path):
    try:
        import fitz
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text()
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Extracted {pdf_path} (fitz)")
        return
    except ImportError:
        pass
        
    try:
        import PyPDF2
        reader = PyPDF2.PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Extracted {pdf_path} (PyPDF2)")
        return
    except ImportError:
        pass
        
    print("Please install PyMuPDF or PyPDF2")

if __name__ == "__main__":
    ms_dir = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\BS-SQPs"
    ms_files = [
        "BusinessStudies-MS 2025-26.pdf",
        "BusinessStudies-MS-2024-25.pdf",
        "BusinessStudies-MS-2022-23.pdf"
    ]
    for ms in ms_files:
        pdf_path = os.path.join(ms_dir, ms)
        txt_path = os.path.join(ms_dir, ms + ".txt")
        extract_pdf(pdf_path, txt_path)
