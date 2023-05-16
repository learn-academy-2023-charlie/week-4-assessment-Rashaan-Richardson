// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// describe("remove_color", () => {
//     it("Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
//         const colors1 = ["purple", "blue", "green", "yellow", "pink"]
//         // Expected output: ["yellow", "blue", "pink", "green"]
//         const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
//         // Expected output: [["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]   
//         expect(remove_color(colors1)).toEqual(["yellow", "blue", "pink", "green"])
//         expect(remove_color(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
//     })
// })
// HINT: Check out this resource:  

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// Pseudo code:
// input: array
// output : array without 0 index

// b) Create the function that makes the test pass.
const remove_color = (element) => {
  // use a method that can filter each element in the array. Then stack that with a indexing method such as bracket notation or slice. Just need to get rid of the 0 index 
  return element.filter((value) => value).slice(1,element.length)
}
console.log(remove_color(colors1));
console.log(remove_color(colors2));


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
// describe(votes", () => {
//     it("Create a function that takes in an object that contains up votes and down votes and returns the end tally", () => {
//         const votes1 = { upVotes: 13, downVotes: 2 }
//         Expected output: 11
//         const votes2 = { upVotes: 2, downVotes: 33 }
//          Expected output: -31   
//         expect(votes(votes1)).toEqual(11)
//         expect(votes(votes2)).toEqual(-31)
//     })
// })

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:
// input: object
// output : sum of the values in the object

const votes = (element) =>{
  // ideally it should be straight forward. Subtract the key upvotes from the key downvotes
  return element['upVotes'] - element['downVotes']

}

console.log(votes(votes1));
console.log(votes(votes2));


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
// describe("unique_arr", () => {
//     it("Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.", () => {
//          const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
//          const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
//          Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
//          expect(unique_arr = (element1,element2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//     })
// })

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.
// Pseudo code:
// input: multiple arrays
// output : a single array with no duplicates


const unique_arr = (element1,element2) => {
  // Create a variable that stores a concated array of all the parameters. Then use set notation to remove the duplicates. 
  new_arr = element1.concat(element2)
  return new Set(new_arr)
}

const unique_arr1 = ([...element]) => {
    return new Set(element.concat([...element]))
  }

console.log(unique_arr(dataTypesArray1,dataTypesArray2));
console.log(unique_arr(dataTypesArray1,dataTypesArray2));