let peso, altura, imc;

peso = prompt ("Por favor, informe seu peso: ");
altura = prompt ("Por favor, informe sua altura: ");

function IMC(peso, altura){
    imc = peso / (parseFloat(altura) * parseFloat(altura));
    return alert ("O cálculo do seu índice de massa corporal é: " + imc);
}

IMC(peso, altura);