import os
import re

chapters = [
    "unit1-national-income",
    "unit2-money-banking",
    "unit3-income-determination",
    "unit4-govt-budget",
    "unit5-bop-forex",
    "unit6-ch1-eve-of-independence",
    "unit6-ch2-planning-era",
    "unit6-ch3-lpg-reforms",
    "unit7-ch4-hcf",
    "unit7-ch5-rural",
    "unit7-ch6-employment",
    "unit7-ch7-environment",
    "unit8-ied-comparison"
]

base_path = "src/data"

def get_content(file_path):
    if not os.path.exists(file_path):
        return ""
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.read()

def count_flashcards(content):
    return len(re.findall(r"id:\s*['\"]u\d+-[^'\"]+['\"]", content))

def count_sqps(content):
    return len(re.findall(r"id:\s*['\"]q\d+-[^'\"]+['\"]", content))

def count_topics(content):
    # Match id: 'uX-tY' or id: 'uX-chY-tZ'
    return len(re.findall(r"id:\s*['\"]u\d+(-ch\d+)?-t\d+['\"]", content))

def count_subtopics(content):
    # Count occurrences of 'label:'
    return len(re.findall(r"label:\s*['\"]", content))

with open("counts_output.md", "w", encoding="utf-8") as out:
    out.write("| Chapter | Topics | Sub-topics | Flashcards | SQPs | Visuals |\n")
    out.write("| :--- | :---: | :---: | :---: | :---: | :---: |\n")

    total_t, total_st, total_f, total_s, total_v = 0, 0, 0, 0, 0

    for chapter in chapters:
        p = os.path.join(base_path, chapter)
        t_content = get_content(os.path.join(p, "topics.ts"))
        m_content = get_content(os.path.join(p, "masterTable.ts"))
        f_content = get_content(os.path.join(p, "flashcards.ts"))
        s_content = get_content(os.path.join(p, "sqp.ts"))
        
        t = count_topics(t_content)
        if chapter == "unit8-ied-comparison":
             t += count_topics(m_content)
        
        st = count_subtopics(t_content) + count_subtopics(m_content)
        
        f = count_flashcards(f_content)
        s = count_sqps(s_content)
        
        v = len(re.findall(r"id:\s*['\"]u\d+(-ch\d+)?-v\d+['\"]", t_content))
        v += len(re.findall(r"id:\s*['\"]v-[^'\"]+['\"]", m_content))
        
        out.write(f"| {chapter} | {t} | {st} | {f} | {s} | {v} |\n")
        total_t += t
        total_st += st
        total_f += f
        total_s += s
        total_v += v

    out.write(f"| **TOTAL** | **{total_t}** | **{total_st}** | **{total_f}** | **{total_s}** | **{total_v}** |\n")
