//Given three numbers. Sort them by the ascending order.
const arr = [-40, 100, -1, 5, -25, 10];
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);
function ascendingNumbers(...numbers) {
  return numbers.sort((a, b) => b - a);
}
console.log(ascendingNumbers(-1, -5, -3, -6));
