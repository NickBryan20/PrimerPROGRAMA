//Fecha:2023-01-19
//Estudiante: Nick Bryan López Reina
const {data}=require("./datosest")
console.log("Datos de estudiantes"), data

//1. Devuelve el array de estudiantes
//Resultado esperado: [{estudiante: "Juan Perez"},{estudiante: "José De La Cuadra"}]
const arrayPersonas = data.map(persona=>({estudiante:persona.estudiante, estudiante:persona.estudiante}))
console.log("Resultado esperado: ", arrayPersonas)

//2. Devuelve el array de estudiantes
//Resultado esperado: ["Juan Perez", "José De La Cuadra"]
const arrayEstudiantes = data.map(persona=>persona.estudiante)
console.log("Resultado esperado V2: ", arrayEstudiantes)

//2.1. Devuelve el array de estudiantes ordenados descendentemente (z-a)
//Resultado esperado: ["Juan Perez", "José De La Cuadra"]
const arrayEstudiantesAZ=data.filter(objeto => objeto.estudiante).sort((a, b) => (a.estudiante > b.estudiante ? 1: -1))
console.log("Listado ordenado desscendente (z-a) ", arrayEstudiantesAZ)

//3. Devuelve un array de la sumatoria de los parciales
//Resultado esperado: [93,150,43]
const arrayParciales=data.map(objeto => objeto.parciales.reduce((acumulador,valor)=> acumulador+valor,0))
console.log("Sumatoria de los parciales: ", arrayParciales)


//4. Devuelve el promedio de los paraciales (un solo bloque de código)
//Resultado esperado: 123.44
const promedioParciales=data.map(objeto => {
    return objeto.parciales.reduce((acumulador,valor)=> acumulador+valor,0)}).reduce((acumulador,valor) => acumulador + valor,0)/data.length
console.log("Promedio parciales",promedioParciales)

//5. Devuelve un array de objetos que contiene del estudiante, la materia y la sumatoria de los parciales
/*Resultado esperado: [
    {estudiante: "Juan", materia: "Algoritmos", sumaparciales:120},
    {estudiante: "Pedro", materia: "Algoritmos", sumaparciales:110},
]*/
const arrayObjEst = data.map(persona=>{
    return ({estudiante:persona.estudiante, materia:persona.materia,sumaparciales: persona.parciales.reduce((acumulador,valor)=> acumulador+valor,0) })
})
console.log("5) Resultado esperado: ", arrayObjEst)

//6. Devuelve un array de objetos que incluye el nombre del estudiante, la materia, la suma de parciales, y la nota parciales
//La nota final es igual a la sumatoria de los parciales + nota teórica, nota práctica
/*Resultado esperado:
[
    {estudiante: "Juana", materia:"Algoritmos","sumaparciales":120, notafinal:160},
    {estudiante: "Pedro", materia:"Algoritmos","sumaparciales":120, notafinal:175},
]*/
const arrayObjEst2 = data.map(persona=>{
    return ({sumaparciales: persona.parciales.reduce((acumulador,valor)=> 
        acumulador+valor,0)})
const notafinal=sumaparciales+persona.examen_final.teoria+persona.examen_final.practica;
return {estudiante:persona.estudiante, materia:persona.materia, sumaparciales:sumaparciales,examen_final:examen_final}
})
console.log("6) Resultado esperado: ", arrayObjEst2)
//errores
//7. Agregue 2 registros al array data para la asignatura Física. A continuación, devuelva el promedio del campo notafinal de la materia Algoritmos.
//Resultado esperado: { materia : "Algoritmos" , promedio: 178.22}
const arrayRegistroFisica=data.filter(objeto => objeto.materia=="Algoritmos").map(persona=>{
    return ({materia:persona.materia, promedio:persona.parciales.reduce((acumulador,valor)=> acumulador+valor,0)})
})
console.log("7) Resultado Esperado: ",arrayRegistroFisica)
//errores
//8. Diseñe  la función que recibe como parámetro una letra del alfabeto(puede estar en mayúsculas o minúsculas).
//La función devuelve el array data para aquellos estudiantes que empiezan con esa letra (se deben incluir todos los campos)
//Por ejemplo si la letra es la A o la a:
/*el resultado esperado sería:
[
    {
        matricula: "10123",
        estudiante: "Andrade Marco",
        materia: "Algoritmos",
        parciales: [25,33,22],
        examen_final: {  teoria: 20,  practica: 18  }
    },
    {
        matricula: "10128",
        estudiante: "Alcívar Rosa",
        materia: "Algoritmos",
        parciales: [10,11,22],
        examen_final: { teoria: 15, practica: 15 }
    }
]*/
const arrayAlfabeto= data.map(persona=>{
    return ({matricula:persona.matricula, estudiante:persona.estudiante.slice(), materia:persona.materia, promedio:persona.parciales, examen_final:persona.examen_final})
}).sort( (a, b) => {
    if(a.estudiante < b.estudiante) {
      return -1;
    }
    if(a.estudiante > b.estudiante) {
      return 1;
    }
    if (a.estudiante.toLowerCase() < b.estudiante.toUpper()) {
      return -1;
    }
    if (a.estudiante.toLowerCase() > b.estudiante.toUpper()) {
      return 1;
    }
    return 0;
  })
console.log("8) Resultado esperado: ", arrayAlfabeto)