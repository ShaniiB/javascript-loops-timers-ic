console.log('Sanity Test Completed!');

// 1. Use a for loop to print numbers -3 through 8.
// starting point -3, condtion for loop should end  is 8.   
// for (i = -3; i <= 8; i++) {
//      console.log(`${i} Ah, ah`);
// }    


// 2. Use a for loop to count from -5 to 5 three times in a row.
// create for loop
// for loop must count from -5 to 5
// must be completed  3 times
// for (i = 0; i < 3; i++) {
//      for (index = -5; index < 6; index++) 
// {
//      console.log(`${index}`); 



// 3. Use a for loop to print only even numbers from -50 to 50.
// create for loop
// for (let i = -50; i <= 50; i++) {
//      // comparing the remainder with 0
//      if (i % 2 === 0) {
//           console.log(i);// print only even numbers
//      }
// }



// 4. Use a for loop to print from 0 to 50. Once it gets to 10, print "TEN!!!" instead of the number.
// starting point 0
// for (let x = 0; x <= 9; x++) {
//       console.log(`${x}`);
// }
//       console.log(`TEN!!!`);
// for (let i = 11; i<= 50; i++){
//       console.log(`${i}`);
// }



// 5. Prompt the user to enter a number. Prompt the user to enter another number. Create a for loop that counts from the first number to the second number
// prompt the user to enter any number between 1 - 100. 
// once user enters their number, prompt again asking for a different number
// create the for loop that'll act as counter
// log the first number in the console
// then log the second number

// let num1 = ""; // num1 is a place holder for the empty var
// let x = prompt(`Enter a Number!\n\nChoose between 1 - 100.`); {
//      let x2 = parseInt(x); // coverting the string to a number
//      console.log(x2);
// // check to give a number greater than 0
//      if (x2 <= 0) {
//           prompt(`Remember please enter a number greater than 1.`);
//      }
//      num1 = x2; // putting a value in the empty place holder
// } 
// let num2 = ""; // num2 is also a place holder
// let o = prompt(`Please enter another Number!\n\nNot the same Number!`); {
//      let o2 = parseInt(o); // coverting to use in the upcoming if statment
//      console.log(o2);
// // checking to see if the number is higher than 100   
//      if (o >= 101) {
//         prompt(`Hey come on, enter number less than 100.`);
//      }
//      num2 = o2; // value has been given to num2
// }
// for (let index = num1; index <= num2; index++) {
//      console.log(index); // logging index 
// }


     // 6. Create a hardcoded/fixed password. Create a loop that will ask the user to enter a password until it matches the hardcoded password. Once they match alert the user THAT’S CORRECT!!! Keep asking the user until they get the right password.

     // 6. BONUS Create a button with the text Start Countdown!. When the User clicks the button, display a countdown sequence in the browser as an <h2> from 10 to LIFTOFF!!. Display each number during the countdown each second (1000 ms), leading up to the word LIFTOFF!!!. Be sure to stop the timer once liftoff achieved.

