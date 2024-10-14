/*function getHumanChoice(){
    let getNumber= prompt("write your choice : ").toLocaleLowerCase();
    let humanScore=0;


    switch(getNumber){
case 'scissor':
    alert("scissor you choose");
    break;
    case 'rock':
        alert('rock u choose');
        break;
        case 'paper':
            alert("paper you choose");
            break;
            default:
                alert('invalid');
    }
humanScore++;
alert( 'you have tried '+humanScore);

}
console.log(getHumanChoice()); */





/*function getComputerChoice(){
    let getNumber=Math.floor(Math.random()*3)+1;
    let computerScore=0;
    switch(getNumber){
        case 1:
            alert('Scissors');
            break;
            case 2:
                alert('Rock');
                break
                case 3:
                    alert('paper');
                    break;
                    default:
                        alert('invalid');
    }
computerScore++;
alert( 'you have tried '+ computerScore);
}
console.log(getComputerChoice(3)); */







/*function getComputerChoice (){
let getNumber=Math.floor(Math.random()*3)+1;
let computerScore=0;
if(getNumber==1){
    console.log('scissor');
    computerScore++;
    console.log(computerScore);
}else if (getNumber==2){
   console.log('rock');
    computerScore++;
    console.log(computerScore);

}else {
    console.log('paper');
    computerScore++;
    console.log(computerScore);
}

}


console.log(getComputerChoice(3));*/

// function playRound (){
//     let ops=['ROCK', 'SCISSOR','PAPER'];
//     let random=Math.floor(Math.random()*ops.length);
//     let word=ops[random];
//     let hRound=0;
//     let cRound=0;
//     let humanChoice=prompt('enter Rock or Scissor or Paper').toUpperCase();
   
//     if(word == humanChoice){
//         alert('no winner ');

//     } else if (word=='ROCK' && humanChoice=='PAPER'){
//         alert('you beat computer');
//         hRound++;
//         alert('your wins: '+hRound);
//     } 
//     else if (word=='ROCK' && humanChoice=='SCISSOR'){
//         alert('computer beat you');
//         cRound++;
//         alert('computer wins :'+cRound);
//     }
   
//     else if(word==humanChoice){
//         alert('no winner ');
        
//     } else if(word=='SCISSOR' && humanChoice=='ROCK'){
//         alert('you beat computer');
//         hRound++;
//         alert('your wins: '+hRound);
//     }else  if(word=='SCISSOR' && humanChoice=='PAPER'){
//         alert('computer beat you');
//         cRound++;
//         alert('computer wins :'+cRound);
//     }
// else if( word==humanChoice){
//     alert('no winner');
   
// } else if(word='PAPER' && humanChoice=='SCISSOR'){
//     alert('you beat computer');
//     hRound++;
//         alert('your wins: '+hRound);
// } else if (word=='PAPER' && humanChoice=='ROCK'){
//     alert('computer beat you');
//     cRound++;
//     alert( 'computer wins :'+cRound);

// }
// else {
//     alert('invalid');
// }
// }
// playRound();

let roundH=0;
let roundC=0;

function playRound(){
    let choice=['ROCK','PAPER','SCISSOR'];
    let random=Math.floor(Math.random()*choice.length);
    let word=choice[random];
    let choiceH=prompt('enter rock or paper or scissor ').toUpperCase().trim();
    
    
    
    
    if (word===choiceH){
        alert('no winner ');
    }
    else if(word==='ROCK'&& choiceH==='SCISSOR'){
        alert('computer beat you ');
        roundC++;
      
    }else if (word==='ROCK'&& choiceH==='PAPER'){
        alert('you beat computer');
        roundH++;
    }
    else if (word==='SCISSOR' && choiceH==='ROCK'){
        alert('YOU WON');
        roundH++;
       
    }else if (word==='SCISSOR' && choiceH==='PAPER'){
        alert('YOU LOST');
        roundC++;
       
    } else  if (word==='PAPER' && choiceH==='ROCK'){
        alert('you lost');
        roundC++;
   
    }else if (word==='PAPER'&& choiceH==='SCISSOR'){
        alert('won ');
        roundH++;
     
    }else {alert('error');}

    alert('human wins '+roundH+'and computer wins'+ roundC  );

}

for(let i =1;i<=5;i++){ 
    alert('round '+i);

    playRound();
}


























// // function stdInfo(){
// let stdNo=prompt('enter your student number: ');
// let stdName=prompt('enter your name: ');
// let stdLvl=prompt('enter your level (1-4): ');
// let stdGen=prompt('write your gender');
// stdNo=document.getElementById('stdno');
// stdName=document.getElementById('stdname')
// stdLvl=document.getElementById('stdLvl');
// stdGen=document.getElementById('stdgen');
//     stdGen.textContent=stdGen;
//     stdLvl.textContent=stdLvl;
//     stdNo.textContent=stdNo;
//     stdName.textContent=stdName;
// }
// console.log(stdInfo());













