/*var age=6;
var A=" ZDOROVENKI";
var B=" BYLI";
document.write(A+B);
variable =(age<5) ? " da" : " jopa";
document.write(variable);*/

//-----------------------------------------------

/*var day=3;
switch (day)
{
case 1:
document.write("<br> Monday");
break;
case 2:
document.write("<br> Tuesday");
break;
case 3:
document.write("<br> wednesday");
break;
default:
document.write("<br> Another day");
}*/

//-----------------------------------------------
/*
function myFunction(){
    alert("Call my please")
}
myFunction();*/

//-----------------------------------------------
// МОЙ ПЕРВЫЙ КАЛЬКУЛЯТОР
//-----------------------------------------------
/*
var hislo1 = prompt("Введите число");
var operator = prompt("Введите знак того что с ним сделать (+, -, *, /)");
var hislo2 = prompt("Второе число");
var sum;
if(operator == "+"){
    sum = parseInt(hislo1) + parseInt(hislo2);
}  
if(operator == "-"){
    sum = parseInt(hislo1) - parseInt(hislo2);
}
if(operator == "*"){
    sum = parseInt(hislo1) * parseInt(hislo2);
}
if(operator == "/"){
    sum = parseInt(hislo1) / parseInt(hislo2);
}

var sum = ("Итог: " + sum);
alert(sum);
*/
//-----------------------------------------------
//ДИСКРИМИНАНТ ВЫЧИСЛЕНИЯ(СОВМЕСТНО)
/*
function f(a, b, c){
    var result, x1, x2;
    var D = b*b-(4*a*c);
    if(D >= 0){
        result = true;
        x1 = (-b - Math.sqrt(D))/(2*a);
        x2 = (-b + Math.sqrt(D))/(2*a);
    } else {
        result = false;
    }
    d = "D: " + D + "\n";
    X1 = "x1: " + x1 + "\n";
    X2 = "x2: " + x2 + "\n";
    return  d + X1 + X2 + result;
}
var mult = f(1, 2, -3);
var mult2 = f(1, 3, -5);
alert(mult)
alert(mult2)
*/
//-----------------------------------------------


