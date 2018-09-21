let palabra = prompt("Ingrese una palabra");
function palindrome (palabra){
    palrev = palabra.split("").reverse().join("");
    if (palabra==palrev){
        console.log('Es palindrome');
    }
    else{
        console.log('no es palindrome')
    }
}