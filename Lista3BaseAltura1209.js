let base, altura, area;

base = prompt ("Digite a base do triângulo: ");
altura = prompt ("Digite a altura do triângulo: ");
area = base * altura / 2

if (base > 0 && altura > 0){
    alert ("Os valores são válidos! A área do triângulo é: " + area);
}else {
    alert ("Os valores são inválidos! Por favor, insire os valores novamente: ");
}