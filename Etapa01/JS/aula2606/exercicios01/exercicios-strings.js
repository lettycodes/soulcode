/* 1. Escreva um programa que inverte uma string */
let palavra = "Leticia";
console.log(palavra.split("").reverse().join(""));

/* 2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###" */
let frase = "O essencial é invisível aos olhos.";
console.log(frase.replace("essencial", "###"));

/* 3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com */
let email = "email@soulcode.com";
console.log(email.endsWith("soulcode.com"));

if (email.endsWith("soulcode.com")) {
  console.log("O e-mail digitado é de domínio da Soul Code!");
} else {
  console.log("O e-mail digitado não é de domínio da Soul Code!");
}
