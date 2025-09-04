// // 1. Creating First Promise
// Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
// Log the result using .then().

// const firstPromise = new Promise (function (resolve, reject){
//     resolve ("Hello, Promises!")
// });

// firstPromise.then(
//     (result) => console.log(result))

/*
    2. Reject a Promise
Create a Promise that immediately rejects with the message "Something went wrong!".
Handle the error using .catch().
*/

// const firstPromise = new Promise (function (resolve, reject){
//     reject ("Something went wrong!")
// });

// firstPromise.catch(
//     (error) => console.error(error))


/*
  3. Simulate Coin Toss
Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.
*/

// const coinToss = () => {
//     return new Promise ((resolve, reject) => {
//     setTimeout(()=> {
//         const toss = Math.floor((Math.random()*2) + 1 );
//     if (toss === 1) resolve ('Heads')
//     else 
//         resolve ('Tails')
//     })
// })};

// coinToss().then((result) => console.log(result))

/*
4. Promise with Condition
Create a function checkAge(age) that returns a Promise.
Resolve if age >= 18, reject otherwise.
*/

// const checkAge = (age) => {
//     return new Promise((resolve, reject) => {
//         if (age >= 18) resolve ("Eligible")
//         else reject ("Not eligible")
//     })
// };

// checkAge(15).then(
//     (result) => console.log(result)
// ).catch(
//     (error) => console.error(error)
// );

/*
5. Chain Promises Sequentially
Create three Promises that log:
"Step 1 done"
"Step 2 done"
"Step 3 done"
Chain them using .then().
*/

// const step1 = () =>{
//     return new Promise((resolve) =>{
//         resolve ("Step 1 done")
//     })
// };
// const step2 = () =>{
//     return new Promise((resolve) =>{
//         resolve ("Step 2 done")
//     })
// };
// const step3 = () =>{
//     return new Promise((resolve) =>{
//         resolve ("Step 3 done")
//     })
// };

// // Chaining

// step1()
// .then(
//     (result) => {
//         console.log(result)
//         return step2()}
// ).then(
//     (result) => {
//         console.log(result)
//         return step3()
//     }
// ).then (result => console.log(result));
   

/*
6. Value Transformation in Chain
Create a Promise that resolves with 5.
Chain .then() handlers to double it, then square it.
Final output should be 100.
*/

// let promise = new Promise((resolve, reject) =>{
//     resolve(5)
// });

// promise
//   .then(value => value * 2)
//   .then(value => value * value)
//   .then(value => console.log(value));  // 100

/*7. Chain with Random Rejection
First .then() resolves to "Start".
Second .then() randomly throws an error or returns "Continue".
Handle rejection gracefully.
*/

// Promise.resolve("Start")
//   .then(value => {
//     console.log(value); // Logs "Start"
//     // Randomly throw error or continue
//     if (Math.random() < 0.5) {
//       throw new Error("Random failure!");
//     } else {
//       return "Continue";
//     }
//   })
//   .then(value => {
//     console.log(value); // Logs "Continue" if no error
//   })
//   .catch(err => {
//     console.error("Caught error:", err.message); // Handles the random rejection
//   });


/*
8. Multiple then() calls on same Promise
Create a single resolved Promise.
Attach two different .then() handlers to it.
Explain that both run independently.
*/

// 

/*
9. Return New Promises in .then()
Chain multiple .then() where each returns a new Promise with a delay and logs a step like:
“First”
“Second”
“Third”
*/

// Helper function that returns a promise with a delay
// function logStep(step, delay) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(step);
//       resolve();
//     }, delay);
//   });
// }

// Chain sequentially
// logStep("First", 1000)
//   .then(() => logStep("Second", 1000))
//   .then(() => logStep("Third", 1000))
//   .then(() => console.log("All steps finished ✅"));


// Event Loop

/* 
1. What's the output of the code below?

function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function f3() {
    console.log('f3');
}

function f4() {
    console.log('f4');
}

console.log("Let's do it!");

setTimeout(function() {f1();}, 0);

f4();

setTimeout(function() {f2();}, 5000);

setTimeout(function() {f3();}, 3000);

Options are,

1. Let's do it!, f4, f1, f3, f2
2. Let's do it!, f1, f3, f2, f4
3. Let's do it!, f1, f2, f3, f4
4. Let's do it!, f1, f4, f2, f3

Ans: 1. Let's do it!, f4, f1, f3, f2
*/


/*
// 2. What's the output of the code below?

function f1() {
    console.log('f1');
}

console.log("Let's do it!");

setTimeout(function() {console.log('in settimeout');}, 0);

f1();
f1();
f1();
f1();

Options are,

1. Let's do it!, in settimeout, f1, f1, f1, f1
2. Let's do it!, f1, f1, f1, f1, in settimeout
3. Let's do it!, f1, , in settimeout, f1, f1, f1

Ans: 2. Let's do it!, f1, f1, f1, f1, in settimeout
*/


/*
// 5. Guess the output
const tom = () => console.log('Tom');

const jerry = () => console.log('Jerry');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 5000);

  new Promise((resolve, reject) =>
    resolve('should it be right after Tom, before Jerry?')
  ).then(resolve => console.log(resolve))

  jerry();
}

cartoon();

Options are,

1. Cartoon, Jerry, should it be right after Tom, before Jerry?, tom
2. Cartoon, Tom, Jerry, should it be right after Tom, before Jerry?,
3. Cartoon, Tom, should it be right after Tom, before Jerry?, Jerry
4. Error

Ans: 1. Cartoon, Jerry, should it be right after Tom, before Jerry?, tom
*/


/*
// 6. Guess the output

const tom = () => console.log('Tom');
const jerry = () => console.log('Jerry');
const doggy = () => console.log('Doggy');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 50);
  setTimeout(doggy, 30);

  new Promise((resolve, reject) =>
    resolve('I am a Promise, right after tom and doggy! Really?')
  ).then(resolve => console.log(resolve));
  new Promise((resolve, reject) =>
    resolve('I am a Promise after Promise!')
  ).then(resolve => console.log(resolve));

  jerry();
}

cartoon();

Options are,

1. Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, , Tom, Doggy
2. Cartoon, Jerry, I am a Promise after Promise!, I am a Promise, right after tom and doggy! Really?, Doggy, Tom
3. Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom
4. Cartoon, Tom, Doggy, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Jerry
5. None of the above.

Ans: 3. Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom
*/

/*
// 7. Guess the output

const f1 = () => console.log('f1');
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Boom');
}).then(result => console.log(result));

setTimeout(f2, 2000);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));

Options are,

1. f4, Boom, Sonic, Albert, f1, f3, f2
2. f4, f1, Boom, f2, Sonic, f3, Albert
3. f4, Boom, Sonic, Albert, f3, f1, f2
4. f4, Boom, Sonic, Albert, f1, f2, f3

Ans: 1. f4, Boom, Sonic, Albert, f1, f3, f2
*/


/*
// 8. Guess the output

const f1 = () => {
    console.log('f1');
    f2();
}
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));

Options are,

1. f4, f1, f2, Sonic, f3, Albert
2. f4, Sonic, Albert, f3, f1, f2
3. f4, Sonic, Albert, f1, f2, f3
4. f4, Albert, Sonic, f1, f2, f3

Ans: 3. f4, Sonic, Albert, f1, f2, f3
*/