var anio = prompt("ingrese un anio");
function bisiesto (anio) {
    if(((anio%4==0) && (anio%100!=0)) || ((anio%400==0) && (anio%4==0) && (anio%100==0))){
        console.log(anio + " es bisiesto");
    }
    else{
        console.log(anio + "no es bisiesto");
    }
}

bisiesto(anio);