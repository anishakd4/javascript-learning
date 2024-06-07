"use strict";
// "use strict";
/*
So strict mode is a special mode that we can activate in JavaScript, which makes it easier for us to write a secure JavaScript code.

Now what's important is that this line of code, so this statement here basically has to be the very first statement in the script.
So if we have any code before this then strict mode will not be activated. Comments are allowed because JavaScript will just ignore 
them but no code.

Okay, now we actually can also activate strict mode, only for a specific function or a specific block.

*/
let hasDriversLicence = false;
const passTest = true;

// if (passTest) hasDriverLicence = true;
if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log(" I can drive car");

// const interface = "anish";
// const private = 534;

/*

with strict mode we write more secure code. And with secure, I mean that strict mode makes it easier for us developers to avoid accidental 
errors.

strict mode forbids us to do certain things and second, it will actually create visible errors for us in certain situations in which 
without strict mode JavaScript will simply fail silently without letting us know that we did a mistake.

it creates visible errors and the developer console, where in other situations JavaScript would just fail silently.

Now another thing that strict mode does is to introduce a short list of variable names that are reserved for features that might be added to the language a bit later.
*/

/*
Functions

A function is simply a piece of code that we can reuse over and over again in our code.
*/

function logger() {
  console.log("My name is Anish");
}

logger();

//function declarations
function calAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calAge1(1991);
console.log(age1);

//function expression
const calAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calAge2(1985);
console.log(age2);

//we can actually call function declarations before they are defined in the code.

console.log(calAge3(1980));
function calAge3(birthYear) {
  return 2037 - birthYear;
}

//But if we attempt to do the same with the expression, then that should not work.

// console.log(xxxx(1980));
const xxxx = function calAge4(birthYear) {
  return 2037 - birthYear;
};

//and internally this happens because of a process called hoisting

const calAge5 = (birthYear) => 2037 - birthYear;
console.log(calAge5(1970));

/*
So we can only omit the return here in case we have a one-liner function like here.
But if we have more, then we need to do the return still.
*/

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1960));

const yearsUntilRetirement2 = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement2(1960, "Anish"));

/*
Arrays
*/

const friends = ["Anish", "Manish", "Suresh", "Mahesh"];
console.log(friends);

//And so here we used a different way of creating the Array, which was using this Array function.

//So on the rate can hold as many values as we want. And also values of any type that we'd like.
const years = new Array(1990, 1995, 2001, 2005);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);

//only primitive values, are immutable. But an Array is not a primitive value. And so we can actually always change it so we can mutate it.

friends[10] = "sdfsdfsdf";
console.log(friends);
console.log(friends.length);

//we can not do is to actually replace the entire Array. So we cannot do this.

//friends = ["bob", "alice"];

const jonas = ["firstName", "lastName", 2037 - 1991, friends];
console.log(jonas);
console.log(jonas.length);

//we get the result, "not a number." And so that's the result of attempting to subtract a whole Array

console.log(calAge1(years));

console.log(years + 10);
console.log(years - 10);

console.log(years);

//Push adds to the end of the array
years.push(1899);
console.log(years);

//the push function does return a value and the value that it returns is the length of the new array.
console.log(years.push(1799));

//there's also methods to add elements to the beginning of the array so that is the unshift method.
years.unshift(1457);
console.log(years);

//the unshift function does return a value and the value that it returns is the length of the new array.
console.log(years.unshift(1290));

//pop will remove the last element of the array
years.pop();
console.log(years);

//Now, again this pop method also returns something, but this one doesn't return the length of the new array but instead, it returns the removed element.
console.log(years.pop());
console.log(years);

//shift removes the first element of the array
console.log(years.shift());
console.log(years);

//returns in which position a certain element is in the array.
//Now, if we try the same thing for an element that is not in there, let's say Bob, we will get minus one.
console.log(years.indexOf(1990));
console.log(years.indexOf(2000));

//includes, instead of returning the index of the element will simply return true if the element is in the array and false if it's not.
//So this one is an ES6 method and it's called includes.

console.log(years.includes(2000));
console.log(years.includes(1990));

//because it is testing with strict equality which means that it does not do type coercion.
console.log(years.includes("1990"));

//Objects: So in objects, we actually define key value pairs.
/* 
So there are multiple ways of creating objects. But again, using the curly braces like this is the easiest one,
and it's called the object literal Syntax
*/

const jonasObject = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

//in console log the properties are ordered alphabetically, but order doesn't matter in objects
console.log(jonasObject);

console.log(jonasObject.lastName);
console.log(jonasObject["lastName"]);

const interestedIn = prompt(
  "What do you want to know about about Jonas? Choose between first name and last name, age, job and friends"
);

//undefined is what we get when we try to access a property on an object that does not exist.
console.log(jonasObject.interestedIn);

console.log(jonasObject[interestedIn]);

jonasObject.location = "India";
jonasObject["twitter"] = "@kumaranishdubey";

//functions are really just another type of value. And if a function is just a value then that means that we can create a key value pair
//in which the value is a function.

//So any function that is attached to an object is called a method.

const jonasObject2 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  job: "teacher",
  birthYear: 1990,
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
  calcAge2: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },
  calcAge3: function () {
    //So we calculate the age, and then we create a new property on the current object. So in this case, on the Jonas object,
    this.age = 49;
    return this.age;
  },
};

console.log(jonasObject2.calcAge(1991));
console.log(jonasObject2["calcAge"](1991));
console.log(jonasObject2.calcAge2(1991));

// Arrays are actually also objects, that's why they can have methods as well.

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifing weights repetiotion: ${rep}`);
}

const types = [];
for (let i = 0; i < jonas.length; i++) {
  console.log(i, jonas[i], typeof jonas[i]);
  types[i] = typeof jonas[i];
}
console.log(types);

const types2 = [];
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") {
    continue;
  }
  types2[i] = typeof jonas[i];
}

console.log(types2);

let j = 0;
while (j < jonas.length) {
  console.log(j);
  j++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log({ dice });
