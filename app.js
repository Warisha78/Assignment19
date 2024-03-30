// Chapter 26 Rounded Number
// Q1
// var scoreAvg = Math.round();
// Q2
// var scoreAvg = Math.ceil(0.99999);
// var newScore = scoreAvg;
// console.log(newScore);
// Q3

// var scoreAvg = Math.floor(1.99999);
// var newScore = scoreAvg;
// console.log(newScore);
// // Q4
// var myNumber = 3.7;
// var roundedNumber = Math.round(myNumber);
// console.log(roundedNumber);
// // Q5
// var scoreAvg = Math.floor(0.5);
// var newScore = scoreAvg;
// console.log(newScore);
// Chapter 27 Random Number
// // Q1
// var randomNumber = Math.floor(Math.random() * 50) + 1;
// console.log(randomNumber);
// // Q2
// var randomNumber = Math.ceil(Math.random() * 10) + 1;
// console.log(randomNumber);
// // Q3
// var dice = Math.floor(Math.random() * 6) + 1;
// console.log("The dice rolls ", dice);
// // Q4
// var headUSer = prompt("Enter your name");
// var tailUser = prompt("Enter your name");
// var toss = Math.random() * 2;
// var convert = Math.floor(toss);
// if (convert === 0) {
//   console.log(headUSer + " won the toss");
// } else {
//   console.log(tailUser + " won the toss");
// }
// chapter 28-29
// Q1

// var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseInt(currentAge) + 1;
// console.log(qualifyingAge);
// // Q2
// var strr = "123";
// var newstrr = parseInt(strr);
// console.log(newstrr);
// // Q3
// var strr = parseInt("1.9999");
// console.log(strr);
// Q4
// var str1 = "123";
// var str2 = "123.45";
// var str3 = "abc";

// // Check if str1 can be converted to an integer
// if (/^\d+$/.test(str1)) {
//   console.log(str1 + " can be converted to an integer.");
// } else {
//   console.log(str1 + " cannot be converted to an integer.");
// }

// // Check if str2 can be converted to a decimal
// if (/^\d*\.?\d+$/.test(str2)) {
//   console.log(str2 + " can be converted to a decimal.");
// } else {
//   console.log(str2 + " cannot be converted to a decimal.");
// }

// // Check if str3 can be converted to an integer
// if (/^\d+$/.test(str3)) {
//   console.log(str3 + " can be converted to an integer.");
// } else {
//   console.log(str3 + " cannot be converted to an integer.");
// }

// // Check if str3 can be converted to a decimal
// if (/^\d*\.?\d+$/.test(str3)) {
//   console.log(str3 + " can be converted to a decimal.");
// } else {
//   console.log(str3 + " cannot be converted to a decimal.");
// }
// // Q5
// var num = 789;
// var newstrr = Number(num);
// console.log(newstrr);
// // Q6
// var number = 42;
// var newNm = number.toString();
// console.log(newNm);
// // Q7
// var strr = "3.14";
// var newScore = parseFloat(strr);
// var moreNew = Math.round(newScore);
// console.log(moreNew);
// chapter 30
// Q1

// var num = 1.8766549;
// var newNm = num.toFixed(4);
// console.log(newNm);
// // Q2\
// var num = 7.88998;
// var moreNew = parseFloat(num.toFixed(2));
// console.log(moreNew);
// // Q3
// var num = 1.823;
// var newNm = parseFloat(num.toFixed(2));
// alert(newNm);
// Q4
// if (num.toFixed(2).toString().length > 4) {
//   // Rest of your if statement
// }
// Math methods
// // Q1
// var userInput = prompt("write positive integer");
// var number = parseInt(userInput);
// if (isNaN(number) || number <= 0) {
//   document.write("please enter a valid positive integer");
// } else {
//   document.write("Number : " + number + "<br>");
//   document.write("Round off : " + Math.round(number) + "<br>");
//   document.write("Floor : " + Math.floor(number) + "<br>");
//   document.write("Ceil : " + Math.ceil(number) + "<br>");
// }
// // Q2
// var userInput = prompt("Enter a negetive floating point");
// var number = parseInt(userInput);
// if (isNaN(number) || number >= 0) {
//   alert("please enter valid - floating number");
// } else {
//   document.write("Number : " + number + "<br>");
//   document.write("Round off : " + Math.round(number) + "<br>");
//   document.write("Floor : " + Math.floor(number) + "<br>");
//   document.write("Ceil : " + Math.ceil(number) + "<br>");
// }
// // Q3
// var num = +prompt("enter value");
// var newNm = Math.abs(num);
// document.write("Absolute value of " + num + "is " + newNm);
// // Q4
// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value is " + diceValue);
// // // Q5
// var num = Math.floor(Math.random() * 100 + 1);
// document.write(num);
// // Q6
// var userInput = prompt("Enter your weight in kgms");
// var newScore = parseInt(userInput) + 1;
// document.write("The weight of user is : " + newScore);
// // Q7
// var userInput = prompt("Enter Your Weight in kgs");
// var newNm = parseInt.userInput;

// document.write(newNm);
// Q8
var userInput = prompt("Add a Number Randomly");
var secret = Math.floor(Math.random() * 10) + 1;
if (userInput === secret) {
  alert("Congratulations!");
} else {
  alert("Add again!");
}
