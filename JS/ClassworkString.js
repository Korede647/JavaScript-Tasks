// First




// function battleField(str){
//     let upperCount = 0;
//     let lowerCount = 0;
//     for(let i = 0; i < str.length; i++){
//         let elem = str[i];
//         if(elem===elem.toUpperCase()){
//           upperCount++;
//         }
//         else{
//             lowerCount++;
//         }
//     }
//     if(upperCount===lowerCount){
//         return "draw";
//     }
//     if(upperCount > lowerCount){
//         return "UpperCase won";
//     }
//     return "LowerCase won";

// }

// console.log(battleField("SOchiMA"));




// write a program 

// function repeatVowel(str,mul) {
//     let vowel = "aeiou";
//     let result = "";
//     if(mul===0){
//         return str;
//     }
//     for(let i=0; i<str.length; i++){
//         let elem = str[i];
//         if(vowel.includes(elem)){
//             // result += elem.repeat(mul);
//             result += multiplier(elem, mul)
//         }
//         else{
//             result += elem;
//         }
//     }
//     return result;
// }

// console.log(repeatVowel("Sochi", 5));




// repeater function

// function multiplier(str, no) {
//     let ans ="";
//     for(let i=0; i<no; i++){
//         ans += str;
//     }
//     return ans;
// }


// return true or false if a string is palidrone

function PaliWords(str) {
    let RevPalidrone = "";
    for(let i= str.length-1; i>= 0; i++){
    let elem = str[i];
    if(str == RevPalidrone){
        RevPalidrone += str[i];
        return true;
    }
    else{
        RevPalidrone += elem;
        return false;
    }
}
}

console.log(PaliWords("ebube"));





// find the missing number
let numbers = [1, 2, 4, 5, 7, 8, 9] ;
function Numbers(arr) {
    let missing = [];
    for(let i= 0; i> arr.length; i++){
        if(arr[i] == i+1){
            missing.push(i+1);
        }
    }
    return missing;
}

console.log(Numbers(1, 3, 4, 5));