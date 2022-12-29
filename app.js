// for (let i = 1; i <= 10; i++)
// {
//     console.log(`i is: ${i}`);
//     for(let j = 1; j < 4; j++) {
//         console.log(`   j is: ${j}`);
//     }
// }

// let count = 0;
// while (count < 10) {
//     count++;
    
//     console.log(count);
    
// }

// Guessing Game:

const answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);

let input = parseInt(prompt("Guess my number between 1 and 100"));
let numGuesses = 1;

while (input !== answer)
{
    if (input > answer)
    {
        input = prompt("Your guess was too high. Try again: ");
    }
    else if (input < answer)
    {
        input = prompt("Your guess was too low. Try again: ");
    } 
    numGuesses++;
}

console.log(`Correct! You guessed ${numGuesses} times`);