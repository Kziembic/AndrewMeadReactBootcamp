//Object Destructuring

// const person = {
//     name: 'Krzysztof',
//     age: 32,
//     location: {
//         city: 'Wroclaw',
//         temp: 19
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { temp: temperature, city } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];

const [street, city, state = 'New York', zip] = address;

console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [itemName, ,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);