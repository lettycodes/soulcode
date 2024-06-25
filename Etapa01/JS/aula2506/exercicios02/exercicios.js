/* 1. Faça a tabuada completa utilizando o loop for. */
for (let i = 1; i <= 10; i++) {
  console.log(`Tabuada do ${i}:`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

/* 2. Use um laço for para imprimir na tela a série de Fibonacci até o décimo termo. A sequência de Fibonacci é formada pela sequência: 0,1,1,2,3,5,8,13,21,34,55. */
let termoAnterior = 0;
let termoAtual = 1;

for (let c = 0; c < 10; c++) {
  let proximoTermo = termoAnterior + termoAtual;
  termoAnterior = termoAtual;
  termoAtual = proximoTermo;
  console.log(termoAnterior);
}

/* 3. Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente). */
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

/* 4. Faça um programa que calcule o fatorial de um número inteiro. Ex.: 5! = 5 x 4 x 3 x 2 x 1 = 120. */
let numero = 5;
let fatorial = 1;

for (let i = numero; i > 1; i--) {
  fatorial *= i;
}
console.log(`O fatorial de ${numero} é: ${fatorial}`);

/* 5. Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7. */
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}

/* 6. Mostre a soma do 50 até o número 100 usando loop for. */
let soma = 0;

for (let i = 50; i <= 100; i++) {
  soma += i;
}
console.log(`A soma dos números de 50 até 100 é: ${soma}`);

/* 7. Mostre a seguinte figura com utilização de laços:
 *
 **
 ***
 ****
 *****
 */
let linha = "*";
let figura = "*";

for (let i = 1; i <= 5; i++) {
  console.log(`${linha}`);
  linha = linha + figura;
}
