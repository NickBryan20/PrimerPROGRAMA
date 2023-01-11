/*
map: crea una nueva matriz con los resultados de llamar a una función, proporcionada
en cada elemento de la matriz de llamadas
*/


//Se pide duplicar cada elemento del array números. Este resultado debe almacenarse en un nuevo vector array
const numeros=[ 2, 3, 10, 22, 5, 7, 11, 1]
const duplicados = numeros.map(elemento => elemento * 2)
console.log("Vector original: ",numeros)
console.log("Nuevo vector: ", duplicados)

//Diseñe la función que devuelve cada elemento del vector elevado al cuadrado
/*const cuadrado=(vector=>{
    retunr vector.map(item=>item*tem)
})
console.log(cuadrado([1,2,3]))
console.log(numeros)*/
const cuadrado=function(vector)
{
    return vector.map(item=>item*item)
}
console.log(cuadrado([1,2,3]))
console.log(numeros)