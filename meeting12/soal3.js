//soal 3 start

function greet(name, callback) {
    console.log(`Hello ${name}`);
    setTimeout(callback, 1000);
}

function sayGoodbye() {
    console.log("Goodbye");
}

greet("yewon", sayGoodbye)

//soal 3 clear