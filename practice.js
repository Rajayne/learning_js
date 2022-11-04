// alert("It's Working!");

//Example 1: If
// if (1 === 1) {
//     console.log("Is true!");
// }


//Example 2: Else If
// let rating = 2;

// if (rating === 3) {
//     console.log("You are a superstar!")
// } 
// else if (rating <= 2) {
//     console.log("You are not a superstar")
// }


//Example 3: Else
// let num = 38;

// if (num % 2 !==0) {
//     console.log('Odd number');
// } 
// else {
//     console.log('Even number');
// }

//Prompt: Prompts pop-up question in browser
// let favoriteDrink = prompt("What is your favorite drink?");
// favoriteDrink = favoriteDrink.toLowerCase();
// console.log(`Your favorite drink is ${favoriteDrink}`);


//Example 4: Highscore
// let highScore = 1430;
// let userScore = 1600;

// if (userScore >= highScore) {
//     console.log(`Congrats, you have the new high score of ${userScore}`);
//     highScore = userScore
// }
// else {
//     console.log(`Good game.  Your score of ${userScore} did not beat the high score of ${highScore}`);
// }

// console.log(highScore)


//Example 5: Password Requirements
// let password = prompt("Enter a password at least 6 characters long with no spaces.");

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//             console.log('Valid Password!');
//     } 
//     else {
//     console.log('Password is long enough, but cannot contain spaces');
//     }
// }
// else { console.log('Password must be longer!')
// }


//Example 5: Password Requirements using && Cont.
// let password = prompt("Enter a password at least 6 characters long with no spaces.");

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//         console.log('Valid Password!');
// }
// else { console.log('Invalid Password!');
// }


//Example 6: Check if num is between 1 and 10
// let num = prompt('Choose a number between 1 and 10');

// if (num >= 1 && num <=10) {
//     console.log('Number is between 1 and 10');
// }
// else {
//     console.log('Please choose a number between 1 and 10');
// }


//Example 7: Check if age is under 6 or 65 and older to enter for free
//Use || as OR operator
// let age = prompt('Enter your age')

// if (age < 6 || age >= 65) {
//     console.log('Yay!  You get in for free!');
// }
// else {
//     console.log(`That will be $10 for entry please`);
// }


//Example 8: Check if there isn't a logged in User to boot them
// let loggedInUser;

// if (!loggedInUser) {
//     console.log('Get out of here!')
// }


//Example 9: Only available flavors are strawberry, banana and mango
// let requestedFlavor = prompt('What fruit flavor would you like for your smoothie?');

// if (requestedFlavor !== 'strawberry' && requestedFlavor !== 'banana' && requestedFlavor !== 'mango') {
//     console.log("Sorry, we're out of that flavor!")
// }
// else {
//     console.log(`One ${requestedFlavor} smoothie coming right up!`)
// }


//Example 10: Order of Operations: (1) ! (2) && (3) ||
// let x = 7;
// x == 7 || x === 3 && x > 10;
//TRUE || FALSE && FALSE but answer is true bc && runs first
// (x == 7 || x === 3) && x > 10;
//TRUE || FALSE && FALSE but answer is false because () makes || run first


//Example 11: Switch Statement
// let day = 3

// if (day = 1) {
//     console.log('Monday');
// }

// if (day = 2) {
//     console.log('Tuesday');
// }

// if (day = 3) {
//     console.log('Wednesday');
// }

// if (day = 4) {
//     console.log('Thursday');
// }

// if (day = 5) {
//     console.log('Friday');
// }

// if (day = 6) {
//     console.log('Saturday');
// }

// if (day = 7) {
//     console.log('Sunday');
// }

//Switch simplies all the if statements above
//If ( break; ) is not between cases, then console will run through all code after finding true case
// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
// }


// Example 12: Ternary Operator: condition ? expIfTrue : expIfFalse
// let num = 7

// if (num === 7) {
//     console.log('Lucky!')
// }
// else {
//     console.log('Unlucky!')
// }

// num === 7 ? console.log('Lucky!') : console.log('Unlucky!')

// let status = 'online';

// let color = status === 'offline' ? 'red' : 'green';
// console.log(color)

// 2 == “2”; Invalid
// 2 === 2; true
// 10 % 3; 1
// 10 % 3 === 1; true
// true && false; false
// false || true; true
// true || false; true


//Example 13: Array Methods (Pop, Push, Unshift, Shift)
// let colors = ['red', 'blue', 'green', 'yellow'];
// console.log(colors[0].length);
// console.log(colors) //['red', 'blue', 'green', 'yellow']

// console.log(colors.pop())
// console.log(colors) //['red', 'blue', 'green']

// console.log(colors.push('purple'))
// console.log(colors) //['red', 'blue', 'green', 'purple']

// let array1 = [1, 2, 3];
//console.log(array1.unshift(4,5)); //expected output: 5
//console.log(array1); //[1, 2, 3, 4, 5]

//if unshifting multiple items, will retain order of unshifted array and place in front of original array
// let dishesToDo = ['big platter'];
// dishesToDo.unshift('large plate'); //2
// dishesToDo.unshift('small plate'); //3
// console.log(dishesToDo); //['small plate', 'large plate', 'big platter']

// dishesToDo.shift();
// console.log(dishesToDo); //['large plate', 'big platter']

// dishesToDo.shift();
// console.log(dishesToDo); //['big platter']

// dishesToDo.unshift('little spoon', 'big spoon');
// console.log(dishesToDo); //['little spoon', 'big spoon', 'big platter']


