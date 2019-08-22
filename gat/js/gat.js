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

    document.onkeypress = enter;
    function enter(){
      if( window.event.keyCode == 13 ){
        return false;
      }
    }







    const ansin=document.getElementById("ans")
    const itemNam=document.getElementById("itemName")
    let canuseTop=26,canuseBot=21;
    let bullethens=[0,0,0,0]
    
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
    
    let changef=0,nokori=2;
    const sqroot=[]

    const bt=document.getElementsByClassName("cls-4");
    let bullo=document.getElementsByClassName("bulli");
    const chapter=document.getElementsByClassName("chapter");
    const vBut=document.getElementsByClassName("vBut");
    const video=document.getElementsByTagName("video");
    const play=document.getElementById("play");
    const logText=document.getElementsByClassName("logText")
    const logTytle=document.getElementById("logTytle");
    let chpf=[0,0,0,0,0,0,0];
    let nowPlay=-1;
    let playing;

    const itemSub=document.getElementById("itemSub")
    const itemName=document.getElementById("itemName")
    const itemTag=document.getElementById("itemTag")
    const itemImage=document.getElementById("itemImage")
    const itemDetail=document.getElementById("itemDetail")
    const itemchp=document.getElementsByClassName("itemchp")
    const itemchpt=document.getElementsByClassName("itemchpt")

    const itemList=[
        "ダイヤモンド",
        "ライター",
        "item3",
        "item4",
        "item5",
        "item6"
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
    let nowitem=[

    ]
    let itmf=[],itmj=[],j=0,nowSelect=-1,nowSelectBul=-1;

    const mrf=document.getElementsByClassName("mrf");
    const mrl=document.getElementsByClassName("mrl");
    const mapAlph=[
        "↓",
        "p","g","c","k","s",
        "v","q","r","l","u",
        "x","i","a","h","j",
        "w","d","z","m","n",
        "f","b","y","e","o",
        "t"
    ];
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

    var x;
    var y;
    let p;

    let bulletnameList = [
        "ガラス弾",
        "水流弾",
        "電気弾",
        "火炎弾"
    ]
    let bulletdetailList = [
        "ガラスを割るためだけの弾<br>ガラスであれば何でも割れる",
        "水圧で重いものを動かせる<br>水の力は侮れない",
        "強力なエネルギーを放つ<br>どんな機械も作動させる",
        "強力な炎を噴射する<br>これに触れるとヤケドするぜ"
    ]
    let paaa=[];













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
            sq[i].style.backgroundColor="rgba(0,103,118,0.5)"
        }
        itemNam.disabled=true;
        ansin.disabled=true;
        change.innerHTML="作戦へ"
        // sqDetail();
        // sqitemCon();
        changef=0;
    }

    function mvMap(){
        home.style.left="103vw";
        map.style.left="-40vw";
        window.setTimeout(function(){ansin.disabled=false;},1000);
    }

    function mvItem(){
        home.style.left="103vw";
        item.style.left="3vw";
        window.setTimeout(function(){itemNam.disabled=false;},1000);
    }
    function mvVoice(){
        resetVoice();
        home.style.left="-97vw";
        voice.style.left="3vw";
        // for(let i=0;i<chapter.length;i++){
        //     if(chpf[i]===1){
        //         chapter[i].style.backgroundColor="rgba(0,103,108,0.5)"
        //         chapter[i].style.border="0.6vh solid white"
        //         chapter[i].innerHTML=`<div class="chpText">Chapter${i}</div>`
        //         chapter[i].classList.add("c");
        //     }
        //     if(chpf[i]===0){
        //         chapter[i].style.backgroundColor="rgba(77,77,77,0.5)"
        //         chapter[i].style.border="0.6vh solid rgba(0,0,0,0)"
        //         chapter[i].innerHTML=""
        //         chapter[i].classList.remove("c");
        //     }
        // }

    }
    function mvBullet(){
        home.style.left="-97vw";
        bullet.style.left="3vw";
    }


    function resetVoice(){
        document.getElementById("voice").innerHTML=`<div class="back"></div>
        <div class="content">
            <div id="chap">
                <div class="chapter"></div>
                <div class="chapter"></div>
                <div class="chapter"></div>
                <div class="chapter"></div>
                <div class="chapter"></div>
                <div class="chapter"></div>
                <div class="chapter"></div>
            </div>
            <div id="chapRight">
                <div id="mov">
                    <video class="hidden" src="voices/OP.mp3"></video>
                    <video class="hidden" src="voices/1st.mp3"></video>
                    <video class="hidden" src="voices/2nd.mp3"></video>
                    <video class="hidden" src="voices/3rd.mp3"></video>
                    <video class="hidden" src="voices/4th.mp3"></video>
                    <video class="hidden" src="voices/5th.mp3"></video>
                    <video class="hidden" src="voices/6th.mp3"></video>
                    <div id="play"></div>
                    <div id="seek">
                        <div id="time" style="color:white;margin:0 0 0 1vw;font-size:1.5vw;">
                                <span id="current">00:00</span>
                                <span>/</span>
                                <span id="duration">00:00</span>
                        </div>
                        <div id="seekbar"></div>
                    </div>
                </div>
                <div id="log">
                    <div id="logTytle"></div>
                    <div class="logText hidden">
                            トム
                            <br>では、今回の任務を伝えます。
                            <br>
                            <br>「そしきめい」のアジトに潜入し、1時間後に発動するボスの作った装置を解除すること。
                            <br>
                            <br>みなさんは、直ちに現場へ向かってください。
                            <br>
                            <br>ガイ
                            <br>そうだ、一つだけ伝えたいことがある。新人はこっちに来るついでにライターを持ってきてくれないか？
                            <br>
                            <br>トム
                            <br>こんな状況で何を言ってるんですか？一刻を争う状況ですよ。
                            <br>
                            <br>ガイ
                            <br>分かってるさ。だからこそ必要なんだ。
                            <br>
                            <br>いいか、新人。BLACK GATの一員として覚えておいてほしいことがある。
                            <br>任務で大事な場面では『（SE）カッコつける』こと。それが任務成功のカギだ。
                            <br>じゃあ頼んだぞ！！
                            <br>
                            <br>トム
                            <br>では、皆さんはアジトに向かってください！
                            <br>
                            <br>
                    </div>
                    <div class="logText hidden">
                        トム<br>
                        新人のみなさん、無事に潜入はできましたか。<br>
                        <br>
                        アン<br>
                        A（マップ共有が本来通りの場合）<br>
                            できたよ。マップ情報も共有しておいたよ。<br>
                        <br>
                        トム<br>
                        了解しました。アンは敵の情報を随時報告するようにしてください。<br>
                        <br>
                        アン<br>
                        はーい。<br>
                        <br>
                        （接続音）<br>
                        ガイ<br>
                        今回の敵に関する資料を見つけた。だが、紙の資料ばかりで整理に時間がかかりそうだ。<br>
                        <br>
                        トム<br>
                        そうですか。<br>
                        <br>
                        ガイ<br>
                        そうだ、そういえば新人たちは俺のライター、持ってきてくれたのか？<br>
                        <br>
                        トム<br>
                        一応、持たせてはありますよ。<br>
                        <br>
                        ガイ<br>
                        なら新人。そのライターを持ってきてくれないか。場所はそうだな…タイヨウノウラ、って言えばわかるか。<br>
                        <br>
                        アン<br>
                        タイヨウノウラ？そんな場所、マップにはなかったはずだけど…<br>
                        <br>
                        ガイ<br>
                        この通信が敵に傍聴されている以上、自分たちの位置情報をそのまま漏らすわけにはいかない。だが、新人のみんなにはちゃんと伝わっているはずだから、大丈夫だ。場所がわかったら、俺にライターを渡しにきてくれ。<br>
                        <br>
                        <br>

                    </div>
                    <div class="logText hidden">
                        ガイ<br>
                        資料の整理が終わった。このくらいの量の資料をまとめることくらい『俺一人』で十分だな。<br>
                        <br>
                        トム<br>
                        新人の皆さんに手伝ってもらったんですね。一人の手柄にしようとしないでください。<br>
                        <br>
                        ガイ<br>
                        そんなことより、いい情報が手に入った。敵の装置の設置場所が分かった。その場所は、『屋上』だ。<br>
                        <br>
                        アン<br>
                        いかにもって感じの場所だね。<br>
                        待って?　今わたしのいる部屋の『上』から、何か物音がしたんだけど…ちょっといってみて…（地響き）うわあ！<br>
                        <br>
                        トム<br>
                        アン、大丈夫ですか！<br>
                        <br>
                        アン<br>
                        うん、平気。突然部屋が揺れだして…あ、アジトの形が変わってる！そっちに新しいマップの情報を送るね。<br>
                        <br>
                        （効果音）<br>
                        <br>
                        ガイ<br>
                        随分と派手なことしてくれるんだな。俺らの動きを見て、屋上へ行くのを阻止したんだろう。<br>
                        A（フレーバーで解かせる用）<br>
                            たしかこのアジトを管理している部屋がどこかにあったような気がするが…<br>
                        B（行先を指示してしまう用）<br>
                            そういえば、このアジトには制御室ってのがあったな…<br>
                        <br>
                        トム<br>
                        では、新人の皆さんはその部屋に向かって下さい。そこへ行けばこの状況を作り出した敵がいるはずです。目的地に着いたらその敵を倒してください。<br>
                        <br>
                        アン（余裕があれば）<br>
                        拳銃の撃ち方は覚えてる？ちゃんと狙いを定めて、決め台詞を言ってから撃つんだよ。<br>
                        <br>

                    </div>
                    <div class="logText hidden">
                            アン<br>
                            おおー！ナイス新人君！ちゃんと『カッコよく』決められたみたいだねー！　<br>
                            <br>
                            トム<br>
                            これでタブレット上で、アジトの構造を変化させられるようになったみたいですね。<br>
                            <br>
                            ガイ<br>
                            なら、さっさと構造を変化させて、この任務を終わらせよう。行く場所は『屋上』だからな。<br>
                            <br>
                            アン<br>
                            この任務が終わったら、『』<br>
                            <br>
                            トム<br>
                            まだ任務の途中ですよ。緊張感を持ってください。とにかく、ルートを作り出し、目的の場所に向かってください。<br>
                            <br>
                            ガイ<br>
                            『』<br>
                            <br>

                    </div>
                    <div class="logText hidden">
                            ガイ<br>
                            そっちはもう着いたか？俺ももうすぐそっちに…<br>
                            <br>
                            （ラジオチューニング）<br>
                            <br>
                            ボス<br>
                            そこまでだ。<br>
                            <br>
                            ガイ<br>
                            今の声は、まさかボスか。<br>
                            <br>
                            ボス<br>
                            ご苦労だったな。どうやら屋上にたどり着いたようだが、残念ながらそこには何もない。お前たちが装置を見つけ出すことなど、絶対に不可能だ。<br>
                            <br>
                            ガイ<br>
                            随分と丁寧に教えてくれるんだな。その言い方だと、どこか別の場所に隠してる、ってところか。どうせお前自身もそこにいるんだろ。<br>
                            <br>
                            ボス<br>
                            それがわかったところでなんだ。こちらも既に手は打たせてもらった。<br>
                            <br>
                            敵<br>
                            いたぞ！BLACK GATの一味だ！　お前らの作戦はここまでだ!!<br>
                            <br>
                            ガイ<br>
                            へぇ、そうかい。お迎えにしちゃ遅すぎるんじゃないか？<br>
                            <br>
                            ボス<br>
                            お前が捕まればこちらの勝ちも同然。潔く負けを認めたらどうだ？<br>
                            <br>
                            ガイ<br>
                            そういう訳にも行かないんだ。あいにく、これも作戦の内だからな。<br>
                            <br>
                            ボス<br>
                            なに？<br>
                            <br>
                            ガイ<br>
                            おい、新人。聞こえてるか？お前たちは今すぐボスの元へと向かってくれ。<br>
                            今お前らの持っているマップにはボスのいる部屋は表示されていない。<br>
                            このアジトに隠されているもう一つの部屋、それが俺たちの向かう、最後の場所だ。<br>
                            その部屋へ向かい、ボスを撃ち、装置を解除してくれ。<br>
                            今までの通信をもう一度よく聞き直したうえで、ロゴの『上』を見ればわかるはずだ。<br>
                            <br>
                            <br>
                            ボス<br>
                            なにを言うかと思えば。おい、早く連れてこい。<br>
                            <br>
                            敵<br>
                            了解しました！さぁ、早く来い！（殴る音）<br>
                            <br>
                            （通信機の落ちる音）<br>
                            （つぶれる音、通信切断）<br>
                            <br>
                            アン<br>
                            どうしよう、ガイが敵に連れていかれちゃった。このままじゃ、任務を続行できない。わたしたち、どうすればいいんだろう。<br>
                            <br>

                    </div>
                    <div class="logText hidden">
                        アン<br>
                        大変。今、新人君たちのいる地下が閉鎖されちゃった。もう地下から出られないみたい。それに私のいる部屋の扉も閉まっちゃって、助けに行くことも出来ない。あとは装置を解除するだけなのに…<br>
                        <br>
                        トム<br>
                        こちらから地下の様子を探るのは難しそうですね。あとは新人のみなさんを信じるしかありません。<br>
                        <br>
                        アン<br>
                        そんな…<br>
                        <br>                            
                    </div>
                    <div class="logText hidden">
                        アン<br>
                        見えるようになったよ、「電球に弾がないまま撃て」だって<br>
                        これで最後だよ、カッコよくきめて <br>
                    </div>
                    <div class="logText"></div>
                </div>
            </div>
        </div>
        <div id="vDev">
            <div class="vBut"></div>
            <div class="vBut"></div>
            <div class="vBut"></div>
            <div class="vBut"></div>
            <div class="vBut"></div>
            <div class="vBut"></div>
            <div class="vBut"></div>
        </div>`
    }
    
    mvHome();
    chpf[0]=1;
    bt[0].addEventListener("click",mvMap,false);
    bt[1].addEventListener("click",mvItem,false);
    bt[2].addEventListener("click",mvVoice,false);
    bt[3].addEventListener("click",mvBullet,false);
    for(let i=0;i<back.length;i++){
        back[i].addEventListener("click",function(){
            mvHome();
        })
    }


















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
















    sq[1].style.borderColor="transparent transparent transparent white"
    sq[2].style.borderColor="white transparent white transparent"
    sq[3].style.borderColor="transparent transparent white transparent"
    sq[4].style.borderColor="white transparent transparent transparent"
    sq[5].style.borderColor="white white transparent transparent"
    sq[6].style.borderColor="white transparent transparent white"
    sq[7].style.borderColor="transparent transparent white transparent"
    sq[8].style.borderColor="white transparent transparent transparent"
    sq[9].style.borderColor="transparent transparent transparent transparent"
    sq[10].style.borderColor="white white transparent transparent"
    sq[11].style.borderColor="transparent transparent white white"
    sq[12].style.borderColor="white transparent transparent transparent"
    sq[13].style.borderColor="transparent transparent transparent transparent"
    sq[14].style.borderColor="transparent transparent white transparent"
    sq[15].style.borderColor="white white transparent transparent"
    sq[16].style.borderColor="white transparent white white"
    sq[17].style.borderColor="transparent transparent white transparent"
    sq[18].style.borderColor="white transparent white transparent"
    sq[19].style.borderColor="white transparent transparent transparent"
    sq[20].style.borderColor="transparent white transparent transparent"
    sq[21].style.borderColor="white transparent transparent white"
    sq[22].style.borderColor="transparent transparent white transparent"
    sq[23].style.borderColor="white transparent white transparent"
    sq[24].style.borderColor="transparent gray gray transparent"
    sq[25].style.borderColor="white white white transparent"
    sq[26].style.borderColor="transparent white white white"

    
}