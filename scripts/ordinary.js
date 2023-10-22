function handleOnload() {
    const calculateOrdinaryAnnuity = document.getElementById("calculateButton");

    calculateOrdinaryAnnuity.onclick = ordinaryAnnuityOnclick;
}

function ordinaryAnnuityOnclick() {
    const paymentAmountEl = document.getElementById("paymentField");
    const interestRateEl = document.getElementById("interestRateField");
    const numberOfYearsEl = document.getElementById("numberOfYearsField");
    const presentValueEl = document.getElementById("presentValueField");

    const paymentAmount = paymentAmountEl.value;
    const interestRate = interestRateEl.value / 100 / 12;
    const years = numberOfYearsEl.value * 12;

    const presentValue = paymentAmount * (1 - (1 + interestRate) ** -years) / interestRate;
    presentValueEl.value = presentValue.toFixed(2);
}