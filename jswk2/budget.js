// brady corbin 10/20/2025

// 1. Declare variables for monthly income and expenses
let income = 4000;        // Monthly income
let rent = 1200;          // Monthly rent
let groceries = 400;      // Monthly groceries
let utilities = 250;      // Monthly utilities

// 2. Calculate total expenses
let totalExpenses = rent + groceries + utilities;

// 3. Calculate remaining money
let remainingMoney = income - totalExpenses;

// 4. Calculate percentages spent
let rentPercent = (rent / income) * 100;
let groceryPercent = (groceries / income) * 100;

// 5. Output results to the console
console.log("The total income was: " + income.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("Total expenses were: " + totalExpenses.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("Remaining money: " + remainingMoney.toLocaleString("en-US", { style: "currency", currency: "USD" }));

console.log("The rent total was: " + rent.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("The grocery total was: " + groceries.toLocaleString("en-US", { style: "currency", currency: "USD" }));

console.log("Percentage spent on rent: " + rentPercent.toFixed(2) + "%");
console.log("Percentage spent on groceries: " + groceryPercent.toFixed(2) + "%");