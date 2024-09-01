
let firstName = "Korede";
if(firstName){
    if(firstName.length < 3 || typeof firstName !== "string"){
        console.error("Please Enter a Valid Name.");
    }
    else{
    console.log(`Good morning ${firstName}`);
    }
}
else{
    console.log(`Please enter your name`);
}




// switch case



// let day = "Monday";

// switch(day){ 
// case "Monday":
//     grade = "Today is Monday and beginning of the week.";
//   break;
// case "Tuesday":
//     grade = "Wonderful Tuesday";
//    break;
// case "Wednesday":
//     grade = "Great Wednesday";
//    break;
//    default:
//     "Day does not exist";
// }


let number = 350;
let result = Math.pow(number, 2);

console.log("The square of "+ number + ": " + result);

let no = 355.89;
console.log(Math.floor(no));