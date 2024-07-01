// Objetos -> são estruturas para representar dados
let pessoa = {
  nome: "José Almir",
  cpf: "999.999.999-99",
  dataNascimento: "10/01/2000",
  contato: {
    // objeto aninhado -> um objeto dentro de outro objeto
    email: "jose.almir@soulcode.com",
    telefone: "(99)9-9999-9999",
    fax: "+9 999 999 9999",
  },
  endereco: {
    cidade: "Fortaleza",
    estado: "CE",
    cep: "99999-999",
    rua: "Rua X",
    numero: "271",
  },
  objetivosProfissionais: ["Home Office", "Desenvolvedor Sênior", "Exterior"],
  formacao: [
    { nome: "Ensino médio", periodo: "2000-2003" },
    { nome: "Técnico em Informática", periodo: "2003-2005" },
    { nome: "Bacharelado em Computação", periodo: "2005-2010" },
  ],
};

// Formação (nome, período)

// console.log(pessoa.contato);
// console.log(pessoa.contato.email);
// console.log(pessoa.endereco);
// console.log(pessoa.endereco.estado);
// console.log(pessoa.objetivosProfissionais);
// pessoa.objetivosProfissionais.push("Dólar");
// pessoa.objetivosProfissionais.forEach((objetivo) => console.log(objetivo));
// console.log(pessoa.formacao);
pessoa.formacao.push({ nome: "Mestrado em IA", periodo: "2010-2012" });
// console.log(pessoa.formacao[0].nome);
for (let f of pessoa.formacao) {
  console.log("Formação: ", f.nome);
  console.log("Período: ", f.periodo);
}

// Exemplo: crie um objeto para representar um aluno:
// nome
// série
// matérias (nome da materia, nome do professor) -> array de objetos (materia, professor)
// notas - > array de number
const aluno = {
  nome: "Helena Andrade",
  série: "3° ano",
  materias: [
    { materia: "Português", professor: "Isabel" },
    { materia: "Matemática", professor: "Arnaldo" },
    { materia: "Inglês", professor: "Olivia" },
    { materia: "Informática", professor: "José" },
  ],
  notas: [10, 8, 9, 9],
};

console.log(aluno);
