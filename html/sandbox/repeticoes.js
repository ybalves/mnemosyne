//exercicio 1
//for
function exercicio01 () {
for (let contador = 1; contador <= 10; contador++) {
    console.log("contagem", contador);
 }

let divdelogs = document.querySelector(".logs"); //Busca um elemento da tela.

let paragrafo = document.createElement("p");

paragrafo.innerHTML = "Exercicio 01 de repeticao executado.";

divdelogs.appendChild(paragrafo);
}



//let contador = 1;
//while (contador <=5) {

//console.log("contagem:",contador);
//contador++
//}

// function exercicio02 () {
// let numero = prompt("Digite um numero para ver sua tabuada:");
// let resultado;
// }

// for (let contador = 1; contador <= 10; contador++) {
// console.log(`${numero} x ${contador} = ${numero * contador}`);
// }


//exercício 2
//let numero = prompt("Digite um numero:");

//let soma = 0;

//for (let contador = 1; contador <= numero; contador++) {
  //  soma += contador;
//}

//console.log ("soma dos primeiros " + numero + " numeros naturais e: " + soma);

//alert("soma dos primeiros " + numero + " numeros naturais e: " + soma);

//exercício 3


//let numeroAleatorio = Math.floor(Math.random() * 100);

//let chute = null;

//while (chute != numeroAleatorio) {

  //  chute = parseInt(prompt("Chute um número:"));

    //if (chute != numeroAleatorio) {

//        if (chute > numeroAleatorio) {
    
  //          alert("Chutou alto.");
    
    //    } else {
    
      //      alert("Chutou baixo.");
    
        //}

//     }

// }

//alert("Você acertou!");

// let numero = prompt("Digite um numero para inicia contagem regressiva:");

// while (numero >= 0) {
//     console.log(numero);
//     numero--;
// }