//Example 14: Concat
// let fruits = ['apple', 'banana'];
// let veggies = ['green bean', 'tomato'];
// let meats = ['steak','chicken']

// console.log(fruits.concat(veggies)); //['apple', 'banana', 'green bean', 'tomato']
// console.log(veggies.concat(fruits)); //['green bean', 'tomato', 'apple', 'banana']
// console.log(fruits.concat(veggies,meats)); //['apple', 'banana', 'green bean', 'tomato', 'steak', 'chicken']


//Example 15: Includes
// let ingredients = ['water', 'corn starch', 'flour'];

// console.log(ingredients.includes('fish')); //false
// console.log(ingredients.includes('water')); //true
// console.log(ingredients.includes('water', 1)); //does the array contain water after item 1? false

// if (ingredients.includes('flour')) {
//     console.log('I am gluten free and cannot eat that!');
// }

// console.log(ingredients.indexOf('water')); //0


//Example 16: Reverse, join turns into string
// let letters = ['T', 'C', 'E', 'P','S','E','R'];
// console.log(letters.reverse()); // ['R', 'E', 'S', 'P', 'E', 'C', 'T']
// console.log(letters); // variable has been mutated to ['R', 'E', 'S', 'P', 'E', 'C', 'T']

// console.log(letters.join()); //returns string 'R,E,S,P,E,C,T'
// console.log(letters.join('-')); //returns R-E-S-P-E-C-T
// console.log(letters); //still array ['R', 'E', 'S', 'P', 'E', 'C', 'T']


//Example 16: Slice & Splice
// let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

// let swimmers = animals.slice(0, 3);
// let mammals = animals.slice(2, 4);
// let reptiles = animals.slice(4);
// let quadruped = animals.slice(-3, -1);

//Splice changes the contents of an array by removing, replacing, and/or adding new elements in place
//variable.splice(startIndx,deleteCount,'newItemToInsert')
// animals.splice(1,0,'octopus')
// console.log(animals); //adds octopus between shark and salmon

// console.log(animals.splice(3,2)); //removes whale and bear
// console.log(animals)

// animals.splice(3,0,'snake','frog')
// console.log(animals) //adds snake and frog after salmon

// console.log(animals.splice(0,2,'SHARK!','OCTOPUS!')) //replaces shark and octopus with SHARK! and OCTOPUS!
// console.log(animals)
//If ['SHARK!,'OCTOPUS!] were in brackets in splice, array would have entire string as position 0 i.e. nested array


//Example 17: Sorting Arrays
// let people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne']
// people.sort(); //places in alphabetical orer

// let nums = [34, 10, 10000, 67, 99];
// nums.sort(); //[10, 10000, 34, 67, 99]... will NOT sort numeric values
//Instead of sort for nums, must use Compare Functions


//Example 18: Reference Types
// let fruit = 'orange';
// let color = fruit;

// fruit = 'watermelon' //color will still = orange i.e. Value Type Variable where value is stored in memory

// //Arrays are stored as Reference Type Variables where value is saved as a reference point in memory and is therefore mutable
// let nums = [5, 6, 7, 8,];
// let otherNums = nums;
// nums.push(9);
// console.log(otherNums); //[5, 6, 7, 8, 9]
// otherNums.pop();
// otherNums.pop();
// console.log(nums); //nums = [5, 6, 7]... both variables are mutated


//Example 19: Const & Arrays... Most arrays are const
// const myEggs = ['brown', 'brown'];
// myEggs.push('purple');
// console.log(myEggs); // ['brown', 'brown', 'purple']

// console.log(myEggs[0] = 'green');
// console.log(myEggs); // ['green', 'brown', 'purple']

// console.log(myEggs = ['blue','pink']); //Error, assignment to constant variable


//Example 20: Nested Arrays
// const animalPairs = [
//     ['doe', 'buck'],
//     ['ewe', 'ram'],
//     ['peahen', 'peacock']
// ]

// console.log(animalPairs[2]); // ['peahen','peacock']
// console.log(animalPairs[2,1]); // 'peacock'

// animalPairs[0][1] = 'stag'
// console.log(animalPairs[0]) //updates array 0 to ['doe', 'stag']

// //Useful for TicTacToe Board
// const board = [
//     ['O', null, 'X'],
//     [null, 'X', 'O'],
//     ['X', 'O', null]
// ]


//**Array Exercises Quiz**
// const people = ["Greg", "Mary", "Devon", "James"];
// Write the command to remove “Greg” from the array.
// Write the command to remove “James” from the array.
// Write the command to add “Matt” to the front of the array.
// Write the command to add your name to the end of the array.
// Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.
// Write the command that gives the indexOf where “Mary” is located.
// Write the command that gives the indexOf where “Foo” is located (this should return -1).
// Redefine the people variable with the value you started with. Using the splice command, remove “Devon” from the array and add “Elizabeth” and “Artie”. Your array should look like this when you are done [“Greg”, “Mary”, “Elizabeth”, “Artie”, “James”].
// Create a new variable called withBob and set it equal to the people array concatenated with the string of “Bob”.

