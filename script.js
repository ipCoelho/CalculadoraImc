// variáveis
const valueNome = document.getElementById("valueNome")
const peso = document.getElementById("valuePeso")
const altura = document.getElementById("valueAltura")
let resultado = document.getElementById("resultado")

// botões
const btnCalcular = document.getElementById("botao")

//funções
function calcularImc() {
    let imc = parseFloat(peso.value) / parseFloat(altura.value) ** 2
    nome = valueNome.value
    if (imc < 18.5) {
        resultado.textContent = nome+", seu imc é "+imc+". "+"Você está abaixo do peso."
    } 
    else {
        if (imc >= 18.5 && imc <= 24.9) {
            resultado.textContent = nome+", seu imc é "+imc+". "+"Parabéns! Você está no peso ideal."
        } else {
            if (imc >= 25 && imc <= 29.9) {
                resultado.textContent = nome+", seu imc é "+imc+". "+"Você está acima do peso."
            } 
            else {
                if (imc >= 30 && imc <= 34.9) {
                    resultado.textContent = nome+", seu imc é "+imc+". "+"Cuidado. Você está no grau I de obesidade."
                } 
                else {
                    if (imc >= 35 && imc <= 39.9)  {
                        resultado.textContent = nome+", seu imc é "+imc+". "+"Cuidado. Você está no grau II de obesidade."
                    } 
                    else {
                            resultado.textContent = nome+", seu imc é "+imc+". "+"Cuidado. Você está no grau III de obesidade."
                    }
                }
            }
        }
    }
}

//botao-evento
btnCalcular.addEventListener("click", calcularImc)
