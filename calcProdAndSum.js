"use strict";

//Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the
//sum, print the quotient, otherwise print the remainder.

let num = 1241;
let str = num + "";
let sum = 0;
let prod = 1;
if (num === 0) {
  console.log("Cannot calculate");
} else {
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
    prod *= parseInt(str[i]);
  }

  if (prod % sum === 0) {
    let q = prod / sum;
    console.log(`the quotient is ${q}`);
  } else {
    let reminder = prod % sum;
    console.log(`the reminder is ${reminder}`);
  }
}
