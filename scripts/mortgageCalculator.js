

function handleOnload() {
    const calculateMortgageEl = document.getElementById("calculateButton");

    calculateMortgageEl.onclick = calculateMortgageElOnclick;
}

// mortgage calculator
function calculateMortgageElOnclick() {

    // Loan amount
    const numberOneInputEl = document.getElementById('number1Field');
    // Interest rate per year
    const numberTwoInputEl = document.getElementById('number2Field');
    // Loan length
    const numberThreeInputEl = document.getElementById('number3Field');
    // blank answer inputs

        // Monthly payment
        const answerOneInputEl = document.getElementById('answer1Field');
        // Total interest
        const answerTwoInputEl = document.getElementById('answer2Field');

    // CALCULATION 
    // PRINCIPAL LOAN AMOUNT
    const numberOne = Number(numberOneInputEl.value); // fine as total #

    // interest rate =  in YEARS but we need change to MONTHS
    const numberTwo = Number(numberTwoInputEl.value) / 100 / 12; // need to convert yr --> month: 7.625 / 100 = 0.07625 / 12 = .00635417

    // Loan length = Year but we need to change to MONTHS
    const numberThree = Number(numberThreeInputEl.value) * 12; // need to convert yrs --> months: # * 12 = 180


    const monthlyPayment = (numberOne * numberTwo) / (1 - Math.pow(1 + numberTwo, -numberThree));
    answerOneInputEl.value = monthlyPayment.toFixed(2);

    const totalInterest = (monthlyPayment * numberThree) - numberOne;
    answerTwoInputEl.value = totalInterest.toFixed(2);

}