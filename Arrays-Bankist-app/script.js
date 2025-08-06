'use strict';

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
//   type: 'premium',
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
//   type: 'standard',
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
//   type: 'premium',
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
//   type: 'basic',
// };

// const accounts = [account1, account2, account3, account4];

// // Create Username
// // const user = 'Steven Thomas Williams';

// const allUserName = function (accs){
//     accs.forEach(acc => {
//          acc.Username = acc.owner.
//         toLowerCase().split(' ').map(user => user[0]).join('')
        
//     });
// };


// allUserName(accounts)
// console.log(accounts)

// // Coding Challenge #2

// /* 
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// const calcAverageHumanAge = function(ages){
//   const humanAge = ages.map (age => age <= 2? 2*age : 16 + 4*age)
//   const adultDog = humanAge.filter (age => age >= 18
//   )
//   console.log(humanAge) 
//   console.log(adultDog) ;

//   const avgHumanAge = adultDog.reduce ((acc, age) =>  acc + age, 0
//   )/ adultDog.length;

//   return avgHumanAge;
// }

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2)


// const z = Array.from({length: 7}, (cur, i) => Math.random(i+1));
// console.log(z);

// console.log(20 == 20);

// An array of employees working in a department.
// const employees = [
//   { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
//   { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
//   { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
//   { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
//   { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
//   { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
//   { id: 7, name: "George", departmentId: 3, salary: 5200 },
//   { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
//   { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
//   { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
// ];

// // An array of departments where employees work.

// const departments = [
//   { id: 1, name: "HR" },
//   { id: 2, name: "Engineering" },
//   { id: 3, name: "Marketing" },
//   { id: 4, name: "Sales" },
// ];

// // 1 Can you filter employees who work in the "Engineering" department?
// const engDepartEmployee = employees.filter(employee => employee.departmentId === 2);

// console.log(engDepartEmployee)

// //2 Create a new array that combines employee names and department names in the format: "Alice (HR)".

// const employeeDepartmentNames = employees.map(employee => {
//   const department = departments.find(department => department.id === employee.departmentId);
//   return `${employee.name} (${department.name})`;
// });

// console.log(employeeDepartmentNames);

// //3 Find the highest salary among employees.

// const highestSalary = Math.max(...employees.map(employee => employee.salary));

// console.log(`The highest salary is: ${highestSalary}`);

// // OR

// const highestSalaryreduce = employees.reduce((max, employee) => Math.max(max, employee.salary), 0);

// console.log(`The highest salary is: ${highestSalary}`);

// // 4 Check if there is at least one employee in the "Sales" department.
// const checkSalesEmployee = employees.some(emply => {
//   const findingSales = departments.find(department => department.name==="Sales")
//   if  (findingSales)
//     return emply.departmentId === findingSales.id;
// })

// console.log(checkSalesEmployee);

// // 5  Write a function to filter employees earning more than 6000.

// const earning6000 = employees.filter(emply => emply.salary > 6000);
// console.log(earning6000
// );

// // 6  Create an array of employee names only.

// const emplyNames = employees.map(emply => emply.name);
// console.log(emplyNames);

// // 7  Calculate the total salary of all employees using

// const totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);
// console.log(totalSalary);

// // 8   Is there any employee earning less than 5000?
// const salary5000 = employees.some (emply => emply.salary <= 5000);

// console.log(salary5000);

// // 9  Find the first employee who earns exactly 5100.
// const emply5100 = employees.find(emply => emply.salary === 5100);

// console.log(emply5100);

// // 10   Find the last employee in the "HR" department.
// const hrEmployees = employees.filter(employee => {
//   const HRdepartment = departments.find(department => department.name === "HR");
//   return employee.departmentId === HRdepartment.id
// });
// const lastHrEmployee = hrEmployees.slice(-1)[0];

// console.log(lastHrEmployee);

// // 11  Find the first employee in the "Marketing" department.
// const MREmployees = employees.filter(employee => {
//   const HRdepartment = departments.find(department => department.name === "Marketing");
//   return employee.departmentId === HRdepartment.id
// });
// const lastMREmployee = MREmployees.slice(0)[0];

// console.log(lastMREmployee);

// const firstMarketingEmployee = employees.reduce((acc, employee) => {
//   if (acc) return acc;
//   const department = departments.find(department => department.id === employee.departmentId);
//   if (department.name === "Marketing") return employee;
//   return null;
// }, null);

// console.log(firstMarketingEmployee);