for(var k=0; k<=7;k++){
  var ttt = document.getElementsByClassName("answer-box")[k]
if(k<4){
  ttt.style.top=210+"px";
  ttt.style.left=(127+k*215)+"px";
}else{
    ttt.style.top=527+"px";
  ttt.style.left=(127+(k-4)*215)+"px";
  }
}
(function(){

    //要素の取得
    var elements = document.getElementsByClassName("drag-card");
    //要素内のクリックされた位置を取得するグローバル（のような）変数
    var x;
    var y;

    //マウスが要素内で押されたとき、又はタッチされたとき発火
    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mousedown", mdown, false);
        elements[i].addEventListener("touchstart", mdown, false);
    }

    //マウスが押された際の関数
    function mdown(e) {

        //クラス名に .drag を追加
        this.classList.add("drag");

        //タッチデイベントとマウスのイベントの差異を吸収
        if(e.type === "mousedown") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //要素内の相対座標を取得
        x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;

        //ムーブイベントにコールバック
        document.body.addEventListener("mousemove", mmove, false);
        document.body.addEventListener("touchmove", mmove, false);
    }

    //マウスカーソルが動いたときに発火
    function mmove(e) {

        //ドラッグしている要素を取得
        var drag = document.getElementsByClassName("drag")[0];

        //同様にマウスとタッチの差異を吸収
        if(e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //フリックしたときに画面を動かさないようにデフォルト動作を抑制
        e.preventDefault();

        //マウスが動いた場所に要素を動かす
        drag.style.top = event.pageY - y + "px";
        drag.style.left = event.pageX - x + "px";

        var flipval = drag.id+"_flip";
        var flipid = document.getElementById(flipval);

        flipid.style.top = event.pageY - y+235 + "px";
        flipid.style.left = event.pageX - x+133 + "px";

        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
        drag.addEventListener("mouseup", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        drag.addEventListener("touchend", mup, false);
        document.body.addEventListener("touchleave", mup, false);

    }

    //マウスボタンが上がったら発火
    function mup(e) {
        var drag = document.getElementsByClassName("drag")[0];
        //ムーブベントハンドラの消去
        document.body.removeEventListener("mousemove", mmove, false);
        drag.removeEventListener("mouseup", mup, false);
        document.body.removeEventListener("touchmove", mmove, false);
        drag.removeEventListener("touchend", mup, false);
        checkbox();
        //クラス名 .drag も消す
        drag.classList.remove("drag");

    }

function checkbox(){
          var drag = document.getElementsByClassName("drag")[0];
          var top = parseFloat(drag.style.top)
          var left = parseFloat(drag.style.left)

for(var i =0; i<=7;i++){
  var fff = document.getElementsByClassName("answer-box")[i]
  if(top-parseFloat(fff.style.top)<=50 && top - parseFloat(fff.style.top) >= -50 && left-parseFloat(fff.style.left)<=30 && left-parseFloat(fff.style.left)>=-30){

    drag.style.top=(parseFloat(fff.style.top)+3)+"px";
    drag.style.left=(parseFloat(fff.style.left)+3)+"px";
    var flipval = drag.id+"_flip";
    var flipid = document.getElementById(flipval);
    flipid.style.top = (parseFloat(fff.style.top)+238)+"px";
    flipid.style.left = (parseFloat(fff.style.left)+136)+"px";

  }
}

checkanswer();
}
function checkanswer(){
  var getdrag=document.getElementsByClassName("drag-card");
	  var getbox=document.getElementsByClassName("answer-box");
  var top=[];
  var left=[];
	var top1=[];
	var left1=[];
	var ansssss=0;
  for(var i = 0; i<getdrag.length; i++){
    top[i] = parseFloat(getdrag[i].style.top)
    left[i] = parseFloat(getdrag[i].style.left)
		top1[i] = parseFloat(getbox[i].style.top)+3
		left1[i] = parseFloat(getbox[i].style.left)+3
  }
	for(var ii=0; ii<=7; ii++){
		if(top[ii]==top1[ii] && left[ii]==left1[ii]){
			ansssss++;
		}
	}
  if(ansssss==8){
    var flipside=document.getElementsByClassName("flipbutton")
    if(flipside[0].innerHTML=="裏" && flipside[1].innerHTML=="裏" && flipside[2].innerHTML=="裏" && flipside[3].innerHTML=="裏" && flipside[4].innerHTML=="表" && flipside[5].innerHTML=="表" &&flipside[6].innerHTML=="表" && flipside[7].innerHTML=="表"){
    location.href="YouW0nThe2chrome.html"
}
}
}


})()
