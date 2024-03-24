function calculateNHIFDeductions(grossPay) {
    if(grossPay < 6000) {
        return 150;
    }else if (grossPay < 8000) {
        return 300;
    }else if (grossPay < 12000){
        return 400;
    }else if (grossPay < 15000){
        return 500;
    }else if (grossPay < 20000){
        return 600;
    }else if (grossPay < 25000){
        return 750;
    }else if (grossPay < 30000){
        return 850;
    }else if (grossPay < 35000){
        return 900;
    }else if (grossPay < 40000){
        return 950;
    }else if (grossPay < 45000){
        return 1000;
    }else if (grossPay < 50000){
        return 1100;
    }else if (grossPay < 60000){
        return 1200;
    }else if (grossPay < 70000){
        return 1300;
    }else if (grossPay < 80000){
        return 1400;
    }else if (grossPay < 90000){
        return 1500;
    }else if (grossPay < 100000){
        return 1600;
    }else {
        return 1700;
    }
}
function calculateNSSFContribution(pensionablePay) {
    const tierIRate = 0.06;
    const tierIIMax = 36000;
    return Math.min(pensionablePay * tierIRate,tierIIMax * tierIRate);
}

    function calculateNetSalary(basicSalary,benefits) {
        const grossSalary = basicSalary + benefits;
        const nhifDeductions = calculateNHIFDeductions(grossSalary);
        const nssfDeductions = calculateNSSFContribution(basicSalary);
        const netSalary = grossSalary - nhifDeductions - nssfDeductions;
        return {
            grossSalary: grossSalary,
            NHIFDeduction: nhifDeductions,
            NSSFcontribution: nssfDeductions,
            netSalary: netSalary
        };
    }
const basicSalary = 50000;
const benefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary,benefits);
console.log(salaryDetails);