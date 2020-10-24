let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){

    //generate a random number from 0 to 9
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // return(Math.floor(Math.random() * Math.floor(9)));

    //generates random number 0-9
    return(Math.floor(Math.random() * 10;
}

function compareGuesses(humanGuess, computerGuess, secretTarget){

    let humanGuessMinusSecret = Math.abs(humanGuess - secretTarget);

    let computerGuessMinusSecret = Math.abs(computerGuess - secretTarget);

    if(humanGuessMinusSecret < computerGuessMinusSecret){
        return(true);
    }else if(humanGuessMinusSecret > computerGuessMinusSecret){
        return(false);
    }else{
        return(true);
    }

}


//update the score
function updateScore(string){

    if(string == 'human'){
      humanScore += 1;
    }else if(string == 'computer'){
      computerScore += 1;
    }
    };

    
    //advancd round
    function advanceRound(){
        currentRoundNumber += 1;
      };

      

//test the functions
console.log(generateTarget());

console.log(compareGuesses(5, 9, 6));

updateScore('human');
console.log(humanScore);
console.log(computerScore);

advanceRound();
console.log(currentRoundNumber);

    