// people.splice(0,1); //or people.shift()
// console.log(people); //removes Greg
// people.pop();
// console.log(people); //removes James
// people.unshift('Matt');
// console.log(people);
// people.push('Jade'); //adds Jade to end of array
// console.log(people);
// copy = people.slice(2,4); //or people.slice(2), does not need end of array defined
// console.log(copy); //Only includes Devon and Jade
// console.log(people.indexOf('Mary')); //Mary is in Index 1
// console.log(people.indexOf('Foo')); //results -1 not found
// let people2 = ["Greg", "Mary", "Devon", "James"];
// people2.splice(2,1,'Elizabeth', 'Artie');
// console.log(people2); //['Greg', 'Mary', 'Elizabeth', 'Artie', 'James']
// let withBob = people.concat('Bob');
// console.log(withBob); // ['Matt', 'Mary', 'Devon', 'Jade', 'Bob']


//Example 21: Objects use brackets, when you store object in variable it is a Reference Type Variable
//All keys are converted to strings except symbols
// const fitBitData = {
//     totalSteps: 308727,
//     totalMiles: 211.7,
//     avgCalorieBurn: 5755,
//     workoutsThisWeek: '5 of 7',
//     avgGoodSleep: '2:13'
// }

// fitBitData.totalMiles; //211.7
// //if avgGoodSleep = 45 and you print fitBitData.45 it will return an error

// const numbers = {
//     100: 'one hundred',
//     16: 'sixteen'
//     '76 trombones': 'great song'
// }

// numbers.100; //Error
// numbers['100']; //returns one hundred
// numbers.76 trombones; //Error
// numbers['76 trombones']; //returns great song

// const primaryColors = {
//     red: '#eb4d4b',
//     yellow: '#f9ca24',
//     blue: '#30336b'
// }

// console.log(primaryColors.blue); //returns #30336b
// primaryColors[yellow]; //Error bc looking for variable yellow
// console.log(primaryColors['yel'+'low']); //returns #f9ca24


//Example 22: Updating & Adding Properties
// const userReviews = {}

// userReviews['Rajayne24'] = 4.0;
// userReviews['Lapshaman'] = 3.5;
// console.log(userReviews); //{Rajayne24: 4, Lapshaman: 3.5}

// userReviews['AtvDown'] = 4.5;
// console.log(userReviews); //{Rajayne24: 4, Lapshaman: 3.5, AtvDown: 4.5}

// userReviews['Lapshaman'] -= 2.0;
// console.log(userReviews); //{Rajayne24: 4, Lapshaman: 1.5, AtvDown: 4.5}

// const primaryColors2 = primaryColors;
// primaryColors2.green = '#ebf876'
// console.log(primaryColors); //{red: '#eb4d4b', yellow: '#f9ca24', blue: '#30336b', green: '#ebf876'}


// Example 23: How equality works with arrays and objects
// let nums = [1, 2, 3];
// let mystery = [1, 2, 3];

// console.log(nums === mystery); //false
// console.log(nums == mystery); //false

// let moreNums = nums;
// console.log(nums === moreNums); //true

// const user = {
//     username: 'Rajayne24',
//     email: 'rajayne@gmail.com',
//     notifications: []
// }

// if(user.notifications === []) {
//     console.log('No new notifications!')
// }; //will not print as empty array simply equals false

// if(!user.notifications.length) {
//     console.log('No new notifications!')
// }; //if no notifications i.e. empty array [], will print!
//Simliarly, {a:1} === {a:1} will also equal false


//**Objects Quiz**
// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "https://bit.ly/2ysFran"
//   };
// //   Write the command to add the language “Go” to the end of the languages array.
// //   Change the difficulty to the value of 7.
// //   Using the delete keyword, write the command to remove the jokes key from the programming object.
// //   Write the command to add a new key called isFun and a value of true to the programming object.

// programming.languages.push("Go");
// console.log(programming.languages); //['JavaScript', 'Python', 'Ruby', 'Go']
// programming.difficulty = '7';
// console.log(programming.difficulty); //7
// delete programming.jokes;
// console.log(programming); //{languages: Array(4), isChallenging: true, isRewarding: true, difficulty: '7'}
// programming.isFun = true;
// console.log(programming); //{languages: Array(4), isChallenging: true, isRewarding: true, difficulty: '7', isFun: true}


// Example 24: Loops
// const cities = [
//     "San Francisco",
//     "Berlin",
//     "Tokyo",
//     "Moscow",
//     "Buenos Aires"
//   ];
  
//   let i = 0;
  
//   while (i < cities.length) {
//     console.log(cities[i]);
//     i++
//   } 
//   //lists San Francisco, Berlin, Tokyo, Moscow, Buenos Aires
//   //Javascript loops through indices by default... with a for... of loop, iterates through elements
//   for (let city of cities) {
//     console.log(city);
//   }
  //for... of loops don't work on objects! 

