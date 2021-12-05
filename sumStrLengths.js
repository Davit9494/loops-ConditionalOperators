"use strict";
//Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum
//of their lengths.
function sumStrLengths(arr) {
  let strLengths = arr.map((item) => item.length);
  return Math.max(...strLengths) + Math.min(...strLengths);
}
console.log(sumStrLengths(["anymore", "raven", "me", "communicate"]));
