function sumAll(arr) {

    arr.sort((a,b) => a -b);
    console.log(arr);
  
    const result = [];
    for(let i = arr[0]; i <= arr[1]; i++){
      result.push(i);
    }
    console.log(result);
    let container = result.reduce((sum, num) => sum + num , 0);
    console.log(container);
    return container;
  }
  
  sumAll([1, 4]);

//   * diff of arrays

function diffArray(arr1, arr2) {
    const newArr = [];
  
    let holder = arr1.filter((elem) => !arr2.includes(elem));
    console.log(holder);
    let holder2 = arr2.filter((elem) => !arr1.includes(elem)); console.log(holder2);
  
    let mainHolder = holder.concat(holder2);
    console.log(mainHolder);
  
    return mainHolder;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// * Destroyer using Seek And Destroy

function destroyer(arr) {

    // * Below provides a container for the arguments object and transform it to an array structure that can be used.
    const valuesToRemove = Array.from(arguments).splice(1);
    
    // ? shows the values
    console.log(valuesToRemove);
  
  // * here we filtered the values that aren't included on the valuesContainer
    const filteredValues = arr.filter((elem) => !valuesToRemove.includes(elem));
    console.log(filteredValues);
  
    return filteredValues
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);g

  // * object mapping filter, for loop using Object.keys to match the given argument

  function whatIsInAName(collection, source) {

    const sourceKeys = Object.keys(source);
    // console.log(sourceKeys);
  
    return collection.filter(obj => {
      for(let i = 0 ; i < sourceKeys.length; i++){
        // console.log(i)
        // console.log(obj);
        // console.log(obj[sourceKeys[i]]);
        // console.log(source[sourceKeys[i]])
        // console.log(source[sourceKeys[i]]);
        if(obj[sourceKeys[i]] !== source[sourceKeys[i]]){
          return false;
        }
      }
      return true;
    })
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  
  // Define the Dog class
  class Dog {
    constructor(name, breed, age) {
      this.name = name;
      this.breed = breed;
      this.age = age;
    }
  
    bark() {
      console.log('Woof! Woof!');
    }
  }
  
  // Create an instance of the Dog class
  const myDog = new Dog('Max', 'Labrador Retriever', 3);
  
  let key = Object.keys({name: 'Max', breed: "Labrador Retriever"});
  let keySource = {name: 'Max', breed: "Labrador Retriever"};
  
  console.log(key[0] === 'name');
  console.log(key[1]);
  console.log(keySource[key[1]] === myDog['breed']);
  console.log(keySource[key[1]])
  console.log(myDog['breed']);
  console.log(myDog[key[0]]);
  console.log(keySource[key[0]] === "Max");
  // Access and log the properties of the Dog instance
  console.log(`Name: ${myDog.name}`);
  console.log(`Breed: ${myDog.breed}`);
  console.log(`Age: ${myDog.age}`);
  
  // Call the bark method of the Dog instance
  myDog.bark();
  

// * Spinal Tap Case
function spinalCase(str) {
 
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  console.log(str.toLowerCase().split(/(?: |_)+/g).join("-"));
  return str.toLowerCase().split(/(?: |_)+/g).join("-")
}

spinalCase('ThisIsSpinalTap');


// PigsLatin

function translatePigLatin(str) {

  // used caret character to check the first character will start and a special range of negated characters that and all the occurences of it
let consonantRegex = /^[^aeiou]+/;

// matches if given regex to check if the arguments passed to the function matches all the characters for the consonant regex
let myConsonants = str.match(consonantRegex);

// functional ternary condition
return myConsonants !== null
  ? str
      .replace(consonantRegex, "")
      .concat(myConsonants)
      .concat("ay")
  : str.concat("way");
}

translatePigLatin("consonant");

// Search and Replace

function myReplace(str, before, after) {
  console.log(str.slice())
  
  var indexChecker = str.indexOf(before);
  console.log(indexChecker);
  console.log(str[indexChecker]);

  if(str[indexChecker] === str[indexChecker].toUpperCase()){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }else{
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  str = str.replace(before, after);
  console.log(str);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


// DNA Pairing

function pairElement(str) {
    
  // create switch case to pair each given characters as their refernece and output
const matchBasePairs = (char) => {
  switch(char){
    case "A":
      return ["A", "T"];
    case "T":
      return ["T", "A"];
    case "C":
      return ["C", "G"];
    case "G":
      return ["G", "C"];
  }
};

// create an storage of array for the arrays to become arrays of array

const pairs = [];
console.log(str.length)
console.log(matchBasePairs(str[0]));

// loops through the given parameter length and pushes all posible cases from the arguments passed to the push method
for(let i = 0; i < str.length; i++){
  pairs.push(matchBasePairs(str[i]))
}

return pairs;
}

pairElement("GCG");

// Missing letter

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    /* code of current character */
    const charCode = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        then a letter was skipped */
    if (charCode !== str.charCodeAt(0) + i) {
      /* if current character skipped past a character find previous character and return */
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");

// * Sorted union using nested for loops and container to store a new array and accepts the argument objects.

function uniteUnique(arr) {
  const newArr = [];

  for(let i = 0; i < arguments.length; i++){
    // console.log(arguments)
    const arrayArguments = arguments[i];
    // console.log(arrayArguments);

    for(let j = 0; j < arrayArguments.length; j++){
      let indexValue = arrayArguments[j];
      // console.log(indexValue);
      // console.log(newArr.indexOf(indexValue));
      if(newArr.indexOf(indexValue) < 0){
          newArr.push(indexValue);
          // console.log(newArr);
      }else{
        console.log('Meron na ndi na ipapasok')
      }
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// * Convert HTML Entities using switch case and splitting the string and joining them back

function convertHTML(str) {

  let tempString = str.split("");
  console.log(tempString);
  console.log(tempString.length)

  for(let i = 0; i < tempString.length; i++){
    switch(tempString[i]){
      case "&":
        tempString[i] = "&amp;";
        break;
      case "<":
        tempString[i] = "&lt;";
            break;
      case ">":
        tempString[i] = "&gt;";
            break;
      case '"':
        tempString[i] = "&quot;";
            break;
      case "'":
        tempString[i] = "&apos;";
            break;
     }
  }
  console.log(tempString);
  tempString = tempString.join("");
  console.log(tempString);
  return tempString;
}

convertHTML("Dolce & Gabbana");

// * Sum of All Fibonnaci

function sumFibs(num) {
  let previousNum = 0;
  let currentNum = 1;
  let result = 0;
 
 console.log(num);
  while(currentNum <= num){
   //  console.log(currentNum)
    if(currentNum % 2 !== 0){
      result += currentNum;
      console.log(result);
    }
    currentNum += previousNum;
    previousNum = currentNum - previousNum;
  }
 
   return result;
 }
 
 sumFibs(4);

 // * sum of all Primes

function sumPrimes(num) {
  // Check all numbers for primality

  // ? variable to store array;
  let primes = [];
  console.log(primes);
  // loop through the size of num
  for (let i = 2; i <= num; i++) {

    // provides condition for every num
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  let container = primes.reduce((sum, prime) => sum + prime, 0);
  console.log(container);
  return container;
  
}

sumPrimes(10);

// Smallet common multiple

function smallestCommons(arr) {

  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperValue = 1;
  for (let i = min; i <= max; i++){
    upperValue *= i;
  }

  // Test all multiple of 'max'
  for (let multiple = max; multiple <= upperValue; multiple++){
     // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++){
      // Count divisors
      if (multiple % i === 0){
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors){
      console.log(numberDivisors);
      console.log(divisorCount);
      console.log(max);
      console.log(multiple);
      return multiple;
    }
  }
}

smallestCommons([1,5]);

//  Drop it Algorithm

function dropElements(arr, func) {

  // ES6 findIndex()
  let sliceIndex = arr.findIndex(func);

  console.log(`sliceIndex Finder = ${sliceIndex} `);
  console.log(`Array length = ${arr.length}`)

  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

// tester
dropElements([1, 2, 3], function(n) {return n < 3; });

const array = [1,2,3,4,5];

// findIndex() function accepts a function that passes the condition and find the index of the given array and parameter
let finder = array.findIndex((n) => {
  return n >= 3;
})
// this debug shows that the index found on the given array compared to parameter was located at index 2
console.log(finder);

// from then this index will be used to determine where's the location that needs to be returned and the rest of array once condition is satisfied
console.log(array.slice(finder));
console.log(array.length);
console.log(array.slice(5))

// SteamRoll Array

function steamrollArray(arr) {

  const flattenedArray = [];

  for (let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
            // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
      // console.log(flattenedArray)
    }else{
       
      flattenedArray.push(arr[i])
      console.log(flattenedArray);
      // console.log(flattenedArray);
    }
  }
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);

function steamrollArrayTer(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArrayTer([1, [2], [3, [[4]]]]);


function steamrollArrayFor(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}

// Binary Agents

function binaryAgent(str) {

  // splits the string to array with space,
  var biString = str.split(" ");

  // storage for the united string from binary conversion
  var uniString = [];
  
  console.log(biString);
  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

// loops through all the array length of the given string
  for (var i = 0; i < biString.length; i++) {

    // pushed the converted string to the array holder using String() method fromCharCode() method accepting value of the parseInt(string, 2);
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join("");
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

// Everything to be true for the object properties

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  let counter = 0;
  // Check for each object
  for (let c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");

// Arguments Optional

function addTogether() {

  // assigns the arguments object
  const [first, second] = arguments;

// conditional for the first and second argument if a number
  if (typeof (first) === "number") {
    if (typeof (second) === "number") return first + second;

    // if arguments length is 1 return the function with arguments 1 value and the second value which wasn't defined
    if (arguments.length === 1) return (second) => addTogether(first, second);
  }
}

// * Object Constructor using Function and also using getter & setter functions

const Person = function(first, last) {

  let firstName = first;
  let lastName = last;

  this.getFirstName = () => {
    return firstName;
  }

  this.getLastName = () => {
    return lastName;
  }

  this.setFirstName = (first) => {
     return firstName = first;
  } 

  this.setLastName = (last) => {
    return lastName = last;
  }

  this.getFullName = () => {
    return this.getFirstName() + " " + this.getLastName()
  };

  this.setFullName = (first, last) => {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};

const Bob = new Person("Bob", "Kamote");
console.log(Bob.getFirstName());
console.log(Bob.getLastName());
console.log(Bob.getFullName());

// Map the debris

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  // Pi formula for given formula
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = (obj) => {
    // the formula for getting the a^3
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    console.log(`this consist an object ${JSON.stringify(obj)} and the value that was used is the object property of avgAlt which is ${obj.avgAlt} `)
    // formula translated for a^3 divided by u which is b variable
    const b = Math.sqrt(c / GM);

  // The values should be rounded to the nearest whole number. The body being orbited is Earth.
  // Math.round() for this one
    const orbPeriod = Math.round(a * b);

    // return a new object
     return {name: obj.name, orbitalPeriod: orbPeriod};
  }

// iterate over the array of object properties using let var "in" array
  for (let elem in arr) {
    console.log(arr[elem]);
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

