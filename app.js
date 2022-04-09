// For loops

// structure
// for (initialization; condition; final expression) { // code to be executed}
    // The final expression is executed at the end of each loop execution. It is commonly used to increment the index.
    // code to be executed will run each time the loop runs

let myArray = ["bird", "cat", "dog", "fish"];

for(let i = 0; i < myArray.length; i++){ 
    console.log(myArray[i]);
}

// i is referencing the index of the array and it is increased after each loop so we get to the next index of the array.


// If you need to iterate through a second level property or field you can nest for loops. 
// The biggest thing you need to keep track of is declaring a separate index variable. Note we used i and j

for (let i = 0; i <= 2; i++) {
    console.log("- First level loop");
    for (let j = 0; j <= 3; j++) {
      console.log("-- Second level loop");
    }
}

// here's an example

let nestedArray = [{"child": ["one", "two", "three", "four"]}, {"child": ["five", "six", "seven", "eight"]}];

for(let i = 0; i < nestedArray.length; i++){ 
    let childArray = nestedArray[i].child; 
    for(let j = 0; j < childArray.length; j++){ 
        console.log(childArray[j]);     
    }
}

// same thing just a different way to see it below
// we passed in the nested array in the arguement when calling the function
// the first loop gets us inside the outer array, the second loop lets us work with the arrays inside the outer array

// uncomment out that console.log to see each of the individual elements printed in your console

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        // console.log(arr[i][j]);
      }
    }
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);



// forEach()

// The forEach() method calls a function for each element in an array.
// Print out each item in the array

let fish = [ "piranha", "barracuda", "cod", "eel" ];

fish.forEach(individualFish => {
	console.log(individualFish);
})

// same thing done with a for loop
for (let i = 0; i < fish.length; i++) {
	console.log(fish[i]);
}

// same thing done with .map
let printFish = fish.map(individualFish => {
	console.log(individualFish);
});

printFish;




// Pluralize all items in the fish array
let pluralFish = fish.map(individualFish => {
	return `${individualFish}s`;
});

pluralFish;

// The original fish variable is unchanged, but pluralFish now contains a modified version of the original variable







// nested mapping


let array = [[1, 2], [3, 4]];
console.log(array.map(([ a, b ]) => [ a * 2, b * 2 ])) //note the output in the console

// map through each subarray
let scores = [[2, 7], [13, 47], [55, 77]];

scores.map(function(subarray) {
    // console.log(subarray)
  return subarray.map(function(number) {
    return console.log(number * 3);
  })
})

// same function just written witout console logs
scores.map(function(subarray) {
  return subarray.map(function(number) {
    return number * 3;
  })
})




// .reduce
let numbers = [ 38, 13, 18, 15, 7, 8 ];

// Get the sum of all numerical values
let sum = numbers.reduce((a, b) => {
	return a + b;
});

sum;

