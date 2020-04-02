"use strict"

function getResult(a,b,c){
    let D;
    let root = [];
    D = Math.pow(b,2) - 4 * a * c;
    if (D < 0) {
    ;       
    } else if (D == 0) {
        root[0] = (-b + Math.sqrt(D))/(2 * a);
        // console.log (D);
    } else if (D > 0) {
        root[0] = (-b + Math.sqrt(D))/(2 * a);
        // console.log(root[0]);
        root[1] = (-b - Math.sqrt(D))/(2 * a);
        // console.log(root[1]);
    }
    return root;
}

function getAverageMark(marks){
    let quantity = marks.length;
    let averageMark;
    let sum = 0;
    if (quantity == 0) {
       averageMark = 0; 
       return averageMark
    } 
    if (quantity > 5) {
        console.log('Количество оценок больше 5');
        marks = marks.slice(0,5);
        quantity = 5;
    }
    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }
    
    return sum/quantity;
}

function askDrink(name,dateOfBirthday){
    
    if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) < 18) {
    return (`Сожалею, ${name},но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }  else return (`Не желаете ли олд-фэшн, ${name} ?`);
    
}