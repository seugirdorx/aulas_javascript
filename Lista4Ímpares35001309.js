let num, soma = 0;

for (num = 1; num <= 500; num++){
 if (num % 2 != 0 && num % 3 == 0){
    soma = soma + num
    alert (num + "\n");
    
 }

} alert ("A soma dos números ímpares múltiplos de 3 até 500 é: " + parseInt(soma));