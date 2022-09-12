let num;

num = prompt ("Digite um número: ");

if (num % 2 == 0 && num > 0){
    alert ("Esse número é par e positivo!");
} else if (num % 2 == 0 && num < 0){
    alert ("Esse número é par e negativo!");
} else if (num % 2 != 0 && num > 0){
    alert ("Esse número é ímpar e positivo!");
} else if (num % 2 != 0 && num < 0){
    alert ("Esse número é ímpar e negativo!");
}