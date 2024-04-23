//multiple value in a single variable :: array

const fruits = ["mango", "apple", "banana", "watermelon"]

// console.log(fruits.length); // check length

// fruits.push("Pawpaw");  // add to end
// fruits.unshift("Orange"); // add to beginning

// let removedItem = fruits.pop(); // remove last
// console.log(removedItem);

// let rFirstItem = fruits.shift() // remove first
// console.log(rFirstItem);

// console.log(fruits);


// 

// function myFruits(arr) {
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i]);
//         if(arr[i] === 'banana'){
//             break
//     }else{
//         console.log(arr[i]);
//     }
// }
// }

// domino.length -1 >>>>    last index  {{index is the item number which starts from 0}}
// domino[0] >>>>    first index



fruits.splice(1,1)  // remove from index one, one item
fruits.splice(1,0, "grape"); // remove from index one, no item but add an item "grape" .
console.log(fruits.include("apple")); // return boolean " true or false"


console.log(fruits.indexOf("banana"));  // to find the index number of an array element
console.log(fruits.reverse); // turns the array elements upside down
fruits = fruits.sort  // arranges in ascending order

fruits = fruits.sort().reverse();   // reverse sorting==>> arranges in descending order




// myFruits(fruits)



function reverseElement(arr){
    let result = [];
    for(let i = arr.length-1; i >= 0; i--){
        console.log(arr[i]);
        result.push(arr[i])
    }
    return result;
}
console.log(reverseElement(fruits));




console.log(fruits.toString());

let peo = ["Mike", "Kenny"];
let pets = ["Cat", "Dog"];

let combine = peo.concat(pets);  // joining of two strings
console.log(combine);

// use spread operator

let newEll = [...peo, ...pets]  // better option
console.log(newEll);


const numbersA = [2,3,5,7,9,5];
let subArr = numbersA.slice(0,3); // makes a copy of the section of the array. negative index is used to indicate offset. Zero to copy all files.
console.log(subArr);


//// IF YOU DONT THINK, YOU WILL STINK   


