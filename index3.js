const readline = require("readline-sync");








function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // PAYE Calculation
    let taxableIncome = grossSalary;
    let paye = 0;

    if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        paye = (24000 * 0.1) + ((taxableIncome - 24000) * 0.25);
    } else if (taxableIncome <= 500000) {
        paye = (24000 * 0.1) + (8333 * 0.25) + ((taxableIncome - 32333) * 0.3);
    } else if (taxableIncome <= 800000) {
        paye = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + ((taxableIncome - 500000) * 0.325);
    } else {
        paye = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325) + ((taxableIncome - 800000) * 0.35);
    }

    // NHIF Deductions
    let nhif = 0;
    if (grossSalary <= 5999) nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500;
    else if (grossSalary <= 19999) nhif = 600;
    else if (grossSalary <= 24999) nhif = 750;
    else if (grossSalary <= 29999) nhif = 850;
    else if (grossSalary <= 34999) nhif = 900;
    else if (grossSalary <= 39999) nhif = 950;
    else if (grossSalary <= 44999) nhif = 1000;
    else if (grossSalary <= 49999) nhif = 1100;
    else if (grossSalary <= 59999) nhif = 1200;
    else if (grossSalary <= 69999) nhif = 1300;
    else if (grossSalary <= 79999) nhif = 1400;
    else if (grossSalary <= 89999) nhif = 1500;
    else if (grossSalary <= 99999) nhif = 1600;
    else nhif = 1700;

    // NSSF Deductions
    const nssfTier1 = Math.min(grossSalary, 7000) * 0.06;
    const nssfTier2 = Math.max(0, Math.min(grossSalary - 7000, 29000)) * 0.06;
    const nssf = nssfTier1 + nssfTier2;

    // Net Salary
    const deductions = paye + nhif + nssf;
    const netSalary = grossSalary - deductions;

    console.log(`your net salary is ${netSalary}`);
}


const basicSalary = parseFloat(readline.question("enter basic salary: ")); 
const benefits = parseFloat(readline.question("enter benefits: ")); 
const netSalary = calculateNetSalary(basicSalary, benefits);