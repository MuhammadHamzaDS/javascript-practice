// // // console.log("Hello JavaScript!");
// // // let a = 10;
// // // let b = ;
// // // console.log(a + b);
// // // console.log("Sum of Given Numbers Are :", a + b);
// // // console.log(`Sum of Given Numbers Are : ${a + b}`);
// // // console.log(`Substraction of Given Numbers are : ${a - b}`);




// // let marks = prompt("Enter your marks:");
// // // marks = Number(marks); // Convert string input to number

// // if (marks > 100 || marks < 0) {
// //   console.log("Invalid Marks");
// // } else if (marks >= 90) {
// //   console.log("Grade: A+");
// // } else if (marks >= 80) {
// //   console.log("Grade: A");
// // } else if (marks >= 70) {
// //   console.log("Grade: B");
// // } else if (marks >= 60) {
// //   console.log("Grade: C");
// // } else if (marks >= 50) {
// //   console.log("Grade: D");
// // } else {
// //   console.log("Grade: Fail");
// // }

// // let age = prompt("Enter Your Age:");
// // age = Number(age);

// // if (age < 18) {
// //   console.log("You are a Minor");
// // } else if (age >= 18 && age <= 60) {
// //   console.log("You are an Adult");
// // } else if (age > 60) {
// //   console.log("You are a Senior");
// // }
// //  let day = prompt("Enter your day");
// //  switch (day){
// // case "Monday":
// //   console.log("Start of the Week");
// //   break;
// //   case "Friday":
// //     console.log("End of the Week");
// //     break;
// //     default:
// //       console.log("Normal Days");
// //       break;


// //  }


// //  let week = prompt("Enter your day");
//   // switch(week){
//   //   case "Monday":
//   //     console.log("you are at work");
//   //     break;
//   //     case "Tuseday":
//   //       console.log("Make your Assignment");
//   //       break;
//   //       default:
//   //         console.log("Normal Days");
//   //         break;
//   // }

// //   function changeText() {
// //     let element = document.getElementById("title");
// //     element.innerText = "You are on the right path";
// //   } 


// //   // let username = prompt("Enter your name :");

// //   // console.log(`Hello ${username}`);
// //   let num = 20;
// //   if(num % 10 == 0){
// //     console.log("Good");
// //     } else {
// //       console.log("Bad");

// //   }
// //   let name = prompt("Enter Your Name :");
// //   let age = prompt("Enter Your age :");
// // alert(`Your Name is ${name} and Your Age is ${age}`);

// // let quater = prompt("Enter Your Quater :");

// // quater =  Number(quater);

// // switch(quater){
// //   case 1:
// //     console.log("January, February,March");
// //     break
// //   case :
// //     console.log("Apirl,May,June");
// //     break;
// //     case 3:
// //       console.log("July,August,September");
// //       break;
// //       case 4:
// //         console.log("October November December");
// //         break;



// //   }
//   // let str =prompt("Enter The String");
//   // if(str[0] =="a" || str[0 == "A"]  && str >=5){
//   //   console.log("The Given String is Golden");
//   // }
//   // else {
//   //   console.log("String is not Golden");
//   // }
//   // let str = "hamzabha";
//   // console.error(str);
// // let colors = ["red","green","blue","yellow","purple"];
// // colors.splice(,0,"black","white");
// // console.log(colors)
// // const sum = (a,b) => {
// //   console.log(`Sum of Given NUmbers is:${a+b}`);
// // }
// // function hamza(a,b){
// //   let c=a+b
// //   console.log(`Sum of Given NUmbers is:${c}`);
// //   if(c==40){
// //     console.log("Your are Very Code Coder:");
// //   }
// //   else{
// //     console.log("You need more practice to be a good Coder");
// //   }

// // }
// // hamza(13,45);
// // hamza(20,20);

// // console.log("Hello World1");
// // let id = setInterval(() => {

// //   console.log("Hello World");

// // }, 2000);
// // console.log("Hello World3");

// // let id = setInterval((a,b) => {
// //   let c= +3;
// //   console.log(`Sum of Given NUmbers is:${c}`);
// //   if(c==40){
// //     console.log("You are a good programmer")

// //   }
// //   else{
// //     console.log("You need more practice to be a good Coder");
// //   }
// // }, 2000);

// // let array =["hamza","khan"];
// // const print = function(el){
// //   console.log(el)
// // }
// // array.forEach(print);
// // console.log("Forarrow");  
// //  array.forEach((el) =>{

// // console.log(el);
// //  });
// //  console.log("Using for of loop");
// //  for(elemets of array){
// //   console.log(elemets);
// // for (ind of elemets){
// //   console.log(ind);
// // }
// // }
// //  let array =[
// //   {
// //   name : "hamza",
// //   marks:94,
// //  },
// //  {
// //   name:"arham",
// //   marks:95,

// //  },
// //  {
// //   name:"anas",
// //   marks:99,
// //  },
// // ];
// // array.forEach((arr) =>{
// //   console.log(arr.name);
// //   for (std of arr.name){
// //     console.log(std);
// //   }
// //   console.log(arr.marks);})
// //   
// // for (let i = 1; i <= 5; i++) {
// //     console.log(`${i} * ${i} = ${i * i}`);
// // }
// // for(let  i=1;i<=5;i++){
// //   console.log("*".repeat(i));
// // }

// let arr = [1,,3,5,6,7,];
// newarr=[...arr];
// let arr = [1, , 5, 4, 3, , , ,];
//  hello this my sample code
// console.log(arr.length);
// arr.push(7);

function min(){
    console.log(arguments);
    console.log(arguments.length);
   console.log( arguments.push(1));
}
// Simple Calculator in JS

// Function for calculation
function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : "Error: Division by zero!";
    default:
      return "Invalid operator!";
  }
}

// Example usage
console.log(calculator(10, 5, '+'));  // 15
console.log(calculator(10, 5, '-'));  // 5
console.log(calculator(10, 5, '*'));  // 50
console.log(calculator(10, 5, '/'));  // 2
