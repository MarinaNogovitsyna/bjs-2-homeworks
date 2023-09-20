// Задача 1
function parseCount(num){
    if (isNaN(Number.parseFloat(num))){
        throw new Error('Невалидное значение');
    }
    return Number.parseFloat(num);
}

function validateCount(num){
    try {
        return parseCount(num);
    }
    catch(err) {
        return err;
    }
}

// Задача 2
class Triangle {
    constructor(a, b, c) {
        if (!(a + b > c && a + c > b && b + c > a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
        this.p = this.a + this.b + this.c;
        this.pp = this.p / 2;
    }

    get perimeter() {
        return this.p;
    }

    get area() {
        return +((this.pp * (this.pp - this.a) * (this.pp - this.b) * (this.pp - this.c)) ** 0.5).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}

