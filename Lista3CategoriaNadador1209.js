let idade;

idade = prompt ("Por favor, insira sua idade: ");

if (idade == 5 || idade == 6 || idade == 7){
    alert ("O nadador foi classificado na categoria Infantil A");
} else if (idade == 8 || idade == 9 || idade == 10 || idade == 11){
    alert ("O nadador foi classificado na categoria Infantil B");
} else if (idade == 12 || idade == 13){
    alert ("O nadador foi classificado na categoria Juvenil A");
} else if (idade == 14 || idade == 15 || idade == 16 || idade == 17){
    alert ("O nadador foi classificado na categoria Juvenil B");
} else if (idade >= 18){
    alert ("O nadador foi classificado na categoria Adultos");
}