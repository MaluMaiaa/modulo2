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