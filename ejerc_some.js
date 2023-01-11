/*
some: devuelve verdadero si al menos uno de los elementos del vector cumple con la condición,
si ninguno la cumple devuelve falso
*/

const vector=[1,2,3,4,5,6,7,8,9,-10]

//verificar si el array tiene valores negativos
const existenNegativos=vector.some(elemento=>{
    return elemento<0
})
console.log("Existe un valor negativo?: ",existenNegativos)