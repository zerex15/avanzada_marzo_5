let usuarios=[

    {nombre:"juan", edad:32, esPaisa:true },
    {nombre:"maría", edad:15, esPaisa:true },
    {nombre:"james", edad:30, esPaisa:false },
    {nombre:"diomedez", edad:60, esPaisa:false },
    {nombre:"jbalvin", edad:8, esPaisa:true },
    {nombre:"lina", edad:16, esPaisa:false },
    {nombre:"jose", edad:38, esPaisa:false },
    {nombre:"lucho", edad:22, esPaisa:false },
    {nombre:"falcao", edad:35, esPaisa:false },
    {nombre:"mariana", edad:30, esPaisa:true }
    
]

//filtrar el arreglo para obtener solo los usuarios mayores de edad


// let filtradoEdad= usuarios.filter(function(usuario)
// {
//     return(usuario.edad>=18)
// })


// console.log(" ")
// let mostrar= usuarios.filter(function(usuario)
// {
//     return(usuario.esPaisa!=true)
// })
// console.log(mostrar)


//  console.log(" ")
// let menoresPaisas= usuarios.filter(function(usuario)
// {
//     return(usuario.edad>=18 && usuario.esPaisa==true)
// })
// console.log(menoresPaisas)

// let datosMapeados=usuarios.map(function(usuario){
//     //afectando el elemento original
//     return(usuario.nombre=usuario.nombre + "__cesde")
//     //no afectar el arreglo original
//     //return(usuario.nombre + "__cesde")
// })

// console.log(datosMapeados)
// console.log(usuarios)


let suma=0

usuarios.forEach(function(usuario){
    suma=suma+usuario.edad
    console.log(suma)
})






