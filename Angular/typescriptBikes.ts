// Using the TypeScript Playground tool, create a new class called Bike with the following properties/attributes:

//     price
//     max_speed
//     miles

// Create 3 instances of the Bike class.

// Use the constructor() function to specify the price and max_speed of each instance (e.g. const bike1 = new Bike(200, "25mph");); also write the code so that the initial miles are set to 0 whenever a new instance is created.

// Add the following functions to this class:

//     displayInfo() - have this method display the bike's price, maximum speed, and the total miles.
//     ride() - have it display "Riding" on the screen and increase the total miles ridden by 10
//     reverse() - have it display "Reversing" on the screen and decrease the total miles ridden by 5

// Have the first instance ride three times, reverse once and have it displayInfo(). Have the second instance ride twice, reverse twice and have it displayInfo(). Have the third instance reverse three times and displayInfo().

// What would you do to prevent the instance from having negative miles?

// Which methods can return this in order to allow chaining methods?

// For assignment submission, upload a ".ts" file with the contents of the TypeScript Playground.

class Bike {
    constructor(
        public price: number,
        public max_speed: string,
        public miles: number = 0,
    ){}
    displayInfo(){
        console.log(`Price = ${this.price}, Max Speed = ${this.max_speed}, Miles = ${this.miles}`);
        return this;
    }
    ride(){
        console.log("Riding bike...");
        this.miles += 10;
        return this;
    }
    reverse(){
        console.log("Reversing...");
        if (this.miles - 5 >= 0)
        {
            this.miles -= 5;
        }
        return this;
    }
}
const bike1 = new Bike(200, "15mph");
const bike2 = new Bike(300, "25mph");
const bike3 = new Bike(400, "35mph");

bike1.ride().ride().reverse().ride().displayInfo();
bike2.ride().ride().ride().ride().displayInfo();
bike3.ride().reverse().reverse().ride().displayInfo();
