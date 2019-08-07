window.onload = function(){
  var pop1=document.getElementById("pop");
  var exit=document.getElementsByClassName("exit");
  // var mov=document.getElementsByClassName("mov");
  // var start=document.getElementsByClassName("start");
  var goFS=document.getElementById("goFS");
  // var testAudio=document.getElementById("testAudio");
  var main=document.getElementById("main");
  // const audio = document.getElementsByTagName("audio")[0];
  const audio = document.getElementsByTagName("video")[0]


  document.getElementById("btn1").addEventListener("click", function(){
    pop1.classList.remove('hidden');
    main.classList.add("blur");
    audio.play();
    audio.pause();
    document.getElementById('current').innerHTML = playTime(Math.floor(audio.currentTime))
    document.getElementById('duration').innerHTML = playTime(Math.round(audio.duration))
  });
  for(let i=0;i<exit.length;i++){
    exit[i].addEventListener("click",function(){
      pop1.classList.add('hidden');
      main.classList.remove("blur");
      audio.pause();
      play.style.backgroundImage = "url(../images/start.png)"
      audio.currentTime = 0
    },false);
  }
  goFS.addEventListener("click",function(){
    document.body.requestFullscreen();
    goFS.classList.add("hidden");
  },false);
  // testAudio.addEventListener("click",function(){
  //   audio.play();
  // },false);



    const playButton = document.getElementById("play")
    const stopButton = document.getElementById("stop")
    playButton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play()
        play.style.backgroundImage = "url(../images/pause.png)"
      } else {
        audio.pause()
        play.style.backgroundImage = "url(../images/start.png)"
      }
    })
    stopButton.addEventListener('click', () => {
      audio.pause()
      audio.currentTime = 0
      play.style.backgroundImage = "url(../images/start.png)"
    })

    audio.addEventListener("timeupdate", (e) => {
      const current = Math.floor(audio.currentTime)
      const duration = Math.round(audio.duration)
      if(!isNaN(duration)){
        document.getElementById('current').innerHTML = playTime(current)
        document.getElementById('duration').innerHTML = playTime(duration)
        const percent = Math.round((audio.currentTime/audio.duration)*1000)/10
        document.getElementById('seekbar').style.backgroundSize = percent + '%'
      }
    })

    audio.addEventListener("ended",() => {
      play.style.backgroundImage = "url(../images/start.png)"
      document.getElementById('seekbar').style.backgroundSize = 0;
    })

    document.getElementById('seekbar').addEventListener("click", (e) => {
      const duration = Math.round(audio.duration)
      if(!isNaN(duration)){
        const mouse = e.pageX
        const element = document.getElementById('seekbar')
        const rect = element.getBoundingClientRect()
        const position = rect.left + window.pageXOffset
        const offset = mouse - position
        const width = rect.right - rect.left
        audio.currentTime = Math.round(duration * (offset / width))
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


    var menu=document.getElementById("menu");
    var f=0;
    menu.addEventListener("click",()=>{
      if(f===0){
        document.getElementById("map").style.width="100vw";
        document.getElementById("imap").style.width="90vw";
        document.getElementById("imap").style.height="80vh";
        menu.style.right="88vw";
        menu.style.background="url(../images/goCom.png) right top no-repeat";
        menu.style.backgroundSize="contain";
        f=1;
      }
      else if(f===1){
        document.getElementById("map").style.width="12vw";
        document.getElementById("imap").style.width="0vw";
        document.getElementById("imap").style.height="0vh";
        menu.style.right="0vw";
        menu.style.background="url(../images/goMap.png) right top no-repeat";
        menu.style.backgroundSize="contain";
        f=0;
      }
    },false);
}
