let taxaImposto, custo, custImp;

custo = prompt ("Insira o valor de custo do produto: ");
taxaImposto = prompt ("Insira o valor da taxa de imposto em porcentagem: ");

function somaImposto(taxaImposto, custo){
    custImp = parseFloat(custo) + (parseFloat(custo)) *(parseFloat(taxaImposto)/100);
    return alert ("O valor do produto com a taxa de imposto é: " + parseFloat(custImp));
}

somaImposto (taxaImposto, custo);










