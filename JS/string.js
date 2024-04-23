// sequence of character

// let username = "markmama";
// console.log(username.endsWith("ma"));

// let result = username.startsWith("mar");
// console.log(result);

// function checkState(){
//     let state = prompt("Enter State: ").toLowercase();
//     isStateStart = state.startsWith("a");

//     if(!isStateStart){
//         document.write(`<p style= "color:red">Oops this application only for any A.`)
//     }
//     else{
//         document.write(`<p style= "color: red"> Congrats`)
//     }
// }


 let school ="Aptech";
// console.log(school.toLocaleUpperCase());
// console.log(school.toLocaleLowerCase());


// console.log(school[school.length -1]);
//  console.log(school.charAt(1));

// for(let i = 0; i< school.length; i++){
    // console.log(school[i]);
    // console.log(school.charAt(4));
// }


// string to array

// let words = "ManU is not a FootBall Team";
// words = words.split(" ");
// console.log(words);


// let words = "ManU, is not, a FootBall, Team";
// words = words.split(",");
// console.log(words);


let words = "ManU is not a FootBall Team";
// words = words.split(" ");
// words = words.split("-");
// console.log(words);


// array to string

// console.log(words.join(" "));
// console.log(words.replace("-", " "));

let newWords = "";
for(let i=0; i<words.length; i++){
  let elem = words[i];

//   if (elem == "-"){
//     newWords += " ";
//   }
//   else{
//     newWords += elem
//   }
}
console.log(newWords);


//

// words = words.substring(0,5);
// console.log(words);


// for(let i = words.length-1; i>= 0; i++){
//     let elem = words.charAt();
//     reverseWord = elem[i];
// }

// console.log(reverseWords);