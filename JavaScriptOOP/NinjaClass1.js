// Create a new object constructor called Ninja with the following attributes:

// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// Ninja should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 Health to the Ninja

// Ninja Class II

// Add a new method to Ninja called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. Your .punch() should display a console message like the below example.

// Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and  .punch() will take another Ninja instance.

function Ninja(name, health=100) {
	this.name = name;
	this.health = health;
	var speed = 3;
	var strength = 3;
	self = this;

	this.sayName = function() {
		console.log(`My name is: ${this.name}`)
	}

	this.showStats = function() {
		console.log(`Name: ${this.name}, health: ${this.health}, Speed: ${speed}, Strength: ${strength}`)
	}
}

Ninja.prototype.drinkSake = function() {
	this.health += 10;
}

var james = new Ninja('James Klock', 100)
var hugh = new Ninja('Hugh Jackman', 120)
james.sayName()
james.drinkSake()
james.showStats()
hugh.sayName()
hugh.showStats()