// let str = 'pancakes'; //change to waffles for false
// // does the string include a "k"?
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === 'k') {
//     includesK = true; //true
//   }
//   else {
//     includesk = false
//   }
// }

// console.log(includesK)


//Example 25: Reverse Looping
// let myStr = 'live';
// let reversed = '';

// // reverse it!
// for (let i = myStr.length - 1; i >= 0; i--) {
//   reversed += myStr[i];
// }

// console.log(reversed); // 'evil'


//Example 26: While
// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i++; // we must manually increment in the loop body
// }// 0, 1, 2

// //break ends the loop while continue skips to next iteration
// for (let i = 1; i < 5; i++) {
//     if (i > 2 && i < 4) {
//       continue;  // skip these numbers! i.e. skips over 3
//     }
//     console.log(i); //1, 2, 4
//   }


// Example 27: Object Keys return keys while Object Values return values 
// let weirdObj = {
//     hereIsAKey: "here is a value!",
//     "10": "number key!",
//     thisIsABoolean: true,
//     "5": "another number key!",
//     nullValue: null
//   }
  
//   console.log(Object.keys(weirdObj)); 
//   // ["5", "10", "hereIsAKey", "thisIsABoolean", "nullValue"]
//   console.log(Object.values(weirdObj));
//   ["another number key!", "number key!", "here is a value!", true, null]


// Example 28: For Loop + Arrays
// const animals = ['lions', 'tigers', 'bears'];
// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }

// console.log('Oh My!')

// const examScores = [ 98, 77, 84, 91, 57, 66];

// for (let i = 0; i < examScores.length; i++) {
//     console.log(`${i} : ${examScores[i]}`); // 0:98, 1:77, 2:84, 3:91, 4:57, 5:66
// }

// const myStudents = [
//     {
//         firstName: 'Zeus',
//         grade: 86
//     },
//     {
//         firstName: 'Artemis',
//         grade: 97
//     },
//     {
//         firstName: 'Hera',
//         grade: 72
//     }
// ];

// let total = 0;

// for (let i = 0; i < myStudents.length; i++) {
//     let student = myStudents[i];
//     total += student.grade;
// }
// console.log(total/(myStudents.length)); //average grade of 85

// for (let i = 0; i < myStudents.length; i++) {
//     let student = myStudents[i];
//     console.log(`${student.firstName} scored ${student.grade}`);
// } //Zeus scored 86, Artemis scored 97, Hera scored 72

// const word = 'stressed'
// let reversedWord = '';
// for (let i = word.length - 1; i >= 0; i--) {
//     reversedWord += word[i];
// }
// console.log(reversedWord) //desserts



//Example 29: Nested Loops
// for (let i = 1; i <= 10; i++) {
//   console.log('OUTERLOOP', i);
//   for (let j = 10; j >= 0; j-= 2) {
//     console.log('  INNER LOOP  ', j)
//   }
// } //do not use i a 2nd time in nested loops if already declared

//find total of gameboard scores
// const gameBoard = [
//   [ 4, 32, 8, 4],
//   [ 64, 8, 32, 2],
//   [ 8, 32, 16, 4],
//   [ 2, 8, 4, 2]
// ];

// //sum the 2048 gameboard to find totalScore
// let totalScore = 0
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i]; //iterates across the four elements in the array
//   for (let j = 0; j < row.length; j++) {
//     totalScore += row[j]; //i = row while j = element in row... 48, 154, 214, 230 
//     }
// }
// console.log(totalScore); //totalScore = [230]


// Example 30: While Loops are an If + Loop... Identical Problems below
// for (let i = 0; i <= 5; i++) {
//   console.log(i); //lists 0, 1, 2, 3, 4, 5
// } 

// let j = 0
// while (j <= 5) {
//   console.log(j); //Also lists 0, 1, 2, 3, 4, 5
//   j++;
// }



//Example 30: While Loop to guess target number
//while(some condition) { update or attempt to make condition false }
// const target = Math.floor(Math.random() * 10)
// let guess = Math.floor(Math.random() * 10)
// console.log(target);
// while (guess !== target) {
//   console.log(`Target: ${target} Guess: ${guess}`)
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`)
// console.log(`CONGRATS YOU WIN!!`)


//Example 31: Break Keyword
// for (let i = 0; i < 10; i++) {
//   console.log(i); {
//     if (i === 5) //stops looping once i = 5
//     break;
//   }
// }

//rewrite while loop with break
// const target = Math.floor(Math.random() * 10)
// let guess = Math.floor(Math.random() * 10)

// while (true) {
//   if (target === guess) break;
//   guess = Math.floor(Math.random() * 10);
//   console.log(`Target: ${target} Guess: ${guess}`)
// }
// console.log(`Target: ${target} Guess: ${guess}`)
// console.log(`CONGRATS YOU WIN!!`)


//Example 32: For... Of... for (variable of iterable) { statement }
// let subreddits = ['soccer', 'popheads', 'cringe', 'books']

// for (let i = 0; i < subreddits.length; i++) {
//   console.log(subreddits[i]); //i can confuse other developers thinking loop is numbers
// }

// for (let sub of subreddits) {
//   console.log(sub); //cleaner looping
// }

// for (let char of 'cockadoodledoo') {
//   console.log(char.toUpperCase()); //prints capital C O C K A D O O D L E D O O
// }


//Example 33: Comparing For and For... Of to verify rows = 15
// const magicSquare = [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8]
// ]
// // //Using for loop
// // for (let i = 0; i < magicSquare.length; i++) {
// //   let row = magicSquare[i];
// //   let sum = 0;
// //   for (let j = 0; j < row.length; j++) {
// //     console.log(row[j]);
// //     sum += row[j];
// //   }
// //   console.log(`${row} summed to ${sum}`)
// // }
// //Using for... of loop
// // for (let row of magicSquare) {
// //   let sum = 0;
// //   for (let num of row) {
// //     sum += num;
// //   }
// //   console.log(`${row} summed to ${sum}`)
// // }

// const words1 = ['mail', 'milk', 'bath', 'black'];
// const words2 = ['box', 'shake','tub', 'berry'];

// for (let i = 0; i < words1.length; i++) {
//   console.log(`${words1[i]}${words2[i]}`)
// } // for works better bc able to use index to concat related strings


//Example 34: For... Of with Objects
//For... of works with arrays and strings which are iterable
//movieReviews is not iterable
//Object.keys(movieReviews) returns values keys in an array
// const movieReviews = {
//   Arrival : 9.5,
//   Alien : 9,
//   Amelie : 8,
//   'In Bruges': 9,
//   Amadeus : 10,
//   'Kill Bill' : 8,
//   'Little Miss Sunshine' : 8.5,
//   Coraline : 7.5
// };

// // for (let movies of Object.keys(movieReviews)) {
// //   // console.log(movies, movieReviews[movies]); //lists movie titles, movie reviews
// //   console.log(`The movie ${movies} scored ${movieReviews[movies]} in the box office`);
// // }

// const ratings = Object.values(movieReviews);
// let total = 0;
// for (let r of ratings) {
//   total += r;
// }
// let avg = total / ratings.length;
// console.log(avg) //8.6875


//**Loops Quiz
// Numbers up to ten
// 1. Using a for loop console.log all the numbers from 0 to 10
// 2. Using a while loop console.log all the numbers from 0 to 10

// Even numbers to 20
// 3. Using a for loop console.log all the even numbers from 0 to 20

// Odd numbers to 20
// 4. Using a while loop console.log all the odd numbers from 0 to 20

// Back to zero
// 5. Using a for loop console.log all the numbers from 10 to 0.

// for (i = 0; i <= 10; i++) {
//   console.log(i); //logs 0-10
// }
// let i = 0
// while (i <= 10) {
//   console.log(i); //Logs 0-10
//   i++;
// }
// for (i = 0; i <= 20; i+=2) {
//   console.log(i); //Logs even numbers between 0-20
// } 
// let i = 1
// while (i <= 20) {
//   console.log(i); //Logs odd numbers 1-19
//   i+=2
// }
// for (i = 10; i >=0; i--) {
//   console.log(i); //Logs 0-10
// }


//Example 35: Functions
// function order(food) {
//   return `I'll have the ${food}, please.`;
// }
// order("pizza"); //holds value
// console.log(order("pizza")); //prints to console

