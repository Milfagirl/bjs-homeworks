//Задача №1. Форматтер чисел
const parseCount = (value) => {
    const parsed = Number.parseInt(value, 10);
    if (isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    return parsed
}

const validateCount = (value) => {
    try {
        return parseCount(value)
    } catch (error) {
        return error
    }

}

//Задача №2. Треугольник
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
            const e = new Error("Треугольник с такими сторонами не существует");
            throw e; 
        }
    }
   
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        const p = this.getPerimeter() / 2;
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(s.toFixed(3));
    }
}

const getTriangle = (a, b, c) => {
    try {
        return new Triangle(a, b, c);
    } catch  {
        class CheckTriangle  {
            getPerimeter() {
                return ("Ошибка! Неправильный треугольник");
            }
            getArea() {
                return("Ошибка! Неправильный треугольник");
            }
        }
        return new CheckTriangle;
    }
}