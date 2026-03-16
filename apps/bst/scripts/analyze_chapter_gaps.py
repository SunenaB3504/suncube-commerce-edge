import os
import glob
import PyPDF2
import re

CHAPTERS_DIR = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\BS-Chapters"
APP_DATA_DIR = r"c:\Users\Admin\Neil\bstudies-cbse-class-XII\data"

PDF_TO_UNIT = {
    "lebs101.pdf": 1,
    "lebs102.pdf": 2,
    "lebs103.pdf": 3,
    "lebs104.pdf": 4,
    "lebs105.pdf": 5,
    "lebs106.pdf": 6,
    "lebs107.pdf": 7,
    "lebs108.pdf": 8,
    "lebs201.pdf": 9,
    "lebs202.pdf": 10,
    "lebs203.pdf": 11,
    "lebs204.pdf": 12, # Assuming this exists or not
}

def analyze_pdf(pdf_path):
    try:
        reader = PyPDF2.PdfReader(pdf_path)
        text = " ".join([p.extract_text() for p in reader.pages if p.extract_text()])
        text = text.encode('utf-8', 'replace').decode('utf-8')
        words = len(text.split())
        pages = len(reader.pages)
        return pages, words
    except Exception as e:
        return 0, 0

def analyze_app_data(unit_num):
    unit_dir = os.path.join(APP_DATA_DIR, f"unit{unit_num}")
    if not os.path.exists(unit_dir):
        return {"topics": 0, "flashcards": 0, "cheatSheet_sections": 0, "sqp": 0}
        
    stats = {"topics": 0, "flashcards": 0, "cheatSheet_sections": 0, "sqp": 0}
    
    # Check topics
    topics_file = os.path.join(unit_dir, "topics.ts")
    if os.path.exists(topics_file):
        with open(topics_file, 'r', encoding='utf-8') as f:
            content = f.read()
            stats["topics"] = content.count("title:")
            
    # Check flashcards
    flashcards_file = os.path.join(unit_dir, "flashcards.ts")
    if os.path.exists(flashcards_file):
        with open(flashcards_file, 'r', encoding='utf-8') as f:
            content = f.read()
            stats["flashcards"] = content.count("question:")
            
    # Check cheat sheet
    cheat_file = os.path.join(unit_dir, "cheatSheet.ts")
    if os.path.exists(cheat_file):
        with open(cheat_file, 'r', encoding='utf-8') as f:
            content = f.read()
            stats["cheatSheet_sections"] = content.count("title:")
            
    # Check SQP
    sqp_file = os.path.join(unit_dir, "sqp.ts")
    if os.path.exists(sqp_file):
        with open(sqp_file, 'r', encoding='utf-8') as f:
            content = f.read()
            stats["sqp"] = content.count("question:")
            
    return stats

def main():
    print("Chapterwise Gap Analysis")
    print("-" * 50)
    
    for i in range(1, 13):
        pdf_name = None
        for name, unit in PDF_TO_UNIT.items():
            if unit == i:
                pdf_name = name
                break
                
        pdf_words = 0
        pdf_pages = 0
        if pdf_name:
            pdf_path = os.path.join(CHAPTERS_DIR, pdf_name)
            if os.path.exists(pdf_path):
                pdf_pages, pdf_words = analyze_pdf(pdf_path)
                
        app_stats = analyze_app_data(i)
        
        print(f"Unit {i}:")
        print(f"  Source PDF: {pdf_pages} pages, ~{pdf_words} words")
        print(f"  App Content: {app_stats['topics']} topics, {app_stats['flashcards']} flashcards, {app_stats['cheatSheet_sections']} cheat sheet sections, {app_stats['sqp']} SQP questions")
        print("-" * 50)

if __name__ == "__main__":
    main()
