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

 function getDivisibleByFourString2() {
  let result = [];
  for (let i = 1; i <= 20; i++) {
    let divisibleByFour = i % 4 === 0 ? "bisa dibagi 4" : "tidak bisa dibagi 4";
    let oddEven = i % 2 === 0 ? "genap" : "ganjil";

    result.push(`${i} adalah ${oddEven} dan ${divisibleByFour}`);
  }
  return result;
}

function analisisAngka() {
  for (let a = 1; a <= 20; a++) {
    if (a % 2 == 1) {
      console.log("angka ganjil");
    } else if (a % 4 == 0) {
      console.log("angka genap, bisa dibagi 4");
    } else if (a % 2 == 0) {
      console.log("angka genap");
    }
  }
}

analisisAngka();


export  { getDivisibleByFourString2 as byMe, analisisAngka as byhim }