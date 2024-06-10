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

*/
