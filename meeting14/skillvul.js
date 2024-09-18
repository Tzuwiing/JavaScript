// Buat kode kamu di bawah ini
// function helloWorld() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello World");
//     }, 2000);
//   });
// }

// async function messages() {
//   let msg = await helloWorld();
//   console.log(msg);
// }

// console.log(messages());


function ambilDataUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      console.log(users);
    });
}

ambilDataUser();
