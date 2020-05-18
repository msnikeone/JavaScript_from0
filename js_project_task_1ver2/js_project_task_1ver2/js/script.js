' use strict ';
let money = prompt(" Введіть суму за місяць"),
    time = prompt("Введіть дату рр-мм-дд");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
let a1 = prompt("Обов'язкові витрати"),
    a2 = prompt("Яка ціна"),
    a3 = prompt("Обов'язкові витрати"),
    a4 = prompt("Яка ціна");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;


alert(money/30);

