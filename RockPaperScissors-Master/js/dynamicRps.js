const d = document,
    $rpsMainCont = d.querySelector(".rps__main-container"),
    $rpsMain = d.querySelector(".rps__main");

    //Container
let $containerPnC;

    //PLayer
let $player,
    $pText,
    $pBtn,
    $pCont,
    $pImg;

    //Computer
let $computer,
    $cText,
    $cBtn,
    $cCont,
    $cImg,
    //ContentPk
    $cContPk;

    //Picked Element
let $pickedEl;

    //Picked Element (Computer)
let $pickedElC;

    //RandomCPick
let randomCPk;

    //Result
let $resultCont,
    $resultT,
    $resultBtn;

    //Score
let $score = d.querySelector(".rps__number"),
    $scoreText = $score.textContent,
    $sNumber = Number($scoreText);

export default function dynRps(rock,paper,scissor){
    d.addEventListener("click",e => {
        if(e.target.matches(rock) || e.target.matches(`${rock} *`)){
            $rpsMain.classList.add("rps__mainHd");
            //Player
            $containerPnC = Object.assign(d.createElement("div"),{id:"rps__containerPnC"});
            $player = Object.assign(d.createElement("figure"),{id:"rps__picked"});
            $pText = Object.assign(d.createElement("figcaption"),{innerHTML:"YOU PICKED <span class='rps__dynRock'>ROCK</span>",id:"rps__rText"});
            $pBtn = Object.assign(d.createElement("button"),{id:"rps__rBtn"});
            $pCont = Object.assign(d.createElement("div"),{id:"rps__Cont"});
            $pImg = Object.assign(d.createElement("img"),{src:'images/icon-rock.svg',alt:"rock"});
            $containerPnC.appendChild($player);
            $player.appendChild($pText);
            $player.appendChild($pBtn);
            $pBtn.appendChild($pCont);
            $pCont.appendChild($pImg);
            $rpsMainCont.insertAdjacentElement("afterbegin",$containerPnC);
            $pickedEl = "rock";
            return computer();
        }
        
        if(e.target.matches(paper) || e.target.matches(`${paper} *`)){
            $rpsMain.classList.add("rps__mainHd");
            //Player
            $containerPnC = Object.assign(d.createElement("div"),{id:"rps__containerPnC"});
            $player = Object.assign(d.createElement("figure"),{id:"rps__picked"});
            $pText = Object.assign(d.createElement("figcaption"),{innerHTML:"YOU PICKED <span class='rps__dynPaper'>PAPER</span>",id:"rps__pText"});
            $pBtn = Object.assign(d.createElement("button"),{id:"rps__pBtn"});
            $pCont = Object.assign(d.createElement("div"),{id:"rps__Cont"});
            $pImg = Object.assign(d.createElement("img"),{src:'images/icon-paper.svg',alt:"paper"});
            $containerPnC.appendChild($player);
            $player.appendChild($pText);
            $player.appendChild($pBtn);
            $pBtn.appendChild($pCont);
            $pCont.appendChild($pImg);
            $rpsMainCont.insertAdjacentElement("afterbegin",$containerPnC);
            $pickedEl = "paper";
            return computer();
        }
        
        if(e.target.matches(scissor) || e.target.matches(`${scissor} *`)){
            $rpsMain.classList.add("rps__mainHd");
            //Player
            $containerPnC = Object.assign(d.createElement("div"),{id:"rps__containerPnC"});
            $player = Object.assign(d.createElement("figure"),{id:"rps__picked"});
            $pText = Object.assign(d.createElement("figcaption"),{innerHTML:"YOU PICKED <span class='rps__dynScissors'>SCISSORS</span>",id:"rps__sText"});
            $pBtn = Object.assign(d.createElement("button"),{id:"rps__sBtn"});
            $pCont = Object.assign(d.createElement("div"),{id:"rps__Cont"});
            $pImg = Object.assign(d.createElement("img"),{src:'images/icon-scissors.svg',alt:"scissor"});
            $containerPnC.appendChild($player);
            $player.appendChild($pText);
            $player.appendChild($pBtn);
            $pBtn.appendChild($pCont);
            $pCont.appendChild($pImg);
            $rpsMainCont.insertAdjacentElement("afterbegin",$containerPnC);
            $pickedEl = "scissors";
            return computer();
        }

        function computer() {
            $computer = Object.assign(d.createElement("figure"),{id:"rps__computer"});
            $cText = Object.assign(d.createElement("figcaption"),{innerHTML:`THE HOUSE IS <span id='rps__dynPkAnim'>PICKING</span>`,id:"rps__cText"});
            $cContPk = Object.assign(d.createElement("div"),{id:"rps__ContPk"});
            $computer.appendChild($cText);
            $computer.appendChild($cContPk);
            $containerPnC.insertAdjacentElement("beforeend",$computer);

            setTimeout(() => {
                $computer.removeChild($cContPk);
                randomCPk = Math.round(Math.random()*2);
                console.log(randomCPk);

                if(randomCPk === 0){
                    $cBtn = Object.assign(d.createElement("button"),{id:"rps__rBtn"});
                    $cCont = Object.assign(d.createElement("div"),{id:"rps__Cont"});
                    $cImg = Object.assign(d.createElement("img"),{src:'images/icon-rock.svg',alt:"rock"});
                    $computer.appendChild($cBtn);
                    $cBtn.appendChild($cCont);
                    $cCont.appendChild($cImg); 
                    $cText.innerHTML = `THE HOUSE PICKED <span class="rps__dynRock">ROCK</span>`;
                    $pickedElC = "rock";
                }
                if(randomCPk === 1){
                    $cBtn = Object.assign(d.createElement("button"),{id:"rps__pBtn"});
                    $cCont = Object.assign(d.createElement("div"),{id:"rps__Cont"});
                    $cImg = Object.assign(d.createElement("img"),{src:'images/icon-paper.svg',alt:"paper"});
                    $computer.appendChild($cBtn);
                    $cBtn.appendChild($cCont);
                    $cCont.appendChild($cImg);  
                    $cText.innerHTML = `THE HOUSE PICKED <span class="rps__dynPaper">PAPER</span>`;
                    $pickedElC = "paper";
                }
                if(randomCPk === 2){
                    $cBtn = Object.assign(d.createElement("button"),{id:"rps__sBtn"});
                    $cCont = Object.assign(d.createElement("div"),{id:"rps__Cont"});
                    $cImg = Object.assign(d.createElement("img"),{src:'images/icon-scissors.svg',alt:"scissors"});
                    $computer.appendChild($cBtn);
                    $cBtn.appendChild($cCont);
                    $cCont.appendChild($cImg); 
                    $cText.innerHTML = `THE HOUSE PICKED <span class="rps__dynScissors">SCISSORS</span>`;
                    $pickedElC = "scissors";
                }

                setTimeout(() => {

                    //ROCK
                    if($pickedEl === "rock" && $pickedElC === "scissors"){
                        $resultCont = Object.assign(d.createElement("div"),{id:"resultCont"});
                        $resultT = Object.assign(d.createElement("p"),{innerHTML:"YOU WIN",id:"resultT"});
                        $resultBtn = Object.assign(d.createElement("button"),{innerHTML:"PLAY AGAIN",id:"resultBtn"});
                        $resultCont.appendChild($resultT);
                        $resultCont.appendChild($resultBtn);
                        $player.insertAdjacentElement("afterend",$resultCont);
                        $sNumber = $sNumber + 1;
                        $score.textContent = $sNumber;
                        
                    }
                    if($pickedEl === "rock" && $pickedElC === "paper"){
                        $resultCont = Object.assign(d.createElement("div"),{id:"resultCont"});
                        $resultT = Object.assign(d.createElement("p"),{innerHTML:"YOU LOSE",id:"resultT"});
                        $resultBtn = Object.assign(d.createElement("button"),{innerHTML:"PLAY AGAIN",id:"resultBtn"});
                        $resultCont.appendChild($resultT);
                        $resultCont.appendChild($resultBtn);
                        $player.insertAdjacentElement("afterend",$resultCont);
                        $sNumber = $sNumber - 1;
                        $score.textContent = $sNumber;
                    }
                    if($pickedEl === "rock" && $pickedElC === "rock"){
                        $resultCont = Object.assign(d.createElement("div"),{id:"resultCont"});
                        $resultT = Object.assign(d.createElement("p"),{innerText:"TIE",id:"resultT"});
                        $resultBtn = Object.assign(d.createElement("button"),{innerText:"PLAY AGAIN",id:"resultBtn"});
                        $resultCont.appendChild($resultT);
                        $resultCont.appendChild($resultBtn);
                        $player.insertAdjacentElement("afterend",$resultCont);
                    }

                    //PAPER
                    if($pickedEl === "paper" && $pickedElC === "rock"){
                        $resultCont = Object.assign(d.createElement("div"),{id:"resultCont"});
                        $resultT = Object.assign(d.createElement("p"),{innerHTML:"YOU WIN",id:"resultT"});
                        $resultBtn = Object.assign(d.createElement("button"),{innerHTML:"PLAY AGAIN",id:"resultBtn"});
                        $resultCont.appendChild($resultT);
                        $resultCont.appendChild($resultBtn);
                        $player.insertAdjacentElement("afterend",$resultCont);
                        $sNumber = $sNumber + 1;
                        $score.textContent = $sNumber;
                    }
                    if($pickedEl === "paper" && $pickedElC === "scissors"){
                        $resultCont = Object.assign(d.createElement("div"),{id:"resultCont"});
                        $resultT = Object.assign(d.createElement("p"),{innerHTML:"YOU LOSE",id:"resultT"});
                        $resultBtn = Object.assign(d.createElement("button"),{innerHTML:"PLAY AGAIN",id:"resultBtn"});
                        $resultCont.appendChild($resultT);
                        $resultCont.appendChild($resultBtn);
                        $player.insertAdjacentElement("afterend",$resultCont);
                        $sNumber = $sNumber - 1;
                        $score.textContent = $sNumber;
                    }
                    if($pickedEl === "paper" && $pickedElC === "paper"){
                        $resultCont = Object.assign(d.createElement("div"),{id:"resultCont"});
                        $resultT = Object.assign(d.createElement("p"),{innerText:"TIE",id:"resultT"});
                        $resultBtn = Object.assign(d.createElement("button"),{innerText:"PLAY AGAIN",id:"resultBtn"});
                        $resultCont.appendChild($resultT);
                        $resultCont.appendChild($resultBtn);
                        $player.insertAdjacentElement("afterend",$resultCont);
                    }

                    //SCISSORS
                    if($pickedEl === "scissors" && $pickedElC === "paper"){
                        $resultCont = Object.assign(d.createElement("div"),{id:"resultCont"});
                        $resultT = Object.assign(d.createElement("p"),{innerHTML:"YOU WIN",id:"resultT"});
                        $resultBtn = Object.assign(d.createElement("button"),{innerHTML:"PLAY AGAIN",id:"resultBtn"});
                        $resultCont.appendChild($resultT);
                        $resultCont.appendChild($resultBtn);
                        $player.insertAdjacentElement("afterend",$resultCont);
                        $sNumber = $sNumber + 1;
                        $score.textContent = $sNumber;
                    }
                    if($pickedEl === "scissors" && $pickedElC === "rock"){
                        $resultCont = Object.assign(d.createElement("div"),{id:"resultCont"});
                        $resultT = Object.assign(d.createElement("p"),{innerHTML:"YOU LOSE",id:"resultT"});
                        $resultBtn = Object.assign(d.createElement("button"),{innerHTML:"PLAY AGAIN",id:"resultBtn"});
                        $resultCont.appendChild($resultT);
                        $resultCont.appendChild($resultBtn);
                        $player.insertAdjacentElement("afterend",$resultCont);
                        $sNumber = $sNumber - 1;
                        $score.textContent = $sNumber;
                    }
                    if($pickedEl === "scissors" && $pickedElC === "scissors"){
                        $resultCont = Object.assign(d.createElement("div"),{id:"resultCont"});
                        $resultT = Object.assign(d.createElement("p"),{innerText:"TIE",id:"resultT"});
                        $resultBtn = Object.assign(d.createElement("button"),{innerText:"PLAY AGAIN",id:"resultBtn"});
                        $resultCont.appendChild($resultT);
                        $resultCont.appendChild($resultBtn);
                        $player.insertAdjacentElement("afterend",$resultCont);
                    }
                },1000)
            },1500);

            d.addEventListener("click", e => {
                if(e.target === $resultBtn){
                    $containerPnC.remove();
                    $rpsMain.classList.remove("rps__mainHd");
                }
            })
        }

    })
}