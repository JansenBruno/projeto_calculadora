

//objeto calculadora
let calculadora = {};
calculadora.display = document.querySelector("#display");

let botaoUm = document.querySelector("#numeroUm");
let botaoDois = document.querySelector("#numeroDois");
let botaoTres = document.querySelector("#numeroTres");
let botaoQuatro = document.querySelector("#numeroQuatro");
let botaoCinco = document.querySelector("#numeroCinco");
let botaoSeis = document.querySelector("#numeroSeis");
let botaoSete = document.querySelector("#numeroSete");
let botaoOito = document.querySelector("#numeroOito");
let botaoNove = document.querySelector("#numeroNove");
let botaoZero = document.querySelector("#numeroZero");


let botaoIgual = document.querySelector("#igual");
let botaoLimpar = document.querySelector("#limpar");
let botaoSoma = document.querySelector("#soma");
let botaoMult = document.querySelector("#mult");
let botaoDiv = document.querySelector("#div");
let botaoSub = document.querySelector("#sub");

let acumulador = "";

botaoZero.onclick = function () {
  calculadora.display.innerText += 0;
}
botaoUm.onclick = function () {
  calculadora.display.innerText += 1;
}
botaoDois.onclick = function () {
  calculadora.display.innerText += 2;
}
botaoTres.onclick = function () {
  calculadora.display.innerText += 3;
}
botaoQuatro.onclick = function () {
  calculadora.display.innerText += 4;
}
botaoCinco.onclick = function () {
  calculadora.display.innerText += 5;
}
botaoSeis.onclick = function () {
  calculadora.display.innerText += 6;
}
botaoSete.onclick = function () {
  calculadora.display.innerText += 7;
}
botaoOito.onclick = function () {
  calculadora.display.innerText += 8;
}
botaoNove.onclick = function () {
  calculadora.display.innerText += 9;
}




botaoSoma.onclick = function () { // calcula soma 
  acumulador += calculadora.display.innerText;
  acumulador += " + ";
  calculadora.display.innerText = "";
}

botaoSub.onclick = function () { // calcula subtração
  acumulador += calculadora.display.innerText;
  acumulador += " - ";
  calculadora.display.innerText = "";
}

botaoMult.onclick = function () { // calcula multiplcação 
  acumulador += calculadora.display.innerText;
  acumulador += " * ";
  calculadora.display.innerText = "";
}
 botaoDiv.onclick = function () {// calcular a divisao
  acumulador += calculadora.display.innerText;
  acumulador += " / ";
  calculadora.display.innerText = "";
} 

botaoIgual.onclick = function () {
  //TODO: checar se existe conteúdo dentro do display

  //colocando conteúdo do display no acumulador
  acumulador += calculadora.display.innerText;
  //resolvendo conta (conteúdo acumulador)
  let resultado = eval(acumulador);
  //colocando no display o conteúdo do acumulador
  calculadora.display.innerText = resultado;
  // limpando o acumulador
  acumulador = "";

}

botaoLimpar.onclick = function () { // limpa tela 
  calculadora.display.innerText = " ";
}

