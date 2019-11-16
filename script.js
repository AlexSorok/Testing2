"use strict";
let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "1070 - 01 - 01");

//var time = new Date(time1);
//var curr_date = time.getDate();
//var curr_month = time.getMonth() + 1;
//var curr_year = time.getFullYear();
let appData = {
  budget: money,
  timeDate: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", "");
  let b = +prompt("Во сколько обойдется?", "");
  if (
    typeof a === "string" &&
    typeof a != null &&
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

appData.MoneyPerDay = appData.budget / 30;

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
