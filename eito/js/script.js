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
    var imgs = new Array("images/op2.1.png", "images/op3.1.png");
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

function check_start(){
    var ans = '411';
    var ans_zenkaku = '４１１';
    var value = document.getElementById("Start").value;
    if((value === ans) || (value === ans_zenkaku)){
        alert("正解です")
        window.location.href="step1.html";

    }else{
        alert("間違っています")
    }
}

function check_1st(i){
    var ans_katakana = ['ミドリイロ','キイロ','ヒイロ','クロイロ','シロイロ','ネズミイロ','サクライロ','ソライロ'];
    var ans_hiragana = ['みどりいろ','きいろ','ひいろ','くろいろ','しろいろ','ねずみいろ','さくらいろ','そらいろ'];
    var ans_kanji = ['緑色','黄色','緋色','黒色','白色','鼠色','桜色','空色'];
    var ans_kanjimajiri = ['みどり色','黄いろ','ひ色','くろ色','しろ色','ねずみ色','さくら色','そら色'];
    var textid ="Color" +  String(i);
    var color = document.getElementById(textid).value;
    //alert(color);
    
    if((color === ans_hiragana[i] )|| (color ===　ans_kanji[i]) || (color ===　ans_katakana[i]) || (color ===　ans_kanjimajiri[i])){
        alert("正解です")
        //display_ans(i);
    }else{
        alert("間違っています")
    }

    check_1st_true();//ぜんぶみるやつ
    
 }

function check_1st_true(){
    var flags = [false,false,false,false,false,false,false,false];
    var clear = [true,true,true,true,true,true,true,true];
    var ans_katakana = ['ミドリイロ','キイロ','ヒイロ','クロイロ','シロイロ','ネズミイロ','サクライロ','ソライロ'];
    var ans_hiragana = ['みどりいろ','きいろ','ひいろ','くろいろ','しろいろ','ねずみいろ','さくらいろ','そらいろ'];
    var ans_kanji = ['緑色','黄色','緋色','黒色','白色','鼠色','桜色','空色'];
    var ans_kanjimajiri = ['みどり色','黄いろ','ひ色','くろ色','しろ色','ねずみ色','さくら色','そら色'];
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
    
    if(i === 0){/*
        r1 = document.getElementById("ared-1");
        r2 = document.getElementById("ared-2");
        r3 = document.getElementById("ared-3");

        r1.innerHTML = "レ";
        r2.innerHTML = "ッ";
        r3.innerHTML = "ド";*/

        document.getElementById("red1").style.display = "block";
    }

    
    if(i === 1){
        /*
        b1 = document.getElementById("ablue-1");
        b2 = document.getElementById("ablue-2");
        b3 = document.getElementById("ablue-3");

        b1.innerHTML = "ブ";
        b2.innerHTML = "ル";
        b3.innerHTML = "ー";
        */

       document.getElementById("blue1").style.display = "block";
    }

    if(i === 2){
        /*
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
        */
       
       document.getElementById("green1").style.display = "block";
    }

    
    if(i === 3){
        /*
        o1 = document.getElementById("aorange-1");
        o2 = document.getElementById("aorange-2");
        o3 = document.getElementById("aorange-3");
        o4 = document.getElementById("aorange-4");


        o1.innerHTML = "オ";
        o2.innerHTML = "レ";
        o3.innerHTML = "ン";
        o4.innerHTML = "ジ";
        */
       
       document.getElementById("orange1").style.display = "block";
    }

    
    if(i === 4){
        /*
        m1 = document.getElementById("amurasaki-1");
        m2 = document.getElementById("amurasaki-2");
        m3 = document.getElementById("amurasaki-3");
        m4 = document.getElementById("amurasaki-4");


        m1.innerHTML = "ム";
        m2.innerHTML = "ラ";
        m3.innerHTML = "サ";
        m4.innerHTML = "キ";
        */
       
       document.getElementById("purple1").style.display = "block";
    }

    
    if(i === 5){
        /*
        y1 = document.getElementById("akiiro-1");
        y2 = document.getElementById("akiiro-2");
        y3 = document.getElementById("akiiro-3");

        y1.innerHTML = "キ";
        y2.innerHTML = "イ";
        y3.innerHTML = "ロ";
        */
       
       document.getElementById("yellow1").style.display = "block";
    }
    
    if(i === 6){
        /*
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
        */

        document.getElementById("pink1").style.display = "block";
    }

    if(i === 7){
        /*
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
        */
        
       document.getElementById("gray1").style.display = "block";
    }

}

function check_2nd(){
    var correct = 'クリア';
    var answer = document.getElementById("Segment").value;
//    console.log(elem_in_array(answer,correct));
    if(answer === correct){
        alert("正解です");
        window.location.href="step3.html";
    }else{
        alert("間違っています");
    }
}


