// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let x = 130;
let y = 65;
function divide(){
    return x / y;
}
console.log(divide());


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  num = 1;
  function increments(){ 
    console.log( num++ );
  }
  return increments;
};

const newCounter = counter();
newCounter();

// Example usage: const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
