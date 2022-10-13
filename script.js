const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const amtOfPeople = document.getElementById('numberOfPeople')

const perPersonTotal = document.getElementById('perPersonTotal')


let numberOfPeople = Number(people.innerText);



calculateBill = () => {
    const bill = (billInput.value)
    const tipPercent = (billInput.value) / 100;
    const tipAmount = bill * tipPercent;
    const total = tipAmount + bill;
    const perPersonTotal = total / numberOfPeople;

    bill * tipPercent;

    tipAmount + bill;

    total / perPersonTotal;

    perPersonTotal.innerText = `${perPersonTotal.toFixed(2)}`;


}



const increasePeople = () => {

    amtOfPeople += 1;

    caclulateBill()
}



const decreasePeople = () => {

    if (numberOfPeople <= 1) {
        return
    } else {
        amtOfPeople -= 1
        caclulateBill()
        amtOfPeople.innerText = numberOfPeople;
    }

}
