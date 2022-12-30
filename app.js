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

// const answer = Math.floor(Math.random() * 100) + 1;
// console.log(answer);

// let input = parseInt(prompt("Guess my number between 1 and 100"));
// let numGuesses = 1;

// while (input !== answer)
// {
//     if (input > answer)
//     {
//         input = prompt("Your guess was too high. Try again: ");
//     }
//     else if (input < answer)
//     {
//         input = prompt("Your guess was too low. Try again: ");
//     } 
//     numGuesses++;
// }

// console.log(`Correct! You guessed ${numGuesses} times`);

// ==============================================
// For of loop

const subreddits = ['cringe', 'books', 'coffee', 'mushrooms', 'funny', 'memes', 'dunkin'];

for (let subreddit of subreddits)
{
    console.log(subreddit);
}

// even more powerful when it comes to multi dimensional arrays

const seatingChart = [
    ['Ryan', 'Caitlyn', 'Simon'],
    ['Daxton','Jet','Kenny'],
    ['Skylar','Evan','Delaney']
]

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

// we can use any iterable object, such as a string

const hero = 'Sombra';

for (let letter of hero)
{
    console.log(letter);
}

// Okay... but in JS normal objects are not iterable

const testScores = {
    keenan: 90,
    daemon: 100,
    brian: 0,
    endo: 1000,
}

// To iterate over a standard object (key: value,) we use a for in loop.
for (let person in testScores) {
    console.log(`Person ${person} scored: ${testScores[person]}`);
}

let sumOfScores = 0;
let numScores = 0;
for (let personScore of Object.values(testScores)) {
    sumOfScores += personScore;
    console.log(personScore);
    numScores++;
}
console.log(`Scores average: ${sumOfScores / numScores}`);