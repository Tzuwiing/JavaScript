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

async function calculateDivision(angka1, angka2) {
  return await new Promise(() => {
    try {
      if (angka2 === 0) {
        throw new Error("Pembagi tidak boleh 0");
      }
      const hasil = angka1 / angka2;

      console.log(hasil);
    } catch (error) {
      console.log(error.message);
    }
  });
}

calculateDivision(12, 0);

//soal 2 clear

//soal 3 start
