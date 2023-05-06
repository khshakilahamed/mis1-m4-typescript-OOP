class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string {
        return `This ${this.name} will sleep for ${hours}`;
    }
}

class Student extends Person {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
}

class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClass(numberOfClass: number): string {
        return `This ${this.name} will take ${numberOfClass}`;
    }
}


const student1 = new Student('Mr. X', 15, 'Uganda');
// student1.

const teacher1 = new Teacher('Mr. Y', 34, 'BD', 'Lecturer');
// teacher1. 