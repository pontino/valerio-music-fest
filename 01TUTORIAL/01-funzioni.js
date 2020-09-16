var i = 2;

var parabola = function(x) {
    var y = x * x;
    return y;
    y = 0; // Non viene eseguita perché c'è il return
}

function invertiSegno(numero) {
    var valoreDiRitorno = numero * -1;
    return valoreDiRitorno;
}

var valore = parabola(4);

console.log(valore); // 16

var num = 11;
var numInvertito = invertiSegno(num);
console.log(numInvertito);  // -11

function media(numero1, numero2) {
    return (numero1 + numero2) / 2;
}

function stampa(numero, stringa) {
    for(var i = 0; i < numero; i++) {
        console.log(stringa);
    }
}

stampa(5, 'banana'); // banana x 5

stampa(10, 'mela'); // mela x 10

var numMedia = media(10, 20); 

console.log(numMedia); // 15

/* 

Creami una funzione che come parametri ha un numero X 
e la funzione deve stampare 
"IL NUMERO X e PARI" o "IL NUMERO X E DISPARI"

verificaParita(10) // Il numero 10 è pari
verificaParita(15) // Il numero 15 è dispari

probabilmente dovrai usare if

*/