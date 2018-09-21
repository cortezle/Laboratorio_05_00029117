var num = promt ("Ingrese un numero real");
function valorabs(num){
    if(num<=0){
        num = num*-1;
        console.log("ABS: " + num);
    }
    else{
        console.log("ABS: " + num);
    }
}

valorabs(num);