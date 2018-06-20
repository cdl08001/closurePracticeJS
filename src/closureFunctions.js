// greetingFactory takes in an initial string that is stored and returns a function.
// The returned function should take in the name of the person to greet and return
// a complete greeting in the form of "{greeting}, {person}"

// EXAMPLE
// var helloGreeting = greeting('Hello');
// helloGreeting('Sam'); // 'Hello, Sam'
// var holaGreeting = greeting('Hola');
// holaGreeting('Shi-Hao'); // 'Hola, Shi-Hao'

// I: String
// O: Function
// - Should take in the name of the person to greet and return a 
//   complete greeting in the form of "{greeting}, {person}"

var greetingFactory = function(greeting) {
  var currentGreeting = greeting;
  return function(name){
    return currentGreeting + ', ' + name;
  }
}

// sumCalculator takes in an initial number that is stored and returns a function
// that continues adding to the stored value. The function returned by
// sumCalculator should take as many numbers as passed in, sum them to the
// stored value, and return the new total

// EXAMPLE
// var calculatorOne = sumCalculator(25);
// var calculatorTwo = sumCalculator(10);

// calculatorOne(1, 3) // 29
// calculatorTwo() // 10
// calculatorOne(1, 1, 4, 5) // 40
// calculatorTwo() // 10

//I: number (initial value)
//O: function
//  - can take any number of arguments. Each argument should be added to the sum. 
//  - should return the new total

var sumCalculator = function(initialValue) {
  var sum = initialValue || 0;
  return function(){
    var numbersToAdd = Array.prototype.slice.call(arguments);
    numbersToAdd.forEach(function(number){
       sum += number;
    })
    return sum;
  }
}
// coinFlipTally should generate a storage object, take no arguments, and 
// return another object with two methods, makeCoinFlip and checkTally. The returned 
// object should contain no other properties

// makeCoinFlip should make a 50/50 coin flip, adding to a tally, and returning 
// 'heads' or 'tails'.
// checkTally should return a storage object containing the coin flips.

// example storage object format:
// {
//   heads: 4,
//   tails: 2
// }

// EXAMPLE

// var gameTally = coinFlipTally();
// gameTally.makeCoinFlip(); // returns 'heads' or 'tails'
// gameTally.checkTally(); // should have updated count with heads added or tails added
// gameTally.makeCoinFlip();
// gameTally.checkTally(); // should have updated count with heads added or tails added
// gameTally.makeCoinFlip();
// gameTally.checkTally(); // should have updated count with heads added or tails added
// gameTally.makeCoinFlip();
// gameTally.checkTally(); // should have updated count with heads added or tails added

// I: none
// O: 
//   1) should generate a storage object {} with two methods:
//    - makeCoinFlip: make a 50/50 coin flip, add to tally, and return 'heads' or 'tails
//    - checkTally:  return storage object containing coin flips
 
var coinFlipTally = function() {
  var storage = {heads: 0, tails: 0}; 

  return {
    makeCoinFlip: function(){
      var flip = Math.floor(Math.random() * Math.floor(2));
      if(flip === 0){
        storage.heads++;
        return 'heads';
      } else {
        storage.tails++;
        return 'tails';
      }
    },

    checkTally: function(){
      return storage;
    }
  }
}

var coinTally = coinFlipTally();

var properties = Object.keys(coinTally);

module.exports = {
  greetingFactory: greetingFactory,
  sumCalculator: sumCalculator,
  coinFlipTally: coinFlipTally
}