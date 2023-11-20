class User {
    greeting(){
        return 'Hello';
    }
};

const gndx = new User();
console.log(gndx.greeting()); // Hello

const bebeloper = new User();
console.log(bebeloper.greeting()); // Hello

class user{
    constructor(){
        console.log('Nuevo usuario');
    }
}

const david = new user();

//this

class usuario{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //methods
    speak(){
        return 'hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(age){
        this.age = age;
    }
}

const juan = new usuario('juan', 40);

console.log(juan.greeting());
console.log(juan.uAge);
console.log(juan.uAge=5);

