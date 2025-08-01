let userScore=0;
let systemScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

let myScore=document.querySelector("#my-score");
let compScore=document.querySelector("#system-score");



const gensystemChoice=()=>{
    let arr=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3);
    return arr[idx];
}
const drawGame=()=>{
      msg.innerText="Game was a draw. Play Again";
      msg.style.backgroundColor="black";
}

const showWinner=(userWin)=>{
    if(userWin){
       msg.innerText="You win";
       msg.style.backgroundColor="green";
       userScore++;
       myScore.innerText=userScore;
    }
    else{
        msg.innerText="You lost :(";
        msg.style.backgroundColor="red";
        systemScore++;
        compScore.innerText=systemScore;
    }
}
const playGame=(userChoice)=>{
    console.log("Your choice: ",userChoice);
    const systemChoice=gensystemChoice();
    console.log("System's choice: ",systemChoice);
    //draw game
     if(userChoice===systemChoice){
    drawGame();
     }
    //rock
    else {
        let userWin=true;
        if(userChoice==="rock"){
            userWin=systemChoice== "paper" ? false:true;
    }
    //paper
    else if(userChoice==="paper"){
        userWin=systemChoice=="scissors" ? false:true;
    }

    //scissors
    else{
        userWin=systemChoice=="rock" ? false:true;
    }
    showWinner(userWin);
}

};


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});