function check_3rd(){
    var correct = 'スカイ';
    var answer = document.getElementById("Put").value;
//    console.log(elem_in_array(answer,correct));
    if(answer === correct){
        alert("正解です");
        window.location.href="step3-2.html";
    }else{
        alert("間違っています");
    }
}
        
function check_4th(){
    var correct = ["オワリ","終わり","おわり"];
    var extra = ["ごくろうさん"];
    var answer = document.getElementById("Slide").value;
//    console.log(elem_in_array(answer,correct));
    if(elem_in_array(answer,correct)){
        alert("正解です");
        window.location.href="step4.html";
    }else if(elem_in_array(answer,extra)){
        alert("正解です");
        window.location.href="clearpage.html"
    }else{
        alert("間違っています")
    }
}

function check_5th(){
    var correct = 'ごくろうさん';
    var answer = document.getElementById("Put").value;
//    console.log(elem_in_array(answer,correct));
    if(answer === correct){
        alert("正解です");
        window.location.href="clearpage.html";
    }else{
        alert("間違っています");
    }
}

function showpath(t){
    switch(t){
        case 0:
            if(document.getElementById("redpath-1").style.display === "block"){
                document.getElementById("redpath-1").style.display = "none";
            }else{
                document.getElementById("redpath-1").style.display = "block";
            }
            break;
        case 1:
            if(document.getElementById("bluepath-1").style.display === "block"){
                document.getElementById("bluepath-1").style.display = "none";
            }else{
                document.getElementById("bluepath-1").style.display = "block";
            }
            break;
        case 2:
            if(document.getElementById("greenpath-1").style.display === "block"){
                document.getElementById("greenpath-1").style.display = "none";
            }else{
                document.getElementById("greenpath-1").style.display = "block";
            }
            break;
        case 3:
            if(document.getElementById("orangepath-1").style.display === "block"){
                document.getElementById("orangepath-1").style.display = "none";
            }else{
                document.getElementById("orangepath-1").style.display = "block";
            }
            break;
        case 4:
            if(document.getElementById("purplepath-1").style.display === "block"){
                document.getElementById("purplepath-1").style.display = "none";
            }else{
                document.getElementById("purplepath-1").style.display = "block";
            }
            break;
        case 5:
            if(document.getElementById("yellowpath-1").style.display === "block"){
                document.getElementById("yellowpath-1").style.display = "none";
            }else{
                document.getElementById("yellowpath-1").style.display = "block";
            }
            break;
        case 6:
            if(document.getElementById("pinkpath-1").style.display === "block"){
                document.getElementById("pinkpath-1").style.display = "none";
            }else{
                document.getElementById("pinkpath-1").style.display = "block";
            }
            break;
        case 7:
            if(document.getElementById("graypath-1").style.display === "block"){
                document.getElementById("graypath-1").style.display = "none";
            }else{
                document.getElementById("graypath-1").style.display = "block";
            }
            break;
        case 10:
            if(document.getElementById("redpath-2").style.display === "block"){
                document.getElementById("redpath-2").style.display = "none";
            }else{
                document.getElementById("redpath-2").style.display = "block";
            }
            break;
        case 11:
            if(document.getElementById("bluepath-2").style.display === "block"){
                document.getElementById("bluepath-2").style.display = "none";
            }else{                            
                 document.getElementById("bluepath-2").style.display = "block";
            }
            break;
        case 12:
            if(document.getElementById("greenpath-2").style.display === "block"){
                document.getElementById("greenpath-2").style.display = "none";
            }else{
                document.getElementById("greenpath-2").style.display = "block";
            }
            break;
        case 13:
            if(document.getElementById("orangepath-2").style.display === "block"){
                document.getElementById("orangepath-2").style.display = "none";
            }else{
                document.getElementById("orangepath-2").style.display = "block";
            }
            break;
        case 14:
            if(document.getElementById("purplepath-2").style.display === "block"){
                document.getElementById("purplepath-2").style.display = "none";
            }else{
                document.getElementById("purplepath-2").style.display = "block";
            }
            break;
        case 15:
            if(document.getElementById("yellowpath-2").style.display === "block"){
                document.getElementById("yellowpath-2").style.display = "none";
            }else{
                document.getElementById("yellowpath-2").style.display = "block";
            }
            break;
        case 16:
            if(document.getElementById("pinkpath-2").style.display === "block"){
                document.getElementById("pinkpath-2").style.display = "none";
            }else{
                document.getElementById("pinkpath-2").style.display = "block";
            }
            break;
        case 17:
            if(document.getElementById("graypath-2").style.display === "block"){
                document.getElementById("graypath-2").style.display = "none";
            }else{
                document.getElementById("graypath-2").style.display = "block";
            }
            break;
    }
}

function shownumpath(t){
    var pathid = "path-" + String(t);
    if(document.getElementById(pathid).style.display === "block"){
        document.getElementById(pathid).style.display = "none";
    }else{
        document.getElementById(pathid).style.display = "block";
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