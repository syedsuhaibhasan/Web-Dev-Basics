// const promiseOne = new Promise(function(resolve, reject){
// //DO an async task
//resolve() can be used to pass values to then() block
// //DB Calls, cryptography, network calls
//     setTimeout(()=>{console.log("Async Task is completed");
//         resolve();
//     }, 1000)
// });

// promiseOne.then(function(){
//     console.log("Promise Consumed");
    
// });

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log("promise resolved");
    
// });

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task3");
        
//     },1000)
// }).then(function(){
//     console.log("task 2 completed");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         resolve({username: "Syed Muhammad Suhaib Hasan"});
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })

//passing data from resolve to then
// new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve({username: "Muhammad Ibrahim Sohail"})
//     }, 1000)
// }).then((user)=>{
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error = true;
//         if (!error) {
//             resolve({username:"sohaib hasan", pwd:"123456"});
//         }else{
//             reject('ERROR Something went wrong');
//         }
//     }, 1000);
// });

// promiseFour
// .then( (user)=>{
//     console.log(user);
//     return user.username; 
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(err){
//     console.log(err);
// }).finally(function(){
//     console.log("The promise is either resolved or rejected");
    
// });

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if (!error) {
//             resolve({username:"Java", pwd:"1234"});
//         }else{
//             reject('Java Something went wrong');
//         }
//     }, 1000);
// });  

// //another wya to resolve promises
// async function consumePromiseFive(){
//   try {
//      const response =  await promiseFive;
//    console.log(response);
  
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// // using fetch to call api
// async function getAllusers() {
//     try {
//         const response = await fetch('https://api.github.com/users/syedsuhaibhasan');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllusers();

// // using then() to get response
// fetch('https://api.github.com/users/syedsuhaibhasan')
// .then((response) => {
//     return response.json();
// })
// .then((response) => {
//     console.log(response);
    
// })
// .catch((err) => {console.log(err);
// })