// Задача №1. Оружие
"use strict"

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.initialValue = this.durability;    // сохраняем исходное значение прочности    }
    }

    // initialValue = this.durability;


    takeDamage(damage) {  //повреждение от соперника
        if ((this.durability - damage) > 0) {
            this.durability = this.durability - damage;
        } else this.durability = 0;
        return this.durability;     //новое значение прочности
    }
    getDamage() {  //урон от удара данным оружием
        if (this.durability == 0) {
            return 0;
        }
        if (this.initialValue > this.durability * 0.3) {
            return this.attack;
        } else {
            return (this.attack / 2);
        }
    }

    isBroken() {
        if (this.durability == 0) {
            return true;
        } else return false;
    }

}


const sword = new Weapon('Старый меч', 20, 10, 1);
const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);

sword.takeDamage(5);
console.log(sword.durability);

sword.takeDamage(50);
console.log(sword.durability);

arm.takeDamage(20);
console.log(arm.durability);

bow.takeDamage(20);
console.log(bow.durability);

bow.takeDamage(200);
console.log(bow.durability);
console.log(bow.getDamage());

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1

console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false

let option = new Weapon(["Рука", "Лук", "Меч", "Нож", "Посох"], [1, 10, 25, 5, 8], [Infinity, 200, 500, 300, 300], [1, 3, 1, 1, 2]);

class ForceWeapon extends Weapon {
    constructor(newName, name, attack, durability, range) {
        super(name, attack, durability, range);
        this.newName = newName;
    }
}
let forceoption = new ForceWeapon(["Длинный лук", "Секира", "Посох Бури"], ["Лук", "Меч", "Посох"], [15, 27, 10], [200, 800, 300], [4, 1, 3]);

console.log(option);
console.log(forceoption);

//Задача №2. Переработка оружия
class Hand {
    constructor() {
        this.name = "Рука";
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1
    }
}
class Bow {
    constructor() {
        this.name = "Лук";
        this.attack = 10;
        this.durability = 200;
        this.range = 3
    }
}

class Sward {
    constructor() {
        this.name = "Меч";
        this.attack = 25;
        this.durability = 500;
        this.range = 1
    }
}

class Knife {
    constructor() {
        this.name = "Нож";
        this.attack = 5;
        this.durability = 300;
        this.range = 1
    }
}

class Staff {
    constructor() {
        this.name = "Посох";
        this.attack = 8;
        this.durability = 300;
        this.range = 2
    }
}
const newbow = new Bow();

console.log(newbow.name); // Лук
console.log(newbow.attack); // 10
console.log(newbow.durability); // 200
console.log(newbow.range); // 3

//Задача №3. Школьный журнал

let algebra = [];
let geometry = [];
let math = [];

class StudentLog {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {   //Заполняем Журнал оценками
        if (grade >= 1 && grade <= 5) {
            switch (subject) {
                case 'algebra':
                    algebra.push(grade);
                    // console.log(algebra);
                    break
                case 'geometry':
                    geometry.push(grade);
                    // console.log(geometry);
                    break
                case 'math':
                    math.push(grade);
                    // console.log(math);
                    break
            }
            return 1 + `\nЖурнал:` + `\nАлгебра ${algebra}` + `\nГеометрия ${geometry}` + `\nМатематика ${math}`
        } else if (grade > 5) {
            return (`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.\n` + 1);
        } else return (`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.\n` + 0);
    }
    getTotalAverage() {   //соединяем массивы оценок и расчитываем среднее
        let sum = 0;
        let mas = algebra.concat(geometry,math);
        if (mas.length == 0) {
            return 0
        }
        for (let i = 0; i < mas.length; i++) {
            sum = sum + mas[i];
        }
        return `Средняя оценка:  ${Math.round(sum / mas.length)}`;
    }
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) // Олег Никифоров
console.log(log.addGrade(3, 'algebra'));
// 1
console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0
console.log(log.addGrade(4, 'algebra'));
// 1
console.log(log.addGrade(5, 'geometry'));
// 1
console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
console.log(log.addGrade(4, 'geometry'));

console.log(log.getTotalAverage()); 

