/*1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
mostrar :
    a. A menor altura do grupo;
    b. A maior altura do grupo;
*/
let maior = 0;
let menor = 1;
let alturas = [];

for (i = 0; i < 15; i++) {
  alturas.push(Number(prompt(`Digite a altura da pessoa número ${i + 1}:`)));
  if (alturas[i] > maior) {
    maior = alturas[i]
  }
}

for (i = 0; i <= alturas.length; i++) {
    if (alturas[i] <= menor) {
        menor = alturas[i]
    }
}

alert(`O mais alto tem ${maior} de altura e o menor tem ${menor} de altura.`)