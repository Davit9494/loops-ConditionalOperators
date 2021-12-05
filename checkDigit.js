//Insert a digit and a number. Check whether the digits contains in the number or not.
function checkDigit(digit, num) {
  let str = num + "";
  for (let i = 0; i < str.length; i++) {
    if (digit === +str[i]) {
      return "Yes";
    }
  }
  return "No";
}
console.log(checkDigit(3, 5563));
