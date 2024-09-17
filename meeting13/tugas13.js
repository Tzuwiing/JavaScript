//soal 1 start
// let fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data Fetched");
//       reject("Error");
//     }, 3000);
//   });
// };

// fetchData()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//soal 1 clear

//soal 2 start

// const number = [3, 7, 1, 6];
// function checkNumber() {
//   return new Promise((resolve, reject) => {
//     if (number[1] > 5) {
//       resolve("Number too high");
//     } else {
//       reject("Number too low");
//     }
//   });
// }

// checkNumber()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//soal 2 clear

//soal 3 start

const fetchStep1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Step 1 Complete");
  }, 1000);
});

const fetchStep2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Step 2 Complete");
  }, 2000);
});

const fetchStep3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Step 3 Complete");
  }, 3000);
});

Promise.all([fetchStep1, fetchStep2, fetchStep3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//soal 3 clear

//soal 4 start

const simulateTask = new Promise((resolve, reject) => {
  const duration = 2000;
  setTimeout(() => {
    if (duration <= 2000) {
      resolve("Task Successful");
    } else {
      reject("Task Failed");
    }
  }, duration);
});

simulateTask
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Task Finished");
  });

//soal 4 clear

//soal 5 start

let dataA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data A");
  }, 1000);
});
let dataB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data B");
  }, 2000);
});

Promise.all([dataA, dataB])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

  //soal 5 clear