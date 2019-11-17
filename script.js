"use strict";
let money, time;

function start() {
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
        time = prompt("Введите дату в формате YYYY-MM-DD", "1070 - 01 - 01");
    }
}
start();

//var time = new Date(time1);
//var curr_date = time.getDate();
//var curr_month = time.getMonth() + 1;
//var curr_year = time.getFullYear();
let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    ncome: [],
    savings: true
};


function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", "");
        let b = +prompt("Во сколько обойдется?", "");
        if (
            typeof a === "string" &&
            typeof a != null &&
            // eslint-disable-next-line valid-typeof
            typeof b != null &&
            a != "" &&
            b != "" &&
            a.length < 50
        ) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseExpenses();


appData.MoneyPerDay = (appData.budget / 30).toFixed(1);

alert("Ежедневный бюджет: " + appData.MoneyPerDay);

if (appData.MoneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.MoneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

function checkSavings(){
    if(appData.savings == true){
        let save = +prompt("Какова сумма ваших накоплений?", "");
        let percent = +prompt("Какова сумма ваших накоплений?", "");

        appData.monthIncome = save/100/12*percent;
        alert("Доход с вашего дерозита : "+appData.monthIncome);
    }

}    
checkSavings();