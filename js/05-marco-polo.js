//  assign and end point
let finish = 101;
//  create a loop to iterate through from 1 to 100, increment i
for (let i = 1; i < finish; i++ ) {
    //  check if a multiple of 3 and 5 first
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Marco! Polo!")
    }
    //  otherwise check if a multiple of 3 or a multiple of 5 individually and log to the console.
    else if (i % 3 == 0) {
        console.log("Marco!")
    }
    else if (i % 5 == 0) {
        console.log("Polo!")
    }
}