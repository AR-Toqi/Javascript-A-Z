// // Function to cut fruit into pieces

// /**
//  * Multiplies the number of fruits by 4 to get the number of pieces.
//  * @param {number} fruit - The number of whole fruits.
//  * @returns {number} - The number of fruit pieces.
//  */
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// // Challenge 1

// // const calcAverage = (a, b, c) => (a+b+c)/3
// // console.log (3,4,5);

// // // Data 1
// // let scoreDolphins = calcAverage (44, 23, 71);
// // let scoreKoalas = calcAverage (65, 34, 27);
// // console.log(scoreDolphins, scoreKoalas);

// // const checkWinner = (avgDolphins, avgKoalas) => {
// //     if (avgDolphins >= avgKoalas*2){
// //         console.log (`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
// //     }else if (avgKoalas >= avgDolphins*2){
// //         console.log (`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
// //     }else{
// //         console.log('no one wins!');
// //     }
// // }
// // checkWinner(scoreDolphins, scoreKoalas);

// // // Data 2
// // scoreDolphins = calcAverage(85, 54, 41);
// // scoreKoalas = calcAverage(23, 34, 27);
// // console.log(scoreDolphins, scoreKoalas);
// // checkWinner(scoreDolphins, scoreKoalas);

// // Challenge 2

// const calcTip = (a) => {
//       const tip = a >= 50 && a <= 300 ?  (a*0.15): (a*0.2)
//       return (tip);
// }
// calcTip(100);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

// // Challenge 2
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
    
//     calcBMI: function (){
//         this.bmi = this.mass/(this.height*this.height);
//         return this.bmi
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
    
//     calcBMI: function (){
//         this.bmi = this.mass/(this.height*this.height);
//         return this.bmi
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }

// Challenge 3
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total= [];

// for (let i = 0; i < bills.length; i++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip)
//    total.push(tip + bills[i])
// }

// console.log (tips, total);

// // bonus

// const calcAverage = arr => {
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i]  //total value
// }
// return sum/arr.length
// }

// const avg = calcAverage([2,4,6,8]);
// console.log(avg);

// finding largest number
const a =30;
const b = 15;
const c= 9;

 if (a>b && a>c){
  console.log ('a is the largest');
 }else if (b>c && b>a){
  console.log ('b is the largest');
 }else {
  console.log ('c is the largest')
 }