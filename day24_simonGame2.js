let gameSqnc = [];
let userSqnc = [];
let started = false;
let level = 0;
let highScore = 0;
let h3  = document.querySelector("h3"); 
let btns = ["red","green","orange","blue"];
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Started");
        started = true;
        levelUp();
        let highScoretxt = document.querySelector(".highScore");
        highScoretxt.innerText = `High Score : ${highScore}`;
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
       btn.classList.remove("flash"); 
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(() => {
       btn.classList.remove("userFlash"); 
    }, 250);
}


function levelUp(){
    userSqnc = [];
    level++;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    h3.innerText = `level ${level}`;
    btnFlash(randBtn);
    // console.log(randIdx);
    console.log(randColor);
    // console.log(randBtn);
    console.log(gameSqnc);
    gameSqnc.push(randColor);

}

function checkAns(idx){
    console.log(idx);
    if(userSqnc[idx]==gameSqnc[idx]){
        if(userSqnc.length==gameSqnc.length){
            setTimeout(levelUp,1000);
            // levelUp();
        }
        // console.log("sameValue");
    } else{
        if(highScore<level){
            highScore = level - 1;
        }
        
        h3.innerHTML = `Game over!! Your score was <b>${level-1}</b>. Please start a new game entering a key`;
        let body = document.querySelector("body");
        body.classList.add("green");
        setTimeout(()=>{
            body.classList.remove("green");
        },200);
        resetTo();
    }
  
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.classList[1];
    userSqnc.push(userColor);
    console.log(userColor);
    
    checkAns(userSqnc.length-1);
}
let allBtns = document.querySelectorAll(".smallBox");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function resetTo(){
    started = false;
    level = 0;
    gameSqnc = [];
    userSqnc = [];
}