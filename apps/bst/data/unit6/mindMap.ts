import { Chapter, MindMapNode } from '../../types';

export const MIND_MAP: Chapter['mindMap'] = {
    id: "root",
    label: "STAFFING",
    children: [
        {
            id: "concept",
            label: "1. Concept and Importance",
            children: [
                { id: "c1", label: "Meaning: Filling and keeping filled org positions" },
                { id: "i1", label: "Importance: Competent Personnel" },
                { id: "i2", label: "Importance: Higher Performance" },
                { id: "i3", label: "Importance: Survival and Growth" },
                { id: "i4", label: "Importance: Optimum Utilisation" },
                { id: "i5", label: "Importance: Job Satisfaction" }
            ]
        },
        {
            id: "process",
            label: "2. Staffing Process",
            children: [
                { id: "p1", label: "1. Estimating Manpower Requirements" },
                { id: "p2", label: "2. Recruitment" },
                { id: "p3", label: "3. Selection" },
                { id: "p4", label: "4. Placement and Orientation" },
                { id: "p5", label: "5. Training and Development" },
                { id: "p6", label: "6. Performance Appraisal" },
                { id: "p7", label: "7. Promotion and Career Planning" },
                { id: "p8", label: "8. Compensation" }
            ]
        },
        {
            id: "recruitment",
            label: "3. Recruitment",
            children: [
                {
                    id: "int_src",
                    label: "Internal Sources",
                    children: [
                        { id: "t1", label: "Transfers" },
                        { id: "p1", label: "Promotions" }
                    ]
                },
                {
                    id: "ext_src",
                    label: "External Sources",
                    children: [
                        { id: "e1", label: "Direct Recruitment" },
                        { id: "e2", label: "Casual Callers" },
                        { id: "e3", label: "Advertisement" },
                        { id: "e4", label: "Employment Exchange" },
                        { id: "e5", label: "Placement Agencies" },
                        { id: "e6", label: "Campus Recruitment" },
                        { id: "e7", label: "Recommendations" },
                        { id: "e8", label: "Labour Contractors" },
                        { id: "e9", label: "Web Publishing" }
                    ]
                }
            ]
        },
        {
            id: "selection",
            label: "4. Selection Process",
            children: [
                { id: "s1", label: "1. Preliminary Screening" },
                { id: "s2", label: "2. Selection Tests (IQ, Aptitude, etc)" },
                { id: "s3", label: "3. Employment Interview" },
                { id: "s4", label: "4. Reference Checks" },
                { id: "s5", label: "5. Selection Decision" },
                { id: "s6", label: "6. Medical Examination" },
                { id: "s7", label: "7. Job Offer" },
                { id: "s8", label: "8. Contract of Employment" }
            ]
        },
        {
            id: "training",
            label: "5. Training and Development",
            children: [
                {
                    id: "on_job",
                    label: "On-the-Job Methods",
                    children: [
                        { id: "oj1", label: "Apprenticeship" },
                        { id: "oj2", label: "Coaching" },
                        { id: "oj3", label: "Internship" },
                        { id: "oj4", label: "Job Rotation" }
                    ]
                },
                {
                    id: "off_job",
                    label: "Off-the-Job Methods",
                    children: [
                        { id: "of1", label: "Class Room Lectures" },
                        { id: "of2", label: "Films" },
                        { id: "of3", label: "Case Study" },
                        { id: "of4", label: "Computer Modelling" },
                        { id: "of5", label: "Vestibule Training" },
                        { id: "of6", label: "Programmed Instruction" }
                    ]
                }
            ]
        }
    ]
};
