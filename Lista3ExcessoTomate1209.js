let P, M, E;

P = prompt ("Informe o peso do tomate: ");
E = 50 - P
M = (50 - P) * 4

if (P > 50){
    alert ("Você excedeu o limite de peso do tomate estabelecido: " + E +"\nDeverá pagar uma multa de: " + M + "reais");
} else {
    alert ("Não houve excesso!");
}