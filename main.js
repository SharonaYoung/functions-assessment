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
let largest = 0;
const numbs = (arr) => {
 
  for(i=0; i < arr.length; i++){
  //  console.log(arr[i]); 
   if(arr[i] > largest){
    largest = arr[i];
    }   
  }
  return largest;
}
console.log(numbs([300,7,67,49,86,2]));


let largestNumber=[3,98,2,12,245];

/*function findNum(...largestNumber) { 

  return Math.max(...largestNumber);
  }

 console.log(findNum(...largestNumber));*/

