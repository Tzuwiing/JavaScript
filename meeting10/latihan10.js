// Skillvull start
function luasPersegi(s) {
  return s * s;
}

console.log(luasPersegi(8));

// Skillvull clear

//soal 1 start

function registerUser(name, userType) {
  if (userType == "VIP") {
    return "Welcome VIP " + name + "!";
  } else {
    return "Welcome " + name + "!";
  }
}

console.log(registerUser("Nina", "VIP"));
console.log(registerUser("Nina"));

function applyDiscount(userType, purchaseAmount) {
  var discount;
  if (userType == "VIP") {
    discount = 0.2;
  } else {
    discount = 0.1;
  }
  return purchaseAmount - purchaseAmount * discount;
}

console.log(applyDiscount("VIP", 200));
console.log(applyDiscount("Non-VIP", 100));

//soal1 clear

//soal 2 start

function calculatePrice(quantity, pricePerItem, isMember) {
  var discount2;

  if (isMember == true) {
    discount2 = 0.15;
  } else {
    discount2 = 0;
  }
  return quantity * pricePerItem * (1 - discount2);
}

console.log(calculatePrice(3, 150, true));

function confirmPurchase(isConfirmed, totalPrice) {
  if (isConfirmed == true) {
    return "Purchase confirmed with total price: " + totalPrice;
  } else {
    return "Purchase not confirmed";
  }
}

console.log(confirmPurchase(true, 150));
console.log(confirmPurchase(false, 150));

//soal 2 clear

//soal 3 start



function checkStock(requestedQuantity, item) {
  if (item >= requestedQuantity) {
    return "Stock sufficient for " + requestedQuantity + ". Current stock: " + item;
  } else {
    return "Stock insufficient for " + requestedQuantity + ". Current stock: " + item;
  }
}

var stock = checkStock(50, 60);
console.log(stock);

stock = checkStock(60, 60);
console.log(stock);

stock = checkStock(70, 60);
console.log(stock);

function restockItem(additionalStock, item, requestedQuantity) {
  item += additionalStock; 

  if (item >= requestedQuantity) {
    return "Restock Complete. Current stock: " + item + ". Required stock: " + requestedQuantity;
  } else {
    return "Restock needed. Current stock: " + item + ". Required stock: " + requestedQuantity;
  }
}


console.log(restockItem(20, 20, 30));

//soal 3 clear

//soal 4 start

function calculateTax(price, location) {
  if (location == "Jakarta") {
    return price * 0.1;
  } else if (location == "Bandung") {
    return price * 0.05;
  } else {
    return 0;
  }
}

var finalPrice = calculateTax(10000, "Jakarta");
console.log(finalPrice);

function displayResult(finalPrice, paymentStatus) {
  console.log(finalPrice);
  
  if (paymentStatus == "paid") {
    return "Payment successful! Total amount: " + finalPrice;
  } else {
    return "Payment pending";
  }
}


console.log(displayResult(finalPrice, "paid")); 
console.log(displayResult(finalPrice, "pending"));   

//soal 4 clear

const persegiPanjang = (panjang, lebar) => panjang * lebar

console.log(persegiPanjang(10, 5));

const persegi = (sisi) => {
  return 4 * sisi
}

console.log(persegi(5));