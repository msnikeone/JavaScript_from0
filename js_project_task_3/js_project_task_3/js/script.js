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
for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt ("Во сколько обойдется?", "");

    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null &&
         a != "" && b != "" && a.length < 50) {

        console.log ("done");

        appData.expenses[a] = b;
    } else {                            
        console.log ("bad result");
        i--;
    }

} 

appData.moneyPerDay = appData.budget / 30;

alert(money/30);

