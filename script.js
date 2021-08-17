// variáveis
const nome = document.getElementById("nome")
const peso = document.getElementById("valuePeso")
const altura = document.getElementById("valueAltura")
let resultado = document.getElementById("resultado")

// botões
const btnCalcular = document.getElementById("botao")

//funções
function calcularImc() {
    imc = peso.value / altura.value ** 2
    resultado.textContent = "O seu imc é: "+imc
}

//botao-evento
btnCalcular.addEventListener("click", calcularImc)

console.log()