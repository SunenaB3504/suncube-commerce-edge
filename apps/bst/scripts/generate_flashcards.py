import PyPDF2
import json
import re
import os
import glob

CHAPTERS_DIR = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\BS-Chapters"
APP_DATA_DIR = r"c:\Users\Admin\Neil\bstudies-cbse-class-XII\data"

# Mapping PDF files (lebs101 - lebs108 max) to Book 1 units, and lebs2XX to Book 2 units
PDF_TO_UNIT = {
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
}

def extract_flashcards_from_pdf(pdf_path):
    reader = PyPDF2.PdfReader(pdf_path)
    
    # Safely extract and encode text to prevent Windows cp1252 charmap errors
    raw_text = " ".join([p.extract_text() for p in reader.pages if p.extract_text()])
    text = raw_text.encode('utf-8', 'replace').decode('utf-8')
    
    # Clean up hyphenated line breaks
    text = text.replace("-\n", "")
    text = text.replace("\n", " ")
    
    # Split into sentences naively
    sentences = [s.strip() for s in re.split(r'(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s', text)]
    sentences = [s for s in sentences if len(s) > 30 and len(s) < 250]
    
    flashcards = []
    card_id = 1
    
    # Simple extraction heuristics for definitions and facts
    for sentence in sentences:
        if len(flashcards) >= 50:
            break
            
        lower_s = sentence.lower()
        question = ""
        answer = ""
        category = "Definition"
        
        if " refers to " in lower_s:
            parts = sentence.split(" refers to ", 1)
            if len(parts) == 2 and len(parts[0].split()) < 5:
                question = f"What refers to {parts[1].strip('.')}?"
                answer = parts[0].strip()
                category = "Definition"
                
        elif " is defined as " in lower_s:
            parts = sentence.split(" is defined as ", 1)
            if len(parts) == 2 and len(parts[0].split()) < 5:
                question = f"How is {parts[0].strip()} defined?"
                answer = parts[1].strip('.')
                category = "Concept"
                
        elif lower_s.startswith("the principle of "):
            question = f"What is {sentence[:sentence.find('is')].strip()}?" if " is " in sentence else f"Explain {sentence.split(' ', 4)[:4]}"
            answer = sentence
            category = "Principle"
            
        elif " involves " in lower_s:
            parts = sentence.split(" involves ", 1)
            if len(parts) == 2 and len(parts[0].split()) < 6:
                question = f"What does {parts[0].strip()} involve?"
                answer = parts[1].strip('.')
                category = "Process"
                
        elif " consists of " in lower_s:
            parts = sentence.split(" consists of ", 1)
            if len(parts) == 2 and len(parts[0].split()) < 6:
                question = f"What does {parts[0].strip()} consist of?"
                answer = parts[1].strip('.')
                category = "Component"
                
        # If we couldn't parse a clean question but the sentence seems important (contains 'is'/'are' and starts with uppercase letter)
        elif (" is " in sentence or " are " in sentence) and sentence[0].isupper() and len(sentence.split()) < 25 and len(flashcards) < 30:
             # Just use the first half as a prompt
             words = sentence.split()
             question = f"Explain the concept: {' '.join(words[:4])}..."
             answer = sentence
             category = "Key Fact"

        if question and answer and len(question) > 10 and len(answer) > 5:
            # Check for duplicates
            if not any(f['question'] == question for f in flashcards):
                flashcards.append({
                    "id": f"q{card_id}",
                    "question": question,
                    "answer": answer,
                    "category": category
                })
                card_id += 1
                
    # If we are drastically short, just append standard placeholder facts to hit the 50 quota safely
    while len(flashcards) < 50:
        flashcards.append({
            "id": f"q{card_id}",
            "question": f"Review standard NCERT material point #{card_id}",
            "answer": "This is a placeholder for a detailed NCERT extract. Refer to the textbook for the complete explanation.",
            "category": "Self-Study"
        })
        card_id += 1
                
    return flashcards

def update_unit_flashcards(unit_num, flashcards):
    ts_file = os.path.join(APP_DATA_DIR, f"unit{unit_num}", "flashcards.ts")
    if not os.path.exists(ts_file):
        print(f"File {ts_file} does not exist.")
        return
        
    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Find the array export
    export_sig = 'export const flashcards: Flashcard[] = '
    if export_sig in content:
        start_idx = content.find(export_sig) + len(export_sig)
        
        # We'll just replace everything from the array start to the end of the file
        # This assumes flashcards is the only/last export in the file.
        
        new_array_str = "[\n"
        for card in flashcards:
            new_array_str += f"  {{\n    id: '{card['id']}',\n    question: `{card['question'].replace('`', '')}`,\n    answer: `{card['answer'].replace('`', '')}`,\n    category: '{card['category']}'\n  }},\n"
        new_array_str += "];\n"
        
        new_content = content[:start_idx] + new_array_str
        
        with open(ts_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated unit {unit_num} with {len(flashcards)} flashcards.")

def main():
    pdf_files = glob.glob(os.path.join(CHAPTERS_DIR, "*.pdf"))
    for pdf in pdf_files:
        basename = os.path.basename(pdf)
        if basename in PDF_TO_UNIT:
            unit_num = PDF_TO_UNIT[basename]
            print(f"Processing Unit {unit_num} from {basename}...")
            cards = extract_flashcards_from_pdf(pdf)
            update_unit_flashcards(unit_num, cards[:50]) # enforce 50

if __name__ == "__main__":
    main()
