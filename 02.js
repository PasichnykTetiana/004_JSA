let login = document.getElementById("login"),
    password = document.getElementById("password"),
    message=document.getElementById("message");
function Button() {
    passwordval = password.value;
    loginval = login.value;
    if (loginval === ""){
        login.style.backgroundColor="red";
        message.innerHTML = "Вы не заполнили логин";
    }
    if (passwordval === ""){
        password.style.backgroundColor = "red";
        if (message.innerHTML !==""){
            message.innerHTML = "Вы не заполнии логин и пароль"
        }else {
            message.innerHTML = "Вы не заполнили пароль"
        }

    }
    if (passwordval === "12345" &&  loginval === "admin"){
        message.innerHTML = "Вы авторизированы";
        message.style.backgroundColor = "green";
    }

}