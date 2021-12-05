"use strict";

//Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak =
//ak-1 + ak-2)

function fibonachi(step) {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= step; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fibonachi(0));

function fib(num) {
  if (num <= 1) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
}
console.log(fib(10));
