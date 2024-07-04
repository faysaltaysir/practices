let max = prompt("Input a Max number");
let inpNum = prompt(`Guess a number between 1 to ${max}`);
let random = Math.floor(Math.random()* max)  + 1;
while(true){
    if(inpNum == 'quit'){
        break;
    }
    else if(inpNum == random){
        console.log(`Congrates!! you guessed right. Number was ${random}`);
        break;
    }
    else if(inpNum > random){
        inpNum = prompt("You are wrong! Try a smaller number");
    }
    else if(inpNum < random){
        inpNum = prompt("You are wrong! Try a bigger number");
    }
    
}