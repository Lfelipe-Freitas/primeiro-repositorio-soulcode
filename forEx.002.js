let fatorial = Number(prompt("Digite um número"))
let resultado = fatorial
for (let i = 1; i < fatorial; i++) {
    resultado *= i
}
alert(`O resultado é ${resultado}`)