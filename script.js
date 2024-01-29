// // alert("the app is connected to the script");
// // console.log("app is connected!");

// // arrays

// const groceries = [
//   "apple",
//   "banana",
//   "oranges",
//   "pear",
//   "bluebarries",
//   "strawberries",
// ];
// // groceries.push('grapes')

// // console.log(groceries[1]);
// // console.log(groceries);

// // adding an item to the array
// // groceries.push("cucumber");

// // using the slice method to create a new array that takes a range of values from an array
// // console.log(groceries.slice(0, 2));
// // console.log(groceries.slice(2))
// // console.log(groceries.slice(1,5))

// // using the indecof array method
// // console.log(groceries.indexOf("bluebarries"));

// // finding the length of an array
// // console.log(groceries.length);

// // working with objects

// const person = {
//   name: "Mpho",
//   surname: "Chuene",
// };

// const person2 = {
//   name: "Qazi",
//   shirt: "black",
// };
// // // dot notation
// // console.log(person.name);
// // console.log(person.surname);

// // // bracket notation
// // console.log(person["name"]);

// // person.phone = "075945392324";
// // console.log(person);

// // using the bracket notation
// // console.log(person2["shirt"]);

// // const introducer = (name, shirt) => {
// //   const person = {
// //     name: name,
// //     shirt: shirt,
// //   };

// //   const intro = `hello there! my name is ${person.name} and my shirt color is ${person.shirt}`;

// //   return intro;
// // };

// // console.log(introducer("Mpho", "Black"));

// // template literals using es7 arrow function

// // const intro = (name, age) => {
// //   const person = {
// //     name: name,
// //     age: age,
// //   };

// //   const printer = `hello my name is ${person.name} and my age ia ${person.age}`;
// //   return printer;
// // };

// // console.log(intro("Mpho", 21));

// // const intro2 = (name, shirt) => {
// //   const leonardo = {
// //     name: name,
// //     shirt: shirt,
// //   };

// //   const sentence = `hey there! my name is ${leonardo.name} and my shirt color is ${leonardo.shirt}`;
// //   return sentence;
// // };

// // console.log(intro2("Leonardo", "yellow"));

// // practice 2
// const introduction = (fullName, Age, ID) => {
//   const person = {
//     fullName: fullName,
//     Age: Age,
//     ID: ID,
//     assets: 100000,
//     liabilities: 2000,
//     neteworth: function () {
//       return this.assets - this.liabilities;
//     },
//   };

//   const statement = `hello my full name is ${person.fullName} and am ${
//     person.Age
//   }, my id is as follows  ${
//     person.ID
//   }. my networth is said to be around R${person.neteworth()}`;
//   return statement;
// };

// console.log(introduction("Mpho Chuene", 21, 0234053059053));

// arrays and object exercises
// const letterCounter = () => {
//   const word = prompt("please enter a phrase here");

//   let index = 0;

//   for (const letter in word) {
//     // console.log(Number(letter) + 1);
//     index = Number(letter) + 1;
//   }
//   return { index };
// // };
// const sumArrray = (numbers) => {
//   let sum = 0;
//   for ( number of numbers) {
//     console.log(number);
//     sum = sum + number;
//   }
//   return { sum };
// };
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(sumArrray(numbers));

// write a program to loop through an array and set the variable number to the highest number in the array

// const numberPicker = (numbers) => {
//   let result = numbers[0];
//   //   loop
//   for (const number of numbers) {
//     if (number > result) {
//       result = number;
//     }
//   }
//   return { result };
// };

// const numbers = [1, 2, 3, 4, 5, 10, 1];
// console.log(numberPicker(numbers));

// const Maxnumber = (nums) => {
//   let result = nums[0];

//   for (let num of nums) {
//     if (num > result) {
//       result = num;
//     }
//   }
//   return { result };
// };

// const nums = [1, 2, 4, 5, 67, 8];

// console.log(Maxnumber(nums));

// create an letter frequency coounter

// const LetterFrequency = (phrase) => {
//   let frequency = {};
//   for (letter of phrase) {
//     if (letter in frequency) {
//       frequency[letter] = frequency[letter] + 1;
//     } else {
//       frequency[letter] = 1;
//     }
//   }
//   return frequency;
// };
// const phrase = "haha fools on you";
// console.log(LetterFrequency(phrase));

// highest number in the array
// const HighNumber = (Numbers) => {
//   let highNum = Numbers[0];
//   for (let number of Numbers) {
//     if (number > highNum) {
//       highNum = number;
//     }
//   }
//   return highNum;
// };
// const Numbers = [1, 3, 4, 5, 6, 78, 9];
// console.log(HighNumber(Numbers));

//letter frequency

// const LetterFrequency = (phrase) => {
//   let container = {};

//   for (letter of phrase) {
//     if (letter in container) {
//       container[letter] = container[letter] + 1;
//     } else {
//       container[letter] = 1;
//     }
//   }
//   return container;
// };

// const phrase = "haha";
// console.log(LetterFrequency(phrase));
// word counter

