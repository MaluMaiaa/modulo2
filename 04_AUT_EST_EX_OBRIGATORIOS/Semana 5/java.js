// TROCAR TELA
function exercicio1Btn(){
    document.getElementById("exercicio1").style.display = "block";
    document.getElementById("exercicio2").style.display = "none";
}
function exercicio2Btn(){
    document.getElementById("exercicio1").style.display = "none";
    document.getElementById("exercicio2").style.display = "block";
}


// EXERCICIO 1
function Calculos()
{
    var num = document.getElementById('num').value;
    var sum = eval(num) + 5;
    var sub = num - 5;
    var mult = num * 5;
    var div = num / 5;
    var divint = Math.floor(num/5);
    var rest = num % 5;
    document.getElementById("alt").innerHTML = sum + ', ' + sub + ', ' + mult + ', ' +div + ', ' + divint + ', ' + rest;
}
// EXERCICIO 2
function numNotas()
{
    var num = document.getElementById('num').value;
    var nota100 = Math.floor(num/100);
    var resto100 = num % 100;
    var nota50 = Math.floor(resto100/50);
    var resto50 = resto100 % 50;
    var nota20 = Math.floor(resto50/20);
    var resto20 = resto50 % 20;
    var nota10 = Math.floor(resto20/10);
    var resto10 = resto20 % 10;
    var nota5 = Math.floor(resto10/5);
    var resto5 = resto10 % 5;
    var nota2 = Math.floor(resto5/2);
    var resto2 = resto5 % 2;
    var nota1 = resto2;
    document.getElementById("notas").innerHTML = nota100 + ' Notas de R$100 // ' + nota50 + ' Notas de R$50 // ' + nota20 + ' Notas de R$20 // ' + nota10 + ' Notas de R$10 // ' + nota5 + ' Notas de R$5 // ' + nota2+ ' Notas de R$2 // ' + nota1 + ' Notas de R$1';
}