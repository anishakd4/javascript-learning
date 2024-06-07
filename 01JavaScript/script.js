let js = "amazing";
if (js === "amazingg") alert("I am fun");
console.log(40 + 90 + 9 - 90);
//let 3years = 7; invalid variable name
//let anish&mutki = 7; invalid variable name variable name can only contain letters numbers underscore and $
//let new =27;
//Another error might occur when we try to name a variable using a reserved JavaScript keyboard.
// let function = 89;
let $function = 89;

let Person = "Jonas";

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

console.log("anish", "manish", "suresh", "mahesh");

let x = 10 + 5;
x *= 10;
x++;
x--;
console.log(x);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Anish"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 34;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is undefined");
}

const favourtie = prompt("Whats your favourite number");
console.log(favourtie);

//Boolean operators
let a = true;
let b = false;

console.log(a);
console.log(b);
console.log(a && b);
console.log(a || b);
console.log(!a);
console.log(a && !b);

//switch statement

let m = 5;

switch (m) {
  case 1:
    console.log("x is 1");
    break;
  case 2:
    console.log("x is 2");
    break;
  case 3:
    console.log("x is 3");
    break;
  case 4:
  case 5:
    console.log("x is 4 or 5");
    break;
  case 6:
    console.log("x is 6");
    break;
  case 7:
}

/*
expression:

So essentially, an expression is a piece of code that produces a value. For example, three plus four is an expression
3+4
true && false

4567
The same goes, for example for just any number. This for example is an expression too, even though it's just a simple value.
But it's still also an expression, because again, this itself will produce a value in JavaScript.
*/

/*
statements:

Now, on the other hand, we have statements.And the statement is like a bigger piece of code that is executed and which does not produce a value on itself.


It simply declares is variable called STR. But that's it. It performs some actions, in this case, declaring this variable, but it doesn't produce a
value.

if( x == 5){
  const m = "343434";
}

Now the string itself, again is an expression.

*/

//Ternary operator
const age = 23;
age >= 23
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

/*
JavaScript history
And actually the reason for ES6 being called ES2015 officially is that in 2015, ECMAScript changed to an annual release cycle.

The reason for that is that they prefer to just add a small number of new features per year,instead of shipping a huge new version
every couple of years, like it happened with ES6.

Now there is one particularity about JavaScript releases, which is pretty unique for any programming language and that's backwards 
compatibility all the way to ES1.

Well, basically it means that if you were to take some JavaScript code written back in 1997 and put it in a modern browser
with a modern JavaScript engine today, it would still work just the same.

So again, the JavaScript engine that's in our browser today is able to understand old code written 25 years ago, without having to 
rely on version numbers or anything like that. 

how can we use modern JavaScript today? Because browsers that users are using might be old and there's no forwards compatibility.

Now, the solution to this problem is to basically convert these modern JavaScript versions back to ES5 using a process called 
transpiling and also polyfilling. We will use a tool called Babel later in the course to transpile our code.

So first off ES5 is of course fully supported in all browsers today, all the way down to internet Explorer nine from 2011.

And we usually call all the current versions together, ES6 plus. Basically all together, they are the modern JavaScript. Now it's 
in this modern JavaScript. And these future releases together are many times called ESNext.
*/
