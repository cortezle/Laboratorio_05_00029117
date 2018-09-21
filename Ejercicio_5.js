var radio = prompt ("ingrese el radio de una circunferencia");
function rcircunferencia (radio){
    area = Math.PI*(radio**2);
    if(area<=0){
        console.log("-1");
    }
    else{
        console.log("El area es:_ " + area)
    }
}

rcircunferencia(radio);

