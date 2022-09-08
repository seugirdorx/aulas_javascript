var PrecoDeCusto, ValorDeVenda, Percentual

PrecoDeCusto = prompt ("Insira o preço de custo do produto: ");
Percentual = prompt ("Insira o percentual: ");
ValorDeVenda = (+ PrecoDeCusto) * ( + Percentual/100) + (+ PrecoDeCusto)
alert ("O valor de venda desse produto é: " + ValorDeVenda)
