const personas=[
    {
        cedula:"0001",
        apellidos:"Pinguilo",
        nombres:"José",
        sexo:"Masculino",
        peso:70
    },
    {
        cedula:"0002",
        apellidos:"Palomino",
        nombres:"Gabriela",
        sexo:"Femenino",
        peso:55.40
    },
    {
        cedula:"0003",
        apellidos:"Nazanero",
        nombres:"Carlos",
        sexo:"Masculino",
        peso:80
    },
    {
        cedula:"0004",
        apellidos:"Vergara",
        nombres:"Julisa",
        sexo:"Femenino",
        peso:45.89
    },
    {
        cedula:"0005",
        apellidos:"Cortez",
        nombres:"Adriana",
        sexo:"Femenino",
        peso:56.90
    },
    {
        cedula:"0006",
        apellidos:"Cabeza",
        nombres:"Juan",
        sexo:"Masculino",
        peso: 90
    },
    {
        cedula:"0007",
        apellidos:"Klinger",
        nombres:"Manuel",
        sexo:"Masculino",
        peso: 67.40
    },
]

const ciudades=[
    {pais:"Ecuador",nombre:"Esmeraldas",temperatura:24, poblacion:455000},
    {pais:"Ecuador",nombre:"Guayaquil",temperatura:28, poblacion:1200000},
    {pais:"Ecuador",nombre:"Quito",temperatura:10, poblacion:1100000},
    {pais:"Ecuador",nombre:"Ambato",temperatura:15, poblacion:368900},
    {pais:"Ecuador",nombre:"Portoviejo",temperatura:22, poblacion:500000},
    {pais:"Ecuador",nombre:"Otavalo",temperatura:29, poblacion:510000},
    {pais:"Colombia",nombre:"Callao",temperatura:32, poblacion:455000},
    {pais:"Colombia",nombre:"Cali",temperatura:26, poblacion:2300000},
    {pais:"Peru",nombre:"Lima",temperatura:22, poblacion:4105000},
    {pais:"Colombia",nombre:"Bogotá",temperatura:24, poblacion:168900},
    {pais:"Colombia",nombre:"Medellin",temperatura:19, poblacion:480000},
    {pais:"Peru",nombre:"Cusco",temperatura:32, poblacion:530000},
]
module.exports={
    //forma 1 de exportar
    "datos":personas,
    //clave de valor si coinciden (forma 2 de exportar)
    ciudades,
}