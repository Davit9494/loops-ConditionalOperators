"use strict";
//Given an array of strings and numbers. Print the number of integers and the number of strings in the
//array.
function numOfStrNums(arr) {
  let strCount = 0;
  let numCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numCount++;
    } else if (typeof arr[i] === "string") {
      strCount++;
    }
  }
  return `Numbers: ${numCount}, Strings: ${strCount}`;
}
console.log(numOfStrNums([1, "10", "hi", 2, 3]));
