//soal1 start

const person = {
  name: "Yewon",
  age: 26,
  city: "Jakarta",
  country: "Indonesia",
};

console.log(person["country"]);
console.log(person.country);


var umur = person.age + 5;
console.log(umur);
var umur = person["age"] + 5;
console.log(umur);

delete person.city;
console.log(person);

//soal 1 clear

//Soal 2 start

const { name, age, city } = person;
console.log(name, age, city);

const { name: UserName, age: UserAge, city: UserCity } = person;
console.log(UserName, UserAge, UserCity);

//soal 2 clear

//soal 3 start

class book {
  constructor(title, author) {
    this.title = title;
    this.asd = author;
  }

  getdetail() {
    return `${this.title} by ${this.asd}`;
  }
  updateAuthor(newAuthor) {
    this.asd = newAuthor;
  }
}

var buku = new book("JavaScript Essential", "Jane Doe");
console.log(buku.getdetail());

buku.updateAuthor("Fathan Nuradly");
console.log(buku.getdetail());

//soal 3 clear
