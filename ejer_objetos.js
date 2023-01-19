//Definición de un objeto
const estudiante={
    matricula: "0001",
    apellidos: "Carabalí Groño",
    nombres: "Ansapiel Pedrfo",
    sexo: "M",
    edad: 20
}
console.log("Objetos estudiante: ", estudiante)
console.log("Los apellidos del estudiante: ", estudiante.apellidos)
console.log("En el 2024 tu edad será: ", estudiante.edad+1)

//array de objetos
const libros=[
    {codigo: "IS001", "nombre_libro": "Las Aventuras del tigre", precio: 12.34},
    {codigo: "IS002", "nombre_libro": "El lanzamiento de las marmotas", precio: 10.14},
    {codigo: "IS003", "nombre_libro": "Osito Pegroña", precio: 12.55},
    {codigo: "IS004", "nombre_libro": "Psicología Avanzada", precio: 21.22},
]
console.log("Imprimiendo el array de objetos")
console.log(libros)
//especificar que libro imprimir
console.log("Libro de la posición 2 ", libros[1])

//Use foreach para imprimir todos los libros
console.log("Usando foreach para recorrer todos los libros")
libros.forEach(libro => console.log(libro))