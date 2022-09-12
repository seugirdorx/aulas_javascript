let C, N, salario, excesso, salarioExcesso;

C = prompt ("Digite o seu código de operário: ");
N = prompt ("Informe as horas trabalhadas: ");
salario = 50 * 10
excesso = (N - 50) * 20
salarioExcesso = salario + excesso;

if (N > 50){
    alert ("O operário " + C + " excedeu as horas de trabalho!" +
     " Ganhará um acréscimo de: " + excesso + "\nLogo, seu salário final ficará: " + salarioExcesso);
} 
else {
    alert ("Você cumpriu sua carga horária!");
}

