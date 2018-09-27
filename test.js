// const promiseToCleanRoom = new Promise((resolve, reject) => {
//   let isClean = false;
//   if(isClean){
//     resolve('Clean');
//   }else{
//     reject('not Clean');
//   }
// });

// promiseToCleanRoom
//   .then(fromResolve => {
//     console.log(`The room is ${fromResolve}`);
//   })
//   .catch(fromReject => {
//     console.log(`The room is ${fromReject}`);
//   })

let cleanRoom = function(){
  return new Promise(function(resolve,reject){
    resolve('Cleaned the room');
  });
};

let removeGarbage = function(message){
  return new Promise(function(resolve, reject){
    resolve(message + ' remove Garbage');
  });
};

let winIcecream = function(message){
  return new Promise(function(resolve, reject){
    resolve(message + ' won Icecream');
  });
};

// cleanRoom()
//   .then((result)=>{
//     return removeGarbage(result);
//   })
//   .then((result)=>{
//     return winIcecream(result);
//   })
//   .then((result)=>{
//     console.log('finished! ' + result);
//   })

//Run all method in parallel
// Promise.all([cleanRoom(), removeGarbage(), winIcecream()])
//   .then(()=>{
//     console.log('All of them finished!');
//   });

//Only one of them finish
Promise.race([cleanRoom(), removeGarbage(), winIcecream()])
  .then(()=>{
    console.log('One of them finished!');
  });