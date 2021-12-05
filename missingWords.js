//Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the
//words from the array.
"use strict";
function missingWords(sent, arr) {
  let sentStr = sent.split(" ");
  let wordsCounter = 0;
  for (let i = 0; i < sentStr.length; i++) {
    if (sentStr[i] === "_," || sentStr[i] === "_." || sentStr[i] === "_") {
      sentStr[i] = arr[wordsCounter];
      wordsCounter++;
    }
  }
  return sentStr.join(" ");
}
console.log(missingWords("_, we have a _.", ["Houston", "problem."]));
