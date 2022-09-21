let filhos, salario, mediaSal = 0, mediaFil = 0, maiorSal = 0, percentual, perce100 = 0;

for (x = 1; x <= 20; x++){
    salario = prompt ("Informe o seu salário: ");
    filhos = prompt ("Quantos filhos você tem? ");
    
    mediaSal += parseInt(salario);
    mediaFil += parseInt(filhos);

    if (maiorSal < salario){
        maiorSal = salario 
    }
    
    if (salario <= 100){
       perce100++
    }


} percentual = (perce100/20) * 100
alert ("A média salarial da população é: " + mediaSal/20 + "\n" + 
"A média de filhos da população é: " + mediaFil/20 + "\n" +
"O maior salário é: " + maiorSal + "\n" +
"O percentual de pessoas com salário até 100 reais é: " + percentual);
