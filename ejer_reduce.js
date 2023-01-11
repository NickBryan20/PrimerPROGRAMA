/*
reduce: ejecuta una función de devolución de llamada "reductora" proporcionada por el usuario en cada
elemento de la amtriz, en orden, pasando el valor de retorno,
cálculo en el elemento anterior. El resultado final de ejectuar el reductor en todos los elementos de 
la matriz es un valor único
*/
const vector=[1,4,10,20,33,45,4,2,15]
//const valorInicial=100
const sumatoria=vector.reduce((acumulador,valorActual)=>{
    return acumulador+valorActual
},/*valorInicial*/0)
console.log("La sumatoria del vector es: ", sumatoria)

//Diseñe la funcipon que devuelve el producto de los elementos de un vector
const producto=function(vector)
{
    return vector.reduce( (acum,valorA) =>{
        return acum*valorA}, 1)
}
console.log(producto([1,2,3]))
console.log(producto([4,5,6]))

/*
foreach: recorre todos los elementos del vector
*/
vector.forEach((num,index)=>{
    console.log("Elemento: ",num,index)
})

//1)Se tiene una cadena de caracteres. Se pide diseñar la función que devuelve la cadena sin consonantes
//Ejemplo: Hola Esmeraldas
//Resultado esperado: "oa Eeaa"
//Utilice filter
const vocales=['a','e','i','o','u']
const Consonante="Hola Esmeraldas"
const sinConsonates=Consonante.split("")
console.log(sinConsonates[1])

//2)Determine si todos los elementos de la matriz son positivos

const MatrizNumeros=[[1,2,3,4],[4,5,6,7],[7,8,9,10]]
const positivos=MatrizNumeros.every(elemento=>{
    return elemento > 0
})
console.log("¿Tiene solamente números positivos?",positivos)