/* 1. Use um laço while para imprimir na tela todos os números pares de 2 a 10. */
let number = 2;

while (number <= 10) {
  console.log(number);
  number += 2;
}

/* 2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70 */
let i = 1;
let numero = 7;

while (i <= 10) {
  console.log(numero + " x " + i + " = " + numero * i);
  i++;
}

/* 3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar. */
let n = 1;
let soma = 0;

while (n <= 999) {
  if (n % 2 !== 0) {
    soma += n;
  }
  n++;
}

console.log("A soma dos números ímpares de 1 até 999 é: " + soma);

/* 4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9. */
let num = 1;
let count = 0;

while (num <= 1000) {
  if (num % 9 === 0) {
    console.log(num);
    count++;
  }
  num++;
}

console.log("Total de números divisíveis por 9 entre 1 e 1000: " + count);
