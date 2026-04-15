// const arr = [1,2,3,4,5];
// // for each loop
// for (const itr of arr) {
//     console.log(itr)
// }

// const str = "hello world!";
// for (const newProg of str) {
//     console.log(newProg);
// }

// Maps
// const map = new Map();
// map.set('IN',"INDIA");
// map.set('PK',"PAKISTAN");
// map.set('IR',"IRAN");

// console.log(map);

// for (const [mapper,mapped] of map) {
//     console.log(mapper,mapped);
// }

// On objects
const obj = {
    'name1':"Syed ",
    'name2':"Muhammad ",
    'name3':"Suhaib ",
    'name4':"Hasan"
}

for (const [key,value] of obj) {
    console.log(key,value);
}