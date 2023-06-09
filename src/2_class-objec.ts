class Animal{
    // name: string;
    // species: string;
    // sound: string;

    // constructor(name: string, species: string, sound: string){
    //     this.name = name;
    //     this.species = species;
    //     this.sound = sound;
    // }

    //  Parameter properties
    constructor(public name: string, public species: string, public sound: string){}

    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`); 
    }
}

const dog = new Animal('German Shepard', 'dog', 'Ghew Ghew');
const cat = new Animal('Marzi', 'cart', 'Meaw meaw');
dog.makeSound();
cat.makeSound();