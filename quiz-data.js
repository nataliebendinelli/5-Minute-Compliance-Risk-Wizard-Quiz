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
            riskTitle: 'Risk 1: Employee Misclassification',
            riskDescription: 'Misclassifying employees as contractors can trigger IRS audits and result in penalties up to $50,000 per worker plus back taxes.',
            text: 'What type of workers do you mostly have?',
            type: 'single',
            answers: [
                { text: 'Regular full-time employees', value: 2 },
                { text: 'Mix of employees and independent contractors', value: 3 },
                { text: 'Mostly independent contractors', value: 4 },
                { text: "I'm not really sure of the difference", value: 5, criticalFlag: true }
            ]
        },
        
        // Risk #2: Manual Tax Deposits
        {
            id: 2,
            section: 'tax',
            riskTitle: 'Risk 2: Manual Tax Deposits',
            riskDescription: 'Late or incorrect tax deposits are the #1 trigger for IRS audits, with penalties accruing daily at 15% interest rates.',
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
            riskTitle: 'Risk 3: Multi-State Compliance',
            riskDescription: 'Each state has unique labor laws and tax requirements. Non-compliance can result in fines from multiple jurisdictions simultaneously.',
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
            riskTitle: 'Risk 4: Outdated Record Keeping',
            riskDescription: 'The IRS requires 3-7 years of employment records. Missing documentation during an audit results in automatic penalties.',
            text: 'How organized are your employee records?',
            type: 'single',
            answers: [
                { text: 'Digital system with everything backed up', value: 2 },
                { text: 'Digital system with no backup', value: 3 },
                { text: 'Paper files in various places', value: 4 },
                { text: 'What records?', value: 5 }
            ]
        },
        
        // Risk #5: Overtime Calculation Errors
        {
            id: 5,
            section: 'overtime',
            riskTitle: 'Risk 5: Overtime Calculation Errors',
            riskDescription: 'Incorrect overtime calculations can lead to Department of Labor investigations and employee lawsuits with triple damages.',
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
            zone: 'CAUTION ZONE!!!',
            message: "You're doing some things right, but several gaps could attract IRS attention",
            color: '#F59E0B',
            action: 'Time to tighten up your compliance practices'
        },
        high: {
            min: 14,
            max: 18,
            label: 'High Audit Risk',
            zone: 'DANGER ZONE!!!',
            message: "You are at risk for an audit. 93% of business owners with this score receive an audit!!!",
            color: '#EF4444',
            action: 'Immediate action needed on compliance gaps'
        },
        critical: {
            min: 19,
            max: 25,
            label: 'Critical Audit Risk',
            zone: 'CRITICAL ZONE!!!',
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