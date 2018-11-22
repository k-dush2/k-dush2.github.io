


var setting;

window.onload = function(){

	setting = [
		{
			form: document.getElementById('form'),
			button: document.getElementById('button'),
			message: document.getElementById('message'),
			folder: 'answer',
			sending: false,
		},
	]

	for(var i = 0; i < setting.length; ++i) {
		if( setting[i]['button'] ) {
			setting[i]['button'].onclick = (function(_i){return function(){ checkAns(_i); };})(i);
		}
		if( setting[i]['form'] ) {
			setting[i]['form'].onkeydown = (function(_i){ return function(event){
				if (event == undefined) event = window.event;
				if (event.keyCode == 13) checkAns(_i);
			}})(i);
		}
	}

}

function checkAns(id){

	if(setting[id]['sending']) return;
	setting[id]['sending'] = true;
	setting[id]['button'].disabled = true;
	setting[id]['message'].innerText = "判定中...";

	var request = new XMLHttpRequest();
	request.timeout = 10000;
	request.open('GET', setting[id]['folder'] + '/' + encodeURIComponent(setting[id]['form'].value));
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	request.send(null);

	request.onreadystatechange = function(){
		if(request.readyState == 4){
			if( setting[id]['form'].value == '' ){
				setting[id]['message'].innerText = "不正解です";
			} else {
				switch(request.status){
					case 200:
            var ttt=Number(request.responseText);
						mission(ttt);
            setting[id]['message'].innerText = "";
						break;
					case 404:
						setting[id]['message'].innerText = "不正解です";
						break;
					default:
						setting[id]['message'].innerText = "不正解です";
						break;
				}
			}
			setting[id]['button'].disabled = false;
			setting[id]['sending'] = false;
		}
	}

	request.ontimeout = function(){
		setting[id]['message'].innerText = "タイムアウトしました。もう一度やりなおしてください。";
		setting[id]['button'].disabled = false;
		setting[id]['sending'] = false;
	}

}


function mission(n){
  switch(n){
    case 0:
    document.getElementById("mis1").innerHTML='<img src="image/mission1_2.png" class="missions">'
    break;
    case 1:
    document.getElementById("mis2").innerHTML='<img src="image/mission2_2.png" class="missions">'
    break;
    case 2:
    document.getElementById("mis3").innerHTML='<img src="image/mission3_2.png" class="missions">'
    break;
    case 3:
    document.getElementById("mis4").innerHTML='<img src="image/mission4_2.png" class="missions">'
    break;
  }
}

function flipcard(n){

var getflip=document.getElementsByClassName("drag-card")[n];
var getflips=document.getElementsByClassName("flipbutton")[n];


if(getflips.innerHTML=="表"){
  getflip.style.backgroundImage="url(image/card"+(n+1)+".png)";
  getflips.innerHTML="裏"
}else{getflip.style.backgroundImage="url(image/card"+(n+1)+"_ura.png)";
  getflips.innerHTML="表"
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
