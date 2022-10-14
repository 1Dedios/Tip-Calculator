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
}



// const incrementPeople = () => {

//     amtOfPeople += 1;

//     calculateBill();

//     document.getElementById("numberOfPeople").innerText = `${numberOfPeople}`
// }



// const decrementPeople = () => {

//     if (amtOfPeople == 1) {
//         return;
//     } else {
//         amtOfPeople -= 1;
//         document.getElementById("numberOfPeople").innerText = `${numberOfPeople}`;
//         calculateBill();
//     }
// }





