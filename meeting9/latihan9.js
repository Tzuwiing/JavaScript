//skillvull start
class Pelajar {
  constructor(nama, sekolah) {
    var _nama = nama;
    var _sekolah = sekolah;

    this.setNama = function (nama) {
      _nama = nama;
    };

    this.setSekolah = function (sekolah) {
      _sekolah = sekolah;
    };

    this.getNama = function () {
      return _nama;
    };

    this.getSekolah = function () {
      return _sekolah;
    };
  }

  belajar() {
    return `${this.getNama()} belajar di ${this.getSekolah()}`;
  }
}

let pelajar = new Pelajar("Alpha", "Skilvul");

console.log(pelajar.belajar());

console.log(pelajar.getNama());

console.log(pelajar.getSekolah());

class PersegiPanjang {
  constructor(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;
  }

  luas() {
    var hasil = this.panjang * this.lebar;
    return hasil;
  }

  keliling() {
    var hasil = 2 * (this.panjang + this.lebar);
    return hasil;
  }
}

let kotak = new PersegiPanjang(10, 5);

console.log(kotak.luas());

console.log(kotak.keliling());

//skillvul kelar

//soal 1 start

class mobil {
  constructor(merek, tahun) {
    var _merek = merek;
    var _tahun = tahun;

    this.setMerek = function (merek) {
      _merek = merek;
    };

    this.setTahun = function (tahun) {
      _tahun = tahun;
    };

    this.getMerek = function () {
      return _merek;
    };

    this.getTahun = function () {
      return _tahun;
    };
  }
  spek() {
    return `mobil ini bermerek ${this.getMerek()} dikeluarkan pada tahun ${this.getTahun()}`;
  }
}

let mobil1 = new mobil("honda", 2010);
console.log(mobil1.spek());

//soal 1 clear

//saol 2 start

class pesawat {
  constructor(jenis, kecepatan) {
    var _jenis = jenis;
    var _kecepatan = kecepatan;

    this.setJenis = function (jenis) {
      _jenis = jenis;
    };

    this.setKecepatan = function (kecepatan) {
      _kecepatan = kecepatan;
    };

    this.getJenis = function () {
      return _jenis;
    };

    this.getKecepatan = function () {
      return _kecepatan;
    };
  }
  terbang() {
    return `Pesawat dengan jenis ${this.getJenis()} sedang terbang dengan kecepatan ${this.getKecepatan()}`;
  }
}

class jet extends pesawat {
  constructor(jenis, kecepatan, KapasitasBahanBakar) {
    super(jenis, kecepatan);
    var _KapasitasBahanBAkar = KapasitasBahanBakar;

    this.setKapasitasBahanBakar = function (KapasitasBahanBakar) {
      _KapasitasBahanBAkar = KapasitasBahanBakar;
    };

    this.getKapasitasBahanBakar = function () {
      return _KapasitasBahanBAkar;
    };
  }
  isi() {
    return `Pesawat dengan jenis ${this.getJenis()} sedang terbang dengan kecepatan ${this.getKecepatan()} dengan kapasitas bahan bakar ${this.getKapasitasBahanBakar()}`;
  }
}

let pesawat1 = new pesawat("airbus", 300);
console.log(pesawat1.terbang());

let jet1 = new jet("airbus", 300, 1000);
console.log(jet1.isi());

//soal 2 clear

//soal 3 start

class karyawan {
  constructor(nama, jabatan, gaji) {
    var _nama = nama;
    var _jabatan = jabatan;
    var _gaji = gaji;

    this.setnama = function (nama) {
      _nama = nama;
    };

    this.setgaji = function (gaji) {
      _gaji = gaji;
    };

    this.setjabatan = function (jabatan) {
      _jabatan = jabatan;
    };

    this.getnama = function () {
      return _nama;
    };

    this.getgaji = function () {
      return _gaji;
    };

    this.getjabatan = function () {
      return _jabatan;
    };
  }
}

class manajer extends karyawan {
  constructor(nama, jabatan, gaji, tunjangan) {
    super(nama, jabatan, gaji);
    var _tunjangan = tunjangan;

    this.settunjangan = function (tunjangan) {
      _tunjangan = tunjangan;
    };

    this.gettunjangan = function () {
      return _tunjangan;
    };
  }

  beriTunjangan() {
    return `Manajer ${this.getnama()} dengan jabatan ${this.getjabatan()} diberi gaji sebesar ${this.getgaji()} Rupiah dan tunjangan sebesar ${this.gettunjangan()} Rupiah`;
  }
}

let karyawan1 = new manajer("Yewon", "Manager", 5000000, 1000000);

console.log(karyawan1.beriTunjangan());

//soal 3 clear

//soal 4 start

class kendaraan {
  constructor(kecepatan) {
    var _kecepatan = kecepatan;

    this.setKecepatan = function (kecepatan) {
      _kecepatan = kecepatan;
    };

    this.getKecepatan = function () {
      if (_kecepatan < 0) {
        return (kecepatan = 0);
      } else {
        return (_kecepatan = kecepatan);
      }
    };
  }
}

let kendaraan1 = new kendaraan(100);
console.log(kendaraan1.getKecepatan());

//soal 4 clear

//soal 5 start