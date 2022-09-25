let arr = []
let arrPar = []
let contaPar = 0
let contaImpar = 0
let arrImpar = []
for (i = 1; i <= 6; i++) {
    arr.push(Number(prompt(`Digite o valor do item número ${i}.`)))
}

for (i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
        contaPar += 1
    }
}
alert(`Existe um total de ${contaPar} pares`)

for (i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arrPar.push(arr[i])
    }
}
alert(`Este é o conjunto dos pares no momento: ${arrPar.join(", ")}`)

for (i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 != 0) {
        contaImpar += 1
    }
}
alert(`Existe um total de ${contaImpar} números ímpares`)

for (i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 != 0) {
        arrImpar.push(arr[i])
    }
}
alert(`Este é o conjunto dos ímpares no momento: ${arrImpar.join(", ")}`)