// Roll Dice
// function rollDice() {
//   let roll = Math.floor(Math.random() * 6) + 1
//   console.log(`Rolled: ${roll}`)
// }
//Yahtzee 6 dice throws
// function throwDice() {
//   rollDice();
//   rollDice();
//   rollDice();
//   rollDice();
//   rollDice();
//   rollDice();
// }


//Example 36: Arguments, inputs in funcitons
// function greet(person) {
//   console.log(`Hello ${person}`) //changes greet to include variable person
// }

//rewrite throwDice & specify how many dice
// function throwDice(numRolls) {
//   for (let i = 0; i < numRolls; i++) {
//     rollDice(); //throwDice(3) will roll 3 dice
//   }
// }


//Example 37: Multiple Arguments
// function square(num) {
//   console.log(num * num);
// }

// function add(x, y) {
//   console.log(x + y);
// }

// function divide(a, b) {
//   console.log(a / b);
// }


// Example 38: Return statement
// function scream(phrase) {
//   return phrase.toUpperCase();
// }

// function isPurple(color) {
//   return (color.toLowercase() === 'purple');
// } //does not need an else statement if true/false with return

function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true; //must be in brackets for array i.e. containsPurple(['blue','purple'])
    }
  }
  return false; //containsPurple(['blue','yellow']) = false
}

// //**Functions Quiz**
// function difference(x,y) {
//   return x - y
// } //difference(2,2); // 0... difference(0,2); // -2
// function product(a,b) {
//   return a * b
// } //product(2,2); // 4... product(0,2); // 0
// function printDay(num) {
//   let dates = {
//     1: "Sunday",
//     2: "Monday",
//     3: "Tuesday",
//     4: "Wednesday",
//     5: "Thursday",
//     6: "Friday",
//     7: "Saturday"
//   };
//   return dates[num];
// }
//can simplify last Element to return arr[arr.length-1]
// function lastElement(arr) {
//   let arrLength = arr.length - 1
//   return arr[arrLength];
// }
// function numberCompare(first,second) {
//   if (a === b) { 
//     return 'Numbers are equal'; 
//   } else if (a > b) { 
//     return 'First is greater'; 
//   } 
//   return 'Second is greater'
// }
// function numberCompare(first,second) {
//   if (first > second) {
//     return "First is greater";
//   }
//   if (first < second) {
//     return "Second is greater"
//   }
//   if (first === second) {
//     return "Numbers are equal"
//   }
// }
// function singleLetterCount(word,letter) {
//   let finalCount = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].toLowerCase() === letter.toLowerCase()) {
//       finalCount++;
//     }
//   }
//   return finalCount;
// }
// function multipleLetterCount(str) {
//   let str = str.toLowerCase();
//   let finalObj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (finalObj[str[i]] === undefined) {
//       finalObj[str[i]] = 1;
//     } else {
//       finalObj[str[i]]++;
//     }
//   }
//   return finalObj;
// }
// function arrayManipulation(array,command,location,value) {
//   if (command === "remove" && location === "end") {
//     return array.pop();
//   }
//   if (command === "remove" && location === "beginning") {
//     return array.shift();
//   }
//   if (command === "add" && location === "beginning") {
//     return array.unshift(value);
//   }
//   if (command === "add" && location === "end") {
//     return array.push(value)
//   }
// }
//ALTERNATIVE ARRAYMANIPULATION
//function arrayManipulation(arr, command, position, val){
//   if(command === 'remove'){
//     if(position === 'end'){
//       return arr.pop();
//     }
//       return arr.shift();
//   }
//   else if(command === 'add'){
//     if(position === 'end'){
//       arr.push(val)
//       return arr;
//     }
//     arr.unshift(val)
//     return arr;
//   }
// }

