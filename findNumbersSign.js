//Find the sign of product of three numbers without multiplication operator. Display the specified sign.

function checkSign(arr) {
  let sign = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      return "unsigned";
    } else if (arr[i] < 0) {
      sign++;
    }
  }
  if (sign % 2 === 0) {
    return "+";
  } else {
    return "-";
  }
}
console.log(checkSign([1, 2, 0, -3, 5]));
