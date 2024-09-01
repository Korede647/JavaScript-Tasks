

// Given an array of integers nums and an integer target, return indices 
// of the two numbers such that they add up to the target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.
// Example 1:

// input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// // Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// /Example 3:

// input: nums = [3,3], target = 6
// Output: [0,1]





function integerTarget(arr, target) {
       let integer = [0, 0]
    for(let i=0; i< arr.length; i++){        
        
        for(let a= i + 1; a<arr.length; a++){
            if(arr[i] + arr[a] == target){
                integer += integer.indexOf(arr[i]);
            }
        }
    }
    return integer;
}

console.log(integerTarget((3, 2, 4), 6));



// 2.)  A pangram is a sentence that contains every single letter of the alphabet at least once. 
//     For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
//     because it uses the letters A-Z at least once (case is irrelevant).

//     Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
//     Ignore numbers and punctuation.



// function Pangram(str) {
//     let str = (/[a-z A-Z]/);
// }