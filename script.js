const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const amtOfPeople = document.getElementById('numberOfPeople')
const totalPerPersons = document.getElementById('perPersonTotal')

let numberOfPeople = amtOfPeople.innerText;


calculateBill = () => {
    const bill = Number(billInput.value);
    const tipPercent = Number(tipInput.value) / 100;
    const tipAmount = bill * tipPercent;
    const total = bill + tipAmount;
    const perPersonTotal = total / numberOfPeople;

    totalPerPersons.innerText = `$${perPersonTotal.toFixed(2)}`
};



const incrementPeople = () => {

    numberOfPeople++

    amtOfPeople.innerText = numberOfPeople

    calculateBill()


    // for (let i = 1; i <= numberOfPeople; numberOfPeople++) {

    //     document.getElementById("numberOfPeople").innerText = `${numberOfPeople}`;

}



const decrementPeople = () => {

    if (numberOfPeople == 1) {
        return;
    } else {
        numberOfPeople -= 1;
        document.getElementById("numberOfPeople").innerText = `${numberOfPeople}`;

        calculateBill();
    }
}





