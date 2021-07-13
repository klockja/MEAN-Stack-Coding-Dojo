class Ninja {
	constructor (name, health = 100) 
    {
		this.name = name;
		this.health = health;
		this.speed = 3;
		this.strength = 3;
	}

	sayName() 
    {
		console.log(`My name is: ${this.name}`);
	}

	showStats() 
    {
		console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
	}

	drinkSake() 
    {
		this.health += 10;
	}
}

class Sensei extends Ninja 
{
	constructor(name, health = 200) {
		super(name, health);
		this.wisdom = 10;
	}

	speakWisdom() {
		this.drinkSake();
		console.log("What one programmer can do in one month, two programmers can do in two months.");
	}
}

var james = new Ninja('James Klock', 100)
var hugh = new Ninja('Hugh Jackman', 120)
james.sayName()
james.drinkSake()
james.showStats()
hugh.showStats()

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();