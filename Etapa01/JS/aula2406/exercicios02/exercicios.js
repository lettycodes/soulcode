/* 1. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
Maior ou igual 7 = Aprovado
Entre 5 e 7 = Reforço
Menor que 5 = Reprovação */
let nota1 = 5.5;
let nota2 = 8;
let nota3 = 8.5;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  console.log("Aluno aprovado. Média: " + media.toFixed(2));
} else if (media >= 5 && media < 7) {
  console.log("Aluno de reforço. Média: " + media.toFixed(2));
} else {
  console.log("Aluno reprovado. Média: " + media.toFixed(2));
}

/* 2. Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
Indique o status com base no valor do IMC. */
let peso = 60;
let altura = 1.7;

let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("Abaixo do peso. IMC: " + imc.toFixed(1));
} else if (imc >= 18.5 && imc < 24.9) {
  console.log("Peso normal. IMC: " + imc.toFixed(1));
} else if (imc >= 25 && imc < 29.9) {
  console.log("Sobrepeso. IMC: " + imc.toFixed(1));
} else if (imc >= 30 && imc < 34.9) {
  console.log("Obesidade grau 1. IMC: " + imc.toFixed(1));
} else if (imc >= 35 && imc < 39.9) {
  console.log("Obesidade grau 2. IMC: " + imc.toFixed(1));
} else {
  console.log("Obesidade grau 3. IMC: " + imc.toFixed(1));
}

/* 3. Defina um número a e um número b. Verifica qual o maior, ou menor, ou se são iguais! */
let a = 10;
let b = 5;

if (a > b) {
  console.log("O número " + a + " é maior que o número " + b);
} else if (a < b) {
  console.log("O número " + a + " é menor que o número " + b);
} else {
  console.log("Os números " + a + " e " + b + " são iguais");
}

/* 4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário. */
let salario = 3500;
let quantidadeDependentes = 2;

if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
  console.log(
    "Você possui " +
      quantidadeDependentes +
      " dependentes, seu salário mudou para o valor: " +
      salario * 1.3
  );
} else if (quantidadeDependentes > 5) {
  console.log(
    "Você possui " +
      quantidadeDependentes +
      " dependentes, seu salário mudou para o valor: " +
      salario * 1.4
  );
} else {
  console.log(
    "Você não possui dependentes, seu salário permanece o mesmo valor: " +
      salario
  );
}

/* 5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 - Segunda, ... 7 - Sábado). Com base no valor indique se é final de semana ou dia útil. */
let dia = 7;

if (dia === 1) {
  console.log("Hoje é domingo. É final de semana, portanto, não é dia útil.");
} else if (dia === 2) {
  console.log("Hoje é segunda-feira. É um dia útil.");
} else if (dia === 3) {
  console.log("Hoje é terça-feira. É um dia útil.");
} else if (dia === 4) {
  console.log("Hoje é quarta-feira. É um dia útil.");
} else if (dia === 5) {
  console.log("Hoje é quinta-feira. É um dia útil.");
} else if (dia === 6) {
  console.log("Hoje é sexta-feira. É um dia útil.");
} else if (dia === 7) {
  console.log("Hoje é sábado. É final de semana, portanto, não é dia útil.");
} else {
  console.log("O número digitado não é um dia válido.");
}

/* 6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
Caso 1) É um número divisível por 4, mas não é divisível por 100. 
Caso 2) É um número divisível por 4, por 100 e por 400. */
let ano = 2024;

if (
  (ano % 4 === 0 && ano % 100 !== 0) ||
  (ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0)
) {
  console.log("O ano " + ano + " é bissexto.");
} else {
  console.log("O ano " + ano + " não é bissexto.");
}

/* 7. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso. */
let idade = 131;

if (idade < 0 || idade > 130) {
  console.log(
    "Você digitou a idade " +
      idade +
      ", essa idade não é válida. Digite outro valor."
  );
} else {
  console.log("Você digiou a idade " + idade + ", essa é uma idade válida.");
}

/* 8. Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso. */
let turno = "N";

if (turno === "M") {
  console.log("Bom dia!");
} else if (turno === "V") {
  console.log("Boa tarde!");
} else if (turno === "N") {
  console.log("Boa noite!");
} else {
  console.log("Valor Inválido!");
}
