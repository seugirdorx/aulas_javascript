let a, p, hora, minu, SN




do{
hora = prompt ("Insira apenas a hora no formato de 24 horas para converter em formato am/pm: ");
minu = prompt ("Insira os minutos: ");

function AMPM (a, p){
    if ( hora != 0 && hora <= 11 && minu >= 00 && minu <= 59){
        a = parseInt(hora) + ":" + parseInt(minu);
       return alert ("A hora convertida é: " + a + " a.m");
    } else if (hora == 0 && minu <= 59){
        a = parseInt(hora) + parseInt(12);
       return alert ("A hora convertida é: " + a + ":" + minu + " a.m");
    } else if (hora != 0 && hora >=12 && minu <=59){
        p = parseInt(hora) - parseInt(12);
       return alert ("A hora convertida é: " + p + ":" + minu + " p.m");
    } 

}
    AMPM (a, p); 
    SN = prompt ("Digite 1 para continuar convertendo os horários, caso não queira mais digite 2.")
    
} while (SN == 1)