// function isPalindrome(phrase) {
//   let reversedPhrase = '';
//   for (let i = phrase.length - 1; i >= 0; i--) {
//       reversedPhrase += phrase[i];
//     if (phrase === reversedPhrase) {
//       return true
//     }
//   }
//   return false
// }
//ALTERNATIVE PALINDROME
// function isPalindrome(str){
//   return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();

// function rockPaperScissor() {
//   let player = prompt("Rock, Paper, or Scissor?").toLowerCase;
//   let opponent = Math.floor(Math.random * 3);
//   switch(opponent) {
//     case 1:
//       return "Rock";
//       break;
//     case 2:
//       return "Paper";
//       break;
//     case 3:
//       return "Scissor";
//       break;
//     if (player === opponent) {
//       return `Tied. Player chose ${player} while opponenet chose ${opponent}`
//     }
//     if (player === "Rock" && opponent == "Paper") {
//       return `Lose. Player chose ${player} while opponenet chose ${opponent}`
//     }
//     if (player === "Rock" && opponent == "Scissor") {
//       return `Win. Player chose ${player} while opponenet chose ${opponent}`
//     }
//     if (player === "Scissor" && opponent == "Rock") {
//       return `Lose. Player chose ${player} while opponenet chose ${opponent}`
//     }
//     if (player === "Scissor" && opponent == "Paper") {
//       return `Win. Player chose ${player} while opponenet chose ${opponent}`
//     }
//     if (player === "Paper" && opponent == "Scissor") {
//       return `Lose. Player chose ${player} while opponenet chose ${opponent}`
//     }
//     if (player === "Paper" && opponent == "Rock") {
//       return `Win. Player chose ${player} while opponenet chose ${opponent}`
//     }
//   } 
// }

//ALTERNATIVE ROCK PAPER SCISSOR
// function RPS(){
//   function determineComputer(num){
//     if(num <= .33) return "rock";
//     else if(num <= .66) return "paper";
//     return "scissor";
//   }

//   let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
//   let computerChoice = determineComputer(Math.random());


//   let answers = ["rock", "paper", "scissor"];

//   if(!userChoice || answers.indexOf(userChoice) === -1){
//     return "Please select a valid option";
//   }

//   if(userChoice === computerChoice) return "Tie!";

//   if(userChoice === "rock" && computerChoice === "paper") {
//     return "You lose, computer picked " +  computerChoice;
//   }
//   if(userChoice === "paper" && computerChoice === "scissor") {
//     return "You lose, computer picked " +  computerChoice;
//   }
//   if(userChoice === "scissor" && computerChoice === "rock") {
//     return "You lose, computer picked " +  computerChoice;
//   }

//   return "You win! Computer picked " +  computerChoice;
// }

// function multipleLetterCount(str){
//   str = str.toLowerCase();
//   let finalObj = {};
//   for(let i =0; i< str.length; i++){
//     if (finalObj[str[i]] === undefined){
//       finalObj[str[i]] = 1;
//     } else {
//       finalObj[str[i]]++;
//     }
//   }
//   return finalObj;
// }

//{a: 2, e: 2, i: 2, o: 2, u: 1}
// function strExpand(str) {
//   str = str.toLowerCase();
//   let expandedStr = {};
//   for (let i = 0; i < str.length; i++) {
//     if (expandedStr[str[i]] === undefined) {
//       expandedStr[str[i]] = 1;
//     } else {
//       expandedStr[str[i]]++;
//     }
//   }
//   return expandedStr;
// }

//a2e2i2o2u1
function strExpand(str) {
  str = str.toLowerCase();
  let expandedStr = {};
  for (let i = 0; i < str.length; i++) {
      if (!expandedStr[str[i]]) {
          expandedStr[str[i]] = 1;
      }
      else {
          expandedStr[str[i]]++;
      }
  }
  let outStr = "";
  for (let letter in expandedStr) {
      outStr += `${letter}${expandedStr[letter]}`
  }
  return outStr;
}

// function vowelsOnly(str) {
//   str = str.toLowerCase();
//   let vowels = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
//       vowels += str[i];
//     }
//   }
//   return vowels
// }

// function isPangram(str) {
//   let lowerCaseStr = str.toLowerCase();
//   for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//     if (!lowerCaseStr.includes(char)) {
//       return false
//     }
//   }
//   return true
// }

//recreate repeat fucnction
// function repeat(str, multipler) {
//   let repeatedStr = ''
//   for (let i = 1; i <= multipler; i++) {  
//       repeatedStr += str;
//   }
//   console.log(repeatedStr);
// }

// function removeFromString(str, index, count) {
//   let slicedString = str.slice(0,index) + str.slice(index + count)
//   return slicedString;
// }

//recreate reverse function
// function reverse(arr) {
//   let reversedArr = '';
//   for (let i = arr.length-1; i >= 0; i--) {
//       reversedArr += arr[i];
//   }
//   return reversedArr;
// }

// console.log(reverse([1,2,3,4,5]));

//find lowest value in array without using .min();
function min(arr) {
  lowestVal = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < lowestVal) {
      lowestVal = arr[i];
    }
  }
  return lowestVal;
}

