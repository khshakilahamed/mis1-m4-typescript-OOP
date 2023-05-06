class Person2 {
    takeNap(): void {
        console.log('I am sleeping 8 hours per day');
    }
}

class Student2 extends Person2 {
    takeNap(): void {
        console.log(`I am sleeping 10 hours per day`);
    }
}

class Developer extends Person2 {
    takeNap(): void {
        console.log(`I am sleeping 5 hours per day`);
    }
}

function getNap(param: Person2) {
    param.takeNap();
}

const person2 = new Person2();
const person3 = new Student2();
const person4 = new Developer();

getNap(person2);
getNap(person3);
getNap(person4);


class Shape {
    getArea(): number {
        return 0;
    }
}

// circle area -> pi * r * r
class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}


class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.width * this.height;
    }
}


function getAreaOfShape(param: Shape) {
    console.log(param.getArea());
}

getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 20));;

