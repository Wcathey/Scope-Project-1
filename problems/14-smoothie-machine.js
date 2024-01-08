/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/
/*
1.Write a function called smoothieMachine that can hold any number of paramaters. We will declare an argument and use rest to hold any amount.
2.the smoothie function will return a function that also accepts any number fo parameters so we will use another rest.
3.The 2nd function returned will return a string made up of all the paramenters.
4. We need a starting string value of Im having a smoothie with.
5. after ever ingredient is passed in and added to the string we have to add and.
6. return the final string.

*/
const smoothieMachine = (func, ...param) => {
  let smoothie = "I'm having a smoothie with "
    return function addToSmoothie(...ingredients) {
      smoothie = smoothie.concat(ingredients);
      return smoothie;
        }

    }



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
