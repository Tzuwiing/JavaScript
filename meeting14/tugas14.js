
//soal 1 start

function simulateDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delay Finished");
    }, 2000);
  });
}

async function result() {
  let rst = await simulateDelay();
  console.log(rst);
}

console.log(result());

//soal 1 clear

//soal 2 start

async function calculateDivision(a, b){
  let div = a / b;
  if (b == 0 || a == 0){
    throw new Error("error");{

    }
  }
}



