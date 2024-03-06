// create end point
let end = 15;
// iterate from 0 to 16, stopping at 15, increment 15
for (let i = 0; i < end + 1; i++ ) {
    //  if the remainder is 0, its even, otherwise its odd, eitherway log i to the console
    if (i % 2 == 0) {
        console.log(`${i} is even`)
    }
    else {
        console.log(`${i} is odd`)
    }
}