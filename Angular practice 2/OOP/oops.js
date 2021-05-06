// function UserFactory(){
//     return {name:bob}
// }
// let bob = UserFactory()

//we want to make a function an object
// function User(){ //arrow functions dont work
//     this.name = 'bob'
// }
// let bob = new User()

// console.log(bob);

//class objects ES6

//classes do not have parameters but constructors do
class User{
    constructor(name, power){
        this.name = name
        this.power = power
    }
    speak = () => {
        console.log('hello my name is', this.name, 'my power is', this.power);
    }
}
// let bob = new User('Jill', 'fire')
// console.log(bob)


//inheritance
class Admin extends User{ //class creates object
    constructor(name, power){
        super(name, power) //goes to get stuff from parent class before risk of override
        this.permissions = 'admin'
    }
}

let bob = new User('Jill', 'fire')
// console.log(bob)

let carl = new Admin('carl', 'Ice')
// console.log(carl);

bob.speak()
carl.speak()


console.log('********************');
function Person(name, age) {
    var privateVariable = "This variable is private";
    var privateMethod = function() {
        console.log('what is this' + this);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        // we can access our attributes within the constructor!
        console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
        privateMethod();
    }
}
var joe = new Person("Joe", 23);
joe.greet();