function twoHighest(arr) {
  arr.sort(function(a,b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  let highestVal = arr[arr.length -1];
  let secondHighestVal = arr[arr.length -2];
  return [secondHighestVal, highestVal];
}

//ORIGINAL NON-WORKING SOLUTION... BUT GOOD ATTEMPT?
// function twoHighest(arr) {
//   let highestVal = arr[0];
//   let secondHighestVal = arr[0];
//   let highestValArr = [secondHighestVal, highestVal];
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > highestVal) {
//           highestVal = arr[i];
//       }
//       if (arr[i] > secondHighestVal && arr[i] < highestVal) {
//           secondHighestVal = arr[i];
//       }
//   }
//   return highestValArr;
// }

//recreate slice function
// function sliced(arr,index,len) {
//   let slicedArr = []
//   if (len > arr.length || len === undefined) {
//     len = arr.length;
//   } 
//   for (let i = index; i < len; i++) {
//     slicedArr.push(arr[i])
//   }
//   return slicedArr;
// }

// sliced([8,3,4,5,4],1,3);

// function keys(json) {
//   var obj = JSON.parse(json);
//   var newArray = []
//   for (let key in obj) {
//     newArray.push(key)
//   }
//   return newArray
// }

// function values(json) {
//   var obj = JSON.parse(json);
//   var newValuesArray = [];
//   for (let key in obj) {
//     newValuesArray.push(obj[key])
//   }
//   return newValuesArray;
// }

//works but does not keep rest of object
// function swapKeyAndValue(json, swapKey) {
//   var obj = JSON.parse(json);
//   var newObj = {};
//   for (var key in obj) {
//     newObj[obj[swapKey]] = key;
//   }
//   return newObj;
// }

//swaps key and object, keeps all other pairs unchanged in object
// function swapKeyAndValue(json, swapKey) {
//     var obj = JSON.parse(json);
//     var newObj = {};
//     for (var key in obj) {
//       if (key === swapKey) {
//         newObj[obj[key]] = swapKey;
//       }
//       if (key !== swapKey) {
//         newObj[key] = obj[key];
//       }
//     }
//   return newObj;
//   }
  
// function multiples(x,n) {
//   let multiplesArr = [];
//   for (let i = 1; i <= n; i++) {
//     multiplesArr.push(x*i);
//   }
//   return multiplesArr;
// }


//obj[i] = {name:Tim}; i = 0; value = name
// Reads keys separately needs to return single answer for entire object 
// [{ "name":"Tim", "isBoatOwner":"true" }, { "name": "Matt", "isBoatOwner": "false"}, { "name": "Elie" }]
// isBoatOwner 
// function pluck(obj,value) {
//   var pluckedKey = [];
//   for (let i = 0; i < obj.length; i++) {
//       if (obj[i].hasOwnProperty(value)) {
//         pluckedKey.push((obj[i])[value]);
//       }
//       else {
//         pluckedKey.push(-1);
//     }
//   }
//   return pluckedKey;
// }

// function pluck(json,value) {
//   var obj = JSON.parse(json);
//   var pluckedKey = [];
//   for (let i = 0; i < obj.length; i++) {
//     if (obj[i] === value) {
//       pluckedKey === obj[i];
//     }
//     if (obj[i] !== value) {
//       pluckedKey = -1;
//     }
//   }
// return pluckedKey;
// }

// function countNumbers(arr) {
//   let count = 0;
//   for (let char of "1234567890") {
//     if (!arr.includes(char)) {
//       count = 0;
//     }
//     else {
//       count = (arr++) + 1;
//     }
//   }
//   return count;
// }

// function isThisAnInteger(intNumber) {
//   return !isNaN(intNumber)
// };


// function countNumbers(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (!isNaN(arr[i])) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(countNumbers(["1","down","up","56"]));

// function isPangram(str) {
//   let lowerCaseStr = str.toLowerCase();
//   for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//     if (!lowerCaseStr.includes(char)) {
//       return false
//     }
//   }
//   return true
// }

// function reverse(arr) {
//   let j = arr.length - 1;
//   for (let i = 0; i < arr.length/2; i++) {
//     let firstIndx = arr[i];
//     console.log(`${firstIndx},${arr[j]},${arr[i]}`)
//     arr[i] = arr[j];
//     arr[j] = firstIndx;
//     j--;
//     console.log(arr)
//   }
//   return arr;
// }

// reverse([1,2,3,4,5]);

// var text = '42px';
// var integer = parseInt(text, 10);
// // returns 42
//The first argument is the string to convert. The second argument is called the radix. This is the base number used in mathematical systems. For our use, it should always be 10.

// function minMaxKeyInObject(obj) {
//   var minMax = [minNumber,maxNumber];
//   var newObj = [];
//   var keyNumber = [];
//   for (let key in obj) {
//     keyNumber = parseInt(key);
//     newObj.push(keyNumber);
//     newObj.sort(function(a,b) {
//       if (a > b) return 1;
//       if (a < b) return -1;
//       return 0;
//     });
//     minNumber = newObj[0];
//     maxNumber = newObj[newObj.length -1]
//   }
//   return minMax;
// }

// function minMaxKeyFromObj(obj) {
//   var newObj = []
//   for (let key in obj) {
//     newObj.push(key)
//   }
//   minNumber = newObj[0];
//   maxNumber = newObj[newObj.length -1]
//   console.log(newObj);
//   return [minNumber, maxNumber];
// }

//creates string from keys with comma and space after key = value
// function stringFromObject(obj) {
//   let newString = '';
//   for (let key in obj) {
//     newString += `${key} = ${obj[key]}`
//   }
//   return newString.substring(0,newString.length-2);
// }

//MORE PRACTICE
//1: return new string with str2 appended to str1
function appendToString(str1, str2) {
  let newString = `${str1}` + `${str2}`;
  return newString;
}
//2: return new string with str2 prepended to str1
function prependToString(str1, str2) {
  let newString = `${str2}` + `${str1}`;
  return newString;
}
//3: return character from str at index, if index > str.length, return empty string
function charAt(str, index) {
  if (index > str.length) {
      return "";
  }
  else {
      return str[index];
  }
}
//4: return true if str includes char, false if not without using .includes();
function stringIncludes(str, char) {
  for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
      if (str[i] === char) {
          return true
      }
    }
  return false;
}
// function stringIncludes(str, char) {
//   if (str.includes(char)) {
//       return true
//   }
//   else {
//       return false
//   }
// }
//5: return first index in word where char exists or -1 if char is not found
function stringIndexOf(str, char) {
  let indexOfChar = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      indexOfChar = i;
      return indexOfChar;
    }
  }
  return -1;
}
//6: return last index in word where char exists or -1 if char is not found
function stringLastIndexOf(str, char) {
  let lastIndexOfChar = "";
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (str[i] === char) {
      lastIndexOfChar = i;
    }
    else {
      lastIndexOfChar = -1;
    }
  }
  return lastIndexOfChar;
}
//7: return true if value exists in arr and false if not
function includes(arr, val) {
  for (let num of arr) {
    if (num === val) {
      return true;
    }
  }
  return false;
}
//8: return first index at which value exists or -1 if value is not found
function indexOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
//9: return last index at which value exists or -1 if value is not found
function lastIndexOf(arr, val) {
  let lastIndex = "";
  for (let i = arr.length -1; i >= 0; i--) {
    if (arr[i] === val) {
      lastIndex = i;
      return lastIndex;
    }
  }
  return -1;
}
//10: add value to end of array and return new array
function push(arr, val) {
  return `${arr},${val}`;
}
//11: remove the last value in array and return removed value or undefined if array is empty
function pop(arr) {
  let removedVal = arr[arr.length-1];
  arr = delete(arr[arr.length-1]);
  return removedVal;
}
//12: add value to beginning of array, return new length of array
function unshift(arr, val) {
  let newArr = new Array(val.length).fill(val)
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr.length;
}
//13: removes first value in array then returns new array
function shift(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i])
  }
  return newArr;
}
//14: return new array starting at index till index len
function slice(arr,index,len) {
  let newArr = [];
  for (let i = index; i < len; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
//15: accepts array and returns the sum of all the even numbers squared
function squareEvenNumbers(arr) {
  let evenArr = [];
  let evenSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(Math.pow(arr[i],2));
    }
  }
  for (let j = 0; j < evenArr.length; j++) {
    evenSum = evenSum + evenArr[j];
  }
  console.log(evenSum);
}
//16: accepts object and return array of arrays of key-value pairs
function entries(obj) {
  let objArr = [];
  for (let item in obj) {
    objArr.push([item,obj[item]]);
  }
  console.log(objArr);
}
//17: returns number of times val appears in arr
function countValues(arr,val) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      count++
    }
  }
  return count;
}
//18: accepts integer and generates an array of integer pairs [a,b]
//pairs must be created and sorted by increasing values of a, then increasing values of b
function generatePairs(val) {
  let pairArr = [];

}
//19:

