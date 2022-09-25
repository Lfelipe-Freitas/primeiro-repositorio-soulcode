let arr = []
let arrPos = [] 
let somaPos = 0
let negativos = 0

for (i = 1; i <= 10; i++) {
    arr.push(Number(prompt(`Digite o número ${i} de 10.`)))
}

for (i = 0; i <= arr.length; i++) {
    if (arr[i] <= -1) {
        negativos += 1
    }
}

for (i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
        arrPos.push(arr[i])
    }
}

somaPos = arrPos.reduce((somaPos, currentElement) => somaPos + currentElement)

alert(`O número de negativos é ${negativos} e a soma dos positivos é ${somaPos}`)
