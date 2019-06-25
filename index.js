"use strict";

let myAge = prompt("Input Your Age");
let yourAge = prompt("Input Your Friends Age");

if (myAge && yourAge === Number) {
    switch (myAge > yourAge) {
        case true:
            console.log("You are old man");
            break;
        case false:
            if (myAge < yourAge) {
                console.log("Gratz you are younger than your friend");
            } else if (myAge === yourAge) {
                console.log("Your Age and your friend age  is same");
            } else {
                console.log("You are old man");
            }
            break;
        default:
            console.log("Wrong input");
    }
} else {
    console.log("Please put the number");

}