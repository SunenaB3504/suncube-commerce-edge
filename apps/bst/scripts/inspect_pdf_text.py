import PyPDF2
import os

# Configuration
PDF_DIR = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\BS-Chapters" # Use this for Chapters
# PDF_DIR = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\BS-SQPs"     # Use this for SQPs
FILENAME = "lebs203.pdf" # Unit 11: Consumer Protection

pdf_path = os.path.join(PDF_DIR, FILENAME)

print(f"Inspecting: {pdf_path}")

try:
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        num_pages = len(reader.pages)
        print(f"Total Pages: {num_pages}")
        
        for i in range(0, min(15, num_pages)): # Inspect first 15 pages
            text = reader.pages[i].extract_text()
            if text:
                print(f'\n--- Page {i+1} ---')
                print(text)  # Print full text
            else:
                print(f'\n--- Page {i+1} (No text found) ---')
except FileNotFoundError:
    print(f"Error: File not found at {pdf_path}")
except Exception as e:
    print(f"Error: {e}")
