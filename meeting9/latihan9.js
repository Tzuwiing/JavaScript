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