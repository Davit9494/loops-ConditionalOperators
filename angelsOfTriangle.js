//Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of
//the angles of a triangle equals 180 degrees).
let firstAngel = 45;
let secondAngel = 90;
let thirdAngel = 0;

for (let i = 0; i < 180 - firstAngel - secondAngel; i++) {
  thirdAngel++;
}
console.log(thirdAngel);
