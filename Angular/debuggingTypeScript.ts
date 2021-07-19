// 1

var myString: any;
// I can assign myString like this:
myString = "Bee stinger";
myString = 9;


// 2
function sayHello(name: string|number){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello(9));

 function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones"));

 // 3
 function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = ""
    if(middleName == undefined)
    {
        fullName = `${firstName} ${lastName}`;
    }
    else
        fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));

// 4
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));
 
 // 5. Classes and function parameters
class Ninja {
	fullName: string;
	constructor(
		public firstName: string,
		public lastName: string){
			this.fullName = `${firstName} ${lastName}`;
	}
	debug(){
		console.log("Console.log() is my friend.")
	}
}
const shane = new Ninja("Shane", "Thompson");
const turing = new Ninja("Alan", "Turing")
function study(programmer: Ninja){
	return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
console.log(study(turing));
// need to set name in class call, fix from dict

// 6.
var increment = (x:number) => x + 1;
console.log(increment(3));
var square = (x:number) => x * x;
console.log(square(4));
var multiply = (x:number, y:number) => x * y;
var math = (x:number, y:number) => {  
	let sum = x + y;
	let product = x * y;
	let difference = Math.abs(x-y);
	return [sum, product, difference];
}
// set var types, fix function calls

// 7.
class Elephant {
	constructor(public age: number){}
	birthday = () => {
		this.age++;
	}
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
	console.log(`Babar's age is ${babar.age}.`)
	}, 2000)
// Fix function call from word