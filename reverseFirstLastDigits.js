//Enter a number. Reverse its first and last digits. Print the new number.
function rev(num) {
  let strNum = num + "";
  let firstDig = strNum[0];
  let lastDig = strNum[strNum.length - 1];
  if (strNum.length === 1) {
    return num;
  }
  return +`${lastDig}${strNum.slice(
    strNum.length - (strNum.length - 1),
    strNum.length - (strNum.length - (strNum.length - 1))
  )}${firstDig}`;
}
console.log(rev(230));
