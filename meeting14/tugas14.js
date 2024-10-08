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

// async function getUserProfile() {
//   await fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (users) {
//       console.log(users.name);
//       if (users.name === "Leanne Graham") {
//         console.log("User is Leanne Graham");
//       } else {
//         console.log("User is not Leanne Graham");
//       }
//     });
// }

// console.log(getUserProfile());

//soal 4 clear

//soal 5 start

// async function getPostDetails() {
//   const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await result.json();
//   if (result.status === 200) {
//     console.log(data.title);
//   } else {
//     console.log("failed to fetch post");
//   }
// }

// getPostDetails();

//soal 5 clear

//soal 6 start

async function checkPostAvailability() {
  const result2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data2 = await result2.json();

  let hasil =
    result2.userId > 5
      ? "post is available for user IDs greater than 5"
      : "post is not available for user IDs greater than 5";
  console.log(hasil);

  //   if (result2.userId > 5) {
  //     console.log("post is available for user IDs greater than 5");
  //   } else {
  //     console.log("post is not available for user IDs greater than 5");
  //   }
}

checkPostAvailability();


