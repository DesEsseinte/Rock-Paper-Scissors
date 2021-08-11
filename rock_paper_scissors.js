    let randomChoice
    let computerSelection
    let playerSelection

    let hCounter=0;
    let cCounter=0;
    let gameCounter=0;
    let message

    //computerPlay() selects the computer's play when called.
       function computerPlay() {
           randomChoice=Math.floor(Math.random()*3)+1;
           if (randomChoice==1) {
               computerSelection=1;
               displayComputer.textContent="Computer plays rock";
           }else if (randomChoice==2) {
               computerSelection=2;
               displayComputer.textContent="Computer plays paper";
           }else if (randomChoice==3) {
               computerSelection=3;
               displayComputer.textContent="Computer plays scissors";
           }
       }


//playRound() calls computerSelectio() and compares Computer vs Human and returns
//the winner of each round. It also keeps & displays score.
       function playRound(human,computer) {
           computerPlay();
           human=playerSelection;
           computer=computerSelection;
           displayPlayer.textContent="You've played"+" "+human;

           if (human=="rock" && computer ==3){
               displayOutcome.textContent="You win this round. Rock beats scissors";
               hCounter +=1;
               gameCounter +=1;
           }else if (human=="rock" && computer==2){
               displayOutcome.textContent="You lose this round. Paper beats rock";
               cCounter +=1;
               gameCounter +=1;
           }else if(human=="scissors" && computer==2){
               displayOutcome.textContent="You win this round. Scissors beat paper";
               hCounter +=1;
               gameCounter +=1;
           }else if (human=="paper" && computer==1){
               displayOutcome.textContent="You win this round. Paper beats rock";
               hCounter +=1;
               gameCounter +=1;
           }else if (human=="scissors" && computer==1){
               displayOutcome.textContent="You lose this round. Rock beats scissors";
               cCounter +=1;
               gameCounter +=1;
           }else if (human=="paper" && computer==3){
               displayOutcome.textContent="You lose this round. Scissors beat paper";
               cCounter +=1;
               gameCounter +=1;
           }else {
               displayOutcome.textContent="No winner this round!";
               gameCounter +=1;
           } game();
             hScore.textContent="you"+" "+hCounter;
             cScore.textContent="computer"+" "+cCounter;

       }
//game() keeps track of number of rounds and returns winner.
       function game() {
           if(gameCounter==5 && hCounter>cCounter){
               displayGameFinished.textContent="Congratulations! You beat the computer.";
           }else if(gameCounter==5 && hCounter<cCounter){
               displayGameFinished.textContent="The game over! Sorry. You've lost. Maybe next time.";
           }else if(gameCounter==5 && hCounter==cCounter){
               displayGameFinished.textContent="Everyone wins today!";
           }
       }
//startButton resets the game.
       function startButton() {
           gameCounter=0;
           hCounter=0;
           cCounter=0;
           hScore.textContent="";
           cScore.textContent="";
           displayOutcome.textContent="";
           displayComputer.textContent="";
           displayPlayer.textContent="";
           displayGameFinished.textContent="";

       };
//containers from html below.
       const containerCountBox=document.querySelector('#containercountbox');
       const hCountBox=document.querySelector("#hcountbox");
            containerCountBox.appendChild(hCountBox);
       const cCountBox=document.querySelector("#ccountbox");
            containerCountBox.appendChild(cCountBox);
       const buttonDiv=document.querySelector("#buttondiv");
       const gameFinishedContainer=document.querySelector('#gamefinishedContainer');
       const startContainer=document.querySelector('#startcontainer');


       const btn1=document.querySelector('#rock');
       btn1.addEventListener('click', ()=> {
           playerSelection="rock";
           playRound();
       });
            buttonDiv.appendChild(btn1);

       const btn2=document.querySelector('#paper');
       btn2.addEventListener('click', ()=> {
           playerSelection="paper";
           playRound();
       });
            buttonDiv.appendChild(btn2);

       const btn3=document.querySelector('#scissors');
       btn3.addEventListener('click', ()=> {
           playerSelection="scissors";
           playRound();
       });
            buttonDiv.appendChild(btn3);

       const hScore=document.querySelector('#hScore');
            hCountBox.appendChild(hScore);
           
       const cScore=document.querySelector('#cScore');
            cCountBox.appendChild(cScore);
           
       const displayOutcome=document.querySelector('#displayoutcome');
           
       const displayComputer=document.querySelector('#displaycomputer');
            cCountBox.appendChild(displayComputer);
       const displayPlayer=document.querySelector('#displayplayer');
            hCountBox.appendChild(displayPlayer);
           
       const displayGameFinished=document.querySelector('#gamefinished');
            gameFinishedContainer.appendChild(displayGameFinished);
           
       const startBtn=document.querySelector('#start');
       startBtn.addEventListener('click', ()=> {
           startButton();
       });
            startContainer.appendChild(startBtn);
