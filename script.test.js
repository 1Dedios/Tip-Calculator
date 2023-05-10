const { calculateBill, incrementPeople, decrementPeople } = require('./script');



test('calculate bill for one', () => {
    // create result variable here
    let result = calculateBill();
    let tip = 10 / 100;
    let bill = 100 * tip;
    let totalAmount = bill;
    expect(result).toBeCloseTo(totalAmount);
})