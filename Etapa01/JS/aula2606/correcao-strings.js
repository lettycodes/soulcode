/* 1. Escreva um programa que inverte uma string */
// "Batata" -> "atataB"
let palavra = "Batata";
let invertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  invertida = invertida + palavra[i];
  console.log(invertida);
}
console.log(invertida);

/* 2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###" */
let frase = "Eu jogo The Sims e Overwatch, The Sims é top";
// let fraseCensurada = frase.replaceAll(" ", ""); // remove todos os espaços da frase
let fraseCensurada = frase.replaceAll("The Sims", "*****");

console.log(fraseCensurada);

/* 3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com */
const emailProf = "professor@soulcode.com";

if (
  emailProf.endsWith("soulcode.com") ||
  emailProf.endsWith("soulcodeacademy.org")
) {
  console.log("Este e-mail pertence a Soul Code!");
} else {
  console.log("Este e-mail não pertence a Soul Code!");
}
