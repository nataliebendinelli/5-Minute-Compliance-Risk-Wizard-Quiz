// Quiz Questions and Scoring Data
const quizData = {
    sections: [
        {
            id: 'classification',
            name: 'Employee Classification',
            weight: 0.20,
            penaltyRange: '$5,000 - $50,000'
        },
        {
            id: 'tax',
            name: 'Payroll Tax Deposits',
            weight: 0.20,
            penaltyRange: '$2,000 - $25,000'
        },
        {
            id: 'multistate',
            name: 'Multi-State Operations',
            weight: 0.20,
            penaltyRange: '$1,000 - $15,000'
        },
        {
            id: 'recordkeeping',
            name: 'Record Keeping',
            weight: 0.20,
            penaltyRange: '$500 - $5,000'
        },
        {
            id: 'overtime',
            name: 'Overtime Calculations',
            weight: 0.20,
            penaltyRange: '$1,000 - $15,000'
        }
    ],
    
    questions: [
        // Question 1: Employee Classification
        {
            id: 1,
            section: 'classification',
            text: 'Do you have any workers who set their own schedules, use their own tools, or work for other companies while working for you?',
            type: 'single',
            answers: [
                { text: 'No, all workers are clearly employees', value: 2 },
                { text: 'Yes, 1-2 workers', value: 3 },
                { text: 'Yes, several workers', value: 4 }
            ]
        },
        
        // Question 2: Payroll Tax Deposits
        {
            id: 2,
            section: 'tax',
            text: 'How do you currently handle your payroll tax deposits?',
            type: 'single',
            answers: [
                { text: 'Fully automated payroll service handles everything', value: 2 },
                { text: 'Semi-automated with manual oversight', value: 3 },
                { text: 'Manual calculations and deposits', value: 4 }
            ]
        },
        
        // Question 3: Multi-State Operations
        {
            id: 3,
            section: 'multistate',
            text: 'Do you have employees working in multiple states?',
            type: 'single',
            answers: [
                { text: 'No, single state only', value: 2 },
                { text: 'Yes, in 2 states', value: 3 },
                { text: 'Yes, in 3+ states with different wage laws', value: 4 }
            ]
        },
        
        // Question 4: Record Keeping
        {
            id: 4,
            section: 'recordkeeping',
            text: 'Where do you store employee time records, pay stubs, and tax documents?',
            type: 'single',
            answers: [
                { text: 'Organized digital system with backup', value: 2 },
                { text: 'Mix of digital and paper, not centralized', value: 3 },
                { text: 'Paper files or basic computer folders', value: 4 }
            ]
        },
        
        // Question 5: Overtime Calculations
        {
            id: 5,
            section: 'overtime',
            text: 'How do you calculate overtime pay for employees?',
            type: 'single',
            answers: [
                { text: 'Automated payroll software', value: 2 },
                { text: 'Spreadsheet templates', value: 3 },
                { text: 'Manual calculations each pay period', value: 4 }
            ]
        }
    ],
    
    riskLevels: {
        moderate: {
            min: 10,
            max: 14,
            label: 'Medium Risk',
            message: 'You could be at risk of a $25,000 audit',
            color: '#F59E0B',
            action: 'Targeted improvements recommended'
        },
        high: {
            min: 15,
            max: 20,
            label: 'High Risk',
            message: 'You could be at risk of a $50,000+ audit',
            color: '#EF4444',
            action: 'Immediate attention required'
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