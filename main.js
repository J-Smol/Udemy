'use strict';

let money,
    time;

money = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : []
};

appData.savings = false;

let questionOne = prompt("Введите обязательную статью расходов в этом месяце", "");
let answerOne = +prompt("Во сколько обойдется?", "");
let questionTwo = prompt("Введите обязательную статью расходов в этом месяце", "");
let answerTwo = +prompt("Во сколько обойдется?", "");

appData.expenses[questionOne] = answerOne;
appData.expenses[questionTwo] = answerTwo;

alert((appData.budget - appData.expenses[answerOne] - appData.expenses[answerTwo]) / 30);