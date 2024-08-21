function ejercicio_1() {
    let edad = prompt("Ingrese su edad: ");
    if (edad >= 18) {
        console.log("Eres mayor de edad.")
    }
    else {
        console.log("Eres menor de edad")
    }
}

function ejercicio_2() {
    let numeroUsuario = prompt("Ingrese un número: ")
    if (numeroUsuario >= 0) {
        console.log("El número es positivo")
    }
    else {
        console.log("El número es negativo)")
    }
}

function ejercicio_3() {
    let numeroUsuarioParOImpar = prompt("Ingrese un número: ")
    if (numeroUsuario % 2 == 0) {
        console.log("El número es par.")
    }
    else {
        console.log("El número es impar")
    }

}

function ejercicio_4() {
    let totalCompra = prompt("Ingrese el total de una compra: ")
    if (totalCompra > 100) {
        let descuento = totalCompra * 0.1
        totalCompra = totalCompra - descuento
        console.log("Tienes un descuento del 10% y el total es: " + totalCompra)
    }
    else {
        console.log("No tienes descuento")
    }
}

function ejercicio_5() {
    let numeroUno = prompt("Ingrese el primer número: ")
    let numeroDos = prompt("Ingrese el segundo número: ")
    if (numeroUno > numeroDos) {
        console.log("El primer número es mayor que el segundo")
    }
    else if (numeroUno < numeroDos) {
        console.log("El segundo número es mayor que el primero")
    }
    else {
        console.log("Los números son iguales")
    }
}

function ejercicio_6() {
    let clasificacionEdad = prompt("Ingresa tu edad: ")
    if (clasificacionEdad >= 0 && clasificacionEdad <= 12) {
        console.log("Eres un niño")
    }
    else if (clasificacionEdad > 12 && clasificacionEdad < 17) {
        console.log("Eres un adolescente.")
    }
    else if (clasificacionEdad > 18 && clasificacionEdad < 64) {
        console.log("Eres un adulto.")
    }
    else if (clasificacionEdad >= 65) {
        console.log("Eres un adulto mayor.")
    }
}

function ejercicio_7() {
    let nota = prompt("Ingrese una nota entre 0 y 100: ")
if (nota >= 90 && nota <= 100) {
    console.log("Excelente.")
}
else if (nota >= 70 && nota <= 89) {
    console.log("Bueno.")
}
else if (nota >= 50 && nota <= 69) {
    console.log("Regular.")
}
else if (nota >= 0 && nota <= 49) {
    console.log("Insuficiente.")
}
}

function ejercicio_8() {
    let opcionMenu = prompt("Elija una opción de menú: 1- Pizza. 2- Hamburguesa. 3- Tacos.");

switch (opcionMenu) {
    case 1:
        console.log("Seleccionaste Pizza.")
        break;
    case 2:
        console.log("Seleccionaste Hamburguesa.")
        break;
    case 3:
        console.log("Seleccionaste Tacos.")
        break;

    default:
        console.log("Opción no válida.")
        break;
}
}