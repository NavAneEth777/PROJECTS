const max = prompt("Enter the maximum number");
const random = Math.floor(Math.random() * 100) + 1;
let guess = prompt("guess the number");
while(true) {
    if (guess == "quit") {
        console.log("Quitting...");
        break;
    }
    if (guess == random) {
        console.log("you are right! congratulations!!");
        break;
    } else if (guess < random) {
        guess = prompt("your guess was too small. please try again");
    } else {
        guess = prompt("your guess was too large. please try again");
    }
}