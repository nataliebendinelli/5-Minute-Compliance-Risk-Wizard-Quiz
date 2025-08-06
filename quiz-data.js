// Quiz Questions and Scoring Data
const quizData = {
    sections: [
        {
            id: 'classification',
            name: 'Employee Classification Risk',
            weight: 0.35,
            penaltyRange: '$5,000 - $50,000'
        },
        {
            id: 'overtime',
            name: 'Overtime Compliance Risk',
            weight: 0.25,
            penaltyRange: '$1,000 - $15,000'
        },
        {
            id: 'recordkeeping',
            name: 'Record Keeping Compliance',
            weight: 0.15,
            penaltyRange: '$500 - $5,000'
        },
        {
            id: 'tax',
            name: 'Tax Compliance Risk',
            weight: 0.20,
            penaltyRange: '$2,000 - $25,000'
        },
        {
            id: 'wageandhour',
            name: 'Wage & Hour Compliance',
            weight: 0.05,
            penaltyRange: '$1,000 - $10,000'
        }
    ],
    
    questions: [
        // Section 1: Employee Classification Risk
        {
            id: 1,
            section: 'classification',
            text: 'How do you currently classify your workers?',
            type: 'single',
            answers: [
                { text: 'All employees (W-2 only)', value: 1 },
                { text: 'Mix of employees and contractors', value: 3 },
                { text: 'Mostly contractors (1099)', value: 8 },
                { text: "I'm not sure of the difference", value: 7 },
                { text: 'We use whatever saves on taxes', value: 10 }
            ],
            branching: {
                condition: (answer) => answer.value > 1,
                nextQuestion: 2,
                skipTo: 3
            }
        },
        {
            id: 2,
            section: 'classification',
            text: 'For workers you classify as contractors, do they:',
            type: 'multi',
            answers: [
                { text: 'Set their own hours?', selectedValue: 0, unselectedValue: 3 },
                { text: 'Use their own tools/equipment?', selectedValue: 0, unselectedValue: 4 },
                { text: 'Work for other companies?', selectedValue: 0, unselectedValue: 5 },
                { text: 'Get trained by you on specific procedures?', selectedValue: 3, unselectedValue: 0 },
                { text: 'Work exclusively for your business?', selectedValue: 6, unselectedValue: 0 }
            ]
        },
        
        // Section 2: Overtime Compliance Risk
        {
            id: 3,
            section: 'overtime',
            text: 'How do you handle overtime calculations?',
            type: 'single',
            answers: [
                { text: 'Automated system calculates everything', value: 1 },
                { text: 'I manually calculate using federal rules', value: 3 },
                { text: 'I use state-specific overtime rules', value: 2 },
                { text: 'Overtime? We try to avoid it', value: 7 },
                { text: "I'm not sure what the rules are", value: 9 }
            ]
        },
        {
            id: 4,
            section: 'overtime',
            text: "Do you know your state's specific overtime requirements?",
            type: 'single',
            answers: [
                { text: 'Yes, and we follow them exactly', value: 1 },
                { text: "I think we're compliant", value: 4 },
                { text: 'We just use federal rules', value: 6 },
                { text: 'What state requirements?', value: 8 }
            ]
        },
        
        // Section 3: Record Keeping Compliance
        {
            id: 5,
            section: 'recordkeeping',
            text: 'How do you maintain employee records?',
            type: 'single',
            answers: [
                { text: 'Digital system with automatic retention', value: 1 },
                { text: 'Mix of digital and paper files', value: 3 },
                { text: 'Mostly paper files in filing cabinets', value: 5 },
                { text: 'Spreadsheets and folders', value: 6 },
                { text: 'What records do I need to keep?', value: 9 }
            ]
        },
        {
            id: 6,
            section: 'recordkeeping',
            text: 'Do you know how long you must keep different types of employee records?',
            type: 'single',
            answers: [
                { text: 'Yes, I have a retention schedule', value: 1 },
                { text: 'I keep everything for 3 years', value: 3 },
                { text: 'I keep everything forever to be safe', value: 2 },
                { text: 'I throw things away when they get old', value: 8 },
                { text: "What's a retention schedule?", value: 9 }
            ]
        },
        
        // Section 4: Tax Compliance Risk
        {
            id: 7,
            section: 'tax',
            text: 'How do you handle payroll tax deposits?',
            type: 'single',
            answers: [
                { text: 'Automatic deposits through payroll service', value: 1 },
                { text: 'I make deposits manually when due', value: 5 },
                { text: 'I think my bookkeeper handles it', value: 6 },
                { text: 'We pay taxes quarterly', value: 8 },
                { text: "I'm not sure when deposits are due", value: 10 }
            ]
        },
        {
            id: 8,
            section: 'tax',
            text: 'Have you ever been late on a payroll tax deposit?',
            type: 'single',
            answers: [
                { text: "Never - everything's automated", value: 1 },
                { text: 'Maybe once, by accident', value: 3 },
                { text: 'Yes, a few times when busy', value: 7 },
                { text: "I don't track deposit dates closely", value: 8 },
                { text: "What's a payroll tax deposit?", value: 10 }
            ]
        },
        
        // Section 5: Wage & Hour Compliance
        {
            id: 9,
            section: 'wageandhour',
            text: 'Do you have required labor law posters displayed?',
            type: 'single',
            answers: [
                { text: 'Yes, current versions prominently displayed', value: 1 },
                { text: "I think so, but haven't checked recently", value: 3 },
                { text: 'I have some old posters up', value: 5 },
                { text: 'What posters are required?', value: 7 },
                { text: 'We work remotely so no posters needed', value: 6 }
            ]
        },
        {
            id: 10,
            section: 'wageandhour',
            text: 'How do you track employee work hours?',
            type: 'single',
            answers: [
                { text: 'Automated time tracking system', value: 1 },
                { text: 'Digital timesheets employees submit', value: 2 },
                { text: 'Paper timesheets or handwritten logs', value: 4 },
                { text: 'Employees just tell me their hours', value: 7 },
                { text: "We don't track hours for salaried employees", value: 6 }
            ]
        },
        {
            id: 11,
            section: 'wageandhour',
            text: 'How confident are you in your benefits deduction calculations?',
            type: 'single',
            answers: [
                { text: 'Very confident - system handles everything', value: 1 },
                { text: 'Mostly confident - I double-check everything', value: 2 },
                { text: 'Somewhat confident - it seems right', value: 5 },
                { text: 'Not confident - I worry about mistakes', value: 7 },
                { text: 'What benefits deductions?', value: 8 }
            ]
        },
        {
            id: 12,
            section: 'wageandhour',
            text: 'Do you provide required meal and rest breaks?',
            type: 'single',
            answers: [
                { text: 'Yes, we follow all state requirements', value: 1 },
                { text: 'We provide standard 30-minute lunch breaks', value: 3 },
                { text: 'Employees take breaks when they want', value: 5 },
                { text: "We're too busy for scheduled breaks", value: 8 },
                { text: 'What break requirements?', value: 7 }
            ]
        }
    ],
    
    riskLevels: {
        low: {
            min: 0,
            max: 25,
            label: 'Low Risk',
            message: "You're doing well, but stay vigilant",
            color: '#22C55E',
            action: 'Maintenance and monitoring'
        },
        moderate: {
            min: 26,
            max: 50,
            label: 'Moderate Risk',
            message: 'Some areas need attention',
            color: '#F59E0B',
            action: 'Targeted improvements'
        },
        high: {
            min: 51,
            max: 75,
            label: 'High Risk',
            message: 'Multiple compliance gaps identified',
            color: '#EF4444',
            action: 'Immediate attention required'
        },
        critical: {
            min: 76,
            max: 100,
            label: 'Critical Risk',
            message: 'Urgent action required',
            color: '#DC2626',
            action: 'Emergency compliance intervention'
        }
    },
    
    immediateActions: {
        classification: {
            title: 'Worker Misclassification Risk',
            risk: '73% chance of audit trigger',
            action: 'Review all contractor relationships immediately',
            deadline: 'Within 30 days'
        },
        overtime: {
            title: 'Overtime Violation Risk',
            risk: '65% chance of wage claim',
            action: 'Implement automated overtime tracking',
            deadline: 'Within 2 weeks'
        },
        tax: {
            title: 'Tax Deposit Failure Risk',
            risk: '89% chance of IRS penalties',
            action: 'Set up automated tax deposits today',
            deadline: 'Immediate'
        },
        recordkeeping: {
            title: 'Documentation Gap Risk',
            risk: '45% chance of compliance violation',
            action: 'Digitize and organize all employee records',
            deadline: 'Within 60 days'
        },
        wageandhour: {
            title: 'Labor Law Violation Risk',
            risk: '38% chance of employee complaint',
            action: 'Update policies and posters',
            deadline: 'Within 1 week'
        }
    }
};