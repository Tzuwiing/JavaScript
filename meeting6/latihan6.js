//soal 1 start

const identity = ["fathan", "16", "jakarta"];
console.log(identity[2]);

//soal 1 clear

//soal 2 start

identity[1] = "Nuradly";
console.log(identity);

//soal 2 clear

//soal 3 start

identity.splice(2, 1);
console.log(identity);

//soal 3 clear

//soal 4 start
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3);

//soal 4 clear

//soal 5 start
console.log(identity.indexOf("Jakarta"));

//soal 5 clear

//soal 6 start

const numbers = [34, 7, 23, 32, 5];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

//soal 6 clear

//soal 7 start

console.log(numbers.length);

//soal 7 clear

identity.push("nama")
console.log(identity)
 

//coba
identity[3] = "yewon"
 console.log(identity)

 identity[3] = "sully"
 console.log(identity)

const car = {
  name: "bmw",
  type: {
    color: "black",
    series: "2001",
  }
};

console.log(car.series);


let x = 5;
let y = 10;
let z = 15;
if (x < y && z > y) {
  console.log("Accepted");
} else {
  console.log("Rejected");
}


