//Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

function checkMultiple(givenNum) {
  if (givenNum % 3 === 0 && givenNum % 5 === 0 && givenNum % 7 === 0) {
    return `${givenNum} is a multiple of 3, 5 and 7.`;
  } else {
    if (givenNum % 3 === 0 && givenNum % 5 === 0) {
      return `${givenNum} is a multiple of 3 and 5`;
    } else if (givenNum % 3 === 0 && givenNum % 7 === 0) {
      return `${givenNum} is a multiple of 3 and 7`;
    } else if (givenNum % 5 === 0 && givenNum % 7 === 0) {
      return `${givenNum} is a multiple of 5 and 7`;
    } else {
      if (givenNum % 3 === 0) {
        return `${givenNum} is a multiple of 3`;
      } else if (givenNum % 5 === 0) {
        return `${givenNum} is a multiple of 5`;
      } else if (givenNum % 7 === 0) {
        return `${givenNum} is a multiple of 7`;
      }
      return `${givenNum} is not a multiple of 3, 5 or 7.`;
    }
  }
}
console.log(checkMultiple(19));
