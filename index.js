const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

console.log("Pizzas con ID impar:");
const pizzasConIdImpar = pizzas.filter(pizza => pizza.id % 2 !== 0);
pizzasConIdImpar.forEach(pizza => {
  console.log(`- ${pizza.nombre}`);
});

console.log("¿Hay alguna pizza que valga menos de $600?");
const pizzaMenosDe600 = pizzas.some(pizza => pizza.precio < 600);
if (pizzaMenosDe600) {
  console.log("Sí, hay una o mas pizzas que cuestan menos de $600.");
} else {
  console.log("No, todas las pizzas cuestan $600 o más.");
}

console.log("Nombre y precio de las pizzas:");
pizzas.forEach(pizza => {
  console.log(`- ${pizza.nombre}: $${pizza.precio}`);
});

console.log("Ingredientes de las pizzas:");
pizzas.forEach(pizza => {
  console.log(`- ${pizza.nombre}: ${pizza.ingredientes.join(", ")}`);
});