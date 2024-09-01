


// Complete the function so that it converts dash/underscore delimited words into camel casing. 
//     The first word within the output should be capitalized only if the original word was capitalized 
//     (known as Upper Camel Case, also often referred to as Pascal case).

//     EXAMPLES:
//    (A) "the-stealth-warrior" gets converted to "theStealthWarrior"
//     (B) "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


function camelCasing(str) {
    let camCase = str.split(/[-_]/);
    let upperCamel= camCase[0];
    
    for(let i=1; i< camCase.length; i++){
       let elem = str[i];
       if(elem = "-"){
        upperCamel += "";
       }
       else if(elem = "_"){
        upperCamel += "";
       }
    }

    for (let i = 1; i < camCase.length; i++) {
        let camCase2 = camCase[i];
        upperCamel += camCase[i].charAt(0).toUpperCase() + camCase[i];
    }
     return upperCamel;
    console.log(str.join(""));
}

console.log(camelCasing("the-stealth-warrior"));




// let word = "the-winter-soldier";
// function tocamelcase(str) {
//      let dasplit = word.split(/[-_]/);
//      let casestr = dasplit[0];

// for (let i = 0; i < dasplit.length; i++) {
//     casestr += dasplit[i].charAt(0).toUpperCase() + dasplit[i].slice[1];
// }
//  casestr.join("")
// return casestr;
//   }
// console.log(tocamelcase(word));