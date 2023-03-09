function checkLogin(){

    const mail = document.querySelector('#mail').value;
    const password = document.querySelector('#password').value;

    if (mail == "knurt@ponko2.com" && password == "イチゴ"){
        window.location.href = "../trunk.html";
    }else if(mail == "deb@ponko2.com" && password == "ナシ"){
        window.location.href = "../bed.html";
    }else if(mail == "niarb@ponko2.com" && password == "ナシ"){
        window.location.href = "../brain.html";
    }else{
        window.alert("メールアドレスまたはパスワードが間違っています。");
    }

};
