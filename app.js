let max = parseInt(prompt("enter maximum number"));
while(!max){
    max = parseInt(prompt("enter a valid number"));
}

const num = Math.floor(Math.random() * max + 1);
let guess = parseInt(prompt("enter your first guess"));
let attempts = 1;

while(parseInt(guess) !== num){
    if(guess === "q") break;
    attempts++;
    if( guess > num){
        guess = prompt("too high, enter a guess again or type q to quit");
    }
    else if( guess < num)
    {
        guess = prompt("too low, enter a guess again or type q to quit");
    }
    else{
        guess = prompt(`your guess is ${guess}, which is not a valid number`);
    }
}
if(guess === "q"){
    console.log("you quit refesh to try again");
}
else{
    console.log(`yes the number was ${num} it took you ${attempts} attempts`);
}


