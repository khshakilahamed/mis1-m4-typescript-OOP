// type guard or, type  narrowing

// keyof guard
type AlphaNumerics = string | number;

function add(param1: AlphaNumerics, param2: AlphaNumerics): AlphaNumerics {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
}

add('1', '2');
add(1, 2);


// in guard --> we use 'in' for object
type NormalUserType = {
    name: string;
}

type AdminUserType = {
    name: string;
    role: 'admin';
}

function getUser(user: NormalUserType | AdminUserType) {
    if ('role' in user) {
        return `I am an admin and my role is ${user.role}`;
    } else {
        return 'I am a normal user';
    }
}

const normalUser1: NormalUserType = { name: 'Mr. Kallu' };
const adminUser1: AdminUserType = { name: 'Mr. Gallu', role: 'admin' };

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));



// instance of guard
class Animal2 {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log('I am making sound');
    }
}

class Dog extends Animal2 {
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeBark() {
        console.log("I am Barking");
    }
}

class Cat extends Animal2 {
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeMeaw() {
        console.log("I am Meawing");
    }
}

function isDog(animal: Animal2): animal is Dog{
    return animal  instanceof Dog;
}

function isCat(animal: Animal2): animal is Cat{
    return animal  instanceof Cat;
}

function getAnimal(animal: Animal2) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMeaw();
    }
    else {
        animal.makeSound();
    }
}

// function getAnimal(animal: Animal2) {
//     if (animal instanceof Dog) {
//         animal.makeBark();
//     }
//     else if (animal instanceof Cat) {
//         animal.makeMeaw();
//     }
//     else {
//         animal.makeSound();
//     }
// }

const dog2 = new Dog('German', 'dog'); // instance -> dog
const cat2 = new Cat('Marzi', 'cat'); // instance -> cat

getAnimal(dog2);
getAnimal(cat2);