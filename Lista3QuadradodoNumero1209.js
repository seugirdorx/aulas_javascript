let n1, n2, n3, n4, q1, q2, q3, q4;

n1 = prompt ("Digite um número: ");
n2 = prompt ("Digite mais um número: ");
n3 = prompt ("Digite mais um número: ");
n4 = prompt ("Digite mais um número: ");

q1 = n1 * n1
q2 = n2 * n2
q3 = n3 * n3
q4 = n4 * n4

if (q3 >= 1000){
    alert ("O valor do quadrado de " + n3 + " é "  + q3);
}else {
    alert ("Os valores lidos e seus respectivos quadrados são: " + "\n" + n1 + " = " + q1 +
     "\n" + n2 + " = " + q2 + "\n" + n3 + " = " + q3 + "\n" + n4 + " = " + q4);
}