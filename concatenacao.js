function testar() {
  window.event.preventDefault(); // usar esse evento quando estiver dentro de um form, para evitar o reload.
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  let txtteste = document.getElementById("txt");
  txtteste.innerHTML = `Olá ${nome}, você tem ${idade} anos de idade!`
}

//exemplo.substring(x, y+1) pode pegar 2 valores para pegar tudo a partir da primeira posição.