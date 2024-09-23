//soal 1 start

// function simulateDelay() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Delay Finished");
//     }, 2000);
//   });
// }

// async function result() {
//   let rst = await simulateDelay();
//   console.log(rst);
// }

// console.log(result());

//soal 1 clear

//soal 2 start

// async function calculateDivision(angka1, angka2) {
//   return await new Promise(() => {
//     try {
//       if (angka2 === 0) {
//         throw new Error("Pembagi tidak boleh 0");
//       }
//       const hasil = angka1 / angka2;

//       console.log(hasil);
//     } catch (error) {
//       console.log(error.message);
//     }
//   });
// }

// calculateDivision(12, 0);

//soal 2 clear

//soal 3 start

// async function performTasks() {
//   const result = await Promise.all([
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Task 1");
//       }, 1000);
//     }),
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Task 2");
//       }, 2000);
//     }),
//   ]);
//   console.log(result);
// }

// console.log(performTasks());

// soal 3 clear

//soal 4 start

async function getUserProfile() {
  await fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      console.log(users.name);
      if (users.name === "Leanne Graham") {
        console.log("User is Leanne Graham");
      } else {
        console.log("User is not Leanne Graham");
      }
    });
}

console.log(getUserProfile());

//soal 4 clear

//soal 5 clear
