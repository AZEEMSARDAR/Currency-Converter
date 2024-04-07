#! usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    PKR: 277.54,
    INR: 83.30,
    CAD: 1.36,
    AUD: 1.55,
    NZD: 1.66,
    KWD: 0.31,
    BHD: 0.38,
    JPY: 151.61,
    CNH: 7.24764,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'PKR', 'INR', 'CAD', 'AUD', 'NZD', 'KWD', 'BHD', 'JPY', 'CNH']
    },
    {
        name: "to",
        message: "Enter to currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'PKR', 'INR', 'CAD', 'AUD', 'NZD', 'KWD', 'BHD', 'JPY', 'CNH']
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from]; // exchange rate
let toAmount = currency[user_answer.to]; // exchange rate
let amount = user_answer.amount;
let baseCurrency = amount / fromAmount; // USD base currency 
let convertedAmount = baseCurrency * toAmount;
console.log(convertedAmount);
