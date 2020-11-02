"use strict";

var money = parseFloat(prompt("Ваш бюджет на месяц?", 0));
var time1 = prompt("Введите дату в формате YYYY-MM-DD", new Date().toISOString().slice(0, 10));

var time = new Date(time1);
var curr_date = time.getDate();
var curr_month = time.getMonth() + 1;
var curr_year = time.getFullYear();
document.write(curr_year + "-" + curr_month + "-" + curr_date);

var appData = {};

appData.buget = money;
appData.timeDate = time;
appData.Expenses = {
    answ1: 0,
    answ2: 0
};
appData.OptExpenses = {};
var income = [];
var savings = false;

while (i < 2) {
    var i;
    var answ1 = prompt("Введите обязательную статью расходов в этом месяце", "");
    var answ2 = parseFloat(prompt("Во сколько обойдется?", 0));
    alert("И еще раз");
    i++;

}