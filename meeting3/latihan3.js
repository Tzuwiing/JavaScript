//soal 1 start

const umur = 6;

if (umur > 5) {
  console.log("Pembeli harus membayar tiket penuh");
} else if (umur >= 2 && umur <= 5) {
  console.log("Pembeli harus membayar tiket setengah harga");
} else if (umur < 2) {
  console.log("Pembeli tidak boleh masuk");
}

//soal 1 clear

//soal 2 start

const usia = 28;

if (usia >= 17) {
  // usia minimal mendapat sim adalah 17
  console.log("Anda sudah memenuhi usia untuk mendapatkan sim");
} else {
  console.log("Anda belum memenuhi usia untuk mendapatkan sim");
}

//soal 2 clear

//soal 3 start

const bilangan = 0;

if (bilangan > 0) {
  console.log("Positif");
} else if (bilangan < 0) {
  console.log("Negatif");
} else {
  console.log("Netral");
}

//soal 3 clear

//soal 4 start

const x = -6;
const y = 5;

if (x > 0 && y > 0) {
  console.log("Kanan atas");
} else if (x < 0 && y < 0) {
  console.log("Kiri bawah");
} else if (x > 0 && y < 0) {
  console.log("Kanan bawah");
} else if (x < 0 && y > 0) {
  console.log("Kiri atas");
}

//soal 4 clear

//soal 5 start

const totalBelanja = 70;

let diskon = 0;

if (totalBelanja >= 300) {
  diskon = 0.15; // = 15%
} else if (totalBelanja >= 120 && totalBelanja <= 199) {
  diskon = 0.1; // = 10%
}

const totalBayar = totalBelanja - totalBelanja * diskon;

console.log(`Total yang harus dibayar adalah Rp ${totalBayar}.`);

//soal 5 clear

//soal 6 start

const age = 20;

if (age >= 18) {
  console.log("Registrasi berhasil");
} else {
  console.log("Registrasi gagal");
}

console.log(age);

//soal 6 clear