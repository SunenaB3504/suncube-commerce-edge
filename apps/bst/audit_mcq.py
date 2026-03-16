import glob, re

total_mcqs = 0
mcqs_with_optionA = 0

for f in glob.glob('data/**/sqp.ts', recursive=True):
    content = open(f, encoding='utf-8').read()
    unit = f.split('\\')[1]
    mcq_count = len(re.findall(r"type:\s*['\"]MCQ['\"]", content))
    optA_count = len(re.findall(r'optionA:', content))
    total_mcqs += mcq_count
    mcqs_with_optionA += optA_count
    print(f'{unit}: {mcq_count} MCQs, {optA_count} with optionA')

print(f'\nTotal MCQs: {total_mcqs}, With optionA: {mcqs_with_optionA}')
