

function handleOnload() {
    // grab the calculate button element
    const calculateOrdinaryAnnuity = document.getElementById("calculateButton");

    // attach the ordinaryAnnuityOnclick function as an onclick event for the button
    calculateOrdinaryAnnuity.onclick = ordinaryAnnuityOnclick;
}

// function calculates the present value of ordinary annuity and prints the results 
function ordinaryAnnuityOnclick() {
    // grab input element for Payment amount, Interest rate, Years, and Present Value.
    const paymentAmountEl = document.getElementById("paymentField");
    const interestRateEl = document.getElementById("interestRateField");
    const numberOfYearsEl = document.getElementById("numberOfYearsField");
    const presentValueEl = document.getElementById("presentValueField");

    // Take values from the input fields/ what is to be typed

        // Payment Amount
        const paymentAmount = paymentAmountEl.value;
        // Interest rate converted to a monthly decimal
        const interestRate = interestRateEl.value / 100 / 12;
        // Years converted to months.
        const years = numberOfYearsEl.value * 12;

    // Calculate the present value using the formula for an ordinary annuity
    const presentValue = paymentAmount * (1 - (1 + interestRate) ** -years) / interestRate;

    //  Update Present value input field with the calculated value rounded 2 decimals w/ toFixed(2)
    presentValueEl.value = presentValue.toFixed(2);
    
}