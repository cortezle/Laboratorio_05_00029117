var lista = [3,2,5,10] ;

function ordenar (lista){
    for( i=0; i<=lista.length;i++){
        key= lista[i];
        i=i-1;
        while (i>0 && lista[i] > key){
            lista[i+1]=lista[i];
            i=i-1;
        }
        lista[i+1]=key

}
}