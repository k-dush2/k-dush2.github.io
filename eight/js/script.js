function check_1st(i){
    var ans_katakana = ['レッド','ブルー','ミドリイロ','オレンジ','ムラサキ','キイロ','サクライロ','ネズミイロ'];
    var ans_hiragana = ['れっど','ぶるー','みどりいろ','おれんじ','むらさき','きいろ','さくらいろ','ねずみいろ'];
    var ans_kanji = ['レッド','ブルー','緑色','オレンジ','紫','黄色','桜色','鼠色'];
    var ans_kanjimajiri = ['レッド','ブルー','みどり色','オレンジ','紫','黄色','さくら色','ねずみ色'];
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
    var ans_katakana = ['レッド','ブルー','ミドリイロ','オレンジ','ムラサキ','キイロ','サクライロ','ネズミイロ'];
    var ans_hiragana = ['れっど','ぶるー','みどりいろ','おれんじ','むらさき','きいろ','さくらいろ','ねずみいろ'];
    var ans_kanji = ['レッド','ブルー','緑色','オレンジ','紫','黄色','桜色','鼠色'];
    var ans_kanjimajiri = ['レッド','ブルー','みどり色','オレンジ','紫','黄色','さくら色','ねずみ色'];
    for(i=0;i<8;i++){
        var textid ="Color" +  String(i);
        var color = document.getElementById(textid).value;
        if((color === ans_hiragana[i] )|| (color ===　ans_kanji[i]) || (color ===　ans_katakana[i]) || (color ===　ans_kanjimajiri[i])){
            flags[i] = true;
        }
    }

    if(array_equal(flags,clear)){
        window.location.href="2segment.html";
    }
    

}

function check_2nd(){
    var correct = ["SOLUTION","solution","Solution"];
    var answer = document.getElementById("Segment").value;
//    console.log(elem_in_array(answer,correct));
    if(elem_in_array(answer,correct)){
        alert("正解です");
        window.location.href="3slide.html";
    }else{
        alert("間違っています");
    }
}


function check_3rd(){
    var correct = ["news","News","NEWS"];
    var answer = document.getElementById("Put").value;
//    console.log(elem_in_array(answer,correct));
    if(elem_in_array(answer,correct)){
        alert("正解です");
        window.location.href="4puzzling.html";
    }else{
        alert("間違っています");
    }
}
        
function check_4th(){
    var correct = ["無限","むげん","ムゲン"];
    var extra = ["UNLIMITED","unlimited","Unlimited"];
    var answer = document.getElementById("Slide").value;
//    console.log(elem_in_array(answer,correct));
    if(elem_in_array(answer,correct)){
        alert("正解です");
        window.location.href="5pilling.html";
    }else if(elem_in_array(answer,extra)){
        alert("正解です");
        window.location.href="clearpage.html"
    }else{
        alert("間違っています")
    }
}

function check_5th(){
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