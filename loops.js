// try to write a the following loop with while and do-while:

// for (var i = 0; i < a.length; i++) {
// console.log("for", i, a[i]);
// }

// While
let arr = [5, 8, 12, 53];
let i = 0;
while (i < arr.length) {
  console.log("for", i, arr[i]);
  i++;
}
//do while
let arr1 = [5, 8, 12, 53];
let j = 0;
do {
  console.log("for", j, arr1[j]);
  j++;
} while (j < arr1.length);
