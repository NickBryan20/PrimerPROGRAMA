const {datos,ciudades}=require("./datos")
console.log("Separando los datos en un archivo")
console.log(datos)
console.log(ciudades)

//2. Listar las personas de sexo femenino
const SexoFemenino=datos.filter(objeto => objeto.sexo=="Femenino")
console.log("Personas con sexo femenino", SexoFemenino)

//3. Listado de ciudades con temperaturas mayores a 25
const arrayTemperatura=ciudades.filter(objeto => objeto.temperatura>25)
console.log("Ciudades con temperatura mayores a 25 grados: ", arrayTemperatura)

//4. Encuentre el total de la población en el array ciudades
const arrayPoblacion= ciudades.reduce( (total,Valorciudades) =>
 total+Valorciudades.poblacion, 0)
console.log("Total población de las ciudades",arrayPoblacion)

//5. Encuentre la sumatoria de los pesos de las personas de sexo masculino
const arraySexoMasculino=datos.filter(objeto => objeto.sexo=="Masculino").reduce( (total,ValorA) =>
total+ValorA.peso, 0)
console.log("Sumatoria entre pesos de personas de sexo masculino: ", arraySexoMasculino)

//6. Encuentre el promedio de las temperaturas (array ciudades)
const totalPromedioTemp=ciudades.reduce((acumulador,ciudad)=>(acumulador+ciudad.temperatura),0)
const promedioTemp=totalPromedioTemp/ciudades.length
//const promedioTemp = ciudades.every(elemento=>elemento.temperatura)/5
console.log("Promedio de las temperaturas de las ciudades: ", promedioTemp)

//7. Listado de personas de sexo masculino ordenados ascendentemente (a-z)
const arraySexoM=datos.filter(objeto => objeto.sexo=="Masculino").sort((a, b) => (a.apellidos > b.apellidos ? 1: -1))
console.log("Listado ordenado ascendente (a-z)(masculino) ", arraySexoM)
//8. Agregue el campo país al array de ciudades (Los países pueden ser Ecuador, Colombia, Perú ).
//Complete el array de ciudades con un total de 10 ciudades.
//A continuación, calcule el total de habitantes del país "Ecuador"
const arrayPoblacionPais=ciudades.filter(objeto => objeto.pais=="Ecuador").reduce( (total,ValorA) =>
total+ValorA.poblacion, 0)
console.log("Habitantes en el país de Ecuador: ", arrayPoblacionPais)

//9. Escriba el código necesario para convertir el array de personas en una array que tenga objetos con
//los campos {apellidos, nombres}. El método map le sería de mucha utilidad.
const arrayPersonas = datos.map(persona=>({apellidos:persona.apellidos, nombres:persona.nombres}))
console.log(arrayPersonas)
