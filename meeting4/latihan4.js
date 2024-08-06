//soal 1 start
var nilai = 65;
var kehadiran = 10;
var totalPertemuan = 15;
var lulus = (kehadiran / totalPertemuan) * 100;

if (nilai >= 85) {
  if (lulus >= 75) {
    console.log("Kategori A : Lulus");
  } else {
    console.log("Kategori A : Tidak Lulus");
  }
} else if (nilai >= 70) {
  if (lulus >= 75) {
    console.log("Kategori B : Lulus");
  } else {
    console.log("Kategori B : Tidak Lulus");
  }
} else if (nilai >= 50) {
  if (lulus >= 75) {
    console.log("Kategori C : Lulus");
  } else {
    console.log("Kategori C : Tidak Lulus");
  }
} else {
  console.log("Kategori - : Tidak Lulus");
}

//soal 1 clear

//soal 2 start

var pendaftaran = false;
var pembayaran = false;

if (pendaftaran === true) {
  if (pembayaran === true) {
    console.log("Dapat mengikuti Kursus");
  } else {
    console.log("Tidak dapat mengikuti Kursus");
  }
} else {
  console.log("Tidak dapat mengikuti Kursus");
}

//soal 2 clear
