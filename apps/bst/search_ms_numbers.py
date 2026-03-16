import os, re

ms_dir = r'C:\Users\Admin\Neil\XII-Commerce\SQPs\BS-SQPs'

def get_q_text(content, q_num):
    # Try finding \n18. or \n18 
    idx = content.find(f"\n{q_num}.")
    if idx == -1:
        idx = content.find(f"\n{q_num} ")
    if idx == -1:
        idx = content.find(f"{q_num}.") # Without newline
    if idx != -1:
        return content[idx:idx+1200]
    return "Not found"

with open("unit2_ms_by_qnumber.txt", "w", encoding="utf-8") as out:
    def write_res(year, q_num, f_name):
        path = os.path.join(ms_dir, f_name)
        if not os.path.exists(path):
            out.write(f"--- {year} Q{q_num} ---\nFile not found: {f_name}\n{'='*40}\n")
            return
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        res = get_q_text(content, q_num)
        out.write(f"--- {year} Q{q_num} ---\n{res}\n{'='*40}\n")

    # 2025-26 SQP/MS
    write_res("2025-26", 18, "BusinessStudies-MS 2025-26.pdf.txt")
    write_res("2025-26", 25, "BusinessStudies-MS 2025-26.pdf.txt")
    
    # 2024-25 SQP/MS
    write_res("2024-25", 2, "BusinessStudies-MS-2024-25.pdf.txt")
    write_res("2024-25", 23, "BusinessStudies-MS-2024-25.pdf.txt")
    
    # 2023-24 Board MS 
    write_res("2023-24", 3, "BusinessStudies-MS-2023-24.pdf.txt")
    write_res("2023-24", 24, "BusinessStudies-MS-2023-24.pdf.txt")
    
    # 2022-23 MS
    write_res("2022-23", 2, "BusinessStudies-MS-2022-23.pdf.txt")
    write_res("2022-23", 13, "BusinessStudies-MS-2022-23.pdf.txt")
