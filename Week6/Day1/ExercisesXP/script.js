// Exercises XP

// Exercise 1 : Comparison


// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
//     the promise resolves if the argument is less than or equal to 10
//     the promise rejects if argument is greater than 10.

const compareToTen = (num) => {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve("The number is less than or equal to 10");
        } else {
            reject("The number is greater than 10");
        }
    });
}

//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//   Exercise 2 : Promises

// Create a promise that resolves itself in 4 seconds and returns a “success” string.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 4000);
});
  
promise.then((result) => {
console.log(result);
});


// Exercise 3 : Resolve & Reject

// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promiseResolve = Promise.resolve(3);
promiseResolve.then((result) => {
    console.log(result);
});
  
const promiseReject = Promise.reject("Boo!");
promiseReject.catch((error) => {
    console.log(error);
});