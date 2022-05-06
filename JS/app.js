//Almacenar 
window.localStorage.setItem("nombre", "Gaston Benitez");

const producto = {
    nombre: "Shampoo",
    cantidad: 5
}
// console.log(typeof producto);

const strProduct = JSON.stringify(producto);
localStorage.setItem("productos", strProduct);
// console.log(typeof strProduct);

const meses = ["Enero", "Febrero", "Marzo"]
// console.log(typeof meses);
srtMeses = JSON.stringify(meses)
localStorage.setItem("meses", srtMeses)

//Sacarlo del localStorage
const localMeses = localStorage.getItem("meses")
console.log(typeof localMeses);
const srtLocalMeses = JSON.parse(localMeses)
console.log( typeof localMeses);

//Remover item
localStorage.removeItem("nombre");

srtLocalMeses.push("Abril");
localStorage.setItem("meses", JSON.stringify(srtLocalMeses));
















// sessionStorage.setItem("nombre", "Gaston Benitez");