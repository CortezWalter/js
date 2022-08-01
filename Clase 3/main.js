let saludo = "Hola";
let num;
let nombre;

do {
    num = prompt("ingresa un numero del 1 al 5")
    nombre = prompt("Ingresa tu nombre")

    if ((num <= 5) && (num >=1 ) && (nombre != "")) {
        alert("Numero y nombre ingresado correctamente");
    } else {
        alert("Posta? No es tan dificil poner un numero del 1 al 5 y tu nombre");
    }
} while ((num >= 5) && (nombre == ""));

for (let i = 1; i <= num; i++) {
    console.log(saludo + " " + nombre) 
}








