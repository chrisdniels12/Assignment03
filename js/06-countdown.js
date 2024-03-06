// ask the user for input
let countDown = parseInt(prompt("enter an integer greater than 0"))
//  input validation, check if the value is a number or if the value is negative
if (countDown <= 0 || isNaN(countDown)) {
    console.log("enter a positive number please. Try again")
}
//  for all other cases, count down to from the users input
else {
    for (countDown; countDown >= 0; countDown--) {
        console.log(countDown)
    }
}