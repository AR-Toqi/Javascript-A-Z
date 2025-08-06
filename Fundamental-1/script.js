// Challenge 1

const massMark = 78;
const massJohn = 95;
const heightMark = 1.69;
const heightJohn = 1.88;

const BMIMark = massMark/heightMark**2;
console.log(BMIMark);

const BMIJohn = massJohn/heightJohn**2;
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

// Challenge 2

if (BMIMark > BMIJohn) {
    console.log (`Marks BMI ${BMIMark} is higher than John's ${BMIJohn}`);
} else {
    console.log (`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`);
}

// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; 
n = n - 1;
console.log(n);

// Challenge 3 

const scoreDolphins = (96 + 108 + 89)/3
const scoreKoalas = (88 + 91 + 110)/3
console.log(scoreDolphins, scoreKoalas)

if (scoreDolphins > scoreKoalas){
    console.log ("Dolphins win the trophy");
}else if (scoreDolphins === scoreKoalas){
    console.log ("Both win the trophy");
}else {
    console.log ("Koalas win the trophy");
}

// Challenge 4

const bill = 275;

const tip = bill >= 50 && bill <= 300 ?  ((bill*15)/100): ((bill*20)/100)
console.log (tip);
const finalValue= bill + tip;
console.log (`The bill was ${bill}, the tip was ${tip}, and the total value ${finalValue}`)
