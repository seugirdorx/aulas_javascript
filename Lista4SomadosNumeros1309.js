let num, soma = 0;

num = prompt ("Digite um número: ");

do {
    soma = soma + parseInt(num);
    num--
    
} while (num >= 0);
  alert ("A soma do número digitado do 1 até ele mesmo é: " + soma);