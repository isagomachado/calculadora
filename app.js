var primeiroValor = parseInt(prompt("Insira o primeiro valor:"))

var segundoValor = parseInt(prompt("Insira o segundo valor"))

var operaçao = prompt("insira 1 para realizar uma divisão, 2 para multiplicação, 3 para adição ou 4 para subtração")

if (operaçao == 1) {
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
}  else if (operaçao == 2) {
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " X " + segundoValor + " = " + resultado + "</h2>")
} else if (operaçao == 3) {
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operaçao == 4) {
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else {
  document.write("<h2> Opção invalida</h2>")
}



//REVISÃO
//escrever na tela: document.write("")
//concatenação (juntar a palavra com a variavel)
//if = se
//else = se não
//else if = se não se
//precisa criar a variavel resultado em todos os else if 
// == comparação é diferente do = que usamos pra fazer atribuição