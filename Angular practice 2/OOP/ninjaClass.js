
class Ninja {
    constructor(name, health, strength=3, speed=3){
    this.name= name;
    this.health = health;
    this.strength= strength;
    this.speed = speed;
    }
    sayName = () => {
        console.log('my name is', this.name);
    }
    showStats = () => {
        console.log('my stats are', this.health, this.strength, this.speed);
    }
}

var ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats() ;
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
