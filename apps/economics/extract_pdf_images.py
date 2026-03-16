import fitz # PyMuPDF
import os

pdf_dir = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\ECO-Chapters"
output_dir = r"C:\Users\Admin\Neil\economics-cbse-class-XII\public\assets\images\ncert"

os.makedirs(output_dir, exist_ok=True)

# We specifically need charts from:
# 1. Unit 3 Income Determination (Macro ch 4 usually) -> leec104.pdf
# 2. Unit 7 Employment (IED ch 6 usually) -> keec106.pdf

files_to_process = ["leec104.pdf", "keec106.pdf"]

def extract_images_from_pdf(pdf_path, prefix):
    try:
        doc = fitz.open(pdf_path)
        img_count = 0
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            images = page.get_images(full=True)
            for img_index, img in enumerate(images):
                xref = img[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                
                # Filter out tiny icons/junk by checking byte size
                if len(image_bytes) > 5000:
                    output_file = os.path.join(output_dir, f"{prefix}_p{page_num+1}_i{img_index}.{image_ext}")
                    with open(output_file, "wb") as f:
                        f.write(image_bytes)
                    print(f"Extracted: {output_file}")
                    img_count += 1
        return img_count
    except Exception as e:
        print(f"Error processing {pdf_path}: {e}")
        return 0

for f in files_to_process:
    full_path = os.path.join(pdf_dir, f)
    print(f"\nProcessing {f}...")
    count = extract_images_from_pdf(full_path, f.split('.')[0])
    print(f"Extracted {count} images from {f}.")
