let gameseq=[];
let userseq=[];
let leveltrack=[];

let colors=["red","orange","purple","green"];

let started=false;

let level=0;

 let h2=document.querySelector('h2');
document.addEventListener("keypress",function(){
    if(started==false)
        {
            console.log("Game started");
            started=true;
            levelUp();
        }
       
});

function btnflash(ranbtn){
     ranbtn.classList.add("flash");
    setTimeout(function(){
      ranbtn.classList.remove("flash");
    },250);
}

function levelUp(){
    userseq=[];
    level++;
     h2.innerText=`Level ${level}`;


     let ranIdx=Math.floor(Math.random()*3);
     let ranColor=colors[ranIdx];
     gameseq.push(ranColor);
     let ranbtn=document.querySelector(`.${ranColor}`);

     btnflash(ranbtn);
}

function checkAns(idx){
    
    if(userseq[idx]===gameseq[idx])
        {
           if(userseq.length==gameseq.length){
            setTimeout(levelUp(),3000);
           }
        }
        else{
            let highscore=highest();
           h2.innerHTML=`Game Over! Your score is <b>${level}<b><br>Your Highest Score till now <b>${highscore}</b>
           <br>Press any key to start`;
           document.querySelector("body").style.backgroundColor="red";
           setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";
        },150);
         

           reset();
        }
    
}


function btnpress(){
    let btn=this;
    btnflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
    {
        btn.addEventListener("click",btnpress);
    }

function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}

function highest()
{
 leveltrack.push(level);
 console.log(leveltrack);
 if(leveltrack.length==1)
    {
        return level;
    }
    else
    {for(let i=0;i<leveltrack.length;i++){
        if(leveltrack[i]>leveltrack[i+1])
            {
                return leveltrack[i];
            }
     }
    }
 
}
