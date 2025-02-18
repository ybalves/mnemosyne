for (let contador = 1; contador <= 10; contador++) {
    console.log("contagem", contador);
}

//let contador = 1;
//while (contador <=5) {

//console.log("contagem:",contador);
//contador++
//}


//let numero = prompt("Digite um numero para ver sua tabuada:");
//let resultado;


//for (let contador = 1; contador <= 10; contador++) {
// console.log(`${numero} x ${contador} = ${numero * contador}`);
//}

let numero = prompt("Digite um numero:");

let soma = 0;

for (let contador = 1; contador <= numero; contador++) {
    soma += contador;
}

console.log ("soma dos primeiros " + numero + " números naturais é: " + soma);
alert("soma dos primeiros " + numero + " números naturais é: " + soma);

