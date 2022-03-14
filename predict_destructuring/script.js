// ---------------------------------- Problem 1 -------------------------------

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// [ randomCar ] will output Tesla because it is in the first position
// [ ,otherRandomCar ] will output Mercedes because of the one comma (second position)

// Tesla
// Mercedes


// ---------------------------------- Problem 2 -------------------------------

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
// error?  otherName is not defined
console.log(name);
console.log(otherName);


// ---------------------------------- Problem 3 -------------------------------

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
// 12345
console.log(password);
// Undefined Error (hashedPassword)
console.log(hashedPassword);


// ---------------------------------- Problem 4 -------------------------------

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // [8, 8, 3, 5, 6, 1, 67, 12, 2] ???
const [,,,second] = numbers; // [8, 2, 3, 8, 6, 1, 67, 12, 2] ???
const [,,,,,,,,third] = numbers; // [8, 2, 3, 8, 6, 1, 67, 12, 3] ???

console.log(first == second);
console.log(first == third);
// Correct answer was: false, true


// ---------------------------------- Problem 5 -------------------------------

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // value
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // 1
console.log(willThisWork); // ????
// |wTW = sK| -> |sK = lT| -> |value|???

// Correct answer form console.log(willThisWork) is 5?  Not sure how.
