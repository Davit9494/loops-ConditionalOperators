"use strict";

//Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.
function isPrime(num) {
  if (num === 1 || num === 0) {
    return `${num} is not Prime`;
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return `${num} is not Prime`;
    }
  }
  return `${num} is Prime`;
}
console.log(isPrime(16));
