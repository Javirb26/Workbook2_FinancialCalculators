

function handleOnload() {
    // grab the calculate button element by ID
    const calculateMortgageEl = document.getElementById("calculateButton");

    // attach the calculateMortgageElOnClick function as an onclick event for the button
    calculateMortgageEl.onclick = calculateMortgageElOnclick;
}

// function calculates monthly mortgage payments
function calculateMortgageElOnclick() {

    // Get input elements for loan amount, interest rate, loan length, and result inputs.
    
    const loanAmountEl = document.getElementById('number1Field');
    const interestRateEl = document.getElementById('number2Field');
    const loanLengthEl = document.getElementById('number3Field');
    const result1El = document.getElementById('answer1Field');
    const result2El = document.getElementById('answer2Field');

    // Take values from the input fields/ what is to be typed

        // PRINCIPAL LOAN AMOUNT
        const loanAmount = Number(loanAmountEl.value); // fine as total #
        // Annual interest rate converted to decimals =  in YEARS but we need change to MONTHS
        const interestRate = Number(interestRateEl.value) / 100 / 12; // need to convert yr --> month: 7.625 / 100 = 0.07625 / 12 = .00635417
        // Loan length = Year but we need to change to MONTHS
        const loanLength = Number(loanLengthEl.value) * 12; // need to convert yrs --> months: # * 12 = 180

    // CALCULATIONS

    // Calculate the monthly mortgage payment 
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanLength));
    result1El.value = monthlyPayment.toFixed(2);

    // Calculate the total interest paid over the life of the loan.
    const totalInterest = (monthlyPayment * loanLength) - loanAmount;
    result2El.value = totalInterest.toFixed(2);

}