// const wordFrequency = (splitterPhrase) => {
//   const container = {};
//   // const wordsplit = phrase.split(" ");
//   for (let word of splitterPhrase) {
//     if (word in container) {
//       container[word] = container[word] + 1;
//     } else {
//       container[word] = 1;
//     }
//   }
//   return container;
// };

// const phrase = "hello Mpho, hello world!";
// const splitterPhrase = phrase.split(" ");

// console.log(wordFrequency(splitterPhrase));

//word frequency

// const wordSplitter = (phrase) => {
//   let wordContainer = {};

//   for (word of phrase) {
//     console.log(word);
//     if (word in wordContainer) {
//       wordContainer[word] += 1;
//     } else {
//       wordContainer[word] = 1;
//     }
//   }
//   return { wordContainer };
// };

// const phrase = "hello mpho, hello world!";

// console.log(wordSplitter(phrase.split(" ")));

// sum of numbers in an array

// const sum = (array) => {
//   let result = 0;
//   for (num of array) {
//     console.log(num);
//     result += num;
//   }
//   return { result };
// };

// const array = [1, 2, 3, 4, 5];
// console.log(sum(array));

// using the filter method

// const array = [12, 4, 546, 7, 4];

// const sum = array.reduce((prev, value) => {
//   return prev + value;
// }, 0);

// console.log(sum);

// const sumArray = (array) => {
//   let sum = 0;
//   for (num of array) {
//     console.log(num);
//     sum = sum + num;
//   }
//   return { sum };
// };
// console.log(sumArray(array));

// const NewArray = array.filter((num) => {
//   return num > 4;
// });
// console.log(NewArray);

// sum of all array using the reduce  method

const array2 = [1, 2, 3, 4, 5, 6];

// const AddFunction = array2.reduce((prevValue, value) => {
//   return prevValue + value;
// }, 0);

// console.log(AddFunction);

// const newArray = array2.reverse();
// console.log(newArray);

// const reduceArray = newArray.reduce((oldVal, value) => {
//   return oldVal + value;
// }, 0);

// console.log(reduceArray);

//filtering
// const filter = array2.filter((number) => {
//   return number > 4;
// });

// console.log(filter);

// sum of all natural numbers

// const sumNumbers = (array) => {
//   let result = 0;
//   for (number of array) {
//     // console.log(number);
//     result += number;
//   }
//   return { result };
// };

// const array = [1, 2, 3, 4, 5, 6];

// console.log(sumNumbers(array));

// another method of adding the sum of all numbers

// const sumOfNumbers = (num) => {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return { sum };
// };

// console.log(sumOfNumbers(6));

// sum of all numbers the user passes

// const sumOfNumbers = (num) => {
//   let result = 0;
//   for (i = 0; i <= num; i++) {
//     result = result + i;
//   }
//   return { result };
// };

// console.log(sumOfNumbers(10));

// sum of all numbers in a digit
// const sumNumber = (num) => {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// };
// console.log(sumNumber(540));

// program to check whether the sum of 2 numbers in 100 or 1 is 100 then prints true of false if the ocndintion is not satisfied

const sumNumbers = (num1, num2) => {
  if (num1 + num1 === 100 || num1 === 100) {
    return true;
  } else {
    return false;
  }
};
console.log(sumNumbers(100));

// program to get the file extention name

// const fileExtention = (fileName) => fileName.slice(fileName.lastIndexOf("."));

// console.log(fileExtention("index.html"));
const extentionName = (file) => file.slice(file.lastIndexOf("."));

console.log(extentionName("script.js"));

// program to shift the letter forward in a word
// const wordShifter = (word) =>
//   word
//     .split("")
//     .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
//     .join(" ");

// console.log(wordShifter("bce"));

// const wordIncrementer = (word) =>
//   word
//     .split("")
//     .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
//     .join("");

// console.log(wordIncrementer("efg"));

// fibonacci sequence

// const fibonacci = (n) => {
//   let fibo = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// };

// console.log(fibonacci(5));

// fibonacci redo

// const fibosequence = (n) => {
//   let array = [0, 1, 1, 2];

//   for (let i = 3; i < n; i++) {
//     array[i] = array[i - 1] + array[i - 2];
//   }
//   return array
// };

// console.log(fibosequence(8))

// factorial of a  number
// const factorial = (n) => {
//   let result = 1;
//   for (let i = 2; i < n; i++) {
//     // console.log(i);
//     result = result * i;
//   }
//   return result;
// };
// console.log(factorial(5));

// const factorial = (n) => {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// };
// console.log(factorial(5));

// factorial

// const Factorial = (n) => {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// };
// console.log(Factorial(5));

// factorial
// const factorial = (n) => {
//   result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// };

// console.log(factorial(5));

// determine prime numbers

const primeNumbers = (n) => {
  if (n < 2) {
    return true;
  }
  for (let i = 2; i < n; i++) {
    if (i % n === 0) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(primeNumbers(5));

// factorial of a number
const Factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return { result };
};

console.log(Factorial(5));

// determine prime numbers
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
    return true;
  }
};

console.log(isPrime(5));

// fibonacci sequence

const fibo = (n) => {
  let array = [0, 1];

  for (let i = 2; i < n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array;
};
console.log(fibo(8));
