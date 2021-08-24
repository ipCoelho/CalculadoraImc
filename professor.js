// JavaScript~correction 'Calculadora IMC' 24/08/2021
// Expressões Regulares
// Functions
function toCalculateImc(weight, height){
    return weight / (height ** 2)
}

function toClassificateImc(imc){
    let category
    if (imc < 18.5){
        category = 'abaixo do peso'
    } else if (imc < 25) {
        category = "com peso ideal. <span class='azul'>Parabéns!</span>"
    } else if (imc < 30) {
        category = 'levemente acima do peso.'
    } else if (imc < 35) {
        category = 'com obesidade grau I'
    } else if (imc < 40) {
        category = 'com obesidade grau II'
    } else {
        category = "com obesidade grau III' <span class='vermelho'>Cuidado!</span>"
    }
    return category
}

function toValidateFields(){
    return document.querySelector('form').reportValidity()
}

function showResult() {
    // Getting the html's elements using the method getElementById('')
    const result = document.getElementById('divResult')
    const name = document.getElementById('iptName').value
    const weight = document.getElementById('iptWeight').value.replace("," , ".")
    const height = document.getElementById('iptHeight').value.replace("," , ".")
    
    if (toValidateFields()) {
        // Saving the functions into variavables
        const imc = toCalculateImc(weight, height)
        const classification = toClassificateImc(imc)
        // Constructing the Output Message into the div's textContent
        result.innerHTML = `${name} seu IMC é ${imc.toFixed(1)} e você está ${classification}` // toFixed() -> Method to fix the decimal points.
    } else {
        result.textContent = `Preencha todos os campos!`
    }
}

function calculateWithEnter(evento) {
    if (evento.key === "Enter") {
        showResult()
    }
}

// Events
document.getElementById('button').addEventListener("click", showResult)
document.querySelector('form').addEventListener("keypress", calculateWithEnter)








// Notes
/*
    Tipos de Output:
    Tradicional = "nome + ' seu IMC é '+ imc" {...}
    
    Interpolação/Template String = ´${nome} seu IMC é ${imc}´ {
        É mais simples e rápido. Para abrir, usar acento ' ` ' (cráse).
    }





















*/