//Given an array containing numbers from 1 to N, with one number missing, find the missing number.

let arr = [1,2,4,5];

const findMissing = (arr) =>{
    let sum = ((arr.length +1)*(arr.length+2))/2
    let arrSum = arr.reduce(((a,b) => a+b ),0)
    return missingNo = sum - arrSum;
}

console.log(findMissing(arr), "missing number");
//*8888888888888888888888888888888888
// What you have findID
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];
  // What you need
  //[20, 24, 56, 88]

  const findId = (officers) => officers.map(officer => officer.id);
  console.log(findId(officers));
  //find total experience of all;
  var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

  const totalExp = pilots.reduce((a,b)=>a + b.years, 0)
  console.log(totalExp, "total experience------------>>>");
  
  const MostExperiencePilot = (pilots) => pilots.reduce(((a,b) => a.years > b.years ? a : b),{})

console.log(MostExperiencePilot(pilots), "most experienced pilot------>>>");
//**************************************************************************************** */
//Our objective: get the total score of force users only. Let’s do it step by step!


var persons = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

  const findingForceUserScore =(persons) => (persons.filter(person => person.isForceUser === true)).map(item => item.pilotingScore + item.shootingScore).reduce(((a,b)=> a+b), 0)

  console.log(findingForceUserScore(persons), "finding forceuserscores------>>>");

  //count number of pets occurances

  var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

  const petOccurance = (pets) => pets.reduce((a,curr) => {
    if(a[curr]){
        a[curr] ++
    }
    else {
        a[curr] = 1
    }
    return a
}, {})
console.log(petOccurance(pets), "pets occurance------->>>")

//finding most recent date for the given array:
const dates = [
    '2019/06/01',
    '2018/06/01',
    '2019/09/01', // This is the most recent date, but how to find it?
    '2018/09/01'
  ]

  const mostRecentDate = (dates) => dates.map((date) =>  new Date(date)).reduce(((a,b) => a > b ? a : b),0)

  console.log(mostRecentDate(dates), "most comman data------>>>");

  //How do you return a map that contains how many characters have a given age? For example, the correct output on the above array would be { 29: 2, 59: 1 }
  const characters = [
    { name: 'Jean-Luc Picard', age: 59 },
    { name: 'Will Riker', age: 29 },
    { name: 'Deanna Troi', age: 29 }
  ];

  const findingCharacter = (characters) => characters.reduce(((a,b)=> {
    if(a[b['age']]) {
        a[b["age"]]++;
    }
    else {
        a[b['age']] = 1
    }
    return a;
}), {})
console.log(findingCharacter(characters), "finding characters------>>>");

//finding duplicate in the array;
const duplicateArray = [3,3,3,8, 9, 10, 10, 4,7];
let result = [];
const removingDuplicates = (duplicateArray) =>{ 
    const result = duplicateArray.filter((item, index) =>{
        if(
            item[index] !== item[index+1]
        ){
            return item;
        }

})
return result;
}
const removingDuplicates2 = (duplicateArray) => duplicateArray.reduce(((a,b)=>{
    if(a.includes(b)) {

    }
    else {
        a.push(b)
    }
    return a;
}),[]);
console.log(removingDuplicates2(duplicateArray),"removing duplicates");



const extractingDuplicates = (duplicateArray) => {
    let result = duplicateArray.filter((item, index)=>  duplicateArray.indexOf(item) !== index)
    return result;
    
}

console.log(duplicateArray)

console.log(extractingDuplicates(duplicateArray))
//turn array in to long string
function stringConcat(arr) {
    // your code here
    let result = arr.reduce(((a,b)=> (a + b.toString()).toString()),"")
    return (result); 
 }
 console.log(stringConcat([1,2,3])); // "123"

 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function totalVotes(arr) {
    // your code here
   let result = arr.reduce(((a, curr)=> {
    if(curr.voted) {
        a = a+1;
    }
    return a;
   }),0)
   return result;
}

 console.log(totalVotes(voters)); // 7

 function shoppingSpree(arr) {
    // your code here
    let result = arr.reduce(((a,b)=> a + b.price),0);
    return result;    
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 console.log(shoppingSpree(wishlist)); // 227005
 function flatten(arr) {
    // your code here
    let result = arr.reduce(((acc, curr) =>{

       return acc.concat(curr)
    }), [])
    return result;
    
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: true}
];

const votersResult = (arr) =>{
    let final =[]
    const result = arr.reduce(((acc, curr) =>{
        if(curr["voted"] && curr["age"] <=20) {
            if(acc["yougvoters"]) {
            acc["youngvoters"]++;
            }
            else {
                acc["youngvoters"] = 1;
  
            }
        
        }
        if(curr["voted"] && 20<= curr["age"] <=30) {
            if(acc["middlevoters"]) {
            acc["middlevoters"]++;
            }
            else {
                acc["middlevoters"] = 1;
  
            }
        
        }
        return acc

    }),[])
    return result;

}
console.log(votersResult(voters),"hiiii")



