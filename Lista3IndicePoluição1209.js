let indice;

indice = prompt ("Por favor, insire o índice de poluição da sua indústria: ");

if (indice >= 0.3 && indice < 0.4){
    alert ("As atividades da indústria do grupo 1 estão intimadas a suspender suas atividades!");
} else if (indice >= 0.4 && indice < 0.5){
    alert ("As atividades das indústrias dos grupos 1 e 2 estão intimadas a suspenderem suas atividades!");
} else if (indice >= 0.5){
    alert ("As atividades das indústrias 1, 2 e 3 estão intimadas a suspenderem suas atividades!");
} else if (indice <= 0.25){
    alert ("O índice de poluição da sua indústria está aceitável");
} 