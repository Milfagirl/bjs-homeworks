//Задача №1. Форматтер чисел
const parseCount = (value) => {
    const parsed = Number.parseInt(value, 10);
    if (isNaN(parsed)) {
        throw "Невалидное значение"
    }
    return parsed
}

const validateCount = (value) => {
    try {
        parseCount(value)
    } catch (error) { console.log(error) }
    return parseCount(value)
}

//Задача №2. Треугольник
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (((this.a + this.b) < this.c) || ((this.a + this.c) < this.b) || ((this.b + this.c) < this.a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        const perimetr = this.a + this.b + this.c
        return perimetr;
    }
    getArea() {
        const p = getPerimeter() / 2;
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return s.toFixed(3);
    }
}

const getTriangle = (a, b, c) => {

    try {
        const triangle = new Triangle(a, b, c);

        return triangle;
    } catch {
        throw new Error("Ошибка! Неправильный треугольник");


    }

}



