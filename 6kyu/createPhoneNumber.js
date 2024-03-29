//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

//better code:
// function createPhoneNumber(numbers){
//     let format = "(xxx) xxx-xxxx";

//     for(let i = 0; i < numbers.length; i++){
//       format = format.replace('x', numbers[i]);
//     }
//     return format;
//   }

//even better, one liner:
// function createPhoneNumber(numbers){
//     return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
//  }
