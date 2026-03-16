import os
import re
import math

APP_DATA_DIR = r"C:\Users\Admin\Neil\bstudies-cbse-class-XII\data"

STOP_WORDS = set([
    "the", "and", "is", "in", "to", "of", "it", "for", "with", "as", "by", "on", "are", "be", "that", 
    "this", "or", "an", "at", "from", "which", "not", "but", "can", "also", "has", "have", "will", "would",
    "should", "could", "their", "there", "they", "we", "you", "he", "she", "what", "how", "why", "when", 
    "where", "who", "whom", "whose", "which", "these", "those", "such", "than", "then", "been", "was",
    "were", "does", "do", "did", "done", "its", "all", "any", "both", "each", "few", "more", "most", 
    "other", "some", "such", "no", "nor", "too", "very", "can", "point", "marks", "mark", "explanation",
    "justification", "comprehensive", "revision", "points", "see", "marking", "scheme", "answer", "provided",
    "question", "Identify", "identify", "explain", "describe", "discuss", "state", "list", "give", "name"
])

def extract_content(file_path):
    if not os.path.exists(file_path):
        return ""
    with open(file_path, "r", encoding="utf-8") as f:
        return f.read()

def get_keywords(text):
    words = re.findall(r'\b[a-zA-Z]{4,}\b', text.lower())
    return set([w for w in words if w not in STOP_WORDS])

def analyze_coverage():
    total_sqp_marks = 0
    covered_marks = 0
    unit_stats = {}

    for i in range(1, 13):
        unit_dir = os.path.join(APP_DATA_DIR, f"unit{i}")
        cheat_path = os.path.join(unit_dir, "cheatSheet.ts")
        sqp_path = os.path.join(unit_dir, "sqp.ts")
        
        if not os.path.exists(cheat_path) or not os.path.exists(sqp_path):
            continue
            
        cheat_content = extract_content(cheat_path)
        cheat_keywords = get_keywords(cheat_content)
        
        sqp_content = extract_content(sqp_path)
        
        # Simple extraction of question blocks
        # We roughly split by "{" and look for "marks:" and "answer:" or "markingScheme:"
        blocks = sqp_content.split('{')
        
        unit_total_marks = 0
        unit_covered_marks = 0
        
        for block in blocks:
            if "question:" not in block:
                continue
                
            marks_match = re.search(r'marks:\s*(\d+)', block)
            marks = int(marks_match.group(1)) if marks_match else 1
            
            # Extract answer/marking scheme
            ans_match = re.search(r'answer:\s*`([^`]*)`', block)
            ms_match = re.search(r'markingScheme:\s*`([^`]*)`', block)
            
            ans_text = (ans_match.group(1) if ans_match else "") + " " + (ms_match.group(1) if ms_match else "")
            
            if "See marking scheme" in ans_text or len(ans_text.strip()) < 10:
                # Fallback to question text if answer is missing
                q_match = re.search(r'question:\s*`([^`]*)`', block)
                if not q_match:
                     q_match = re.search(r"question:\s*'([^']*)'", block)
                ans_text += (q_match.group(1) if q_match else "")
            
            ans_keywords = get_keywords(ans_text)
            
            if len(ans_keywords) == 0:
                continue
                
            overlap = ans_keywords.intersection(cheat_keywords)
            coverage_ratio = len(overlap) / len(ans_keywords)
            
            unit_total_marks += marks
            
            # If 40% of the key conceptual words are in the cheat sheet, we consider it "coverable"
            if coverage_ratio >= 0.4:
                unit_covered_marks += marks
                
        unit_stats[f"Unit {i}"] = {
            "total": unit_total_marks,
            "covered": unit_covered_marks,
            "percentage": (unit_covered_marks / unit_total_marks * 100) if unit_total_marks > 0 else 0
        }
        
        total_sqp_marks += unit_total_marks
        covered_marks += unit_covered_marks
        
    print(f"--- MORNING REVIEW COVERAGE ANALYSIS ---")
    print(f"Total SQP Marks Analysed: {total_sqp_marks}")
    print(f"Total Marks Coverable by Cheat Sheet: {covered_marks}")
    
    overall_percentage = (covered_marks / total_sqp_marks * 100) if total_sqp_marks > 0 else 0
    print(f"Overall Predictable Score: {overall_percentage:.1f}%\n")
    
    print("Breakdown by Unit:")
    for unit, stats in unit_stats.items():
        print(f"{unit.ljust(8)}: {stats['covered']}/{stats['total']} marks ({stats['percentage']:.1f}%)")
        
    # Also write to artifact
    with open(r"C:\Users\Admin\.gemini\antigravity\brain\d09dc3cb-11f0-4370-83e9-f970c7fc0dd4\sqp_coverage_report.md", "w") as f:
        f.write(f"# Morning Review vs SQP Coverage Analysis\n\n")
        f.write(f"**Total SQP Marks Analysed:** {total_sqp_marks}\n")
        f.write(f"**Marks Coverable via Morning Review:** {covered_marks}\n")
        f.write(f"### **Overall Predictable Score: {overall_percentage:.1f}%**\n\n")
        f.write("## Unit Breakdown\n")
        for unit, stats in unit_stats.items():
            f.write(f"- **{unit}**: {stats['covered']}/{stats['total']} marks ({stats['percentage']:.1f}%)\n")
        f.write("\n*Note: Coverage is calculated using a semantic keyword overlap algorithm between the SQP marking schemes and the morning cheat sheet points.*")

analyze_coverage()
