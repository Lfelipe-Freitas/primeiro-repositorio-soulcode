/*Crie um programa que pergunte quantos produtos um cliente pegou e depois peça para que ele informe
o preço de cada produto. Ao recuperar possuir o valor de cada produto, faça a soma total da compra e
informe o maior e o menor preço que foi informado.*/

let arr = []
qtdProdutos = Number(prompt("Quantos produtos você pegou?"))
for (i = 1; i <= qtdProdutos; i++) {
    arr.push(Number(prompt(`Digite o valor do item número ${i}.`)))
}
let soma = arr.reduce((soma, currentElement) => soma + currentElement)
alert(`O total é ${soma}.`)
let max = arr[0]
let min = arr[0]
for (j = 0; j <= arr.length; j++) {
    if (max < arr[j]){
        max = arr[j]
    }
}
alert(`O maior valor é ${max}`)

for (k = 0; k <= arr.length; k++) {
    if (min > arr[k]){
        min = arr[k]
    }
}
alert(`O menor valor é ${min}`)



