//below I am declaring the variables in order to acquire the value in the functions below

const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numbrOfPeople = document.getElementById('numberOfPeople')
//the original code above was const numberOfPeople = document.getElementById('numberOfPeople'). 
// Obvious problem because you cannot re-declare the scoped variable. 
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// gets the number of people from the number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerHTML);
//same issue in the line above as described on line 4. Cannot redeclare the scoped variable.



// increases amt of people on the people component
const increasePeople = () => {
    numbrOfPeople += 1;

    numberOfPeopleDiv.innerHTML = numbrOfPeople;

    caclulateBill()

}


// decreases amt of people on the people component

const decreasePeople = () => {
    if (numbrOfPeople <= 1) {
        return
    } else {
        numbrOfPeople -= 1

        numberOfPeopleDiv.innerHTML = numbrOfPeople;

        caclulateBill()
    }

}

//below is the code that will run when you enter inputs
caclulateBill = () => {
    const bill = Number(billInput.value)


    const tipPercent = Number(billInput.value) / 100;

    const tipAmount = bill * tipPercent

    const total = tipAmount + bill;

    const perPersonTotal = total / numbrOfPeople;

    persPersonTotalDiv.innerHTML = `${perPersonTotal.toFixed(2)}`

}

