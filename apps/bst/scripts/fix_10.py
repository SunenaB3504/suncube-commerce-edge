import os
import re

sqp_file = os.path.join(os.path.dirname(__file__), '..', 'data', 'unit10', 'sqp.ts')
with open(sqp_file, 'r', encoding='utf-8') as f:
    c = f.read()

# Remove the 'aiExplanation: "Pending AI analysis",' lines
c = re.sub(r'\s*aiExplanation:\s*"Pending AI analysis",', '', c)

# For unit10 specifically, we have duplicated paperType: "SQP" which causes syntax error
c = re.sub(r'(id:\s*"sqp-10-[23456]",\s*)paperType:\s*"SQP",\s*', r'\1', c)

with open(sqp_file, 'w', encoding='utf-8') as f:
    f.write(c)

print("Fixed unit10")
