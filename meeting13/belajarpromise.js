let angka =  200

let promise = new Promise((resolve, reject) => {
    if (angka > 100) {
        resolve("angka lebih dari 100")
    } else {
        reject("angka kurang dari 100")
    }
})

promise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })