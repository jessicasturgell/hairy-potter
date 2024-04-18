let primaryKey = 1

const makePottery = (shape, weight, height) => {
    // Define object
    var pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey++
    };
    // Return object
    return pottery;
}

const pottery1 = makePottery("Vase", "5kg", "30cm");
console.log(pottery1);

const pottery2 = makePottery("Bowl", "1kg", "5cm");
console.log(pottery2);

const pottery3 = makePottery("Mug", "1kg", "6cm");
console.log(pottery3);

const pottery4 = makePottery("Statue", "20kg", "50cm");
console.log(pottery4);

const pottery5 = makePottery("Plate", "2kg", "1cm");
console.log(pottery5);