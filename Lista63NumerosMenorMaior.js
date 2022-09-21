let n1, n2, n3;

n1 = prompt ("Digite o primeiro número: ");
n2 = prompt ("Digite o segundo número: ");
n3 = prompt ("Digite o terceiro número: ");

function Maior (n1, n2, n3){
 if (n1 > n2 && n1 > n3){
   return alert ("O primeiro número inserido é maior: " + n1);
 } else if (n2 > n1 && n2 > n3){
    return alert ("O segundo número inserido é maior: " + n2);
 }else if (n3 > n2 && n3 > n1){
    return alert ("O terceiro número inserido é maior: " + n3);
    }
 }

function Menor (n1, n2, n3){
 if (n1 < n2 && n1 < n3){
    return alert ("O primeiro número inserido é menor: " + n1);
 } else if (n2 < n1 && n2 < n3){
    return alert ("O segundo número inserido é menor: " + n2);
 } else if (n3 < n2 && n3 < n1){
    return alert ("O terceiro número inserido é menor: " + n3);
    }
}

Menor (n1, n2, n3)
Maior (n1, n2, n3)