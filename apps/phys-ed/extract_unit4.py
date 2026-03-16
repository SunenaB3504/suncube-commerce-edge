
import pdfplumber
import sys

def extract_text(pdf_path, output_txt):
    text = ""
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                text += page.extract_text() + "\n"
    except Exception as e:
        print(f"Error: {e}")
        return

    with open(output_txt, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"Extracted text to {output_txt}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python extract_unit4.py <pdf_path> <output_txt>")
    else:
        extract_text(sys.argv[1], sys.argv[2])
