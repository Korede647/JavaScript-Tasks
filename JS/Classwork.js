// const oddNumbers =["1" ..]

// let sum= 0
// function addNumbers(arr){
//     for (let i = 0; i < array.length; i++){
//     if(arr[i] % 2 != 0){
//        sum+= arr[i];
//     }
//     return sum;
//     }
// }

// let num = 7;

// let sum2 = 0;
// function addNumbers(arr){
   
//     for (let i = 0; i < array.length; i++){
//     if(arr[i] % 2 == 0){
//        sum2+= arr[i];
//     }
//     return sum2;
// } 

// }


// function squareNumbers(arr) {
//     for(let i= 5; i< arr.length; i++){
//         if (arr[i] > 5) {
//             sum= arr[i] * arr[i];
//         }
//         return sum
//     }
// }



// let max = arr[0];
// function maxNumber(arr) {
    
//    for(i= 0; i < arr.length; i++){
//   if(arr[i] > max){
//     max = arr[i];
//   }
//   return max
//    }
// }



//   function virtualFight(oddEven) {
//     for()
//   }










// function sumOdd(arr) {
//     let sum =0;
//     for(let i=0; i< arr.length; i++){
//         if(arr[i] % 2 != 0){
//             sum += arr[i];
//         }
//     }
//     return sum
// }


// function sumofEvenNumberThanZero(arr) {
//     let sum = 0; 
//     for(let i=0; i< arr.length; i++){
//         if(arr[i] %2 === 0 && arr[i] > 0){
//             sum += arr[i];
//         }
//     }
//     return sum;

// }

// console.log({
    // console.log(sumEbvenGreaterThanSZero);
    // sumi ();
// });


    




// write JS to remove duplicate element from any given array

// const brands= ["Louis", "Vuitton", "Versace", "Louis", "Versace", "Dior", "Dior"]

function myBrands(arr) {
    let duplicate = [];
    for(let i = 0; i < arr.length; i++){
        if(!duplicate.includes(arr[i])){
            // duplicate.push(arr[i]);
            return "Repeated"
        }
}
    // return duplicate;
}

let realArray = ["Louis","Vuitton", "Versace", "Louis", "Versace", "Dior", "Dior"];
let other = myBrands(realArray);

console.log(other);







//  Big O notation
// Space complexity
// Time complexity