//Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If
//the last digit of the inserted number is 0, number remains the same.
let num = 255;
let lastDigit = num % 10;
let str = (num - lastDigit) / 10 + "";
let newNum;
if (lastDigit === 0) {
  newNum = num;
} else {
  newNum = lastDigit + str;
}
newNum = Number(newNum);
console.log(newNum);
