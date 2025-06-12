# Asynchronous JavaScript
In JavaScript, many operations, such as fetching data from a server or setting timers, are asynchronous. This means that these operations don't block the execution of the code. Instead, they run in the background, and the program continues to execute other code.

To handle asynchronous operations, JavaScript provides several mechanisms:

- Callbacks
- Promises _(.then() / .catch() methods) and (Promise.all)_
- Async/Await

This project includes examples using each of these mechanisms to simulate cooking a burger step by step.

Each script in this project represents a different way to handle asynchronous operations. You can debug each script by running the appropriate command, which starts the program in debugging mode.

## Why is Asynchronous Handling Necessary?
JavaScript is a single-threaded language. This means it can only execute one piece of code at a time. However, in real-world applications, there are often tasks that take time, such as:

- Fetching data from a remote server.
- Reading files from the disk.
- Waiting for user input (e.g., a button click or form submission).
- Timers or animations that need to delay for some time.

If we didn’t handle these tasks asynchronously, the application would block until the task completes. This would make your application unresponsive—users wouldn’t be able to interact with the interface, and the program would "freeze" while waiting for the background tasks to finish.

## Available Scripts
- Callback Example: 
```bash
npm run callback
```
- Promise with .then() Example:
```bash
npm run promises-then
```
- Promise.all Example:
```bash
npm run promise-all
```
- Async/Await Example:
```bash
npm run async-await
```

Each script runs using Node.js' inspector mode `--inspect-brk`. This will pause the script at the first line of execution, allowing you to step through the code and understand how each function works in real-time.

## Explanation of Asynchronous Techniques
### 1. Callbacks
A callback is a function passed as an argument to another function, which is executed once the asynchronous operation finishes.

### 2. Promises with `.then()`
Promises provide a cleaner way to handle asynchronous operations. Instead of passing a callback, you chain `.then()` methods to handle the result or error.

Promises make the code easier to read and handle errors better with `.catch()`.

### 3. `Promise.all()`
Sometimes, you want to execute multiple asynchronous operations in parallel and wait for all of them to finish before continuing. This is where `Promise.all()` comes in handy.

`Promise.all()` waits for all promises to resolve and returns their results in an array. If any promise fails, the entire operation fails.

### 4. Async/Await
Async/await is a modern way of handling promises, which makes asynchronous code look and behave more like synchronous code. It eliminates the need for chaining `.then()` methods, making the code easier to read and write.

The `await` keyword pauses the function execution until the promise is resolved or rejected.

## Challenge: Convert Callbacks to Promises, `.then/.catch`, and `async/await`

The code provided on the file `challenge-drink.js` uses callbacks to simulate getting a cup, ice, and a drink, and then serving it. Your challenge is to refactor this code using the following methods:

- Promises: Refactor the code so that each function returns a promise instead of accepting a callback.
- Promise `.then/.catch`: Once you have the promises in place, chain them together using `.then()` and `.catch()` to handle the asynchronous flow.
- Async/Await: Refactor the final version to use async/await for more readable and modern syntax.
- `Promise.all`: After refactoring, think about which actions could happen concurrently. For example, fetching both ice and drink could happen at the same time since they are independent tasks. Use `Promise.all()` to execute multiple promises simultaneously where appropriate.

## Docs

- [Async-Await Cheatsheet](https://www.codecademy.com/learn/paths/web-development/tracks/webdev-intermediate-javascript/modules/asynch-js/cheatsheet)
- [MDN - Promises](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)