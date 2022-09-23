/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10%*/

let produto = Number(prompt("Qual o valor do produto que você vai comprar?"))

while (isNaN(produto) || produto <= 0) {
  alert("O preço digitado é inválido, informe apenas o valor em números e maior que ZERO.")
  produto = Number(prompt("Qual o valor do produto que você vai comprar?"))
}

let formaPagamento = Number(prompt(`Informe o método de pagamento:
1 - Dinheiro
2 - Cheque
3 - Cartão`))

while (isNaN(formaPagamento) || formaPagamento > 3 || formaPagamento < 1) {
  alert(`Método inválido`)
  Number(formaPagamento = prompt(`Informe o método de pagamento:
1 - Dinheiro
2 - Cheque
3 - Cartão`))
}


if (formaPagamento == 1 || formaPagamento == 2) {
  alert(`O valor do seu produto é ${produto * 0.9} reais.`)
} else if (formaPagamento == 3) {
  let parcelamento = prompt("Vai parcelar? 1 = sim ou 2 = não")
  if (parcelamento == "2") {
    alert(`O valor do seu produto é ${produto * 0.85} reais.`)
  } else {
    parcelas = prompt("Em quantas vezes?")
    if (parcelas == "2") {
      alert(`O valor do produto é ${produto} reais.`)
    } else if (parcelas > 2) {
      let precoFinal = produto * 1.15
      alert(`O valor do seu produto é ${precoFinal.toFixed(2)} reais.`)
    }
  }
}
