const friends = ["ibrahim","ahmed","khurram","aliza"]
// friends.forEach((friend) => {
//     console.log(friend);
// });

// function printMe(item){
//     console.log(item);
// }

// friends.forEach(printMe);

const personBasedSkill = [
    {
        "name":"Ahmed",
        "age":22,
        "skill":"Agentic Ai"
    },
    {
        "name":"Khurram",
        "age":21,
        "skill":"Data Science"
    },
    {
        "name":"Wasiq",
        "age":22,
        "skill":"MERN"
    },
    {
        "name":"Visam",
        "age":24,
        "skill":"React Native"
    },
]

personBasedSkill.forEach((item,index)=>{
    console.log(`Mr. ${item.name} has ${item.skill} skill`);
});