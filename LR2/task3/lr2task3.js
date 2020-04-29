var name;
var password;

name = prompt("Введите ваше имя:");


if (name == "ivan") {
    password = prompt("Введите пароль:");
    if (password == 333) {
        alert("Доброе пожаловать!");
    }
    else{
        alert("Пароль не верный!");
    } 
    
} else if (name == "ssss") {
    password = prompt("Введите пароль:");
    if (password == 666) {
        alert("Доброе пожаловать!");
    }
    else{
        alert("Пароль не верный!");
    }         
} else if (name == "gibs") {
    password = prompt("Введите пароль:");
    if (password == 0000) {
        alert("Доброе пожаловать!");
    }
    else{
        alert("Пароль не верный!");
    }         
} else{
    alert("Пользователь не найден!");
}
 