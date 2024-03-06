// assign conflig variable
let coinFlip;
// prompt the user for input and store its value
let iteration = parseInt(prompt("pick a number greater than 0"))
//  check that the input is valid, handles invalid cases
if (iteration <=0 || isNaN(iteration)) {
    console.log("Invalid number")
}
//  for valid cases
else {
    //  iterate through the number of iterations the user entered
for (let i = 0; i < iteration; i++) {
    // assign a random value for each iteration to the conflip
    let randomNum = Math.round(Math.random());
    coinFlip = randomNum;
    //  if its 0, log it as heads, otherwise log it as tails
    if (coinFlip == 0) {
        console.log("Heads")
    }
    else if (coinFlip == 1) {
        console.log("Tails")
    }
}}