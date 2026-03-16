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

def count_ids(content):
    if not content: return 0
    return len(re.findall(r"id:\s*['\"]([^'\"]+)['\"]", content))

def count_subtopics(content):
    if not content: return 0
    return len(re.findall(r"label:\s*['\"]([^'\"]+)['\"]", content))

def count_topics_only(content):
    if not content: return 0
    # Topics are top-level objects in the exported array.
    # They usually have { id: ... } at the start of the object.
    # We can try to count 'id:' that are NOT inside visualizations.
    # Visualizations usually are inside a "visualizations: [" block.
    
    # Split by 'visualizations:' to avoid counting their IDs
    parts = re.split(r"visualizations:\s*\[", content)
    # The first part has the main topic IDs. Subsequent parts have viz IDs followed by more topic IDs if multiple topics.
    # This is complex. 
    # Let's use a simpler heuristic: count 'title:' at a certain indentation or preceded by '{'
    return len(re.findall(r"\{\s*id:\s*['\"]", content))

with open("final_counts.md", "w", encoding="utf-8") as out:
    out.write("| Chapter | Topics | Sub-topics | Flashcards | SQPs | Visuals |\n")
    out.write("| :--- | :---: | :---: | :---: | :---: | :---: |\n")

    total_t, total_st, total_f, total_s, total_v = 0, 0, 0, 0, 0

    for chapter in chapters:
        p = os.path.join(base_path, chapter)
        t_c = get_content(os.path.join(p, "topics.ts"))
        m_c = get_content(os.path.join(p, "masterTable.ts"))
        f_c = get_content(os.path.join(p, "flashcards.ts"))
        s_c = get_content(os.path.join(p, "sqp.ts"))
        
        # Flashcards & SQPs are easy
        f = count_ids(f_c)
        s = count_ids(s_c)
        
        # Visuals
        v = len(re.findall(r"visualizations:\s*\[", t_c + m_c)) # This counts the arrays, not items.
        # Better visual count: count IDs inside visualizations blocks
        v_ids = 0
        for block in re.findall(r"visualizations:\s*\[(.*?)\]", t_c + m_c, re.DOTALL):
            v_ids += count_ids(block)
        
        # Topics
        # Count top-level IDs in topics.ts
        # Any 'id:' not inside a visualizations block or content block might be a topic.
        # But wait, count_topics_only above is better.
        t = count_topics_only(t_c)
        if m_c: t += 1 # Master table is usually 1 big topic
        
        st = count_subtopics(t_c + m_c)
        
        out.write(f"| {chapter} | {t} | {st} | {f} | {s} | {v_ids} |\n")
        total_t += t
        total_st += st
        total_f += f
        total_s += s
        total_v += v_ids

    out.write(f"| **TOTAL** | **{total_t}** | **{total_st}** | **{total_f}** | **{total_s}** | **{total_v}** |\n")
