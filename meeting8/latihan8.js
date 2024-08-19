class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  tidur() {
    return `${this.nama} sedang tidur`;
  }

  makan() {
    return `${this.nama} sedang makan`;
  }
}

// Tulis kode kamu di bawah ini

class Pelajar extends Orang {
  constructor(nama, umur, namaSekolah) {
    super(nama, umur);
    this.namaSekolah = namaSekolah;
  }

  belajar() {
    return `${this.nama} belajar di ${this.namaSekolah}`;
  }
}

let user = new Pelajar("Terra", 17, "Skilvul");

console.log(user.makan());
console.log(user.tidur());
console.log(user.belajar());

class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  makan() {
    return "Hewan sedang makan";
  }
}

// Buat kode kamu di bawah ini

class Harimau extends Hewan {
  constructor(nama) {
    super(nama);
  }
  makan() {
    return `${this.nama} makan daging`;
  }
}

let harimauSumatera = new Harimau("Harimau Sumatera");

console.log(harimauSumatera.makan());



// soal 1

class vehicle {
  constructor(brand) {
    this.brand = brand;
  } 

  Start() {
    return `${this.brand} is Starting`;
  }
}

class car extends vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  start() {
    return `${this.brand} is starting`;
  }
}

let car1 = new car("Toyota", "innova");
console.log(car1.Start());

// soal 1 clear


//soal 2 start

class Shape {
  draw() {
    return "drawing shape";
    }
}

class Rectangle extends Shape {
    draw () {
      return "drawing rectangle";
    }
  }

  let rectangle = new Rectangle();
  console.log(rectangle.draw());

  //soal 2 clear

  //soal 3 start

  class person {
    constructor(name,) {
      this.name = name;
    }
    introduce(){
        return `Hi my name is ${this.name}`
    }
}
  
class Employee extends person {
  constructor(name, Position) {
    super(name);
    this.Position = Position;
  }
  introduce(){
    return `Hi my name is ${this.name} and I am an ${this.Position}`
  }
}

class Manager extends Employee { 
  constructor(name, Position,) {
    super(name, Position);
  }
  introduce(){
    return `Hi my name is ${this.name} and I am an ${this.Position} and i manage a team"`
  }
    
}

let people = new person("Yewon");
console.log(people.introduce());

let employee = new Employee("Yewon", "Programmer");
console.log(employee.introduce());

let manager = new Manager("Yewon", "Programmer");
console.log(manager.introduce());

//soal 3 clear