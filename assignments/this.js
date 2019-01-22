/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding --- when using this and it isn't defined, it will default to the Global scope. 
* 2. Implicit Binding -- this is used with methods of objects. when used it will refer to whatever object is to the left of the dot. 
* 3. Explicit Binding -- will use call, apply and/or bind;
* 4. New Binding--used with constructors The constructor method is a special method
for creating and initializing an object created with a class.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function rock () {
    console.log(this);
}
rock();

// Principle 2

// code example for Implicit Binding
const rock = {
    name: 'Quartz',
    color: 'Rose',
    like: function () {
        console.log(`I like ${this.color} ${this.name}`);
    }
}
// hobbit is "this" for the cook method
rock.like();

// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    this.greeter = greeter;
    this.greeting = 'Hello';
    this.speak = function () {
        console.log(`${this.greeting}, ${this.greeter}`)
    }
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

console.log(jerry);

jerry.speak();
newman.speak();

// Principle 4

// code example for Explicit Binding
const rock = {
    name: 'Amethyst'
}

const uses = ['Meditation', 'Relieving Anxiety', 'Protection'];

function rockProperties(uses1, uses2, uses3) {
    "use strict";
    console.log(`${this.name}, can be used to aid in ${uses1}, ${uses2}, and  ${uses3}`);
}
rockProperties.call(rock, uses);