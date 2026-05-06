const promiseOne = new Promise(function(resolve, reject){
//DO an asyn task
//DB Calls, cryptography, network calls
    setTimeout(()=>{console.log("meow gop gop gop");
        resolve();
    }, 1000)
});

promiseOne.then(function(){
    console.log("Hogyaaaa");
    
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("promise resolved");
    
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve({username: "Chai"});
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})