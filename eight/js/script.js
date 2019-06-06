function check_1st(i){
    var ans_katakana = ['レッド','ブルー','ネズミイロ','オレンジ','ムラサキ','キイロ','サクライロ','ミドリイロ'];
    var ans_hiragana = ['れっど','ぶるー','ねずみいろ','おれんじ','むらさき','きいろ','さくらいろ','みどりいろ'];
    var ans_kanji = ['レッド','ブルー','鼠色','オレンジ','紫','黄色','桜色','緑色'];
    var ans_kanjimajiri = ['レッド','ブルー','ねずみ色','オレンジ','紫','黄色','さくら色','みどり色'];
    var textid ="Color" +  String(i);
    var color = document.getElementById(textid).value;
    //alert(color);
    
    if((color === ans_hiragana[i] )|| (color ===　ans_kanji[i]) || (color ===　ans_katakana[i]) || (color ===　ans_kanjimajiri[i])){

        alert("正解です");

    }else{
    
        alert("間違っています");

    }

    check_1st_true();//ぜんぶみるやつ
    
 }

function check_1st_true(){
    var flags = [false,false,false,false,false,false,false,false];
    var clear = [true,true,true,true,true,true,true,true];
    var ans_katakana = ['レッド','ブルー','ネズミイロ','オレンジ','ムラサキ','キイロ','サクライロ','ミドリイロ'];
    var ans_hiragana = ['れっど','ぶるー','ねずみいろ','おれんじ','むらさき','きいろ','さくらいろ','みどりいろ'];
    var ans_kanji = ['レッド','ブルー','鼠色','オレンジ','紫','黄色','桜色','緑色'];
    var ans_kanjimajiri = ['レッド','ブルー','ねずみ色','オレンジ','紫','黄色','さくら色','みどり色'];
    for(i=0;i<8;i++){
        var textid ="Color" +  String(i);
        var color = document.getElementById(textid).value;
        if((color === ans_hiragana[i] )|| (color ===　ans_kanji[i]) || (color ===　ans_katakana[i]) || (color ===　ans_kanjimajiri[i])){
            flags[i] = true;
        }
    }

    if(array_equal(flags,clear)){
        window.location.href="segment_ESPER.html";
    }
    

}

function check_2nd(){
    var correct = ["LEVELTWO","LEVEL TWO","LevelTwo","Level Two","leveltwo","level two"];
    var answer = document.getElementById("Segment").value;
//    console.log(elem_in_array(answer,correct));
    if(elem_in_array(answer,correct)){
        alert("正解です");
        window.location.href="slide_HARD.html";
    }else{
        alert("間違っています");
    }
}
        
function check_3rd(){
    var correct = ["無限","むげん","ムゲン"];
    var answer = document.getElementById("Slide").value;
//    console.log(elem_in_array(answer,correct));
    if(elem_in_array(answer,correct)){
        alert("正解です");
        window.location.href="pilling.html";
    }else{
        alert("間違っています");
    }
}

function check_4th(){
    var correct = ["UNLIMITED","unlimited","Unlimited"];
    var answer = document.getElementById("Pill").value;
//    console.log(elem_in_array(answer,correct));
    if(elem_in_array(answer,correct)){
        alert("正解です");
        window.location.href="clearpage.html";
    }else{
        alert("間違っています");
    }
}

function array_equal(a, b) {
    if (!Array.isArray(a))    return false;
    if (!Array.isArray(b))    return false;
    if (a.length != b.length) return false;
    for (var i = 0, n = a.length; i < n; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

function elem_in_array(ele,arr){
    flags = false;
    for(i=0;i<arr.length;i++){
        if(ele===arr[i]){
            flags = true;
        }
    }
    return flags;
}