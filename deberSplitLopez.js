//1) Una función recibe como parámetro una cadena de caracteres. Las palabras de esta cadena de caracteres están separadas por puntos y comas. La función debe imprimir cada palabra. Por ejemplo
//"Este;es;un;mensaje". El resultado sería:
//Este
//es 
//un
//mensaje
//Nota importante: Debe hacer 5 llamadas a la función creada. En cada llamada debe usar palabras diferentes.

console.log("VERSIÓN SPLIT NICK LÓPEZ")
const palabra = "Bienvenidos;a;mi;nueva;casa;en;Esmeraldas"
palabra.split(";").forEach(mensaje => console.log(mensaje))

//2) Diseñe la función que recibe como parámetro un array de enteros. La función debe devolver el array ordenado. (Orden ascendente - consulte el método sort)
console.log("Array ordenado de forma ascendente")
const numeros = [-1,-5,-10,-8,120,30,40,99,555,32,11,1,2,3,8,24]
numeros.sort((a, b) => a - b)
console.log(numeros)

//3) Diseñe la función que recibe como parámetro un array de string. La función debe devolver el array ordenado. (Orden ascendente - consulte el método sort)

console.log("Array ordenado de forma ascendente")
var array = [ 2000,300,500,7000,-53,1,50,80 ]
function comparacion ( a, b ){ return a - b; }
array.sort( comparacion )
console.log(array)

//4) Una cadena de caracteres contienes los nombres de ciudades. Se pide convertir esa cadena en un array, y luego ordenarla en forma descendente.

console.log("Ciudades ordenadas de forma descendente")
/*var ciudades = ['Cuenca', 'Ambato', 'Carchi', 'Esmeraldas', 'Otavalo', 'Loja']
ciudades.sort(function (a, b) {
  return b.localeCompare(a);
})
console.log(ciudades)*/

const ciudades = "Cuenca,Ambato,Carchi,Esmeraldas,Otavalo,Loja"
for (let i = 0; i < ciudades; i++){
    console.log(ciudades[i])
}
const emparejar = (CIUDAD) =>{
    const name = CIUDAD.split(",") 
    console.log(name)
    return name.sort((a, b) => {
        if (b < a) {
          return -1
        }
        if (b > a) {
          return 1
        }
        return 0
    })
}
console.log(emparejar(ciudades))