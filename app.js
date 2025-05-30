let gameseq=[];
let userseq=[];
let btns=["yellow","red","blue","green"];
let start=false;
let level=0;


document.addEventListener("keypress",function(){
    if(start==false){
        console.log("start");
        start=true;
        levelup();
    };

});
let h2=document.querySelector("h2");

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");

    },250);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");

    },250);

}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    //random
    let random=Math.floor(Math.random()*3);
    let randcolor=btns[random];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnflash(randbtn);


}
function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelup,1000);  
        }
    }else{
        h2.innerHTML=`Game Over !<b>Your score was ${level}</B><BR> Press any key to Start</BR>`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();

    }

}
function reset(){ 
       start=false;
       gameseq=[];
       userseq=[];
       level=0;
}
function btnpress(){
   let btn=this;
   userflash(btn);
   let usercolor=btn.getAttribute("id");
   userseq.push(usercolor);
   checkAns(userseq.length-1);
   


}
let allbtn=document.querySelectorAll(".btn");
for(btn1 of allbtn){
    btn1.addEventListener("click",btnpress); 
}
