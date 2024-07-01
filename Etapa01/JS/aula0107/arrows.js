// Declaração da function
function soma(a, b) {
  return a + b;
}

let resultadoSoma = (10, 5);

// Arrow function => é mais concisa
const somaArrow = (a, b) => a + b;

let resultadoArrow = somaArrow(5, 20);

// Arrow com corpo
const checarPar = (num) => {
  if (num % 2 == 0) {
    console.log(`O número ${num} é par`);
  } else {
    console.log(`O número ${num} é ímpar.`);
  }
};

// Transformando em arrow
const compararString = (str1, str2) => str1 === str2;
console.log(compararString("soulcode", "soulcode"));

const soma2 = (a, b) => a + b;
const testeFuncao = () => 2 * soma2(5, 9);

// Exemplo: converter a função abaixo em arrow
function extrairDigitosVerificadores(cpf) {
  const partesCpf = cpf.split("-");
  return partesCpf[1];
}

const extrairDigitosArrow = (cpf) => {
  const partesCpf = cpf.split("-");
  return partesCpf[1];
};

const extrairDigitosArrow2 = (cpf) => cpf.split("-")[1];

// For Each -> executa uma função para cada elemento no aray
const numeros = [1, 2, 3, 4, 5, 6, 7];

// Funcionamento similar ao do for-of
numeros.forEach((numero, index) => {
  // n = elemento no array
  // i = índice desse elemento
  console.log(`O número no índice ${index} é ${numero}`);
});

// Exemplo: somar todos os números de um array (forEach)
let soma = 0;

// Quando a arrow tem 1 parâmetro não é obrigatório os parênteses
// Se o corpo possui uma linha, pode ser simplificado dessa forma:
numeros.forEach((numero) => (soma += numero));

console.log(soma);

// Exemplo: converter a função em arrow, e o for em forEach
function repetirPalavra(palavra, qt) {
  let resultado = "";

  for (let i = 0; i < qt; i++) {
    resultado += palavra;
  }

  return resultado;
}

const repetirPalavra2 = (palavra, qt) => {
  let resultado = "";

  // Nesse exemplo, a repetição não é baseada em array, então precisamos usar o for convencional, se tive array, poderíamos usar o forEach
  for (let i = 0; i < qt; i++) {
    resultado += palavra;
  }

  return resultado;
};

// Exemplo: Converter a função abaixo em arrow e o for em forEach
function filtrarStrings(arr) {
  let stringsFiltradas = [];

  for (let str of arr) {
    if (str.length > 5) {
      stringsFiltradas.push(str);
    }
  }

  return stringsFiltradas;
}

const filtrarStrings2 = (arr) => {
  let stringsFiltradas = [];
  
  arr.forEach((str) => {
    if (str.length > 5) {
      stringsFiltradas.push(str);
    }
  });
  return stringsFiltradas;
};
