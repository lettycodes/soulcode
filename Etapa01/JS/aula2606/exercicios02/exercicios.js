/* 1. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal. */
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function indicarStatusIMC(imc) {
  if (imc < 18.5) {
    console.log(`IMC: ${imc.toFixed(2)} - Abaixo do peso`);
  } else if (imc >= 18.5 && imc < 24.9) {
    console.log(`IMC: ${imc.toFixed(2)} - Peso normal`);
  } else if (imc >= 25 && imc < 29.9) {
    console.log(`IMC: ${imc.toFixed(2)} - Sobrepeso`);
  } else if (imc >= 30 && imc < 34.9) {
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau 1`);
  } else if (imc >= 35 && imc < 39.9) {
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau 2`);
  } else if (imc > 40) {
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau 3`);
  }
}

let peso = 60;
let altura = 1.7;

let imc = calcularIMC(peso, altura);
indicarStatusIMC(imc);

/* 2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6% */
function percentual(numero) {
  if (numero >= 0 && numero <= 1) {
    return (numero * 100).toFixed(1) + "%";
  } else {
    return "O número digitado é inválido. Digite outro valor.";
  }
}

let resultado = percentual(0.5);
console.log(resultado);

/* 3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true */
function ehNegativo(numero) {
  return numero < 0;
}

console.log(ehNegativo(-2)); // true

/* 4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno. */
function contar(numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(i);
  }
}
contar(5);
contar(10);

/* 5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado. */
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

let nomeSobrenome = nomeCompleto("Letícia", "Silva");
console.log(nomeSobrenome);

/* 6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14. */
function calcularAreaCirculo(raio) {
  const PI = 3.14;

  return PI * raio * raio;
}

let area = calcularAreaCirculo(5);
console.log(`Área do círculo: ${area}`);

/* 7. Crie uma função que recebe a área de um circulo e mostra o nível:
Entre 1 e 20 => Nível I
Entre 21 e 40 => Nível II
Qualquer outro diâmetro => Nível inválido */
function nivel(area) {
  if (area >= 1 && area <= 20) {
    console.log("Nível I");
  } else if (area >= 21 && area <= 40) {
    console.log("Nível II");
  } else {
    console.log("Nível inválido");
  }
}

let areaCirculo = nivel(10);

/* 8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas. */
function converterStrings(minusculas) {
  return minusculas.toLowerCase();
}

let palavra = converterStrings("HELLO WORLD");
console.log(palavra);

/* 9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string. */
function contarOcorrencias(palavra, caractere) {
  let ocorrencias = 0;

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === caractere) {
      ocorrencias++;
    }
  }
  return ocorrencias;
}

console.log(contarOcorrencias("Batata", "a"));
