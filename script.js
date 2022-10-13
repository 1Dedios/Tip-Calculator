const billInput = document.getElementById('billTotalInput').value
const tipInput = document.getElementById('tipInput').value
const amtOfPeople = document.getElementById('numberOfPeople').value

calculateBill = () => {
    const tipPercent = tipInput / 100;
    const tipAmount = billInput * tipPercent;
    const total = billInput + tipAmount;
    const perPersonTotal = total / amtOfPeople;

    total / perPersonTotal;

    document.getElementById("perPersonTotal").innerText = `${perPersonTotal}`;
}



const incrementPeople = () => {

    amtOfPeople += 1;
    calculateBill();
    document.getElementById("numberOfPeople").innerText = `${numberOfPeople}`
}



const decrementPeople = () => {

    if (amtOfPeople == 1) {
        return;
    } else {
        amtOfPeople -= 1;
        document.getElementById("numberOfPeople").innerText = `${numberOfPeople}`;
        calculateBill();
    }
}





