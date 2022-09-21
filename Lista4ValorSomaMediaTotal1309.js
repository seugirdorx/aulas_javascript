let num = 0, media = 0, total = 0, soma = 0;

while (num >= 0){
   num = prompt ("Por favor, insira um número: ");
 if (num >= 0){
    soma = soma + parseInt(num)
    total++
    
} 
}media = soma / total;
alert ("A soma dos números é: " + soma + "\n" +
"A média dos números é: " + parseFloat(media) + "\n" +
"O total de números lidos foi: " + total);
alert ("Programa finalizado");