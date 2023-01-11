/*
every: devuelve verdadero si todos los elementos del vector cumplen con la condición,
si un elemento no la cumple, devuelve falso
*/
console.log("Ejemplo every - para arrays")
const numeros=[11,2,33,45,1,110,12,55,17]

//verificar si el array tiene elementos positivos
const positivos=numeros.every(elemento=>{
    return elemento > 0
})
console.log("El array tiene solo elementos positivos?",positivos)

//diseñe la función que determine si todos los elementos del vector son múltiplo de 5
const multiplocinco=function(vector)
{
    return vector.every(elemento=>elemento%5==0)
}
console.log("Multiplos de 5: ", multiplocinco([5,10,15,20,25]))
console.log("Multiplos de 5: ", multiplocinco(numeros))