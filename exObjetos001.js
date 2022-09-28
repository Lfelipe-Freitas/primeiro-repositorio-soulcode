/*Crie um algortimo que recebe informações de 15 produtos. Cada produto possui nome, marca, uma foto (link de uma imagem da internet), preço unitário e a quantidade de produtos em estoque. Ao receber essas informações dos produtos, imprima no HTML essas informações de cada produto e o produto entre o preço e a quantidade de produtos em estoque (preço total).*/
let arr = []

let produtos = {
    nome:"",
    marca:"",
    foto:"",
    preco:"",
    quantidade:"",
    estoque:0
}

for (i = 1; i <= 15; i++) {
    produtos.nome = prompt(`Qual o nome do produto ${i}?`)
    produtos.marca = prompt(`Qual a marca do produto ${i}?`)
    produtos.foto = prompt(`Insira o link do produto ${i}:`)
    produtos.preco = prompt(`Qual o preço do produto ${i}?`)
    produtos.quantidade = prompt(`Qual a quantidade do produto ${i}?`)
    produtos.estoque = prompt(`Tem quantos em estoque do produto ${i}?`)
    arr.push(produtos)
}
