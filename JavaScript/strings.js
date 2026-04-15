const name = "sohaib";
const repoCount = 15;
console.log(`Syed Muhammad Suhaib Hasan has ${repoCount} repositeries`);

const gameName = new String('Syed Muhammad Suhaib Hasan');
console.log(gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newStr = gameName.substring(0,2);
const newStr2 = gameName.slice(-4,2);

console.log(newStr);
console.log(newStr2);

const newStringOne = "   sohaib hasan   ";
console.log(newStringOne);

const trimmed = newStringOne.trim();
console.log(trimmed);

const url = "https://sohauib.com/sebi hasan"
url.replace(" ","-");
console.log(url);

console.log(gameName.split(' '));