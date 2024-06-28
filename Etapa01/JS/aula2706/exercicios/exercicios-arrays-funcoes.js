/* 1. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram. */
function alunosQueFaltaram(todosAlunos, listaPresenca) {
  let faltaram = [];

  for (let i = 0; i < todosAlunos.length; i++) {
    if (!listaPresenca.includes(todosAlunos[i])) {
      faltaram.push(todosAlunos[i]);
    }
  }

  return faltaram;
}

let alunos = ["Ana", "Beatriz", "Celso", "Danilo", "Eduardo"];
let presentes = ["Ana", "Celso", "Eduardo"];

let faltaram = alunosQueFaltaram(alunos, presentes);
console.log("Alunos que faltaram:");
console.log(faltaram);

/* 2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado. */
function elevarAoQuadrado(arrayNum) {
  let arrayQuadrado = [];
  for (let numero of arrayNum) {
    arrayQuadrado.push(numero * numero);
  }
  return arrayQuadrado;
}

let numeros = [1, 2, 3, 4, 5];
let numerosQuadrados = elevarAoQuadrado(numeros);
console.log(numerosQuadrados);

/* 3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão. */
function filtrarPorExtensao(arquivos, extensao) {
  let resultado = [];

  for (let i = 0; i < arquivos.length; i++) {
    if (arquivos[i].endsWith(extensao)) {
      resultado.push(arquivos[i]);
    }
  }

  return resultado;
}

let arquivos = [
  "documento.txt",
  "foto.jpg",
  "foto.png",
  "musica.mp3",
  "musica2.mp3",
  "video.mp4",
  "imagem.jpg",
];
let extensao = ".jpg";

let arquivosFiltrados = filtrarPorExtensao(arquivos, extensao);
console.log(arquivosFiltrados);

/* 4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum. */
let numerosArray = [];
for (let i = 1; i <= 10; i++) {
  numerosArray.push(i);
}

console.log("Exibindo com for-of:");
for (let numero of numerosArray) {
  console.log(numero);
}

console.log("Exibindo com for comum:");
for (let i = 0; i < numerosArray.length; i++) {
  console.log(numerosArray[i]);
}

/* 5. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres. */
function filtrarStrings(strings) {
  let resultado = [];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > 5) {
      resultado.push(strings[i]);
    }
  }

  return resultado;
}

let palavras = [
  "batata",
  "gato",
  "pato",
  "bolo",
  "elefante",
  "cachorro",
  "pássaro",
  "carro",
  "bicicleta",
];
let palavrasFiltradas = filtrarStrings(palavras);

console.log(palavrasFiltradas);

/* 6. Crie um array com 7 números. Percorra e indique qual o maior número deles. */
let numerosArr = [3, 13, 5, 88, 42, 10, 12];

let maiorNumero = numerosArr[0];

for (let i = 1; i < numerosArr.length; i++) {
  if (numerosArr[i] > maiorNumero) {
    maiorNumero = numerosArr[i];
  }
}

console.log(`O maior número é: ${maiorNumero}`);

/* 7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos. */
function extrairDigitosVerificadores(cpf) {
  let digitosVerificadores = cpf.substring(12);

  return digitosVerificadores;
}

let cpf = "123.456.789-00";
let digitos = extrairDigitosVerificadores(cpf);
console.log("Dígitos verificadores: " + digitos);

/* 8. Crie uma função que inverte uma string. Retorna ela invertida. */
function inverterString(str) {
  let invertida = [];
  for (let i = str.length - 1; i >= 0; i--) {
    invertida.push(str[i]);
  }
  return invertida.join("");
}

let texto = "HELLO WORLD!";
let textoInvertido = inverterString(texto);
console.log("Texto invertido: " + textoInvertido);

/* 9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver. */
function repetir(palavra, vezes) {
  let resultado = "";
  for (let i = 0; i < vezes; i++) {
    resultado += palavra;
  }
  return resultado;
}

let palavra = "batata";
let vezes = 3;
let palavraRepetida = repetir(palavra, vezes);
console.log(palavraRepetida);

/* 10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário. */
function stringsIguais(str1, str2) {
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

console.log(stringsIguais("batata", "batata"));
console.log(stringsIguais("maçã", "laranja"));

/* 11. Crie uma função que recebe um dia, mês e ano dentro de um array. Retorna a data utilizando o separador que também será definido via parâmetros da função (-, / ou .). Ex: formatarData(array, '.') -> '20.06.2000' */
function formatarData(arrayData, separador) {
  let dia = arrayData[0];
  let mes = arrayData[1];
  let ano = arrayData[2];

  return `${dia}${separador}${mes}${separador}${ano}`;
}

let data1 = [1, 1, 2000];
console.log(formatarData(data1, "."));

let data2 = [25, 12, 1990];
console.log(formatarData(data2, "-"));

/* 12. Crie uma função que recebe um array, um valor de busca e um valor padrão. Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro. Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata' */
function busca(array, valorBusca, valorPadrao) {
  if (array.includes(valorBusca)) {
    return valorBusca;
  } else {
    return valorPadrao;
  }
}

let array1 = ["batata", "arroz", "carne"];
console.log(busca(array1, "batata", "Alimento não encontrado"));

let array2 = ["suco", "água", "refrigerante"];
console.log(busca(array2, "vinho", "Bebida não encontrada"));
