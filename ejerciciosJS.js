//suma

function sum(a,b){
    return `sum:${a + b}`}

console.log(sum(1, 2))

//resta

function substract(a, b){
    return `Substract:${a-b}`
}

console.log(substract(1, 2))

//multiplicacion

function multiplication(primerNum, segundoNum) {
    console.log(multiplication = (primerNum * segundoNum))
}

multiplication(4, 4);

//divide

function divide(a, b){
    return a%b
}

console.log(20,4)

// Arrow Function: no retorno y sin parametros

const saludarConArrowFunction = () => {
    console.log("Hola, soy un arrow function")
}

saludarConArrowFunction()

const saludarConArrowFunctionYParametro = nombre => {
    console.log(`Hola soy ${nombre} y me invocaron desde un arrow function`)
}

saludarConArrowFunctionYParametro("Eric")

/*Condicionales*/

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

validarEdad(22)