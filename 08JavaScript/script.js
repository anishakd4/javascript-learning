'use strict';

/*
javascript is a high level object oriented multi paradigm programming language.

JavaScript is a high-level, prototype-based, object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model.

1. it's a multi-paradigm language. In programming, a paradigm is an approach and an overall mindset of structuring our code, which will ultimately direct the coding style and technique in a project that uses a certain paradigm. Now, three popular paradigms are; procedural, object-oriented, and functional programming. Now, many languages are only procedural or only object-oriented or only functional, but JavaScript does all of it. So it's really flexible and versatile.

2. it is a prototype-based, object-oriented approach. Well, first, almost everything in JavaScript is an object, except for primitive values such as numbers, strings, etc. Now, have you ever wondered why we can create an array and then use the push method on it. Well, it's because of prototypal inheritance. Basically, we create arrays from an array blueprint, which is like a template and this is called the prototype. This prototype contains all the array methods and the arrays that we create in our code then inherit the methods from the blueprint.

3.  JavaScript is a language with first-class functions, which simply means that functions are treated just as regular variables. So, we can pass functions into other functions and we can even return functions from functions.

4. JavaScript is a dynamic language and dynamic actually means dynamically-typed. So as we've already seen, in JavaScript, we don't assign data types to variables. Instead, they only became known when the JavaScript engine executes our code. Also, the type of variables can easily be changed as we reassign variables. And this is basically what dynamically-typed means.

5. what actually is a concurrency model? that means how the JavaScript engine handles multiple tasks happening at the same time. But why do we need that? Well, because JavaScript itself runs in one single-thread, which means that it can only do one thing at a time and therefore we need a way of handling multiple things happening at the same time. And by the way, in computing, a thread is like a set of instructions that is executed in the computer's CPU. So basically, the thread is where our code is actually executed in a machine's processor. But what if there is a long-running task, like fetching data from a remote server? Well, it sounds like that would block the single thread where the code is running. But of course we don't want that. What we want is so-called non-blocking behavior and how do we achieve that? Well, by using a so-called event loop. The event loop takes long-running tasks, executes them in the background and then puts them back in the main thread once they are finished. And this is, in a nutshell, JavaScript's non-blocking event loop concurrency model with a single thread.

6. Every program that runs on your computer needs some hardware resources, such as memory and the CPU to do its work. Now, there are low-level languages, such as C, where you have to manually manage these resources.
For example, asking the computer for memory to create a new variable. On the other side, you have high-level languages such as JavaScript and Python, where we do not have to manage resources at all because these languages have so-called abstractions that take all of that work away from us. This makes the language easier to learn and to use, but the downside is that programs will never be as fast or as optimized as for example, C programs.

7. Now, one of the powerful tools that takes memory management away from us developers is garbage-collection, which is basically an algorithm inside the JavaScript engine, which automatically removes old, unused objects from the computer memory in order not to clog it up with unnecessary stuff.

8. Next up, JavaScript is an interpreted or just-in-time compiled language.

*/

/* 
Now every browser has its own JavaScript engine but probably the most well known engine is Google's V-8. The V-8 engine powers Google Chrome, but also Node.js which is that JavaScript runtime.

So any JavaScript engine always contains a call stack and a heap. The call stack is where our code is actually executed using something called execution contexts. Then the heap is an unstructured memory pool which stores all the objects that our application needs.


So a JavaScript engine is simply a computer program that executes JavaScript code.

Now JavaScript used to be a purely interpreted language but the problem with interpreted languages is that they are much, much slower than compiled languages. This used to be okay for JavaScript, but now with modern JavaScript and fully fledged web applications that we built and use today, low performance is no longer acceptable.

Now many people still think that JavaScript is an interpreted language but that's not really true anymore. So instead of simple interpretation modern JavaScript engine now use a mix between compilation and interpretation which is called just-in-time compilation. 

This approach basically compiles the entire code into machine code at once and then executes it right away. So we still have the two steps of regular ahead of time compilation but there is no portable file to execute. And the execution happens immediately after a compilation. And this is perfect for JavaScript as it's really a lot faster than just executing code line by line.


So as a piece of JavaScript code enters the engine the first step is to parse the code which essentially means to read the code. During the parsing process, the code is parsed into a data structure called the abstract syntax tree or AST. This works by first splitting up each line of code into pieces that are meaningful to the language like the const or function keywords, and then saving all these pieces into the tree in a structured way. This step also checks if there are any syntax errors and the resulting tree will later be used to generate the machine code. So this tree has absolutely nothing to do with the DOM. It is not related in any way.


the next step is compilation which takes the generated AST and compiles it into machine code just as we learned in the previous slide. This machine code then gets executed right away because remember modern JavaScript engine use just-in-time compilation.

modern JavaScript engines actually have some pretty clever optimization strategies. What they do is to create a very unoptimized version of machine code in the beginning just so that it can start executing as fast as possible.

Then in the background, this code is being optimized and recompiled during the already running program execution. And this can be done most of the times and after each optimization the unoptimized code is simply swept for the new more optimized code without ever stopping execution of course. And this process is what makes modern engines such as the V-8 so fast.

And all this parsing, compilation and optimization happens in some special threads inside the engine that we cannot access from our code. So completely separate from the main thread that is basically running into call stack executing our own code.
*/

