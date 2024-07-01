/* 1. Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares. */
function filtrarNumerosPares(numeros) {
  let numerosPares = [];

  for (let num of numeros) {
    if (num % 2 === 0) {
      numerosPares.push(num);
    }
  }

  return numerosPares;
}
let numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(filtrarNumerosPares(numeros));

// O array numerosPares é inicializado vazio para armazenar os números pares, o for of percorre cada número do array, o if verifica se o número que está sendo percorrido no momento é divisível por 2, ou seja, se é par, se o número for par, ele adiciona o número no array numerosPares, o return vai retornar esses números pares, que logo abaixo estão dentro do array e, no console, será exibido os números pares: [ 2, 4, 6, 8, 10 ]

/* 2. Escreva uma função que receba um array de números e retorne a soma de todos os números. */
function somaNumeros() {
  let numeros = [13, 73, 3, 5];
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  console.log("A soma dos números é:", soma);
}

somaNumeros();

// O array foi definido com alguns números, a variável soma foi inicializada com 0, o laço for vai percorrer todos os elementos do array e retorna os valores somados, que será exibido no console: 94

/* 3. Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo. */
function palindromo(palavra) {
  let palavraInvertida = palavra.split("").reverse().join("");

  return palavra === palavraInvertida;
}

let palavra1 = "ARARA";
let palavra2 = "BATATA";
console.log(`A palavra ${palavra1} é palíndromo? ${palindromo(palavra1)}`);
console.log(`A palavra ${palavra2} é palíndromo? ${palindromo(palavra2)}`);

// O split("").reverse().join("") vai inverter a palavra, o return compara a palavra original com a palavra invertida, criei duas palavras diferentes para testar se são palíndromos e, no console, mostra se elas são: a saída da primeira é true e a saída da segunda é false

/* 5. Escreva uma função que receba um array de números e retorne o menor número do array. */
function menorNumero() {
  let numeros = [8, 19, 5, 24, -77, -15, 88, 10];
  let menor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }

  console.log(menor);
}

menorNumero();

// O array foi definido com alguns números, o primeiro elemento do array foi definido como o menor inicialmente: [0], o laço for percorre os elementos do array a partir do segundo elemento, se o elemento atual for menor que o menor encontrado até agora, o valor menor é atualizado e imprime no console o menor valor encontrado: -77

/* 6. Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3. */
function calcularMedia() {
  let numeros = [7.0, 8.0, 9.0];
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  let media = soma / numeros.length;
  console.log("A média dos números é:", media);
}

calcularMedia();

// Um array com números é inicializado, a variável soma é inicializada com 0, o for percorre o array somando os valores, calcula a média dividindo a soma pelo número de elementos e imprime a média no console: 8

/* 7. Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.*/
