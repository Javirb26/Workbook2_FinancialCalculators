
function handleOnload() {
    // grab the calculate button element by ID
    const calculateCd = document.getElementById("calculateButton");
    
    // attach the calculateCdOnClick function as an onclick event for the button
    calculateCd.onclick = calculateCdOnclick;
}

// function calculates the future value of a one-time depoist / CD
function calculateCdOnclick() {
    // grab input elements for Principal amount, interest rate, years, future value of CD, and total interest accrued.
    const depositEl = document.getElementById("depositField");
    const interestEl = document.getElementById("interestRateField");
    const yearsEL = document.getElementById("yearsField");  
    const futureValueEl = document.getElementById("futureValueField");
    const totalInterestEl = document.getElementById("totalInterestField");

    // Take values from the input fields/ what is to be typed
   
        // principal amount for CD
        const principal = depositEl.value;
        // interest in decimal form divided by 365 to get daily compounding
        const apy = (1 + (interestEl.value / 100)) ** (1 / 365) - 1;
        // CD length multipied by 365 to get total days
        const years = yearsEL.value * 365;

    // CALCULATIONS

    // Calculate the future value of CD
    const value = (principal * (1 + apy) ** years);
    futureValueEl.value = value.toFixed(2);

    // Calculate the total interest accrued
    const total = futureValueEl.value - principal;
    totalInterestEl.value = total.toFixed(2);
}