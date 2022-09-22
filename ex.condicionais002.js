let alcool = 1.90
let gasolina = 2.70
let combustivel = (prompt(`Escolha:
A - Álcool
G - Gasolina`))
let litros = Number(prompt(`Quantos litros você comprou?`))

if (combustivel == "A" && litros <= 25 ) {
    let valor = litros * alcool
    alert(`O valor total é ${valor * 1.02}`)
} else if (combustivel == "A" && litros > 25) {
    valor = litros * alcool
    alert(`O valor total é ${valor * 1.04}`)
} else if (combustivel == "G" && litros <= 25) {
    valor = litros * gasolina
    alert(`O valor total é ${valor * 1.03}`)
} else if (combustivel == "G" && litros > 25) {
    valor = litros * gasolina
    alert(`O valor total é ${valor * 1.05}`)}