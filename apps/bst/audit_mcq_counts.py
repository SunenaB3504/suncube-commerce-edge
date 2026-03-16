import glob, re, json, os

def count_mcqs():
    total = 0
    with_opt = 0
    per_unit = {}
    for f in glob.glob('data/**/sqp.ts', recursive=True):
        with open(f, encoding='utf-8') as fp:
            txt = fp.read()
        mcq_matches = re.findall(r"type:\s*['\"]MCQ['\"]", txt)
        optA_matches = re.findall(r'optionA\s*:', txt)
        unit = os.path.basename(os.path.dirname(f))
        total += len(mcq_matches)
        with_opt += len(optA_matches)
        per_unit[unit] = {
            'mcq_total': len(mcq_matches),
            'with_optionA': len(optA_matches)
        }
    print('Total MCQs found:', total)
    print('MCQs with optionA:', with_opt)
    print('Per unit breakdown:')
    print(json.dumps(per_unit, indent=2))

if __name__ == '__main__':
    count_mcqs()
