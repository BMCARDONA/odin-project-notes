// Helpful links: 
// http://adripofjavascript.com/blog/drips/an-introduction-to-iffes-immediately-invoked-function-expressions.html
// https://www.youtube.com/watch?v=wfMtDGfHWpA


// FACTORY FUNCTION
// Some people believe that factory functions (with composition) are better than classes (with inheritance).
// For an "is-a" relationship, people argue that you should use inheritance; for a "has-a" nature, people argue that you should use factory functions.
// However, some people think that you can just use factory functions and composition.
const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  return { name, age, sayHello };
};
const jeff = personFactory('jeff', 27);
console.log(jeff.name); // 'jeff'
jeff.sayHello(); // calls the function and logs 'hello!'


// CONSTRUCTOR
const Person = function(name, age) {
  this.sayHello = () => console.log('hello!');
  this.name = name;
  this.age = age;
};
const jeff2 = new Person('jeff2', 27);


// MODULE
const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();
calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476


// VAR IS FUNCTION SCOPED , LET AND CONST ARE BLOCK SCOPED


// FACTORY FUNCTION
const FactoryFunction = string => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString()}----`);
  return { printString };
};
const taco = FactoryFunction('taco');
taco.printString(); // this prints "----TACO----"


// The concept of CLOSURE is the idea that functions retain their scope even if they are passed around and called outside of that scope. In this case, printString has access to everything inside of FactoryFunction, even if it gets called outside of that function. (i.e., a closure gives you access to an outer function's scope from an inner function.)


const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};
const counter = counterCreator();
counter(); // 0
counter(); // 1
counter(); // 2
counter(); // 3
// As above, the function "counter" is a closure. It has access to the variable count and can both print and increment it, but there is no other way for our program to access that variable.


const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return {sayName};
}
const Nerd = (name) => {
  // simply create a person and pull out the sayName function with destructuring assignment syntax!
  const {sayName} = Person(name);
  const doSomethingNerdy = () => console.log('nerd stuff');
  return {sayName, doSomethingNerdy};
}

const jeff = Nerd('jeff');
jeff.sayName(); // my name is jeff
jeff.doSomethingNerdy(); // nerd stuff

// The primary reason to use an IIFE is to obtain data privacy. Because JavaScript's var scopes variables to their containing function, any variables declared within the IIFE cannot be accessed by the outside world.

(function () {
    var foo = "bar";

    // Outputs: "bar"
    console.log(foo);
})();
// ReferenceError: foo is not defined
console.log(foo);

// Of course, you could explicitly name and then invoke a function to achieve the same ends.
function myImmediateFunction () {
  var foo = "bar";

  // Outputs: "bar"
  console.log(foo);
}

myImmediateFunction();

// ReferenceError: foo is not defined
console.log(foo);
// However, this approach has a few downsides. First, it unnecessarily takes up a name in the global namespace, increasing the possibility of name collisions. Second, the intentions of this code aren't as self-documenting as an IIFE. And third, because it is named and isn't self-documenting it might accidentally be invoked more than once.


// It is worth pointing out that you can easily pass arguments into the IIFE as well.
var foo = "foo";
(function (innerFoo) {
    // Outputs: "foo"
    console.log(innerFoo);
})(foo);

// MODULE PATTERN
var myModule = (function() {
  'use strict';

  var _privateProperty = 'Hello World';
  var publicProperty = 'I am a public property';

  function _privateMethod() {
    console.log(_privateProperty);
  }

  function publicMethod() {
    _privateMethod();
  }

  return {
    publicMethod: publicMethod,
    publicProperty: publicProperty
  };
})();

myModule.publicMethod(); // outputs 'Hello World'
console.log(myModule.publicProperty); // outputs 'I am a public property'
console.log(myModule._privateProperty); // is undefined protected by the module closure
myModule._privateMethod(); // is TypeError protected by the module closure