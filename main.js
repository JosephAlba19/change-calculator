let calculateChange = function (price, cash) {
    let returnValue = cash - price;
    let change = {};

    const coinTypes = ["twenty", "ten", "five", "twoDollar", "dollar", "quarter", "dime", "nickle", "penny"];

    const coinValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

    let amount;

    for (let i = 0; i < coinValues.length; i++) {
        amount = Math.floor(returnValue / coinValues[i]);
        if (amount > 0) {
            change[coinTypes[i]] = amount;
            returnValue = returnValue % coinTypes[i];
        }
    }

    return change;
}

console.log(calculateChange(1787, 2000));

console.log(calculateChange(2623, 4000));

console.log(calculateChange(501, 1000));