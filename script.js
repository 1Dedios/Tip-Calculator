//below I am declaring the variables in order to acquire the value in the functions below

const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const people = document.getElementById('numberOfPeople')
//the original code above was const numberOfPeople = document.getElementById('numberOfPeople'). 
// Obvious problem because you cannot re-declare the scoped variable. I took off the e originally but 
//still too close to the variable name of the element I am trying to get so just changed to people 
const perPersonTotal = document.getElementById('perPersonTotal')

// gets the number of people from the number of people div
let numberOfPeople = Number(people.innerText);


//below is the code that will run when you enter inputs according to the tutorial
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


// increases amt of people on the people component
const increasePeople = () => {

    people.value += 1;

    caclulateBill()
}


// decreases amt of people on the people component
const decreasePeople = () => {

    if (people <= 1) {
        return
    } else {

        people.value -= 1

        people.innerText = numbrOfPeople;

        caclulateBill()
    }

}
