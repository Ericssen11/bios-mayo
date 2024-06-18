function validarEdad (edad) {
    if (edad === undefined) {
        console.log("No hay datos en el parametro")
        return
    }

    if(typeof edad !== "number" || Number.isNaN(edad)) {
        console.log("Tipo de dato inválido")
        return
    }

    if (edad < 0) {
        console.log("Dato erróneo")
        return
    } else if(edad >=18) {
        console.log("Es mayor de edad")
    } else {
        console.log("Es menor de edad")
    }
}

validarEdad(20)




