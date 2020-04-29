var number1=0;
var number2=0;
var number3=0;
var temp=0;

number1 = prompt("Введите первое число:");
number2 = prompt("Введите второе число:");
number3 = prompt("Введите третье число:");

if (number1 >= number2) {
    temp = number1;
} else{
    temp = number2;
}
if (temp < number3) {
    temp = number3;
}
alert("Максимальное число равно = " + temp);
 