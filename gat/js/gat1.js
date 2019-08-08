window.onload = function(){
  // var mov=document.getElementsByClassName("mov");
  // var start=document.getElementsByClassName("start");
  var goFS=document.getElementById("goFS");
  // var testaudio[i]=document.getElementById("testaudio[i]");
  var main=document.getElementById("main");
  // const audio[i] = document.getElementsByTagName("audio[i]")[0];
  goFS.addEventListener("click",function(){
    document.body.requestFullscreen();
    goFS.classList.add("hidden");
  },false);
  var pop1=document.getElementById("pop");
  var exit=document.getElementById("exit");
  var playButton = document.getElementById("play")
  var stopButton = document.getElementById("stop")
  var btn=document.getElementsByClassName("but");
  let audio = document.getElementsByTagName("audio");
    for(let i=0;i<btn.length;i++){
      let playB =function () {
        if (audio[i].paused) {
          audio[i].play()
          play.style.backgroundImage = "url(images/pause.png)"
        } else {
          audio[i].pause()
          play.style.backgroundImage = "url(images/start.png)"
        }
      }
      var stopB =function () {
        audio[i].pause()
        audio[i].currentTime = 0
        play.style.backgroundImage = "url(images/start.png)"
      }
      btn[i].addEventListener("click",function(){
        pop1.classList.remove('hidden');
        main.classList.add("blur");
        audio[i].play();
        audio[i].pause();
        document.getElementById('current').innerHTML = playTime(Math.floor(audio[i].currentTime))
        document.getElementById('duration').innerHTML = playTime(Math.round(audio[i].duration))
        exit.addEventListener("click",function(){
          pop1.classList.add('hidden');
          main.classList.remove("blur");
          audio[i].pause();
          play.style.backgroundImage = "url(images/start.png)"
          audio[i].currentTime = 0
          playButton.removeEventListener('click',playB)
          stopButton.removeEventListener('click',stopB)
      
      
          document.getElementById('seekbar').removeEventListener("click", (e) => {
            const duration = Math.round(audio[i].duration)
            if(!isNaN(duration)){
              const mouse = e.pageX
              const element = document.getElementById('seekbar')
              const rect = element.getBoundingClientRect()
              const position = rect.left + window.pageXOffset
              const offset = mouse - position
              const width = rect.right - rect.left
              audio[i].currentTime = Math.round(duration * (offset / width))
            }
          })
        },false);
    
        playButton.addEventListener('click',playB)
        stopButton.addEventListener('click',stopB)
    
        audio[i].addEventListener("timeupdate", (e) => {
          const current = Math.floor(audio[i].currentTime)
          const duration = Math.round(audio[i].duration)
          if(!isNaN(duration)){
            document.getElementById('current').innerHTML = playTime(current)
            document.getElementById('duration').innerHTML = playTime(duration)
            const percent = Math.round((audio[i].currentTime/audio[i].duration)*1000)/10
            document.getElementById('seekbar').style.backgroundSize = percent + '%'
          }
        })
    
        audio[i].addEventListener("ended",() => {
          play.style.backgroundImage = "url(images/start.png)"
          document.getElementById('seekbar').style.backgroundSize = 0;
        })
    
        document.getElementById('seekbar').addEventListener("click", (e) => {
          const duration = Math.round(audio[i].duration)
          if(!isNaN(duration)){
            const mouse = e.pageX
            const element = document.getElementById('seekbar')
            const rect = element.getBoundingClientRect()
            const position = rect.left + window.pageXOffset
            const offset = mouse - position
            const width = rect.right - rect.left
            audio[i].currentTime = Math.round(duration * (offset / width))
          }
        })
    
        function playTime (t) {
          let hms = ''
          const h = t / 3600 | 0
          const m = t % 3600 / 60 | 0
          const s = t % 60
          const z2 = (v) => {
            const s = '00' + v
            return s.substr(s.length - 2, 2)
          }
          if(h != 0){
            hms = h + ':' + z2(m) + ':' + z2(s)
          }else if(m != 0){
            hms = z2(m) + ':' + z2(s)
          }else{
            hms = '00:' + z2(s)
          }
          return hms
        }
    
    
      },false)
    }
    var menu=document.getElementById("menu");
    var f=0;
    menu.addEventListener("click",()=>{
      if(f===0){
        document.getElementById("map").style.width="100vw";
        document.getElementById("imap").style.width="100vw";
        document.getElementById("imap").style.height="80vh";
        menu.style.right="88vw";
        menu.style.background="url(images/goCom.png) right top no-repeat";
        menu.style.backgroundSize="contain";
        f=1;
      }
      else if(f===1){
        document.getElementById("map").style.width="12vw";
        document.getElementById("imap").style.width="0vw";
        document.getElementById("imap").style.height="0vh";
        menu.style.right="0vw";
        menu.style.background="url(images/goMap.png) right top no-repeat";
        menu.style.backgroundSize="contain";
        f=0;
      }
    },false)

    document.onkeypress = enter;
    function enter(){
      if( window.event.keyCode == 13 ){
        return false;
      }
    }
    const mrf=document.getElementsByClassName("mrf");
    const mrl=document.getElementsByClassName("mrl");
    document.getElementById("sub").addEventListener("click",function(){
      let ans=document.getElementById("ans").value;
      if(ans=="under"){
          mrf[0].style.width="25%";
          mrl[0].style.width="25%";
          mrf[1].style.width="45%";
          mrl[1].style.width="5%";
          mrf[2].style.width="25%";
          mrl[2].style.width="25%";
          mrf[3].style.width="35%";
          mrl[3].style.width="15%";
          mrf[4].style.width="45%";
          mrl[4].style.width="5%";
      }
    },false)
  }
