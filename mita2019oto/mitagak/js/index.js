// var baseVol = 0.5; // audioのベースの音量
// var fadeSpeed = 1500;

let turn = 0;
let collect1 = [1,2,0,2,1,2,0,1,1,2,1,0];
let res1 = [2,2,1,1,2,0,2,2,0,0,0,0];
let collect2 = [1,1,1,2,1,0,1,0,1,2,0,1];
let res2 = [2,2,2,2,0,0,0,0,2,2,2,0];

let butC = ["#f8f800","#e83434","#4444e8"];

let dee = function(){
    document.getElementById("pop").style.background="";
    console.log("oe");
}

let clear = function(){
    nowPlay=4;
    this.console.log(nowPlay);
    // this.document.getElementsByClassName("snd")[nowPlay].volume = baseVol;
    if( typeof( this.document.getElementsByClassName("snd")[nowPlay].currentTime ) != 'undefined' )
    {
        this.document.getElementsByClassName("snd")[nowPlay].currentTime = 0;
    }
    this.document.getElementsByClassName("snd")[nowPlay].play();
}

window.onload=function(){
    this.document.getElementById("pop").style.display="flex";
    this.document.getElementById("suc").style.display="none";
    this.document.getElementsByClassName("box2")[0].style.display="none";
    let nowPlay=-1;
    let turn = 0,col = 1;
    let pop = document.getElementById("pop");
    let timeoutID;
    for(let p=0;p<3;p++){
        this.document.getElementsByClassName("btn")[p].addEventListener("click",()=>{
            window.clearTimeout(timeoutID);
            if(turn==0){
                this.document.getElementById("pop").style.display="flex";
                this.document.getElementById("suc").style.display="none";
                this.document.getElementsByClassName("box2")[0].style.display="none";
            }
            if(nowPlay>=0){
                let audio = this.document.getElementsByClassName("snd")[nowPlay];
                audio.pause();
            }
            if(p==collect1[turn]&&(col*(turn-1)==turn-1||turn==0)){
                nowPlay=res1[turn];
                this.console.log(nowPlay);
                // this.document.getElementsByClassName("snd")[nowPlay].volume = baseVol;
                if( typeof( this.document.getElementsByClassName("snd")[nowPlay].currentTime ) != 'undefined' )
                {
                    this.document.getElementsByClassName("snd")[nowPlay].currentTime = 0;
                }
                this.document.getElementsByClassName("snd")[nowPlay].play();
                col=1;
                this.document.getElementsByClassName("step")[turn].style.backgroundColor=`${butC[p]}`;
                pop.style.backgroundColor="";
                pop.style.background=`url(img/${p}.png) center center no-repeat`;
                pop.style.backgroundSize="contain";
                timeoutID = window.setTimeout(dee, 2000);
                turn++;
            }
            else if(p==collect2[turn]&&(col*(turn-1)==2*(turn-1)||turn==0)){
                nowPlay=res2[turn];
                this.console.log(nowPlay);
                // this.document.getElementsByClassName("snd")[nowPlay].volume = baseVol;
                if( typeof( this.document.getElementsByClassName("snd")[nowPlay].currentTime ) != 'undefined' )
                {
                    this.document.getElementsByClassName("snd")[nowPlay].currentTime = 0;
                }
                this.document.getElementsByClassName("snd")[nowPlay].play();
                col=2;
                this.document.getElementsByClassName("step")[turn].style.backgroundColor=`${butC[p]}`;
                pop.style.backgroundColor="";
                pop.style.background=`url(img/${p}.png) center center no-repeat`;
                pop.style.backgroundSize="contain";
                timeoutID = window.setTimeout(dee, 2000);
                turn++;
            }
            else{
                nowPlay=3;
                this.console.log(nowPlay);
                // this.document.getElementsByClassName("snd")[nowPlay].volume = baseVol;
                if( typeof( this.document.getElementsByClassName("snd")[nowPlay].currentTime ) != 'undefined' )
                {
                    this.document.getElementsByClassName("snd")[nowPlay].currentTime = 0;
                }
                this.document.getElementsByClassName("snd")[nowPlay].play();
                for(let i=0;i<12;i++){
                    this.document.getElementsByClassName("step")[i].style.backgroundColor="transparent";
                }
                pop.style.backgroundColor="";
                pop.style.background=`url(img/x.png) center center no-repeat`;
                pop.style.backgroundSize="contain";
                turn=0;
                timeoutID = window.setTimeout(dee, 2000);
            }
            if(turn==12){
                this.console.log("music",col," completed!");
                this.document.getElementById("pop").style.display="none";
                this.document.getElementById("suc").style.display="flex";
                this.document.getElementsByClassName("box2")[0].style.display="flex";
                if(col==1){
                    this.document.getElementsByClassName("word")[0].removeAttribute("id");
                    this.document.getElementsByClassName("word")[0].innerHTML="レクイエム";
                    this.document.getElementsByClassName("word")[0].setAttribute("id","rec");
                }
                else{
                    this.document.getElementsByClassName("word")[0].removeAttribute("id");
                    this.document.getElementsByClassName("word")[0].innerHTML="フィナーレ";
                    this.document.getElementsByClassName("word")[0].setAttribute("id","fan");
                }
                turn=0;
                if(col==2){
                    let timeoutID2 = window.setTimeout(clear,1500);
                }
                for(let i=0;i<12;i++){
                    this.document.getElementsByClassName("step")[i].style.backgroundColor="transparent";
                }
            }
        })
    }
}