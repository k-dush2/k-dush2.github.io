function checkanswer(){
  var getdrag=document.getElementsByClassName("drag-card");
  var top=[];
  var left=[];
  for(var i = 0; i<getdrag.length; i++){
    top[i] = parseFloat(getdrag[i].style.top)
    left[i] = parseFloat(getdrag[i].style.left)
  }
  if(top[0]==400 && left[0]==100 && top[1]==400 && left[1]==250 && top[2]==400 && left[2]==400){
    alert("正解です")}
    else{
      alert("不正解です")
    }
}
