// 1. შექმენით 5 ეlმენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი. კონსოლში გამოიტანეთ ამ რიცხვების ჯამი და საშუალო არითმეტიკული

const numbers = [1, 2, 3, 4, 5];
let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];

let sum2 = 0;
for (let index = 0; index < numbers.length; index++) {
	const element = numbers[index];
	console.log(element);
	sum2 += element;
}

console.log(sum2);
let average = sum / numbers.length;
// console.log(sum, average);

// 2. შექმენით ობიექტი რომელიმე წიგნის  შესახებ შემდეგი propertyებით: title, author, და yearPublished. ამ მნიშვნელობების დახმარებით კონსოლში გამოიტანეთ შემდეგი ტექსტი: "[title] by  [author]  was published in [yearPublished] ."
const book = {
	title: "The Lord of the Rings",
	author: "J.R.R. Tolkien",
	yearPublished: 1954,
};

let result = `${book.title} by ${book.author} was published in ${book.yearPublished}.`;

// console.log(result);

// 3. მე-2 დავალებაში შექმნილ ობეიქტში შეცვალეთ yearPublished მნიშვნელობა და კონსოლში გამოიტანეთ დარედაქტირებული ობიექტი.
book.yearPublished = 1955;
// console.log(book);

// 4. შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი შემდეგი property-ებით: name, age, და score. კონსოლში გამოიტანეთ შექმნილი მასივი.
const student1 = {
	name: "John",
	age: 22,
	score: 90,
};
const students = [
	{
		name: "John",
		age: 22,
		score: 90,
	},
	{
		name: "Jane",
		age: 30,
		score: 85,
	},
	{
		name: "Jack",
		age: 35,
		score: 80,
	},
];
const student2 = [
	{ name: "", age: 0, score: 0 },
	{ name: "", age: 0, score: 0 },
	{ name: "", age: 0, score: 0 },
];

// console.table(students);

//
let totalPrice = 0;
let product1 = 1999;
let product2 = 2999;
let productQuantity = 10;
let product1Q = 4;
// user clicked + button

totalPrice = totalPrice + product1;
totalPrice = totalPrice - product2;
totalPrice += product1;
totalPrice -= product2;
totalPrice = product1 + product2;

productQuantity = productQuantity + 1;
productQuantity += 10;

productQuantity++; // 1-ით გაზრდას
product1Q === "4";

// if (productQuantity > 5) {
// 	console.log("You get free shipping");
// }

if (productQuantity > 2) {
}

// let deliveryPrice;
// if (totalPrice < 1000) {
// 	console.log("You get fvaucher");
// 	// deliveryPrice = 100
// } else {
// 	console.log("You get additional discount");
// 	// deliveryPrice = 50
// }

// totalPrice < 1000
// 	? console.log("You get fvaucher")
// 	: console.log("You get additional discount");

// deliveryPrice = totalPrice < 1000 ? 100 : 50;
// console.log(deliveryPrice);

// console.log("after if block");

// if (totalPrice < 1000) {
// 	console.log("delivery price is 100");
// } else if (totalPrice >= 1000 && totalPrice < 5000) {
// 	console.log("delivery price is 50");
// } else if (totalPrice >= 5000 && totalPrice < 10000) {
// 	console.log("delivery is 20");
// } else {
// 	console.log("delivery is free");
// }

product1Q = 20;
// switch (product1Q) {
// 	case 1:
// 		console.log("You get 1% discount");
// 		break;
// 	case 2:
// 		console.log("You get 2% discount");
// 		break;
// 	case 3:
// 		console.log("You get 3% discount");
// 		break;
// 	case 4:
// 		console.log("You get 4% discount");
// 		break;
// 	case 5:
// 	case 6:
// 		console.log("You get 5% discount");
// 		break;

// 	default:
// 		console.log("You get 10% discount");
// 		break;
// }

let userRole = "admin";
// switch (userRole) {
//   case 'admin':

//     break;
//   case 'user':

//     break;
//     case 'guest':

//     break;

//   default:
//     break;
// }

// for (let i = 0; i < 5; i++) {
// 	if (i === 1) {
// 		continue;
// 	}
// 	if (i === 3) {
// 		break;
// 	}
// 	console.log(i);
// }
// let j = 0;
// for (;;) {
// 	if (j > 5) {
// 		break;
// 	}
// 	j++;
// 	console.log("|");
// }

let a = 10;
// while (a < 5) {
// 	console.log("while", a);
// 	a++;
// }

// console.log("end of loop");

// discount == 0 => continue

let b = 1;
// do {
// 	console.log("do while", b);
// 	b++;
// } while (b < 5);

// for (let index = 0; index < data.length; index++) {
// 	if (data[index].discount === 0) {
// 		continue;
// 	}

// 	console.log(data[index].title, data[index].discount);
// }
