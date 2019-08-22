function going(t){
    if(t===0){
        window.location.href="introduction.html";
    }
    if(t===1){
        window.location.href="step1.html";
    }
    if(t===2){
        window.location.href="explain.html";
    }
    if(t===3){
        window.location.href="clearpage.html";
    }

}

function slideshow(t){
    var imgs = new Array("images/op2.1.jpg", "images/op3.1.jpg");
    document.getElementById("imgsrc").src = imgs[t];

    if(t===0){
        document.getElementById("righttriimg").style.display="none"
        document.getElementById("lefttriimg").style.display="block"
        document.getElementById("pressstart").style.display="none"
    }else{
        document.getElementById("righttriimg").style.display="block"
        document.getElementById("lefttriimg").style.display="none"
        document.getElementById("pressstart").style.display="block"
    }
}

function check_1st(i){
    var ans_katakana = ['レッド','ブルー','ミドリイロ','オレンジ','ムラサキ','キイロ','サクライロ','ネズミイロ'];
    var ans_hiragana = ['れっど','ぶるー','みどりいろ','おれんじ','むらさき','きいろ','さくらいろ','ねずみいろ'];
    var ans_kanji = ['レッド','ブルー','緑色','オレンジ','紫','黄色','桜色','鼠色'];
    var ans_kanjimajiri = ['レッド','ブルー','みどり色','オレンジ','紫','黄色','さくら色','ねずみ色'];
    var textid ="Color" +  String(i);
    var color = document.getElementById(textid).value;
    //alert(color);
    
    if((color === ans_hiragana[i] )|| (color ===　ans_kanji[i]) || (color ===　ans_katakana[i]) || (color ===　ans_kanjimajiri[i])){
        alert("正解です")
        display_ans(i);
    }else{
        alert("間違っています")
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
        window.location.href="step2.html";
    }
    

}

function display_ans(i){
    
    if(i === 0){
        r1 = document.getElementById("ared-1");
        r2 = document.getElementById("ared-2");
        r3 = document.getElementById("ared-3");

        r1.innerHTML = "レ";
        r2.innerHTML = "ッ";
        r3.innerHTML = "ド";
    }

    
    if(i === 1){
        b1 = document.getElementById("ablue-1");
        b2 = document.getElementById("ablue-2");
        b3 = document.getElementById("ablue-3");

        b1.innerHTML = "ブ";
        b2.innerHTML = "ル";
        b3.innerHTML = "ー";
    }

    if(i === 2){
        g1 = document.getElementById("agreen-1");
        g2 = document.getElementById("agreen-2");
        g3 = document.getElementById("agreen-3");
        g4 = document.getElementById("agreen-4");
        g5 = document.getElementById("agreen-5");


        g1.innerHTML = "ミ";
        g2.innerHTML = "ド";
        g3.innerHTML = "リ";
        g4.innerHTML = "イ";
        g5.innerHTML = "ロ";
    }

    
    if(i === 3){
        o1 = document.getElementById("aorange-1");
        o2 = document.getElementById("aorange-2");
        o3 = document.getElementById("aorange-3");
        o4 = document.getElementById("aorange-4");


        o1.innerHTML = "オ";
        o2.innerHTML = "レ";
        o3.innerHTML = "ン";
        o4.innerHTML = "ジ";
    }

    
    if(i === 4){
        m1 = document.getElementById("amurasaki-1");
        m2 = document.getElementById("amurasaki-2");
        m3 = document.getElementById("amurasaki-3");
        m4 = document.getElementById("amurasaki-4");


        m1.innerHTML = "ム";
        m2.innerHTML = "ラ";
        m3.innerHTML = "サ";
        m4.innerHTML = "キ";
    }

    
    if(i === 5){
        y1 = document.getElementById("akiiro-1");
        y2 = document.getElementById("akiiro-2");
        y3 = document.getElementById("akiiro-3");

        y1.innerHTML = "キ";
        y2.innerHTML = "イ";
        y3.innerHTML = "ロ";
    }
    
    if(i === 6){
        s1 = document.getElementById("asakurairo-1");
        s2 = document.getElementById("asakurairo-2");
        s3 = document.getElementById("asakurairo-3");
        s4 = document.getElementById("asakurairo-4");
        s5 = document.getElementById("asakurairo-5");


        s1.innerHTML = "サ";
        s2.innerHTML = "ク";
        s3.innerHTML = "ラ";
        s4.innerHTML = "イ";
        s5.innerHTML = "ロ";
    }

    if(i === 7){
        g1 = document.getElementById("anezumiiro-1");
        g2 = document.getElementById("anezumiiro-2");
        g3 = document.getElementById("anezumiiro-3");
        g4 = document.getElementById("anezumiiro-4");
        g5 = document.getElementById("anezumiiro-5");


        g1.innerHTML = "ネ";
        g2.innerHTML = "ズ";
        g3.innerHTML = "ミ";
        g4.innerHTML = "イ";
        g5.innerHTML = "ロ";
    }

}

function check_2nd(){
    var correct = ["SOLUTION","solution","Solution"];
    var answer = document.getElementById("Segment").value;
//    console.log(elem_in_array(answer,correct));
    if(elem_in_array(answer,correct)){
        alert("正解です");
        window.location.href="step3.html";
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
        window.location.href="step4.html";
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
        window.location.href="step5.html";
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