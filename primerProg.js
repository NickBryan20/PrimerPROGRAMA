//Primer ejercicio con programación funcional

console.log("Bienvenidos..")

const numeros=[10,20,23,1,5,7,9,11,17,19,33,4,18]
const Vnumeros=[3,6,12,5,15,20,26,30,27,18,21]


//Usando programación estructurada, imprima los elementos del array
for(var i=0; i<numeros.length; i++)
{
    console.log(numeros[i])
}

//Imprimir el vector usando programación funcional
console.log("Porgramación funcional")
numeros.forEach( item => {
    console.log(item)
})

console.log("Forma v2")
numeros.forEach( function(x) {
    console.log(x);
})

//Imprimir los elementos pares del vector
console.log("Elementos pares del vector")
for(var k=0; k<numeros.length; k++)
{
    if(numeros[k]%2==0)
        console.log(numeros[k])
}

console.log("Elementos pares del vector v2")
//filter: filtra aquellos elementos que cumplen con la condición
const pares=numeros.filter( item => {
    return item%2==0
})
console.log(pares)
const paresv3=numeros.filter(item => item%2==0)
console.log("pares versión simplificada", paresv3)

//Imprima los elementos impares del vector
console.log("Elementos impares del vector")
const impares=numeros.filter( item => {
    return item%2!==0
})
console.log(impares)
//Diseñe la función que reciba un vector de enteros y devuelva solo los números múltiplos de 3
console.log("Dividir números con multiplo de 3")
const multiplosdeTres = function (arrayNumeros){
    return arrayNumeros.filter(item => {
        return item%3==0
    })
}
//Llama la función
console.log(multiplosdeTres(numeros))
console.log("Multiplos de 3: ",multiplosdeTres(Vnumeros))

//Declare un vector de nombres de personas. A continuación, imprímalos en pantalla
const personas=["Juan","Elizabeth", "Gabriel","Pedro","Ernesto", "Luisa", "Jaime","Maria","José"]
personas.forEach( nombre => console.log(nombre))

//Se tiene un conjunto de palabras, y cada palabra está separada por un espacio en blanco
//Se pide, utilizando la función split, imprimir cada palabra por separado. Por ejemplo:
//Bienvenidos a la PUCE sede Esmeraldas
//Resultados esperados:
//Bienvenidos
//a
//la
//PUCE
//sede
//Esmeraldas
const palabras = "Bienvenidos a la PUCE sede Esmeraldas"
console.log("V1 split----------------")
const arrayPalabras= palabras.split(" ")
arrayPalabras.forEach( palabra => console.log(palabra))
console.log("V2 split----------------")
palabras.split(" ").forEach(palabra => console.log(palabra))



