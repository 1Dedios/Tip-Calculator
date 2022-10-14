const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const amtOfPeople = document.getElementById('numberOfPeople')
const totalPersons = document.getElementById('perPersonTotal')

let numberOfPeople = amtOfPeople.innerText;


calculateBill = () => {
    const bill = billInput.value;
    const tipPercent = tipInput.value / 100;
    const tipAmount = bill * tipPercent;
    const total = bill + tipAmount;
    const perPersontotal = total / numberOfPeople;

    totalPersons.innerText = `${perPersontotal}`;
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





