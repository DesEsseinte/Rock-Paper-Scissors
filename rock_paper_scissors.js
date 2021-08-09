
     let randomChoice
     let computerSelection
     let playerSelection

     let hCounter
     let cCounter
     let gameCounter
     let message

        function computerPlay() {
            randomChoice=Math.floor(Math.random()*3)+1;
            if (randomChoice==1) {
                computerSelection=1;
                displayComputer.textContent="computer plays rock";
            }else if (randomChoice==2) {
                computerSelection=2;
                displayComputer.textContent="computer plays paper";
            }else if (randomChoice==3) {
                computerSelection=3;
                displayComputer.textContent="computer plays scissors";
            }
        }

        /*playRound(human,computer) throws error on human variable declaration but still runs*/

        function playRound(human,computer) {
            hCounter=0;
            cCounter=0;
            computerPlay();
            human=playerSelection;
            computer=computerSelection;
            //human=human.toLowerCase();
            console.log(human);
            if (human=="rock" && computer ==3){
                displayOutcome.textContent="You win. Rock beats scissors";
                hCounter +=1;
            }else if (human=="rock" && computer==2){
                displayOutcome.textContent="You lose. Paper beats rock";
                cCounter +=1;
            }else if(human=="scissors" && computer==2){
                displayOutcome.textContent="You win. Scissors beat paper";
                hCounter +=1;
            }else if (human=="paper" && computer==1){
                displayOutcome.textContent="You win. Paper beats rock";
                hCounter +=1;
            }else if (human=="scissors" && computer==1){
                displayOutcome.textContent="You lose. Rock beats scissors";
                cCounter +=1;
            }else if (human=="paper" && computer==3){
                displayOutcome.textContent="You lose. Scissors beat paper";
                cCounter +=1;
            }else {
                displayOutcome.textContent="No winner!";
            }
        }
        const btn1=document.querySelector('#rock');
        btn1.addEventListener('click', ()=> {
            playerSelection="rock";
            playRound();
        });

        const btn2=document.querySelector('#paper');
        btn2.addEventListener('click', ()=> {
            playerSelection="paper";
            playRound();
        });

        const btn3=document.querySelector('#scissors');
        btn3.addEventListener('click', ()=> {
            playerSelection="scissors";
            playRound();
        }); 

        const displayOutcome=document.querySelector('#displayoutcome');
        const displayComputer=document.querySelector('#displaycomputer');


        /*function game(){
            gameCounter=0;
            hScore=0;
            cScore=0;
            while(gameCounter<5){
                computerPlay();
                playRound(playerSelection, computerSelection);
                gameCounter +=1;
                if(hCounter>cCounter){
                    hScore +=1;
                }else if(cCounter> hCounter){
                    cScore +=1;
                }
            }if (gameCounter==5){
                console.log("The game is finished!");
                if(hScore>cScore){
                    console.log("Congratulations! You beat the computer.");
                }else if(hScore<cScore){
                    console.log("Sorry. You have lost. Maybe next time.");
                }else {
                    console.log("Everyone wins today.");
                }
            }
        }
        game();*/
