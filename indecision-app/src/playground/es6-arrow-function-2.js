// arguments object - no longer bound with arrow functions

const add = (a, b) => {
//    console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

//this keyword - no longer bound

const user = {
    name: 'Krzysztof',
    cities: ['Lezajsk', 'Giedlarowa', 'Wroclaw'],
    printPlacesLived() {
        return this.cities.map((city) =>  this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    numbers: [3, 7, 9, 21],
    multiplyBy: 6,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};


console.log(multiplier.multiply())