// alert("we are connected")
// console.log(2+2);
// console.log(2*5);

// let, const, var


let name = "Benzen";
// name= "Tayo"
// console.log(name);
// console.log(username);

// const username = "mcgamma";
// username = "Uche";

// console.log(first);
// var first = "Adebayo";


// let password = "1234abc";
// let age = 67;
// let isAdmin= true; // Boolean
// let favorite ={}

// console.log(typeof favorite); // console.log(typeof (fav));
// console.log(2 +"2");
// console.log(4-"2");

// let num1 = 30;
// let num2 = 2;
// console.log(num1%num2);


// let no = parseInt(prompt("Enter a number"));

// if(no % 2 ===0){
//     alert("Even Number")
// }else{
//     alert("Odd Number")
// }

// console.log("true"== true);
// console.log(false====false);




// function message(){
//     alert("Thanks for checking on me.")
// } 

// message();

// let ageG = parseInt(prompt("Enter age"))
// function checkAge(ageG){
//     if(ageG < 18){
//         return "You are below 18"
//     }
//     return "You are above 18"
// }

// console.log(checkAge(ageG));


// const addition =(a,b)=>{
//     return a + b;
// }
// console.log(addition);

// function otp() {
//     let option = "phoneoremail";
// }
// console.log(option); 


// let username ="";
// if(!username){
//     console.error("Please enter username");
// }
// else{
//     console.log(Username accepted);
// }


function greetUser (name) {
    name = prompt("Enter name: ");
    if(!name){
        alert("Please enter your name: ");
        return;
    }
    else{
        document.write(`Thanks ${name} for contacting us`)
    }
}
