
let pizzas = [
    {
        id: 1,
        nombre: "Napolitana",
        ingredientes: "Queso, Tomate, Oregano, Cebolla",
        precio: 800
    },
    {
        id: 2,
        nombre: "Roquefort",
        ingredientes: "Queso azul, Oregano, Cebolla",
        precio: 1000
    },
    {
        id: 3,
        nombre: "Fugazza",
        ingredientes: "Queso, Oregano, Cebolla",
        precio: 450
    },
    {
        id: 4,
        nombre: "Hongos",
        ingredientes: "Queso, Oregano, Cebolla, Hongos, Salsa blanca",
        precio: 1100
    },
    {
        id: 5,
        nombre: "Pollo",
        ingredientes: "Queso, Oregano, Cebolla, Pollo, Crema",
        precio: 1200
    },
    {
        id: 6,
        nombre: "Pepperoni",
        ingredientes: "Queso, Oregano, Cebolla, Calabresa",
        precio: 950
    }

]

// a)
const resultadoA = () => {
    pizzas.forEach((pizza) => {
        if (pizza.id % 2 !== 0) {
            console.log(`Esta Pizza tiene su ID impar: Pizza de ${pizza.nombre}`)
        }
    })
}
/* resultadoA(); */

// b)
const resultadoB = () => {
    pizzas.forEach((pizza2) => {
        if (pizza2.precio < 600) {
            console.log(`Esta Pizza tiene su Precio menor a $600: Pizza de ${pizza2.nombre}`)
        } else {
            console.log(`La Pizza de ${pizza2.nombre} tiene un precio de $${pizza2.precio}`)
        }
    }
    )
}
/* resultadoB(); */

// c)
const resultadoC = () => {
    console.log('Todas nuestras Pizzas')
    console.log('---------------------')

    pizzas.forEach((pizza3) => {
        console.log(`Pizza de ${pizza3.nombre}`)
    })
}
/* resultadoC(); */

// d)
const resultadoD = () => {
    console.log('Todas los precios de las pizzas')
    console.log('---------------------')

    pizzas.forEach((pizza4) => {
        console.log(`$${pizza4.precio}`)
    })
}
/* resultadoD(); */

// e)
const resultadoE = () => {
    console.log('Todas nuestras Pizzas')
    console.log('---------------------')

    pizzas.forEach((pizza5) => {
        console.log(`Pizza de ${pizza5.nombre} tiene un precio de $${pizza5.precio}`)
    })
}
resultadoE();