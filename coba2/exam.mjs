// function getDivisibleByFour() {
//   let result = [];
//   for (let i = 1; i <= 20; i++) {
//     if (i % 4 === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// function getNotDivisibleByFour() {
//   let result = [];
//   for (let i = 1; i <= 20; i++) {
//     if (i % 4 !== 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// console.log(getDivisibleByFour());
// console.log(getNotDivisibleByFour());


// console.log(getDivisibleByFourString());

export function getDivisibleByFourString2() {
  let result = [];
  for (let i = 1; i <= 20; i++) {
    let divisibleByFour = i % 4 === 0 ? "bisa dibagi 4" : "tidak bisa dibagi 4";
    let oddEven = i % 2 === 0 ? "genap" : "ganjil";

    result.push(`${i} adalah ${oddEven} dan ${divisibleByFour}`);
  }
  return result;
}


