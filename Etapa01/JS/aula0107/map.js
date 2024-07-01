// Map = cria um novo array com os resultados da função aplicada em cada elemento
const numeros = [3, 4, 9, 10];
// Cada elemento no array, será aplicado na função
// O resultado será gerado em um novo array
const quadrados = numeros.map((n) => n ** 2);
console.log(quadrados);

const nomes = ["josé", "maria", "joão", "carlos"];
// nome = valor de cada elemento
// i = índice desse elemento
const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
const nomesExclamacao = nomes.map((nome) => nome + "!");

console.log(nomes);
console.log(nomesMaiusculos);
console.log(nomesExclamacao);

// Exemplo: Use map para transformar os valores do array abaixo.
const valores = [1, 2, 3, 4, 5, 6, 7];

const novosValores = valores.map((valor) => {
  // Se o valor for par faz valor * 2, se for ímpar faz valor / 2
  if (valor % 2 == 0) {
    return valor * 2;
  } else {
    return valor / 2;
  }
});

console.log(novosValores);
