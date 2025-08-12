// Quiz Questions and Scoring Data
const quizData = {
    sections: [
        {
            id: 'classification',
            name: 'Employee Misclassification',
            weight: 0.20,
            penaltyRange: '$5,000 - $50,000'
        },
        {
            id: 'tax',
            name: 'Manual Tax Deposits',
            weight: 0.20,
            penaltyRange: '$2,000 - $25,000'
        },
        {
            id: 'multistate',
            name: 'Multi-State Compliance',
            weight: 0.20,
            penaltyRange: '$1,000 - $15,000'
        },
        {
            id: 'recordkeeping',
            name: 'Outdated Record Keeping',
            weight: 0.20,
            penaltyRange: '$500 - $5,000'
        },
        {
            id: 'overtime',
            name: 'Overtime Calculation Errors',
            weight: 0.20,
            penaltyRange: '$1,000 - $15,000'
        }
    ],
    
    questions: [
        // Risk #1: Employee Misclassification
        {
            id: 1,
            section: 'classification',
            text: 'How do you classify your workers?',
            type: 'single',
            answers: [
                { text: 'All employees on payroll', value: 2 },
                { text: 'Mix of employees and contractors', value: 3 },
                { text: 'Mostly contractors', value: 4 },
                { text: 'Not sure about some workers', value: 5, criticalFlag: true }
            ]
        },
        
        // Risk #2: Manual Tax Deposits
        {
            id: 2,
            section: 'tax',
            text: 'How do you handle payroll tax deposits?',
            type: 'single',
            answers: [
                { text: 'Automated system handles everything', value: 2 },
                { text: 'I do them manually but on time', value: 3 },
                { text: 'I do them manually and sometimes late', value: 4 },
                { text: 'What tax deposits?', value: 5, criticalFlag: true }
            ]
        },
        
        // Risk #3: Multi-State Compliance Gaps
        {
            id: 3,
            section: 'multistate',
            text: 'Where do your employees work?',
            type: 'single',
            answers: [
                { text: 'Single state only', value: 2 },
                { text: '2-3 states', value: 3 },
                { text: '4+ states', value: 4 },
                { text: 'Remote workers everywhere', value: 5 }
            ]
        },
        
        // Risk #4: Outdated Record Keeping
        {
            id: 4,
            section: 'recordkeeping',
            text: 'How organized are your employee records?',
            type: 'single',
            answers: [
                { text: 'Digital system with everything backed up', value: 2 },
                { text: 'Mostly organized, some gaps', value: 3 },
                { text: 'Paper files in various places', value: 4 },
                { text: 'What records?', value: 5 }
            ]
        },
        
        // Risk #5: Overtime Calculation Errors
        {
            id: 5,
            section: 'overtime',
            text: 'How do you calculate overtime?',
            type: 'single',
            answers: [
                { text: 'Automated payroll system', value: 2 },
                { text: 'Spreadsheet formulas', value: 3 },
                { text: 'Calculator and by hand', value: 4 },
                { text: 'Best guess method', value: 5 }
            ]
        }
    ],
    
    riskLevels: {
        moderate: {
            min: 10,
            max: 13,
            label: 'Medium Audit Risk',
            message: "You're doing some things right, but several gaps could attract IRS attention",
            color: '#F59E0B',
            action: 'Time to tighten up your compliance practices'
        },
        high: {
            min: 14,
            max: 18,
            label: 'High Audit Risk',
            message: "Multiple red flags detected. You're in the danger zone for triggering an audit",
            color: '#EF4444',
            action: 'Immediate action needed on compliance gaps'
        },
        critical: {
            min: 19,
            max: 25,
            label: 'Critical Audit Risk',
            message: "You're practically guaranteed to face an audit. Every answer indicates major compliance failures",
            color: '#DC2626',
            action: 'Seek professional help immediately'
        }
    },
    
    immediateActions: {
        classification: {
            title: 'Worker Misclassification Risk',
            risk: '73% chance of audit trigger',
            action: 'Review all contractor relationships immediately',
            deadline: 'Within 30 days'
        },
        tax: {
            title: 'Tax Deposit Failure Risk',
            risk: '89% chance of IRS penalties',
            action: 'Set up automated tax deposits today',
            deadline: 'Immediate'
        },
        multistate: {
            title: 'Multi-State Compliance Risk',
            risk: '65% chance of wage law violations',
            action: 'Review state-specific requirements',
            deadline: 'Within 2 weeks'
        },
        recordkeeping: {
            title: 'Documentation Gap Risk',
            risk: '45% chance of compliance violation',
            action: 'Digitize and organize all employee records',
            deadline: 'Within 60 days'
        },
        overtime: {
            title: 'Overtime Violation Risk',
            risk: '65% chance of wage claim',
            action: 'Implement automated overtime tracking',
            deadline: 'Within 2 weeks'
        }
    }
};