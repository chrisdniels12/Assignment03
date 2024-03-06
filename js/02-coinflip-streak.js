// declare variable
let coinFlip;
let streak = 0;
//  setup do while loop to perform coinflip
do {
    //  generate number  (1 or 0) and assign it to coinFlip
    let randomNum = Math.round(Math.random());
    coinFlip = randomNum;
    // print heads if you get 0 and tails otherwise
    if (coinFlip == 0) {
        console.log("Heads")
        streak++
    }
    else if (coinFlip == 1) {
        console.log("Tails")
    }
    // keep flipping the coin while you land on Heads
} while (coinFlip != 1 )
// log the streak
console.log(`number of Heads in the streak ${streak}`)