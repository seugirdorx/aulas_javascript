/*let n1, n2, resultado

n1 = prompt ("Digite um número: ");
n2 = prompt ("Digite o segundo número: ");

function abacaxi(n1, n2){
   resultado = parseInt(n1) + parseInt(n2)
   return alert (resultado);
}
 abacaxi(n1, n2);*/

 do {
    opcao = MostrarMenu();
 } while (opcao != 2)

 function MostrarMenu(){
    entrada = "";
    alert ("==-Mostrar o menu-==" + "\n1 - Mostrar o menu" + "\n2 - Sair");
    return entrada = prompt ();
 }