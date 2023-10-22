// CD calculator

function handleOnload() {
    const calculateCd = document.getElementById("calculateButton");
    
    calculateCd.onclick = calculateCdOnclick;
}

function calculateCdOnclick() {
    // principal amount
    const depositEl = document.getElementById("depositField");
    // interest rate 
    const interestEl = document.getElementById("interestRateField");
    // years unitl cd matures
    const yearsEL = document.getElementById("yearsField");  
    // future value of CD
    const futureValueEl = document.getElementById("futureValueField");
    // total interest accrued
    const totalInterestEl = document.getElementById("totalInterestField");
   
    // principal amount for formula
    const principal = depositEl.value;
    // interest in decimal form divided by 365 to get daily compounding
    // const apy = interestEl.value / 100 / 365;
    const apy = (1 + (interestEl.value / 100)) ** (1 / 365) - 1;
    // CD length multipied by 365 to get total days
    const years = yearsEL.value * 365;

    // formula for future value of CD
    const value = (principal * (1 + apy) ** years);
    futureValueEl.value = value.toFixed(2);

    // formula for total interest acquired 
    const total = futureValueEl.value - principal;
    totalInterestEl.value = total.toFixed(2);
}