/*
So we can imagine a JavaScript runtime as a big box or a big container which includes all the things that we need in order to use JavaScript in this case, in the browser. And to heart of any JavaScript, runtime is always a JavaScript engine.

Without an engine there is no runtime and there is no JavaScript at all.

However the engine alone is not enough. In order to work properly, we also need access to the web APIs, and we talked about web APIs before, remember? So that's everything related to the DOM or timers or even the console.log that we use all the time. So essentially web APIs are functionalities provided to the engine, but which are actually not part of the JavaScript language itself. JavaScript simply gets access to these APIs through the global window object. But it still makes sense that the web APIs are also part of the runtime, because again a runtime is just like a box that contains all the JavaScript related stuff that we need.

Next a typical JavaScript runtime also includes a so called callback queue. This is a data structure that contains all the callback functions that are ready to be executed. For example we attach event handler functions to DOM elements like a button to react to certain events, right? And these event handler functions are also called callback functions okay. So as the event happens, for example a click, the callback function will be called.

So the first thing that actually happens after the event is that the callback function is put into the callback queue. Then when the stack is empty the callback function is passed to the stack so that it can be executed.

JavaScript can exist outside of browsers, for example, in Node.js. And so here is what the node JS JavaScript runtime looks like. It's pretty similar, but since we don't have a browser of course, we can't have the web APIs because it's the browser who provides these. Instead we have multiple C ++ bindings and a so called thread pool. Different JavaScript runtimes do exist.


EXECUTION CONTEXT:

So the code is now ready to be executed. What happens then, is that a so-called global execution context is created for the top-level code. And top-level code is basically code that is not inside any function. In the beginning only the code that is outside of functions will be executed. Functions should only be executed when they are called.

So, JavaScript code always runs inside an execution context.

in any JavaScript project, no matter how large it is, there is only ever one global execution context. It's always there as the default context, and it's where top-level code will execute.

once this first code, so the top-level of code is finished, functions finally start to execute as well. And here is how that works. For each and every function call, and you execution context will be created containing all the information that is necessary to run exactly that function.

All these execution contexts together, make up the call stack. Now, when all functions are done executing, the engine will basically keep waiting for callback functions to arrive so that it can execute these. For example, a callback function associated with a click event. And it's the event loop who provides these new callback functions

Execution contexts belonging to arrow functions, do not get their own arguments keyword, nor do they get the this keyword. Instead, they can use the arguments object, and the this keyword from their closest regular function parent.

CREATION PHASE:

we will get one global execution context and one for each function. So one for the first function, and one for the second function. In the global context, we have the name variable declaration, the first and second function declarations, as well as the X variable declaration.

For the functions, the variable environment will literally contain all the code of a particular function.

Now the value of X is marked as unknown here, because this value is the result of the first function that we didn't run yet. now in the first function, we have the a variable set to 1 and the b variable which once again requires a function call in order to become known. Finally, the variable environment of the second function, contains the C variable set to 2, and since this is a regular function, so not an arrow function, it also has the arguments object. this object is an array, which contains all the arguments that were passed into the function when it was called. In this case, as you can see, that's 7 and 9.


Well, it's simple because this is an extremely small amount of code. But now imagine there are hundreds of execution contexts for hundreds of functions. How will the engine keep track of the order in which functions we're called? And how will it know where it currently is in the execution? Well, that's where the call stack finally comes in.

CALL STACK:

But what actually is the call stack? Well, it's basically a place where execution contexts get stacked on top of each other, in order to keep track of where we are in the programs execution.

So the execution context that is on top of the stack, is the one that is currently running. And when it's finished running, it will be removed from the stack, and execution will go back to the previous execution context.

So, once the code is compiled, top-level code will start execution. And then as we learned in the beginning of the lecture, a global execution context will be created for the top-level of code, right? So this is where all the code outside of any function will be executed. This execution context will be put in the call stack. And since this context is now at the top of the stack, it is the one where the code is currently being executed.

So, let's continue now with this execution. So here, there is a simple variable declaration. And then the first and the second functions are declared. So nothing fancy, but that's just how normal top-level code gets executed.

But then, in the last line is where things start to get interesting. Here, we declare the X variable, with the value that is gonna be returned from calling the first function. And so let's actually call that function.

Now what happens immediately when a function is called? Well, it gets its own execution context so that it can run the code that's inside its body. And what happens to the context? Well, again it is put in the call stack, on top of the current context, and so it's now the new current execution context.

So, let's continue. So we have yet another simple variable declaration here, and this variable will of course be defined in the variable environment of the current execution context. Then right in the next line, we have another function call. So, let's call that function and move there. And as you guessed a new execution context was created right away for this second function. And once more, it is pushed onto the call stack and becomes the new active context.

Now what's important to note here is that the execution of the first function has now been paused, okay? So again, we are running the second function now and in the meantime, no other function is being executed. The first function stopped at this point where the second function was called and will only continue as soon as this second function returns. And it has to work this way because remember, JavaScript has only one thread of execution. And so it can only do one thing at a time.

Now, moving to the next line, we have a return statement meaning that the function will finish its execution. So, what does that mean for the call stack? Well, it basically means that the function's execution context, will be popped off the stack and disappear from the computer's memory.Actually the popped off execution context might keep living in memory.

The previous execution context, will now be back to being the active execution context again. And so let's also go back to where we were before in the code. And I hope that by now, you start to see how the call stack really keeps track of the order of execution here. Without the call stack, how would the engine know which function was being executed before? It wouldn't know where to go back to, right?

finally this first function also returns. And so here the same as before happens. So the current execution context gets popped off the stack, and the previous context is now the current context where code is executed.

So the current execution context gets popped off the stack, and the previous context is now the current context where code is executed. In this case, we're back to the global execution context and the line of code where the first function was first called. So here, the return value is finally assigned to X and the execution is finished.

Now the program will now actually stay in this state for forever until it is eventually really finished. And that only happens like when we close the browser tab, or the browser window. Only when the program is really finished like this, is when the global execution context is also popped off the stack.

SCOPE AND SCOPE CHAIN:

So scoping controls how our program's variables are organized and accessed by the JavaScript engine.

Now in JavaScript, we have something called lexical scoping. And lexical scoping means that the way variables are organized and accessed is entirely controlled by the placement of functions and of blocks in the programs code.

For example, a function that is written inside another function has access to the variables of the parent function. So again, variable scoping is influenced by where exactly we write our functions and code blocks.

Scope is the space or environment in which a certain variable is declared. And in the case of functions, that's essentially the variable environment which is stored in the functions execution context.

So if now you're asking yourself, what's the difference between scope and variable environment? Then the answer is that for the case of functions, it's basically the same.

Now in JavaScript, we have the global scope, function scope, and block scope.

So the scope of a variable is basically the entire region of our code, where a certain variable can be accessed. And remember, scope is the place in our code where variables are declared. And when I say variables, the exact same thing is true for functions as well. Because in the end, functions are just values that are stored in variables.

So first, the global scope is once more for top level code. So this is for variables that are declared outside of any function or block. These variables will be accessible everywhere in our program, in all functions and all blocks. So really, everywhere.

Next, each and every function creates a scope. And the variables declared inside that function scope are only accessible inside that function. This is also called a local scope.

Now traditionally, only functions used to create scopes in JavaScript. But starting in ES6, blocks also creates scopes now. And with blocks,

But starting in ES6, blocks also creates scopes now. And with blocks, we mean everything that is between curly braces, such as the block of an if statement or a for loop. So just like with functions, variables declared inside a block are only accessible inside that block and not outside of it. 

Now, the big difference is that block scopes only apply to variables declared with let or const. So if I declared a variable using var in this block, then that variable would actually still be accessible outside of the block, and would be scoped to the current function or to the global scope.

In ES5 and before, we only had global scope and function scope And that's why ES5 variables declared with var, only care about functions, but not about blocks. They simply ignore them.

Finally, also starting in ES6, all functions are now also block scoped, at least in strict mode, which you should always be using anyway. And just like with let and const variables, this means that functions declared inside a block are only accessible inside that block, okay?

Remember that starting with ES6, not only functions create scopes, but also blocks. However, these scopes only work for the ES6 variable types. So for let and const variables. That's why the only variable that's in the scope is the decade variable.

if(true){
    let m = 1;
    const n = 0;
    var p = 2;
}

console.log({m}); //error
console.log({n}); //error
console.log({p}); //OK

*/
