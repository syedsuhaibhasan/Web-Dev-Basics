// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Muhammad Ibrahim Sohail"})
//     },1000)
// })

// promiseOne.then(function(user){
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         let error = true
//         if (!error) {
//             resolve({username: "Syed Muhammad Suhaib Hasan"})
//         } else{
//             reject(`Something went wrong`)
//         }
//     },2000)
// })
// .then((user) => {
//     console.log(user);
//     return user.username    
// })
// .then((username) => {
//     console.log(username);  
// })
// .catch(function(error) {
//     console.log(error);
// }).finally(()=>{
//     console.log("Execueting finally block");
    
// })

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: "Ahmed Ali", password:"123456"})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    const response = await promiseFive
    console.log(response);
}