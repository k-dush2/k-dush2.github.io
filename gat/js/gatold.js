window.onload = function(){
    var goFS=document.getElementById("goFS");
    goFS.addEventListener("click",function(){
        document.body.requestFullscreen();
        goFS.classList.add("hidden");
        document.body.addEventListener("fullscreenchange",function(){
            if (document.fullscreenElement) {
            }else{
                goFS.classList.remove("hidden");
            }
        })
    },false);

    

    
    const ansin=document.getElementById("ans")
    const itemNam=document.getElementById("itemName")
    let canuseTop=0,canuseBot=0;
    let bullethens=[5,5,5,5,5,5]
    
    const change=document.getElementById("change");
    const home=document.getElementById("home");
    const map=document.getElementById("map");
    const item=document.getElementById("item");
    const voice=document.getElementById("voice");
    const bullet=document.getElementById("bullet");
    const back=document.getElementsByClassName("back");
    const mapRight=document.getElementById("mapRight")
    const strsub=document.getElementById("strsub")
    const iteminame=document.getElementsByClassName("iteminame")
    const itemicon=document.getElementsByClassName("itemiconde")
    const sq=document.getElementsByClassName("sq");
    let elements = document.getElementsByClassName("itemicon");
    let turn=1;

    const color=[
        "rgba(40,150,50,0.5)",
        "rgba(180,30,30,0.5)",
        "rgba(40,40,150,0.5)",
        "rgba(200,200,200,0.5)",
        "rgba(200,200,70,0.5)",
        "rgba(100,75,70,0.5)",
        "rgba(100,75,70,0.5)"
    ]
    let nowcolor=0;
    
    let changef=0,nokori=2;
    const sqroot=[]
    function mvHome(){
        home.style.left="3vw"
        home.style.top="3vw"
        map.style.left="-140vw"
        map.style.top="3vw"
        item.style.left="-97vw"
        item.style.top="3vw"
        voice.style.left="103vw"
        voice.style.top="3vw"
        bullet.style.left="103vw"
        bullet.style.top="3vw"
        change.style.left="43vw"
        back[0].style.left="43vw"
        changef=0;
        back[0].style.transform="scale(1,1)";
        mapRight.style.alignItems="flex-start"
        strsub.style.left="0vw"
        for(let i=1;i<27;i++){
            sqroot[i]=0;
            sq[i].style.backgroundColor=color[nowcolor]
        }
        itemNam.disabled=true;
        ansin.disabled=true;
        change.innerHTML="作戦へ"
        sqDetail();
        sqitemCon();
        changef=0;
    }
    mvHome();
    const bt=document.getElementsByClassName("cls-4");
    bt[0].addEventListener("click",function(){
        home.style.left="103vw";
        map.style.left="-40vw";
        window.setTimeout(function(){ansin.disabled=false;},1000);
    },false);
    bt[1].addEventListener("click",function(){
        home.style.left="103vw";
        item.style.left="3vw";
        window.setTimeout(function(){itemNam.disabled=false;},1000);
    },false);
    bt[2].addEventListener("click",function(){
        home.style.left="-97vw";
        voice.style.left="3vw";
    },false);
    bt[3].addEventListener("click",function(){
        home.style.left="-97vw";
        bullet.style.left="3vw";
    },false);
    for(let i=0;i<back.length;i++){
        back[i].addEventListener("click",function(){
            mvHome();
        })
    }
    
    let bullo=document.getElementsByClassName("bulli");
    for(let i=0;i<bullo.length;i++){
        if(i%5<nokori){
            bullo[i].style.backgroundColor=""
            bullo[i].style.background="url(./images/bullet1.png) center center no-repeat"
            bullo[i].style.backgroundSize="contain"
        }
    }
   
    const chapter=document.getElementsByClassName("chapter");
    const vBut=document.getElementsByClassName("vBut");
    const video=document.getElementsByTagName("video");
    const play=document.getElementById("play");
    const logText=document.getElementsByClassName("logText")
    const logTytle=document.getElementById("logTytle");

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

    let chpf=[0,0,0,0,0,0,0];
    let nowPlay=-1;
    let playing;
    for(let i=0;i<chapter.length;i++){
        video[i].addEventListener("timeupdate", (e) => {
            const current = Math.floor(video[i].currentTime)
            const duration = Math.round(video[i].duration)
            if(!isNaN(duration)){
                document.getElementById('current').innerHTML = playTime(current)
                document.getElementById('duration').innerHTML = playTime(duration)
                const percent = Math.round((video[i].currentTime/video[i].duration)*1000)/10
                document.getElementById('seekbar').style.backgroundSize = percent + '%'
            }
        })
        video[i].addEventListener("ended",() => {
            // seek.style.display="flex"
            play.style.background = ""
            document.getElementById('seekbar').style.backgroundSize = 0;
          })
        chapter[i].addEventListener("click",function(){
            if(chpf[i]===1){
                if(nowPlay==i){
                    chapter[nowPlay].style.outline="solid 0.6vh rgba(228,0,127)"
                    chapter[nowPlay].style.outlineOffset="1.2vh"
                }
                else{
                    play.classList.remove("hidden")
                    if(nowPlay>=0){
                        chapter[nowPlay].style.outline="none"
                        chapter[nowPlay].style.outlineOffset="0"
                        video[nowPlay].pause();
                        video[nowPlay].currentTime = 0;
                        video[nowPlay].classList.add("hidden");
                        play.removeEventListener("click",playing)
                        logText[nowPlay].classList.add("hidden")
                    }
                    chapter[i].classList.remove("c")
                    logText[7].classList.add("hidden")
                    playing = function(){
                        if (video[i].paused) {
                            video[i].play()
                            // seek.style.display="none"
                            play.style.background = "none";
                            console.log("debug");
                        }
                        else {
                            // seek.style.display="flex"
                            play.style.background = ""
                            video[i].pause();
                        }
                    }
                    nowPlay=i;
                    logTytle.innerHTML=`Chapter${nowPlay}`
                    logText[nowPlay].classList.remove("hidden")
                    logText[nowPlay].scrollTop=0;
                    video[nowPlay].pause();
                    video[nowPlay].currentTime = 0;
                    chapter[nowPlay].style.outline="solid 0.6vh rgba(228,0,127)"
                    chapter[nowPlay].style.outlineOffset="1.2vh"
                    play.addEventListener("click",playing)
                    video[nowPlay].classList.remove("hidden");
                    document.getElementById('seekbar').addEventListener("click", (e) => {
                        const duration = Math.round(video[i].duration)
                        if(!isNaN(duration)){
                            const mouse = e.pageX
                            const element = document.getElementById('seekbar')
                            const rect = element.getBoundingClientRect()
                            const position = rect.left + window.pageXOffset
                            const offset = mouse - position
                            const width = rect.right - rect.left
                            video[i].currentTime = Math.round(duration * (offset / width))
                        }
                    })

                }

            }
        })
    }



    const itemSub=document.getElementById("itemSub")
    const itemName=document.getElementById("itemName")
    const itemTag=document.getElementById("itemTag")
    const itemImage=document.getElementById("itemImage")
    const itemDetail=document.getElementById("itemDetail")
    const itemchp=document.getElementsByClassName("itemchp")
    const itemchpt=document.getElementsByClassName("itemchpt")

    const itemcheckList=[
        "ネックレス",
        "ネックレスの紐",
        "ライター",
        "オイルが半分入ったライター",
        "電池",
        "銃弾"
    ];
    const itemList=[
        "ネックレス",
        "ネックレスの紐",
        "オイル満タンのライター",
        "オイルが半分入ったライター",
        "電池",
        "銃弾"
    ];
    const itemimageList=[
        "./images/daia.png",
        "./images/item2.png",
        "./images/item3.png",
        "./images/item4.png",
        "./images/item5.png",
        "./images/item6.png"
    ]
    const itemdetailList=[
        "このアイテムはサンプル1です<br>このアイテムはサンプル1です<br>このアイテムはサンプル1です<br>",
        "このアイテムはサンプル2です<br>このアイテムはサンプル2です<br>このアイテムはサンプル2です<br>",
        "このアイテムはサンプル3です<br>このアイテムはサンプル3です<br>このアイテムはサンプル3です<br>",
        "このアイテムはサンプル4です<br>このアイテムはサンプル4です<br>このアイテムはサンプル4です<br>",
        "このアイテムはサンプル5です<br>このアイテムはサンプル5です<br>このアイテムはサンプル5です<br>",
        "このアイテムはサンプル6です<br>このアイテムはサンプル6です<br>このアイテムはサンプル6です<br>"
    ]
    let bulletnow=[1,1,0,0,0]

    function getitemchp(j,i){
        itemchp[j].style.backgroundColor="rgba(0,103,108,0.5)"
        itemchp[j].style.border="0.6vh solid white"
        itemchp[j].innerHTML=`<div class="itmText">${itemList[i]}</div>`
        itemchpt[j].style.backgroundColor="rgba(0,103,108,0.5)"
        itemchpt[j].style.border="0.6vh solid white"
        itemchpt[j].innerHTML=`<div class="itmText">${itemList[i]}</div>`
        iteminame[j].innerHTML=`${itemList[i]}`
        itemicon[j].classList.add("itemicon");
        itemicon[j].style.background=`url(${itemimageList[i]}) center center no-repeat`;
        itemicon[j].style.backgroundSize="contain";
        elements[j] = document.getElementsByClassName("itemicon")[j];
        elements[j].addEventListener("mousedown", mdown, false);
        elements[j].addEventListener("touchstart", mdown, false);
        elements[j].classList.add(`icon${i}`)
        itemchp[j].classList.add("i");
    }
    
    
    let itmf=[],itmj=[],j=0,nowSelect=-1,nowSelectBul=-1;
    function itemreset(j,i){
        itemchp[j].style.backgroundColor = "rgba(77,77,77,0.5)";
        itemchp[j].style.border = "0.6vh solid rgba(0,0,0,0)";
        itemchp[j].innerHTML=""
        itemchpt[j].style.backgroundColor = "rgba(77,77,77,0.5)";
        itemchpt[j].style.border = "0.6vh solid rgba(0,0,0,0)";
        itemchpt[j].innerHTML=""
        iteminame[j].innerHTML=""
        elements[j] = document.getElementsByClassName("itemicon")[j];
        elements[j].removeEventListener("mousedown", mdown, false);
        elements[j].removeEventListener("touchstart", mdown, false);
        elements[j].classList.remove(`icon${i}`)
        itemicon[j].classList.remove("itemicon")
        itemicon[j].style.background=""
        itemchp[j].classList.remove("i");
        console.log(j+"reset");
    }

    function itemallreset(){
        elements=document.getElementsByClassName("itemicon");
        for(let i=0;i<j;i++){
            itemchp[i].style.backgroundColor = "rgba(77,77,77,0.5)";
            itemchp[i].style.border = "0.6vh solid rgba(0,0,0,0)";
            itemchp[i].innerHTML=""
            itemchpt[i].style.backgroundColor = "rgba(77,77,77,0.5)";
            itemchpt[i].style.border = "0.6vh solid rgba(0,0,0,0)";
            itemchpt[i].innerHTML=""
            iteminame[i].innerHTML=""
            elements[0].removeEventListener("mousedown", mdown, false);
            elements[0].removeEventListener("touchstart", mdown, false);
            console.log(elements[0].classList)
            console.log(`icon${itmj[i]}`)
            elements[0].classList.remove(`icon${itmj[i]}`)
            itemicon[i].classList.remove("itemicon")
            itemicon[i].style.background=""
            itemchp[i].classList.remove("i");
            console.log(i+"reset");
        }
    }

    document.getElementById("itemgetall").addEventListener("click",function(){
        for(let i=0;i<itemList.length;i++){
            if(i%2===0){
                if(itmf[i]===0){
                    itmf[i]=1;
                    itmj[j]=i;
                    getitemchp(j,itmj[j]);
                }
                j++;
            }
        }
        console.log("gethalfitem"+j)
    },false)
    document.getElementById("itemdelall").addEventListener("click",function(){
        itemallreset();
        for(let i=0;i<j;i++){
            itmf[itmj[i]]=0;
            itmj[i]=-1;
        }
        j=0;
    },false)
    for(let i=0;i<itemList.length;i++)itmf[i]=0;
    itemSub.addEventListener("click",function(){
        for(let i=0;i<itemList.length;i++){
            if(itemName.value===itemcheckList[i] && itmf[i]===0){
                itmf[i]=1;
                itmj[j]=i;
                getitemchp(j,itmj[j]);
                j++;
                break;
            }
        }
    });
    for(let i=0;i<itemchp.length;i++){
        itemchp[i].addEventListener("click",function(){
            if(i<j){
                if(nowSelect>=0){
                    itemchp[nowSelect].style.outline="none"
                    itemchp[nowSelect].style.outlineOffset="0"
                }
                itemchp[i].style.outline="solid 0.4vh rgba(228,0,127)"
                itemchp[i].style.outlineOffset="0.6vh"
                itemchp[i].classList.remove("i");
                itemTag.innerHTML=itemList[itmj[i]];
                itemImage.style.background=`url(${itemimageList[itmj[i]]}) center center no-repeat`;
                itemImage.style.backgroundSize="70%";
                itemDetail.innerHTML=itemdetailList[itmj[i]];
                nowSelect=i;
            }
        })
    }
    itemchpting();
    function itemchpting(){
        for(let i=0;i<itemchpt.length;i++){
            itemchpt[i].addEventListener("click",function(){
                if(i<j){
                    if(nowSelectBul>=0){
                        itemchpt[nowSelectBul].style.outline="none"
                        itemchpt[nowSelectBul].style.outlineOffset="0"
                    }
                    itemchpt[i].style.outline="solid 0.4vh rgba(228,0,127)"
                    itemchpt[i].style.outlineOffset="0.6vh"
                    document.getElementById("itemarea").innerHTML=itemList[itmj[i]];
                    nowSelectBul=i;
                }
            })
        }
    }
    document.onkeypress = enter;
    function enter(){
      if( window.event.keyCode == 13 ){
        return false;
      }
    }


    const mrf=document.getElementsByClassName("mrf");
    const mrl=document.getElementsByClassName("mrl");
    const mapAlph=[
        "↓",
        "b","c","f","j","g",
        "p","h","a","l","z",
        "v","o","i","k","q",
        "w","o","r","m","s",
        "n","a","y","d","t",
        "x"
    ];
    mrf[5].style.width="5%"
    mrl[5].style.width="45%"
    document.getElementById("sub").addEventListener("click",function(){
        let ans=document.getElementById("ans").value;
        let faf=1;
        if(ans=="fairy")nowcolor=0;
        else if(ans=="blood")nowcolor=1;
        else if(ans=="flora")nowcolor=2;
        else if(ans=="clown")nowcolor=3;
        else if(ans=="glory")nowcolor=4;
        else if(ans=="ghost")nowcolor=5;
        else if(ans=="climax")nowcolor=6;
        else{faf=0;}
        if(faf===1){
            if(ans[5]=='x'){
                mrf[5].style.width="25%"
                mrl[5].style.width="25%"
            }
            else{
                mrf[5].style.width="5%"
                mrl[5].style.width="45%"
            }
            for(let i=0;i<5;i++){
                for(let k=0;k<5;k++){
                if(ans[i]==mapAlph[i*5+k+1]){
                    mrf[i].style.width=`${45-k*10}%`
                    mrl[i].style.width=`${5+k*10}%`
                }
            }
        }
        for(let i=1;i<27;i++){
            sqroot[i]=0;
            sq[i].style.backgroundColor=color[nowcolor];
        }
    }
    },false)

    sq[1].style.borderColor="white white white"
    sq[2].style.borderColor="transparent white transparent"
    sq[3].style.borderColor="white"
    sq[4].style.borderColor="white white transparent"
    sq[5].style.borderColor="transparent white white"
    sq[6].style.borderColor="transparent white white"
    sq[7].style.borderColor="white"
    sq[8].style.borderColor="white"
    sq[9].style.borderColor="transparent white transparent"
    sq[10].style.borderColor="white white whitet"
    sq[11].style.borderColor="white white transparent"
    sq[12].style.borderColor="transparent white white"
    sq[13].style.borderColor="transparent white transparent"
    sq[14].style.borderColor="transparent white white"
    sq[15].style.borderColor="white"
    sq[16].style.borderColor="white"
    sq[17].style.borderColor="white"
    sq[18].style.borderColor="transparent white white"
    sq[19].style.borderColor="transparent white transparent"
    sq[20].style.borderColor="white white transparent"
    sq[21].style.borderColor="white"
    sq[22].style.borderColor="transparent white transparent"
    sq[23].style.borderColor="white white transparent"
    sq[24].style.borderColor="white"
    sq[25].style.borderColor="transparent white white"
    sq[26].style.borderColor="white" 

    for(let i=1;i<26;i++){
        if(i%5!=0){
            sq[i].style.borderRightColor="transparent"
        }
        if(i%5!=1){
            sq[i].style.borderLeftColor="transparent"
        }
    }

    change.addEventListener("click",function(){
        if(changef===0){
            document.getElementById("backmap").style.left="89vw";
            document.getElementById("backmap").style.transform="scale(-1,1)";
            document.getElementById("map").style.left="2vw";
            document.getElementById("home").style.left="149vw";
            change.innerHTML="詳細へ"
            change.style.left="85vw"
            mapRight.style.alignItems="center"
            strsub.style.left="43vw"
            sqstr();
            stepziki();
            stepteki();
            changef=1;
            console.log(changef);
        }
        else{
            document.getElementById("backmap").style.left="43vw";
            document.getElementById("backmap").style.transform="scale(1,1)";
            document.getElementById("map").style.left="-40vw";
            document.getElementById("home").style.left="103vw";
            change.style.left="43vw";
            change.innerHTML="作戦へ"
            mapRight.style.alignItems="flex-start"
            for(let i=1;i<27;i++){
                sqroot[i]=0;
                sq[i].style.backgroundColor=color[nowcolor];
            }
            sqDetail();
            sqitemCon();
            strsub.style.left="0vw";
            changef=0;
            console.log(changef);
        }
    },false)

    const mapnameList=[
        "",
        "公園","","","","",
        "","","","","",
        "","","","","",
        "","","","","",
        "","","","","",
        ""
    ]
    const mapalphList=[
        "",
        "park","","","","",
        "","","","","",
        "","","","","",
        "","","","","",
        "","","","","",
        ""
    ]
    const mapdetailList=[
        "",
        "公園があります。<br>噴水がきれいです。<br>水漏れが激しいです。",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]
    const mapIcon=document.getElementById("mapIcon")
    const mapTytle=document.getElementById("mapTytle")
    const mapDetail=document.getElementById("mapDetail")

    for(let i=1;i<sq.length;i++){
        sq[i].addEventListener("click",function(){
            if(changef===0){
                mapIcon.style.background=`url(./images/map${i}.png) left top no-repeat`
                mapIcon.style.backgroundSize="contain"
                mapTytle.innerHTML=`${mapnameList[i]}室　　${mapalphList[i]} room`
                mapDetail.innerHTML=`${mapdetailList[i]}`
            }
            else if(sqroot[i]===0){
                sq[i].style.backgroundColor="rgba(230,44,63,0.5)"
                sqroot[i]=1;
            }
            else{
                sq[i].style.backgroundColor=color[nowcolor]
                sqroot[i]=0;
            }
        })
    }



    //要素内のクリックされた位置を取得するグローバル（のような）変数
    var x;
    var y;
    let p;

    //マウスが要素内で押されたとき、又はタッチされたとき発火
    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mousedown", mdown, false);
        elements[i].addEventListener("touchstart", mdown, false);
        elements[i].classList.add(`icon${i}`)
    }
    
    //マウスが押された際の関数
    function mdown(e) {
        //クラス名に .drag を追加
        p=this;
        
        //タッチデイベントとマウスのイベントの差異を吸収
        if(e.type === "mousedown") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }
        x = 4*document.documentElement.clientHeight/100;
        y = 4*document.documentElement.clientHeight/100;
        let ic=document.createElement('div');
        ic.className='ic'
        ic.style.background=this.style.background;
        ic.style.left=`${event.pageX-x}px`
        ic.style.top=`${event.pageY-y}px`
        document.body.appendChild(ic)
        ic.classList.add("drag");
        
        //要素内の相対座標を取得
        // var emulator = new TouchEmulator();
        // emulator.touchend(e.touches[0], {x:event.pageX-x,y:event.pageY-y});
        // emulator.touchstart(42, {x:event.pageX-x,y:event.pageY-y} ,ic);
        
        //ムーブイベントにコールバック
        if(this.parentNode.classList.contains("sq")){
            this.remove(this.firstElementChild)
            ic.remove(ic)
            document.getElementsByClassName(this.classList.item(2))[0].style.visibility="visible"
        }
        else{
            document.body.addEventListener("mousemove", mmove, { passive: false });
            document.body.addEventListener("touchmove", mmove, { passive: false });
            this.style.visibility="hidden"
        }
    }
    
    //マウスカーソルが動いたときに発火
    function mmove(e) {
        console.log("move");
        
        //ドラッグしている要素を取得
        var drag = document.getElementsByClassName("drag")[0];

        //同様にマウスとタッチの差異を吸収
        if(e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //フリックしたときに画面を動かさないようにデフォルト動作を抑制
        //マウスが動いた場所に要素を動かす
        drag.style.top = event.pageY - y + "px";
        drag.style.left = event.pageX - x + "px";

        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
        document.body.addEventListener("mouseup", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        document.body.addEventListener("touchend", mup, false);
        document.body.addEventListener("touchleave", mup, false);
    }

    //マウスボタンが上がったら発火
    function mup(e) {
        var drag = document.getElementsByClassName("drag")[0];
        //ムーブベントハンドラの消去
        document.body.removeEventListener("mousemove", mmove, false);
        document.body.removeEventListener("mouseup", mup, false);
        document.body.removeEventListener("touchmove", mmove, false);
        document.body.removeEventListener("touchend", mup, false);
        checkbox();
        //クラス名 .drag も消す
        drag.parentNode.removeChild(drag);
        console.log("end");
    }
    function checkbox(){
        var drag = document.getElementsByClassName("drag")[0];
        var top = parseFloat(drag.style.top)
        var left = parseFloat(drag.style.left)
        
        let sf=0;
        for(var i =canuseBot; i<canuseTop;i++){
            var fff = document.getElementsByClassName("sq")[i]
            let fffg = fff.getBoundingClientRect();
            if(top-parseFloat(fffg.top)<=parseFloat(fffg.height)/2 && top - parseFloat(fffg.top) >=-parseFloat(fffg.height)/2 && left-parseFloat(fffg.left)<=parseFloat(fffg.width)/2 && left-parseFloat(fffg.left)>=-parseFloat(fffg.width)/2){
                if(fff.hasChildNodes()){

                }else{
                    console.log(fffg.width)
                    if(p.parentNode===fff){
                    }
                    else{
                        let useitem=document.createElement("div")
                        useitem.classList.add("itemiconde")
                        useitem.classList.add("itemicon")
                        useitem.classList.add(p.classList.item(2))
                        useitem.style.background=drag.style.background
                        fff.appendChild(useitem)
                        sf=1;
                    }
                    break;
                }
            }
        }
        if(sf===0){
            let addsf=document.getElementsByClassName(p.classList.item(2))
            addsf[0].style.visibility="visible"
        }
        elements = document.getElementsByClassName("itemicon");
        for(var i = 0; i < elements.length; i++) {
            elements[i].addEventListener("mousedown", mdown, false);
            elements[i].addEventListener("touchstart", mdown, false);
        }
    }

    let bulletnameList = [
        "ガラス弾",
        "ネット弾",
        "デンキ弾",
        "カエン弾"
    ]
    let bulletdetailList = [
        "ガラスを割るためだけの弾<br>ガラスであれば何でも割れる",
        "水圧で重いものを動かせる<br>水の力は侮れない",
        "強力なエネルギーを放つ<br>どんな機械も作動させる",
        "強力な炎を噴射する<br>これに触れるとヤケドするぜ"
    ]

    let preitmj=[],prej=0;

    document.getElementById("start").addEventListener("click",function(){
        if(itmj[nowSelectBul]===0&&nokori>0){
            document.getElementById("bulletname").innerHTML=`${bulletnameList[0]}`
            document.getElementById("bulleticon").style.background=`url(./images/bullet${2}.png) center center no-repeat`
            document.getElementById("bulleticon").style.backgroundSize="contain"
            // document.getElementById("bulleticon").style.border="none"
            document.getElementById("bullettext").innerHTML=`${bulletdetailList[0]}`
            console.log("nowSelectzBul is"+nowSelectBul)
            prej=j;
            // j--;
            preitmj=itmj.slice();
            itemreset(nowSelectBul,itmj[nowSelectBul])
            // itemreset(j,itmj[j])
            // for(let i=0;i<j;i++){
            //     console.log("j is"+itmj[i])
            //     let asss=itmj[i];
            //     itemreset(i,asss);
            //     if(i<nowSelectBul){
            //         getitemchp(i,itmj[i])
            //     }
            //     else if(i>=nowSelectBul){
            //         getitemchp(i,itmj[i+1]);
            //         itmj[i]=itmj[i+1];
            //     }
            // }
            itmj[nowSelectBul]=1;
            getitemchp(nowSelectBul,itmj[nowSelectBul])
            itemchpting();
            console.log("nokori is"+nokori)
            bulletchange(2,nokori);
            nokori--;
        }
        else if(itmj[nowSelectBul]===2&&nokori>0){
            
            document.getElementById("bulletname").innerHTML=`${bulletnameList[3]}`
            document.getElementById("bulleticon").style.background=`url(./images/bullet${3}.png) center center no-repeat`
            document.getElementById("bulleticon").style.backgroundSize="contain"
            // document.getElementById("bulleticon").style.border="none"
            document.getElementById("bullettext").innerHTML=`${bulletdetailList[3]}`
            prej=j;
            // j--;
            preitmj=itmj.slice();
            itemreset(j,itmj[j])
            // console.log("itmjleng="+itmj.length)
            // for(let i=0;i<j;i++){
            //     console.log("j is"+itmj[i])
            //     let asss=itmj[i];
            //     itemreset(i,asss);
            //     if(i<nowSelectBul){
            //         getitemchp(i,itmj[i])
            //     }
            //     else if(i>=nowSelectBul){
            //         getitemchp(i,itmj[i+1]);
            //         itmj[i]=itmj[i+1];
            //     }
            // }
            itmj[nowSelectBul]=3;
            getitemchp(nowSelectBul,itmj[nowSelectBul])
            itemchpting();
            bulletchange(3,nokori);
            nokori--;
        }
        else if(itmj[nowSelectBul]===1&&nokori>0){
            document.getElementById("bulletname").innerHTML=`${bulletnameList[1]}`
            document.getElementById("bulleticon").style.background=`url(./images/bullet${4}.png) center center no-repeat`
            document.getElementById("bulleticon").style.backgroundSize="contain"
            // document.getElementById("bulleticon").style.border="none"
            document.getElementById("bullettext").innerHTML=`${bulletdetailList[1]}`
            console.log("nowSelectzBul is"+nowSelectBul)
            prej=j;
            j--;
            preitmj=itmj.slice();
            itemreset(j,itmj[j])
            for(let i=0;i<j;i++){
                console.log("j is"+itmj[i])
                let asss=itmj[i];
                itemreset(i,asss);
                if(i<nowSelectBul){
                    getitemchp(i,itmj[i])
                }
                else if(i>=nowSelectBul){
                    getitemchp(i,itmj[i+1]);
                    itmj[i]=itmj[i+1];
                }
            }
            itemchpting();
            console.log("nokori is"+nokori)
            bulletchange(4,nokori);
            nokori--;
        }
        else if(itmj[nowSelectBul]===4&&nokori>0){
            document.getElementById("bulletname").innerHTML=`${bulletnameList[2]}`
            document.getElementById("bulleticon").style.background=`url(./images/bullet${5}.png) center center no-repeat`
            document.getElementById("bulleticon").style.backgroundSize="contain"
            // document.getElementById("bulleticon").style.border="none"
            document.getElementById("bullettext").innerHTML=`${bulletdetailList[2]}`
            console.log("nowSelectzBul is"+nowSelectBul)
            prej=j;
            j--;
            preitmj=itmj.slice();
            itemreset(j,itmj[j])
            for(let i=0;i<j;i++){
                console.log("j is"+itmj[i])
                let asss=itmj[i];
                itemreset(i,asss);
                if(i<nowSelectBul){
                    getitemchp(i,itmj[i])
                }
                else if(i>=nowSelectBul){
                    getitemchp(i,itmj[i+1]);
                    itmj[i]=itmj[i+1];
                }
            }
            itemchpting();
            console.log("nokori is"+nokori)
            bulletchange(5,nokori);
            nokori--;
        }
    })
    let dsfd=0;
    document.getElementById("bulList").addEventListener("click",function(){
            console.log(itmj)
            console.log(preitmj)
            dsfd=0;
            j=prej;
            console.log("itmjleng="+j)
            for(let i=0;i<j;i++){
                itemreset(i,itmj[i])
                getitemchp(i,preitmj[i])
            }
            itmj=preitmj.slice();
            itemchpting();
            nokori++;
            for(;nokori<=2;nokori++){
                console.log(nokori);
                if(bulletnow[2-nokori]>1&&dsfd===0){
                    bullethens[bulletnow[2-nokori]]=5;
                    bulletnow[2-nokori]=1;
                    dsfd=1;
                }
                bulletchange(bulletnow[2-nokori],nokori);
            }
            nokori--;
            console.log(nokori);
    })
    
    function bulletchange(s,nokori){
        for(let i=0;i<3;i++){
            bullo[i*5+2-nokori].style.backgroundColor=""
            bullo[i*5+2-nokori].style.background=`url(./images/bullet${s}.png) center center no-repeat`
            bullo[i*5+2-nokori].style.backgroundSize="contain"
        }
        bullethens[s]=2-nokori;
        bulletnow[2-nokori]=s;
    }

    document.getElementById("close").addEventListener("click",function(){
        document.getElementById("popup").style.display="none"
    })


    for(let i=0;i<vBut.length;i++){
        console.log(vBut.length)
        vBut[i].addEventListener("click",function(){
            chpf[i]=(chpf[i]+1)%2;
            if(chpf[i]===1){
                chapter[i].style.backgroundColor="rgba(0,103,108,0.5)"
                chapter[i].style.border="0.6vh solid white"
                chapter[i].innerHTML=`<div class="chpText">Chapter${i}</div>`
                chapter[i].classList.add("c");
            }
            if(chpf[i]===0){
                chapter[i].style.backgroundColor="rgba(77,77,77,0.5)"
                chapter[i].style.border="0.6vh solid rgba(0,0,0,0)"
                chapter[i].innerHTML=""
                chapter[nowPlay].style.outline="none"
                chapter[nowPlay].style.outlineOffset="0"
                chapter[i].classList.remove("c");
            }
        })
    }
    
    function sqitemCon(){
        elements = document.getElementsByClassName("itemicon");
        if(elements.length!=0){
            for(let i=0;i < elements.length;i++){
                elements[i].style.visibility="visible";
            }
        }
    }
    
    function sqDetail(){
        for(let i=1;i<sq.length;i++){
            sq[i].innerHTML=`<div style="
                width:8vh;
                height:8vh;
                border-radius:4vh;
                position:absolute;
                border:white 0.3vh solid;
                background: url(./images/map${i}.png) left top no-repeat;
                background-size:contain;
            "><div>`
        }
    }
    function sqstr(){
        for(let i=1;i<sq.length;i++){
            sq[i].innerHTML=""
            sq[i].style.background=""
            sq[i].style.backgroundColor=color[nowcolor]
        }
    }
    sqDetail();

    let truess=[];
    truess[1]=0;

    function stepziki(){
        if(turn===1){
            sq[21].style.background=`url(./images/ziki.png) left top no-repeat`
            sq[21].style.backgroundColor=color[nowcolor]
            sq[21].style.backgroundSize=`contain`
            truess[turn]=1;
            truess[turn+1]=0;
        }
        if(turn===2){
            sq[25].style.background=`url(./images/ziki.png) left top no-repeat`
            sq[25].style.backgroundColor=color[nowcolor]
            sq[25].style.backgroundSize=`contain`
            truess[turn]=1;
            truess[turn+1]=0;
        }
        if(turn===3){
            sq[6].style.background=`url(./images/ziki.png) left top no-repeat`
            sq[6].style.backgroundColor=color[nowcolor]
            sq[6].style.backgroundSize=`contain`
            truess[turn]=1;
            truess[turn+1]=0;
        }
        if(turn===4){
            sq[16].style.background=`url(./images/ziki.png) left top no-repeat`
            sq[16].style.backgroundColor=color[nowcolor]
            sq[16].style.backgroundSize=`contain`
            truess[turn]=1;
            truess[turn+1]=0;
        }
        if(turn===5){
            sq[16].style.background=`url(./images/ziki.png) left top no-repeat`
            sq[16].style.backgroundColor=color[nowcolor]
            sq[16].style.backgroundSize=`contain`
            truess[turn]=1;
            truess[turn+1]=0;
        }
        if(turn===6){
            sq[26].style.background=`url(./images/ziki.png) left top no-repeat`
            sq[26].style.backgroundColor=color[nowcolor]
            sq[26].style.backgroundSize=`contain`
            truess[turn]=1;
            truess[turn+1]=0;
        }
    }
    function stepteki(){
        if(turn===1&&truess[turn]===1){
            sq[25].style.background=`url(./images/goal.png) left top no-repeat`
            sq[25].style.backgroundSize=`contain`
            sq[25].style.backgroundColor=color[nowcolor]
            sq[23].style.background=`url(./images/enemy.png) left top no-repeat`
            sq[23].style.backgroundSize=`contain`
            sq[23].style.backgroundColor=color[nowcolor]
        }
        if(turn===2 && truess[turn]===1){
            sq[6].style.background=`url(./images/goal.png) left top no-repeat`
            sq[6].style.backgroundSize=`contain`
            sq[6].style.backgroundColor=color[nowcolor]
            sq[18].style.background=`url(./images/enemy.png) left top no-repeat`
            sq[18].style.backgroundSize=`contain`
            sq[18].style.backgroundColor=color[nowcolor]
        }
        if(turn===3 && truess[turn]===1){
            sq[16].style.background=`url(./images/goal.png) left top no-repeat`
            sq[16].style.backgroundSize=`contain`
            sq[16].style.backgroundColor=color[nowcolor]
            sq[17].style.background=`url(./images/enemy.png) left top no-repeat`
            sq[17].style.backgroundSize=`contain`
            sq[17].style.backgroundColor=color[nowcolor]
        }
        if(turn===4 && truess[turn]===1){
            sq[0].style.background=`url(./images/goal.png) left top no-repeat`
            sq[0].style.backgroundSize=`contain`
            sq[0].style.backgroundColor=color[nowcolor]
            sq[9].style.background=`url(./images/enemy.png) left top no-repeat`
            sq[9].style.backgroundSize=`contain`
            sq[9].style.backgroundColor=color[nowcolor]
            sq[2].style.background=`url(./images/enemy.png) left top no-repeat`
            sq[2].style.backgroundSize=`contain`
            sq[2].style.backgroundColor=color[nowcolor]
        }
        if(turn===5 && truess[turn]===1){
            sq[26].style.background=`url(./images/goal.png) left top no-repeat`
            sq[26].style.backgroundSize=`contain`
            sq[26].style.backgroundColor=color[nowcolor]
        }
    }
    console.log(bullethens)

    chapter[0].style.backgroundColor="rgba(0,103,108,0.5)"
    chapter[0].style.border="0.6vh solid white"
    chapter[0].innerHTML=`<div class="chpText">Chapter${0}</div>`
    chapter[0].classList.add("c");
    chpf[0]=1;

    strsub.addEventListener("click",function(){
        console.log(bullethens)
        console.log("ok");
        let flug=0;
        if(turn===1){

            if(sq[22].hasChildNodes()&&sq[23].hasChildNodes()){
                console.log(bulletnow)
                if(sqroot[21]*sqroot[22]*sqroot[23]*sqroot[24]*sqroot[25]===1){
                    let sum=0;
                    for(let i=0;i<27;i++)sum+=sqroot[i];
                    if(sum===5){
                        if((sq[22].firstElementChild.classList[2]===`icon${100}`&&bulletnow[0]===2)||(sq[22].firstElementChild.classList[2]===`icon${101}`&&bulletnow[1]===2)){
                            if((sq[23].firstElementChild.classList[2]===`icon${100}`&&bulletnow[0]===1)||(sq[23].firstElementChild.classList[2]===`icon${101}`&&bulletnow[1]===1)){
                                if(nowcolor===0){
                                    flug=1;
                                }
                            }
                        }
                    }
                } 
            }
            if(flug===1){
                document.getElementById("poptytle").innerHTML="【作戦】"
                document.getElementById("popup").style.display="flex"
                document.getElementById("popcontent").innerHTML=`
                <div>移動に成功しました</div>
                <div>新しい通信が届きました</div>
                `;
                chapter[1].style.backgroundColor="rgba(0,103,108,0.5)"
                chapter[1].style.border="0.6vh solid white"
                chapter[1].innerHTML=`<div class="chpText">Chapter${1}</div>`
                chapter[1].classList.add("c");
                chpf[1]=1;
                sqitemCon();
                turn=2;
                sqstr();
                bulletchange(1,2-bullethens[2]);
                stepziki();
            }
            else{
                document.getElementById("poptytle").innerHTML="【作戦】"
                document.getElementById("popup").style.display="flex"
                document.getElementById("popcontent").innerHTML=`
                <div>移動に失敗しました</div>
                <div>もう一度考えてください</div>
                `;
                console.log("lose");
            }
        }
        else if(turn===2){
            if(sq[18].hasChildNodes()&&sq[14].hasChildNodes()){
                console.log(bulletnow)
                if(sqroot[25]*sqroot[20]*sqroot[19]*sqroot[18]*sqroot[13]*sqroot[14]*sqroot[9]*sqroot[8]*sqroot[7]*sqroot[6]===1){
                    let sum=0;
                    for(let i=0;i<27;i++)sum+=sqroot[i];
                    if(sum===10){
                        if((sq[18].firstElementChild.classList[2]===`icon${100}`&&bulletnow[0]===1)||(sq[18].firstElementChild.classList[2]===`icon${101}`&&bulletnow[1]===1)){
                            if((sq[14].firstElementChild.classList[2]===`icon${100}`&&bulletnow[0]===3)||(sq[14].firstElementChild.classList[2]===`icon${101}`&&bulletnow[1]===3)){
                                if(nowcolor===0){
                                    flug=1;
                                }
                            }
                        }
                    }
                } 
            }
            if(flug===1){
                document.getElementById("poptytle").innerHTML="【作戦】"
                document.getElementById("popup").style.display="flex"
                document.getElementById("popcontent").innerHTML=`
                <div>移動に成功しました</div>
                <div>ガイにアイテムを渡しに行ってください。</div>
                `;
                chapter[2].style.backgroundColor="rgba(0,103,108,0.5)"
                chapter[2].style.border="0.6vh solid white"
                chapter[2].innerHTML=`<div class="chpText">Chapter${2}</div>`
                chapter[2].classList.add("c");
                chpf[2]=1;
                sqitemCon();
                turn=3;
                sqstr();
                bulletchange(1,2-bullethens[3]);
                stepziki();
            }
            else{
                document.getElementById("poptytle").innerHTML="【作戦】"
                document.getElementById("popup").style.display="flex"
                document.getElementById("popcontent").innerHTML=`
                <div>移動に失敗しました</div>
                <div>もう一度考えてください</div>
                `;
                console.log("lose");
            }
        }
        else if(turn===3){
            if(sq[9].hasChildNodes()&&sq[17].hasChildNodes()){
                console.log(bulletnow)
                if(sqroot[6]*sqroot[7]*sqroot[8]*sqroot[9]*sqroot[12]*sqroot[13]*sqroot[18]*sqroot[17]*sqroot[16]===1){
                    let sum=0;
                    for(let i=0;i<27;i++)sum+=sqroot[i];
                    if(sum===9){
                        if((sq[9].firstElementChild.classList[2]===`icon${100}`&&bulletnow[0]===4)||(sq[9].firstElementChild.classList[2]===`icon${101}`&&bulletnow[1]===4)){
                            if((sq[17].firstElementChild.classList[2]===`icon${100}`&&bulletnow[0]===1)||(sq[17].firstElementChild.classList[2]===`icon${101}`&&bulletnow[1]===1)){
                                if(nowcolor===1){
                                    flug=1;
                                }
                            }
                        }
                    }
                } 
            }
            if(flug===1){
                document.getElementById("poptytle").innerHTML="【作戦】"
                document.getElementById("popup").style.display="flex"
                document.getElementById("popcontent").innerHTML=`
                <div>移動に成功しました</div>
                <div>ワーキングルームの調査をして下さい</div>
                `;
                chapter[3].style.backgroundColor="rgba(0,103,108,0.5)"
                chapter[3].style.border="0.6vh solid white"
                chapter[3].innerHTML=`<div class="chpText">Chapter${3}</div>`
                chapter[3].classList.add("c");
                chpf[3]=1;
                sqitemCon();
                turn=4;
                sqstr();
                bulletchange(1,2-bullethens[4]);
                stepziki();
            }
            else{
                document.getElementById("poptytle").innerHTML="【作戦】"
                document.getElementById("popup").style.display="flex"
                document.getElementById("popcontent").innerHTML=`
                <div>移動に失敗しました</div>
                <div>もう一度考えてください</div>
                `;
                console.log("lose");
            }
        }
        else if(turn===4){
            if(sq[9].hasChildNodes()&&sq[2].hasChildNodes()){
                console.log(bulletnow)
                if(sqroot[16]*sqroot[17]*sqroot[18]*sqroot[19]*sqroot[13]*sqroot[12]*sqroot[9]*sqroot[8]*sqroot[7]*sqroot[6]*sqroot[2]*sqroot[3]*sqroot[4]*sqroot[5]===1){
                    let sum=0;
                    for(let i=0;i<27;i++)sum+=sqroot[i];
                    if(sum===14){
                        if((sq[9].firstElementChild.classList[2]===`icon${100}`&&bulletnow[0]===1)||(sq[9].firstElementChild.classList[2]===`icon${101}`&&bulletnow[1]===1)){
                            if((sq[2].firstElementChild.classList[2]===`icon${100}`&&bulletnow[0]===1)||(sq[2].firstElementChild.classList[2]===`icon${101}`&&bulletnow[1]===1)){
                                if(nowcolor===4){
                                    flug=1;
                                }
                            }
                        }
                    }
                } 
            }
            if(flug===1){
                document.getElementById("poptytle").innerHTML="【作戦】"
                document.getElementById("popup").style.display="flex"
                document.getElementById("popcontent").innerHTML=`
                <div>移動に成功しました</div>
                <div>新しい通信が届きました</div>
                `;
                chapter[4].style.backgroundColor="rgba(0,103,108,0.5)"
                chapter[4].style.border="0.6vh solid white"
                chapter[4].innerHTML=`<div class="chpText">Chapter${4}</div>`
                chapter[4].classList.add("c");
                chpf[4]=1;
                sqitemCon();
                turn=5;
                sqstr();
                stepziki();
            }
            else{
                document.getElementById("poptytle").innerHTML="【作戦】"
                document.getElementById("popup").style.display="flex"
                document.getElementById("popcontent").innerHTML=`
                <div>移動に失敗しました</div>
                <div>もう一度考えてください</div>
                `;
                console.log("lose");
            }
        }
        else if(turn===5){
            if(sq[26].hasChildNodes()&&sq[19].hasChildNodes()){
                console.log(bulletnow)
                if(sqroot[5]*sqroot[4]*sqroot[6]*sqroot[7]*sqroot[8]*sqroot[9]*sqroot[14]*sqroot[13]*sqroot[12]*sqroot[11]*sqroot[19]*sqroot[20]*sqroot[25]*sqroot[24]*sqroot[23]*sqroot[26]===1){
                    let sum=0;
                    for(let i=0;i<27;i++)sum+=sqroot[i];
                    if(sum===16){
                        if((sq[19].firstElementChild.classList[2]===`icon${100}`&&bulletnow[0]===5)||(sq[19].firstElementChild.classList[2]===`icon${101}`&&bulletnow[1]===5)){
                            if((sq[26].firstElementChild.classList[2]===`icon${100}`&&bulletnow[0]===1)||(sq[26].firstElementChild.classList[2]===`icon${101}`&&bulletnow[1]===1)){
                                if(nowcolor===5){
                                    flug=1;
                                }
                            }
                        }
                    }
                } 
            }
            if(flug===1){
                document.getElementById("poptytle").innerHTML="【作戦】"
                document.getElementById("popup").style.display="flex"
                document.getElementById("popcontent").innerHTML=`
                <div>移動に成功しました</div>
                <div>X roomに潜入してください</div>
                `;
                chapter[5].style.backgroundColor="rgba(0,103,108,0.5)"
                chapter[5].style.border="0.6vh solid white"
                chapter[5].innerHTML=`<div class="chpText">Chapter${5}</div>`
                chapter[5].classList.add("c");
                chpf[5]=1;
                sqitemCon();
                turn=6;
                sqstr();
                bulletchange(1,2-bullethens[5]);
                stepziki();
            }
            else{
                document.getElementById("poptytle").innerHTML="【作戦】"
                document.getElementById("popup").style.display="flex"
                document.getElementById("popcontent").innerHTML=`
                <div>移動に失敗しました</div>
                <div>もう一度考えてください</div>
                `;
                console.log("lose");
            }
        }
        else if(turn===6){
            let sum=0;
            for(let i=0;i<27;i++)sum+=sqroot[i];
            if((sum===1&&sqroot[26]===1)||sum===0){
                if(nowcolor===6){
                    flug=1;
                }
            }
            if(flug===1){
                document.getElementById("poptytle").innerHTML="【作戦】"
                document.getElementById("popup").style.display="flex"
                document.getElementById("popcontent").innerHTML=`
                <div>作戦は成功しました</div>
                <div>再びX roomに向かってください</div>
                `;
                chapter[6].style.backgroundColor="rgba(0,103,108,0.5)"
                chapter[6].style.border="0.6vh solid white"
                chapter[6].innerHTML=`<div class="chpText">Chapter${6}</div>`
                chapter[6].classList.add("c");
                chpf[6]=1;
                sqitemCon();
                sqstr();
            }
            else{
                document.getElementById("poptytle").innerHTML="【作戦】"
                document.getElementById("popup").style.display="flex"
                document.getElementById("popcontent").innerHTML=`
                <div>作戦に失敗しました</div>
                <div>もう一度考えてください</div>
                `;
                console.log("lose");
            }
        }
    },false)

    bullo[5].classList.add("itemicon");
    console.log("now j is" + j);
    elements[j] = document.getElementsByClassName("itemicon")[j];
    elements[j].addEventListener("mousedown", mdown, false);
    elements[j].addEventListener("touchstart", mdown, false);
    elements[j].classList.add(`icon${100}`)
    bullo[6].classList.add("itemicon");
    elements[j+1] = document.getElementsByClassName("itemicon")[j+1];
    elements[j+1].addEventListener("mousedown", mdown, false);
    elements[j+1].addEventListener("touchstart", mdown, false);
    elements[j+1].classList.add(`icon${101}`)

    document.getElementsByClassName("raw")[0].style.visibility="hidden"
    document.getElementById("map0").style.visibility="hidden"
    document.getElementById("map1").style.visibility="hidden"
    document.getElementById("map2").style.visibility="hidden"
    document.getElementById("map3").style.visibility="hidden"
    document.getElementById("map4").style.visibility="hidden"
    document.getElementById("map5").style.visibility="hidden"
    document.getElementById("map6").style.visibility="hidden"



    chapter[0].addEventListener("click",function(){
        if(chpf[0]===1){
            document.getElementById("map5").style.visibility="visible"
            sqstr();
            stepteki();
            console.log("nokori is "+nokori)
            nokori++;
            for(;nokori<=2;nokori++){
                bulletchange(bulletnow[2-nokori],nokori);
            }
            nokori--;
            canuseTop=26;
            canuseBot=21;
        }
    })

    chapter[1].addEventListener("click",function(){
        if(chpf[1]===1){
            document.getElementById("map0").style.visibility="visible";
            document.getElementById("map1").style.visibility="visible";
            document.getElementById("map2").style.visibility="visible";
            document.getElementById("map3").style.visibility="visible";
            document.getElementById("map4").style.visibility="visible";
            document.getElementById("map5").style.visibility="visible";

            sqstr();
            stepteki();
            console.log("nokori is "+nokori)
            nokori++;
            for(;nokori<=2;nokori++){
                bulletchange(bulletnow[2-nokori],nokori);
            }
            nokori--;
            canuseTop=26;
            canuseBot=1;
        }
    })

    chapter[2].addEventListener("click",function(){
        if(chpf[2]===1){
            document.getElementById("map0").style.visibility="visible";
            document.getElementById("map1").style.visibility="visible";
            document.getElementById("map2").style.visibility="visible";
            document.getElementById("map3").style.visibility="visible";
            document.getElementById("map4").style.visibility="visible";
            document.getElementById("map5").style.visibility="visible";
            nowcolor=1;
            let enans="blood";
            if(enans[5]=='x'){
                mrf[5].style.width="25%"
                mrl[5].style.width="25%"
            }
            else{
                mrf[5].style.width="5%"
                mrl[5].style.width="45%"
            }
            for(let i=0;i<5;i++){
                for(let k=0;k<5;k++){
                    if(enans[i]==mapAlph[i*5+k+1]){
                        mrf[i].style.width=`${45-k*10}%`
                        mrl[i].style.width=`${5+k*10}%`
                    }
                }
            }

            sqstr();
            stepteki();
            console.log("nokori is "+nokori)
            nokori++;
            for(;nokori<=2;nokori++){
                bulletchange(bulletnow[2-nokori],nokori);
            }
            nokori--;
            canuseTop=26;
            canuseBot=1;

        }
    })
    chapter[3].addEventListener("click",function(){
        if(chpf[3]===1){
            document.getElementById("map0").style.visibility="visible";
            document.getElementById("map1").style.visibility="visible";
            document.getElementById("map2").style.visibility="visible";
            document.getElementById("map3").style.visibility="visible";
            document.getElementById("map4").style.visibility="visible";
            document.getElementById("map5").style.visibility="visible";
            document.getElementsByClassName("raw")[0].style.visibility="visible";

            sqstr();
            stepteki();
            console.log("nokori is "+nokori)
            nokori++;
            for(;nokori<=2;nokori++){
                bulletchange(bulletnow[2-nokori],nokori);
            }
            nokori--;
            canuseTop=26;
            canuseBot=0;

        }
    })
    chapter[4].addEventListener("click",function(){
        if(chpf[4]===1){
            document.getElementById("map0").style.visibility="visible";
            document.getElementById("map1").style.visibility="visible";
            document.getElementById("map2").style.visibility="visible";
            document.getElementById("map3").style.visibility="visible";
            document.getElementById("map4").style.visibility="visible";
            document.getElementById("map5").style.visibility="visible";
            document.getElementsByClassName("raw")[0].style.visibility="visible";
            document.getElementById("map6").style.visibility="visible";
            sqstr();
            stepteki();
            console.log("nokori is "+nokori)
            nokori++;
            for(;nokori<=2;nokori++){
                bulletchange(bulletnow[2-nokori],nokori);
            }
            nokori--;
            canuseTop=27;
            canuseBot=0;

        }
    })
    chapter[5].addEventListener("click",function(){
        if(chpf[5]===1){
            document.getElementById("map0").style.visibility="visible";
            document.getElementById("map1").style.visibility="visible";
            document.getElementById("map2").style.visibility="visible";
            document.getElementById("map3").style.visibility="visible";
            document.getElementById("map4").style.visibility="visible";
            document.getElementById("map5").style.visibility="visible";
            document.getElementsByClassName("raw")[0].style.visibility="visible";
            document.getElementById("map6").style.visibility="visible";
            sqstr();
            stepteki();
            console.log("nokori is "+nokori)
            nokori++;
            for(;nokori<=2;nokori++){
                bulletchange(bulletnow[2-nokori],nokori);
            }
            nokori--;
            canuseTop=27;
            canuseBot=0;

        }
    })





    const pBut=document.getElementsByClassName("pBut");
    for(let i=0;i<pBut.length;i++){
        pBut[i].addEventListener("click",function(){
            turn=i+1;
        })
    }

    
}




