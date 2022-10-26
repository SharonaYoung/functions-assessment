// function firstLetterName 
const firstLetterName = (name) =>{
  alert("The name " + name + " starts with the letter " + name[0]);
}
firstLetterName("Sharona");

// function divisibleByTwo
function divisibleByTwo(number) {
  return number % 2 === 0;
}
console.log("6 is divisible by 2: " + divisibleByTwo(6));


// function largest number 
let largestNumber=[3,98,2,12];

function findNum(...largestNumber) { 

  return Math.max(...largestNumber);
  }

 console.log(findNum(...largestNumber));

// const largeNum = () => {
//   console.log("i'm largeNum");
//   let number = 0;
//   const arr = [];
//   for(i = 0; i < Array.length; i++){
//     if(arr[0] > number){
//       number = arr[i];
//     }
//   }
// }
// largeNum();