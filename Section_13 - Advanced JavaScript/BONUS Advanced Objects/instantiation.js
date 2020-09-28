// reference type
let object1 = { value: 10 };
let object2 = object1; // references object1 'box' with 10 inside it exactly so they are the same
let object3 = { value: 10 }; // brackets mean a new 'object box' was created with 10 inside so it's not the same as first 2

object1 === object2; // true
object1 === object3; // false
object1.value = 15;
object2.value // 15
object3.value // 10

[] === []; // false

// context vtells us where we are inside an object
console.log(this === window); // true

function a() {
	console.log(this); // this is the window
}

const object4 = {
	a: function() {
		console.log(this); // now this is the object4
	}
}

// instantiation - making a copy of an object and reuse it
class Player {
	constructor(name, type) { // each time we create a player, constructor gets run and the player will have a name and a type
		this.name = name;
		this.type = type;
	}

	introduce() { // every player will also be able to introduce themselves
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
	}
}

class Wizard extends Player { // creating a wizard player, now we can add on top of whatever the Player has
	constructor(name, type) { // every class always needs a constructor
		super(name, type) // have to call this every time we extend a class
	}
	play() {
		console.log(`WEEEEEEEE I'm a ${this.type}`)
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
