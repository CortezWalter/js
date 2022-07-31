let usuario = prompt("Ingresa usuario")
let pass = prompt("Ingresa la contraseña")

if ((usuario != "") && (pass != "")) {
    user = usuario.toLowerCase()
    alert("Tu usuario es " + user + " y la contraseña es " + pass)
    edad = prompt("cuantos años tenes?")
    if (edad < 18) {
        alert("Sos menor de 18, a casa a tomar la leche o ingresa tu edad de nuevo");
        prompt("Ingresa tu edad nuevamente");
    } else {
        alert("Adelante buen ser humano");
    }
}else {
    alert("Error!!!: No te pido user y pass por nada...ingresalos de nuevo");
}

alert("El usuario ingresado es " + user + " y la contraseña es " + pass)

console.log("Usuario y contraseña ingresados con exito")
console.log(user)









