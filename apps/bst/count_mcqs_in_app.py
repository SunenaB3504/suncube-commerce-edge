import glob, re

total = 0
with_optA = 0

for f in glob.glob('data/**/sqp.ts', recursive=True):
    with open(f, encoding='utf-8') as fp:
        txt = fp.read()
    total += len(re.findall(r"type:\s*['\"]MCQ['\"]", txt))
    with_optA += len(re.findall(r'optionA\s*:', txt))

print(f'Total MCQs in app data: {total}')
print(f'Total with optionA: {with_optA}')
