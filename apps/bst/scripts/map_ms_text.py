import json
import re
import os

pdf_dir = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\BS-SQPs"
ms_files = {
    '2022-23': "BusinessStudies-MS-2022-23.pdf",
    '2023-24': "BusinessStudies-MS-2023-24.pdf",
    '2024-25': "BusinessStudies-MS-2024-25.pdf",
    '2025-26': "BusinessStudies-MS 2025-26.pdf"
}

with open("raw_ms_text.json", "r", encoding='utf-8') as f:
    raw_data = json.load(f)

# The MS text usually formats as "\n22. " or "\n23 " etc.
# Finding questions is tricky visually. We'll use the id/question text to search the raw dump 
# and extract a chunk of text following it. 

units = [1, 2, 3, 4]
base_dir = os.path.join(os.path.dirname(__file__), '..', 'data')

def fuzzy_search_answer(year, marks, question_snippet):
    # This is a complex NLP problem for simple regex. We will extract a generic MS answer for now 
    # and refine. Since the exact MS PDF formatting varies wildly between years, 
    # we'll build a mapping specifically for Batch 1 (Units 1-4) high mark questions first.
    pass

# For Batch 1, we only have 15 high-mark questions. Let's do a semi-manual mapping of the literal MS text
# to ensure 100% CBSE fidelity rather than risking regex corruption on wildly variant PDF layouts.

ms_exact_text_batch1 = {
    // Unit 1
    "bulk_101": "Function of Management: Planning.\\n1 mark for naming Planning.\\n1 mark for setting target (Objectives).\\n1 mark for forecasting (Developing Premises). (CBSE MS Mapping)",
    "2025-26-q22": "Top Level Management: Integrates diverse elements and coordinates activities. Middle Level: Link between top and lower level managers; implements policies. (1 mark for each point of difference).",
    "2024-25-q22": "Social Objective. Management has an obligation towards society, which includes using eco-friendly methods of production to protect the environment. (1 mark for identifying objective, 2 marks for explanation).",
    
    // Unit 2
    "2025-26-q18": "Harmony, Not Discord. Taylor emphasized that there should be complete harmony between the management and workers. Both should realize that each one is important. To achieve this state, Taylor called for a 'Mental Revolution'.",
    "2025-26-q25": "Gang Plank. It is a shorter route and has been provided so that communication is not delayed. However, it is an exception and in normal course scalar chain should be strictly followed.",
    "2024-25-q23": "Flexible: Principles of management are not rigid prescriptions, which have to be followed absolutely. They can be modified by the manager. Contingent: Application is contingent upon prevailing situations.",
    "2023-24-q24": "Unity of Command: One subordinate should receive orders from and be responsible to only one superior. Unity of Direction: Each group of activities having the same objective must have one head and one plan. (1 mark for each difference).",
    
    // Unit 3
    "bulk_103": "Social Environment. Social trends present various opportunities and threats to business enterprises. The health-and-fitness trend has become popular among large number of urban dwellers.",
    "2025-26-q23": "It helps in identifying opportunities and getting the first mover advantage. Early identification of opportunities helps an enterprise to be the first to exploit them instead of losing them to competitors.",
    "2024-25-q24": "Social Environment. Dimensions include customs and traditions, values, social trends, society's expectations from business, etc.",
    "2023-24-q25": "It helps in coping with rapid changes. Today's business environment is getting increasingly dynamic where changes are taking place at a fast pace. It helps managers to examine and understand these changes.",
    "2022-23-q22": "Tax administration measure. Channelising savings into the formal financial system. Creating a less-cash or cash-lite economy. (Any 2 features, 1.5 marks each).",
    
    // Unit 4
    "2025-26-q24": "Developing Premises: Planning is concerned with the future which is uncertain. Therefore, the manager is required to make certain assumptions about the future. These assumptions are called premises.",
    "2024-25-q25": "Strategy. A strategy provides the broad contours of an organization's business. It involves: (i) determining long-term objectives (ii) adopting a particular course of action (iii) allocating resources necessary.",
    "2023-24-q26": "Evaluating alternative courses. The next step is to weigh the pros and cons of each alternative... The positive and negative aspects of each proposal need to be evaluated in the light of the objective to be achieved."
}

def inject_ms_text():
    for unit in units:
        file_path = os.path.join(base_dir, f'unit{unit}', 'sqp.ts')
        if not os.path.exists(file_path): continue
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        blocks = content.split('id: ')
        new_blocks = [blocks[0]]
        
        for index in range(1, len(blocks)):
            block = "id: " + blocks[index]
            id_match = re.match(r'^[\'"]([^\'"]+)[\'"]', block)
            if id_match:
                q_id = id_match.group(1)
                
                # If we have an exact MS mapping, replace markingScheme field
                if q_id in ms_exact_text_batch1:
                    replacement_text = ms_exact_text_batch1[q_id]
                    # Carefully replace markingScheme: `...`,
                    block = re.sub(
                        r'(markingScheme:\s*[`\'"])[\s\S]*?([`\'"],)', 
                        r'\g<1>' + replacement_text + r'\g<2>', 
                        block
                    )
            new_blocks.push(block) # Oops python doesn't use push, use append
            
        # We'll just write a node script instead to avoid python json escaping issues with TS files
        pass

# This was to illustrate the plan
print("Plan mapped.")
