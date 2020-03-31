"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) { //Кредитный калькулятор
    let bodyCredit;  //тело кредита
    let payment; //ежемесячный платеж
    let today; //текущая дата в миллисекундах
    let term; // срок кредита
    let percentForMonth; //процентная ставка(месяц)
    let totalAmount; // общая сумма кредита
    if (Number(percent)|| percent == 0);  //проверка корректности исходных параметров
    else {
        console.log("Параметр <Процентная ставка> содержит неправильное значение: " + percent);
        return;
    }
    if (Number(contribution) || contribution ==0);
    else {
        console.log(`Параметр <Первоначальный взнос> содержит неправильное значение: ` + contribution);
        return;
    }
    if (Number(amount) || amount == 0);
    else {
        console.log(`Параметр <Сумма кредита> содержит неправильное значение: ` + amount);
        return;
    }
    
    bodyCredit = amount - contribution;  //тело кредита
    today = Date.now(); //текущая дата
    term = Math.floor((date.getTime()-today)/(1000 * 3600 * 24 * 30)); //срок
    percentForMonth = (percent / 12)/100;
    payment = bodyCredit * (percentForMonth + percentForMonth / ((Math.pow((1 + percentForMonth),term) - 1)));
    totalAmount = (payment * term).toFixed(2);
    return totalAmount;
}

function getGreeting(name) {
    let greeting;  //приветствие
    name = name.trim();
    if (!String(name) || name.indexOf('undefined') >=0 || (name.indexOf('null')>= 0 )) {
    name = "Аноним";
    console.log(name);
    } 

    greeting = (`Привет, мир! Меня зовут ` + name);

    return greeting;
}