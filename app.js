//Exercise 1
// setTimeout(() => {
//   console.log('TIMED OUT!')
// }, 300);

//Exercise 2
//creating a promise
// const promise = new Promise(function(fulfill, reject){
//   setTimeout(() => {
//     fulfill('FULFILLED!');
//   }, 300);
// });

// //observe the outcome of the the promise for the onFulfilled
// const onFulfilled = (message) => {
//   console.log(message);
// };
// promise.then(onFulfilled);


//Exercise 3
//creating a promise
// const promise = new Promise(function(fulfill, reject){
//   setTimeout(() => {
//     reject(new Error('REJECTED!'));
    // try{
    //   throw new Error("Error");

    // }catch(error){
    //   reject(new Error('REJECTED!'));
    // }
//   }, 300);
// });

// const onFulfilled = (message) => {
//   console.log(message);
// }
// const onReject = (error) => {
//   console.log(error.message)
// }

// promise.then(onFulfilled, onReject);


//Exercise 4
//create a promise
// const promise = new Promise(function(fulfill,reject){
//   fulfill('I FIRED');
//   reject(new Error('I DID NOT FIRE'));
// });

// const onFulfilled = (message) => {
//   console.log(message);
// }

// const onRejected = (error) => {
//   console.log(error.message);
// }

// promise.then(console.log, onRejected);



//Exercise 5
// const promise = new Promise(function(fulfill, reject){
//   fulfill('PROMISE VALUE');
// })

// //At this point, the value of the proimse is already known
// //If the promise is not always asynchoronous, console.log would be called with 'PROMISE VALUE' here. This is not the case.
// promise.then(console.log)

// console.log('MAIN PROGRAM');


//Exercise 6
// const promise = new Promise(function(fulfill,reject){

// })

// const success = Promise.resolve('SECRET VALUE');
// promise = Promise.reject(new Error('ERROR!'));

//promise.catch();


//Exercise 7

first()
  .then(result => second(result))
  .then(secondResult => console.log(secondResult));

// const onFulfilled = (result) => {
//   console.log(result);
// }

// var firstPromise = first();

// var secondPromise = firstPromise.then(function (val) {
//   return second(val);
// });

// secondPromise.then(console.log);

// As an alternative to the code above, you could also do this:
// first().then(second).then(console.log);


//Exercise 8
// const attachTitle = arg => {
//   return 'DR. ' + arg;
// }

//creating a fulfilled promise using shorcuts Promise.resolve
// const fulfilledPromise = Promise.resolve('MANHATTAN');

// fulfilledPromise
//   .then(attachTitle)
//   .then(console.log);


//Exercise 9
// const parsePromised = new Promise((fulfill, reject)=> {
//   try {
//     fulfill(JSON.parse(process.argv[2]));
//   } catch (error) {
//     reject(error)
//   }
// });

// const onReject = (error) => {
//   console.log(error.message)
// }

// parsePromised
//   .then(console.log)
//   .catch(onReject)

//official exercise 9 answer
// function parsePromised(json) {
//   return new Promise(function (fulfill, reject) {
//     try {
//       fulfill(JSON.parse(json));
//     } catch (e) {
//       reject(e);
//     }
//   });
// }

// function onReject(error) {
//   console.log(error.message);
// }

// parsePromised(process.argv[2])
// .then(null, onReject);


// Exercise 10


