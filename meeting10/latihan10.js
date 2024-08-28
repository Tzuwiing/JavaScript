// Skillvull start
function luasPersegi(s) {
  return s * s;
}

console.log(luasPersegi(4));

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
  return quantity * pricePerItem - quantity * pricePerItem * discount2;
}

console.log(calculatePrice(3, 15000, true));
