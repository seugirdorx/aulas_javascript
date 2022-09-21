let porcen, num, res;

porcen = prompt ("Insira o valor da porcentagem: ")
num = prompt ("Digite o número para ser calculado: ")

function Porcentagem(porcen, num){
    res = (porcen/100) * num
    return alert ("O resultado da porcentagem é: " + res)
}
Porcentagem (porcen, num);