//20: accepts array of strings and returns total number of capitals in each string, do not convert into string
// function totalCaps(arr) {
//   let count = 0;
//   let capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   for (let i = 0; i < arr.length; i++) { //first loop to loop through array
//     for (let j = 0; j < arr[i].length; j++) { //second loop to loop letters
//       if (capLetters.includes(arr[i][j])) {
//         count++
//       }
//     }
//   }
//   return count;
// } //AwesomE,ThIngs,hAppEning,HerE... return 8;

//21: given array of unique num, return new array of rankings of original array
//Ex) given [10,5,20] output should be [2,3,1]
function rankingSystem(arr) {
  
}



//EXAM: 3 IsPangram 4 strExp a2b2
//1: return average or mean of all numbers in array, if array is empty return 0
function calculateAverage(numbers) {
  // Write your code here
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }
  if (sum !== 0) {
      return sum/numbers.length;
  }
  else {
      return 0;
  }
}
//2: write function called dedupe which accepts an array of integers and returns new array with all duplicates removed
function dedupe(numbers) {
  let uniqueNum = [];
  numbers.forEach((element) => {
      if (!uniqueNum.includes(element)) {
          uniqueNum.push(element)
      }
  });
  return uniqueNum;
}



//Javascript Debugger
let grades = [99, 98, 76, 54, 66, 90, 81];
let sum = 0;
for (let i = 0; i <= grades.length; i++) {
  sum += grades[i];
}
let avg = sum / grades.length;


//Try... Catch(e) attempts code and returns catch if error occurs
function displayInitials(user) {
  let firstNameLetter;
  let lastNameLetter;
  try {
    firstNameLetter = user.firstName[0].toUpperCase();
    lastNameLetter = user.lastName[0].toUpperCase();
  } catch (e) {
    return "Invalid input!";
  }
  return `Hello ${firstNameLetter}.${lastNameLetter}`;
}

displayInitials({firstName: "Jason", lastName: "Momoa"})

//Hello