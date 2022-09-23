/*let arr = []
let contador = Number(prompt("Digite um valor"))
for (i = 1; i <= contador; i++) {
    arr.push(Number(prompt(`Digite a entrada número ${i}:`))) 
}
let total = arr.reduce((total, currentElement) => total + currentElement) //Esta função serve para reduzir o conteúdo de um Array para apenas um elemento.
let media = total / contador
alert(media)*/

let media = 0
		let contador = parseInt(prompt("Digite quantos numeros você vai precisar"))
		let userInput

		for (i = 1; i <= contador; i++) {
		    userInput = Number(prompt(`Digite a entrada número ${i}`))
		    media += userInput

		}

		alert(media / contador)