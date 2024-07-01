/* 1. Crie uma função arrow que recebe dois números e retorna o maior deles. */
const maiorNumero = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

console.log(maiorNumero(10, 5));

/* 2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula. */
const palavras = ["uva", "banana", "morango", "abacaxi"];

palavras.forEach((palavra) => {
  const letraMaiuscula = palavra.charAt(0).toUpperCase() + palavra.slice(1);
  console.log(letraMaiuscula);
});

/* 3. Use map para transformar um array de números, multiplicando cada número por 5. */
const numeros = [5, 10, 15, 20, 25];
const numerosMultiplicadosPor5 = numeros.map((numero) => numero * 5);

console.log(numerosMultiplicadosPor5);

/* 4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18. */
const idades = [40, 15, 18, 20, 2, 13, 30, 10];

let idadesAcimaOuIgual18 = idades.filter((idade) => idade >= 18);
console.log(idadesAcimaOuIgual18);

/* 5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora. */
let livros = {
  titulo: "Perdida - Um amor que ultrapassa as barreiras do tempo",
  autor: "Carina Rissi",
  informacoesPublicacao: {
    editora: "Verus Editora",
    anoPublicacao: "2011",
  },
};
console.log(livros.informacoesPublicacao.editora);

/* 6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas. */
const [fruta1, fruta2] = ["Pêra", "Maçã", "Uva", "Morango"];

console.log("Primeira fruta: " + fruta1);
console.log("Segunda fruta: " + fruta2);

/* 7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, forEach, map e filter. */

// 1. Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.
const filtrarNumerosPares = (numerosPares) =>
  numerosPares.filter((num) => num % 2 === 0);

let numerosPares = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(filtrarNumerosPares(numerosPares));

// 2. Escreva uma função que receba um array de números e retorne a soma de todos os números.
const somaNumeros = () => {
  const numeros = [13, 73, 3, 5];
  let soma = 0;

  numeros.forEach((num) => {
    soma += num;
  });

  console.log("A soma dos números é:", soma);
};

somaNumeros();

// 3. Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.
const palindromo = (palavra) => {
  let palavraInvertida = palavra.split("").reverse().join("");
  return palavra === palavraInvertida;
};

let palavra1 = "ARARA";
let palavra2 = "BATATA";
console.log(`A palavra ${palavra1} é palíndromo? ${palindromo(palavra1)}`);
console.log(`A palavra ${palavra2} é palíndromo? ${palindromo(palavra2)}`);

// 4. Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.
const contagemVogais = (palavra) => {
  const vogais = [
    "a",
    "e",
    "i",
    "o",
    "u",
    "á",
    "à",
    "ã",
    "â",
    "é",
    "ê",
    "í",
    "ó",
    "õ",
    "ô",
    "ú",
    "û",
  ];
  let contagem = 0;
  const palavraLower = palavra.toLowerCase();

  for (let letra of palavraLower) {
    if (vogais.includes(letra)) {
      contagem++;
    }
  }
  return contagem;
};

console.log(contagemVogais("possível"));

// 5. Escreva uma função que receba um array de números e retorne o menor número do array.
const menorNumero = () => {
  let numeros = [8, 19, 5, 24, -77, -15, 88, 10];
  let menor = numeros[0];

  numeros.forEach((num) => {
    if (num < menor) {
      menor = num;
    }
  });

  console.log(menor);
};

menorNumero();

// 6. Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3.
const calcularMedia = () => {
  let numeros = [7.0, 8.0, 9.0];
  let soma = 0;

  numeros.forEach((num) => {
    soma += num;
  });

  let media = soma / numeros.length;
  console.log("A média dos números é:", media);
};

calcularMedia();

// 7. Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.
const contarCaracteres = (str) => {
  const contagem = {};

  for (let caractere of str) {
    if (contagem[caractere]) {
      contagem[caractere]++;
    } else {
      contagem[caractere] = 1;
    }
  }

  console.log(contagem);
};

contarCaracteres("batata");

// 8. Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.
const ofuscarEmail = (email) => {
  const [usuario, dominio] = email.split("@");

  return usuario[0] + "*******" + "@" + dominio;
};

console.log(ofuscarEmail("jose.almir@dev.com"));
