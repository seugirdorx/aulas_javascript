let n1, n2, soma, sub, mult, divi;

n1 = prompt ("Digite um número: ");
n2 = prompt ("Digite mais um número: ");

function Valores (n1, n2){
    soma = parseInt(n1) + parseInt(n2);
    sub = parseInt(n1) - parseInt(n2);
    mult = parseInt(n1) * parseInt(n2);
    divi = parseInt(n1) / parseInt(n2);
    return console.log ("A soma dos números é: " + soma +
    "\nA subtração dos números é: " + sub +
    "\nA multiplicação dos números é: " + mult +
    "\nA divisão dos números é: " + divi);


}

Valores (n1, n2);