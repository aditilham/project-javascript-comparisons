"use strict";

let myAge = parseInt(prompt("Input Your Age"));
let yourAge = parseInt(prompt("Input Your Friends Age"));

if (myAge && yourAge > 0) {
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