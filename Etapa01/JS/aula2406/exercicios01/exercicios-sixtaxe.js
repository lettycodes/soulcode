// 1. Crie uma variável que armazene uma temperatura em Fahrenheit, e realize a conversão para Celsius. A equação para realizar a conversão é: C = (F - 32) / 1.8
let temperaturaFahrenheit = 80;
let temperaturaCelsius = (temperaturaFahrenheit - 32) / 1.8;

console.log(
  "A temperatura convertida é: " + temperaturaCelsius.toFixed(0) + " °C"
);

// 2. Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5.
let nota1 = 8.0; // peso 3
let nota2 = 7.5; // peso 2
let nota3 = 9.0; // peso 1
let nota4 = 6.5; // peso 4
let nota5 = 8.5; // peso 5

let peso1 = 3;
let peso2 = 2;
let peso3 = 1;
let peso4 = 4;
let peso5 = 5;

let mediaPonderada =
  (nota1 * peso1 +
    nota2 * peso2 +
    nota3 * peso3 +
    nota4 * peso4 +
    nota5 * peso5) /
  15;

console.log("A média do aluno é: " + mediaPonderada.toFixed(2));
