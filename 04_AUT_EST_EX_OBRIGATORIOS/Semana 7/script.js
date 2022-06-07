let check = document.querySelector(".check");
let number = document.querySelector(".numero");
let text = document.querySelector(".text");

let regex = /^[\d,\s,\+,\-]{11,11}/;


// TROCAR DE TELA
function exercicio1Btn(){
        document.getElementById("exercicio1").style.display = "block";
        document.getElementById("exercicio2").style.display = "none";
        document.getElementById("exercicio3").style.display = "none";
        document.getElementById("exercicio4").style.display = "none";
        document.getElementById("exercicio5").style.display = "none";
}

function exercicio2Btn(){
    document.getElementById("exercicio1").style.display = "none";
    document.getElementById("exercicio2").style.display = "block";
    document.getElementById("exercicio3").style.display = "none";
    document.getElementById("exercicio4").style.display = "none";
    document.getElementById("exercicio5").style.display = "none";
}

function exercicio3Btn(){
    document.getElementById("exercicio1").style.display = "none";
    document.getElementById("exercicio2").style.display = "none";
    document.getElementById("exercicio3").style.display = "block";
    document.getElementById("exercicio4").style.display = "none";
    document.getElementById("exercicio5").style.display = "none";
}

function exercicio4Btn(){
    document.getElementById("exercicio1").style.display = "none";
    document.getElementById("exercicio2").style.display = "none";
    document.getElementById("exercicio3").style.display = "none";
    document.getElementById("exercicio4").style.display = "block";
    document.getElementById("exercicio5").style.display = "none";
}

function exercicio5Btn(){
    document.getElementById("exercicio1").style.display = "none";
    document.getElementById("exercicio2").style.display = "none";
    document.getElementById("exercicio3").style.display = "none";
    document.getElementById("exercicio4").style.display = "none";
    document.getElementById("exercicio5").style.display = "block";
}

// EXERCICIO 2
function inverte(){
    var text1 = (document.getElementById("text1").value);
    var text2 = (document.getElementById("text2").value);

    var aux = text1;

    text1=text2;
    text2=aux;

    alert("Antes:\n"+
       "text1:" +document.getElementById("text1").value+"\n"+
       "text2:"+document.getElementById("text2").value+"\n\n"+
       "Invertido:\n"+
       "text1 invertido:"+text1+"\n"+
       "text2 invertido:"+text2+"\n\n");
   }

// EXERCICIO 3
check.addEventListener("click",()=>{
	if(number.value ==""){
		text.innerText = "Coloque seu telefone";
		text.style.color = "#000000";
	}
	else if(number.value.match(regex)){
		text.innerText = "Seu numero é valido";
		text.style.color = "rgba(4,125,9,1)";
	}
	else
		{
		text.innerText = "Seu numero é invalido";
		text.style.color = "#da3400";
		}
});

// EXERCICIO 4
function calculo(){
    var people = document.getElementById('people').value
    var time = document.getElementById('time').value
    var price
    if (time == 'Noturno'){
        if (people > 50){
            price = 80 * people
        }else{
            price = people * 100
        }
    }
    else{
        if (people > 50){
            price = 120 * people
        }else{
            price = 200 * people
        }
    }
    document.getElementById("result").innerHTML = 'O valor total da compra é: ' + price;
}

// EXERCICIO 5
function qtAlunos(){
    var qt = parseInt(document.getElementById('qt').value);
    var text = ''
    for(i=0; i<qt; i++){
        text += '<input type="text" placeholder="nome" class="nome">' + 
        '<input type="text" placeholder="nota da prova" class="prova">' +
        '<input type="text" placeholder="nota do trabalho" class="trabalho"><BR>'
    }
    document.getElementById('inputs').innerHTML = text
}

function geral(){
    var prova = document.querySelectorAll('.prova');
    var trabalho = document.querySelectorAll('.trabalho')
    var nome = document.querySelectorAll('.nome')
    var ind = ''
    var geral = 0
    var soma = 0
    var soma_p = 0
    var soma_t = 0
    var maior_nota_p = 0
    var menor_nota_p = 1000
    var maior_nota_t = 0
    var menor_nota_t = 1000
    for(var i = 0; i<prova.length; i++){
        var media = ((parseInt(prova[i].value) * 2) + (parseInt(trabalho[i].value) * 3)) / 5
        ind += '<h1>Aluno ' + nome[i].value + ': ' + media + '</h1>'
        soma += media
        soma_p += parseInt(prova[i].value)
        soma_t += parseInt(trabalho[i].value)
        if (parseInt(prova[i].value) > maior_nota_p){
            maior_nota_p = parseInt(prova[i].value)
        }
        if ((parseInt(prova[i].value) < menor_nota_p)){
            menor_nota_p = parseInt(prova[i].value)
        }
        if (parseInt(trabalho[i].value) > maior_nota_t){
            maior_nota_t = parseInt(trabalho[i].value)
        }
        if ((parseInt(trabalho[i].value) < menor_nota_t)){
            menor_nota_t = parseInt(trabalho[i].value)
        }
        }
    if (i == prova.length){
        geral = soma / prova.length
        var media_p = soma_p / prova.length
        var media_t = soma_t / trabalho.length
        document.getElementById('result').innerHTML = ind + '<h1>Media geral: ' + geral + '</h1>' + '<h1>Media provas: ' + media_p + '</h1>' + '<h1>Media Trabalhos: ' + media_t + '</h1>' + '<h1>Menor e maior notas prova: ' + menor_nota_p + '//' + maior_nota_p + '</h1>' + '<h1>Menor e maior notas trabalho: ' + menor_nota_t + '//' + maior_nota_t + '</h1>'
    }
}