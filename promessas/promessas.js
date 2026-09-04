// Promessas
// São objetos que representam o sucesso ou a falha eventual de uma operação assíncrona. 

// Desafios na utilização de promessas
// Compreensão assíncrona: Entender como as promessas funcionam e como lidar com operações assíncronas pode ser desafiador para desenvolvedores iniciantes.
// Gestão de erros: Lidar com erros em promessas pode ser complicado, especialmente quando há várias promessas encadeadas. É importante capturar e tratar erros adequadamente para evitar falhas silenciosas.
// Encadeamento complexo: Quando há muitas promessas encadeadas, o código pode se tornar difícil de ler e manter. É importante estruturar o código de forma clara e utilizar técnicas como async/await para melhorar a legibilidade.
// Promessas não nativas: Algumas bibliotecas ou frameworks podem implementar suas próprias versões de promessas, o que pode levar a inconsistências e dificuldades na integração com outras partes do código. É importante estar ciente das diferenças entre as implementações de promessas e garantir que o código seja compatível com a versão utilizada.

// Explicação da IA 

/*
Promises em JavaScript são objetos que representam a conclusão (ou falha) de uma operação assíncrona e seu valor resultante.  Em vez de usar callbacks aninhados, uma promise permite escrever código assíncrono de forma mais legível e encadeável, com tratamento de erros parecido ao  try...catch  síncrono.[mozilla +2]
Conceito básico
Uma promise funciona como uma “promessa” real: ela garante que algo vai ser entregue no futuro, mas pode ser cumprida (sucesso) ou rejeitada (erro).[freecodecamp +1]
•	pending (pendente): estado inicial, a operação ainda não terminou.[freecodecamp +1]
•	fulfilled / resolved (resolvida): a operação terminou com sucesso e há um valor disponível.[freecodecamp +1]
•	rejected (rejeitada): a operação falhou e há um motivo/erro.[freecodecamp +1]
•	settled: estado final, já seja resolvida ou rejeitada.[web +1]
Uma vez que uma promise é resolvida ou rejeitada, esse estado não muda mais.[web]
Por que usar promises?
Em JavaScript, muitas operações são assíncronas: chamadas de API, leitura de arquivos, timers, etc.  Promises ajudam a:[mozilla +1]
•	Evitar o “callback hell” (vários callbacks aninhados).[mozilla +1]
•	Encadear operações com  .then()  de forma clara.[freecodecamp +1]
•	Centralizar o tratamento de erros com  .catch() .[mozilla +1]
•	Integrar bem com  async/await , que é construído sobre promises.[mozilla]
Criando uma promise
Você cria uma promise com o construtor  new Promise , passando uma função que recebe  resolve  e  reject :
const minhaPromise = new Promise((resolve, reject) => {
  // operação assíncrona
  const sucesso = true;

  if (sucesso) {
    resolve("Operação concluída com sucesso");
  } else {
    reject("Algo deu errado");
  }
});

•	 resolve(valor)  marca a promise como fulfilled e passa o valor adiante.[web +1]
•	 reject(erro)  marca como rejected e passa o erro adiante.[web +1]
Consumindo uma promise
Você usa  .then()  para o caso de sucesso e  .catch()  para erros:
minhaPromise
  .then((resultado) => {
    console.log("Sucesso:", resultado);
  })
  .catch((erro) => {
    console.error("Erro:", erro);
  });

É possível encadear várias operações:
fetch("https://api.exemplo.com/dados")
  .then((res) => res.json())
  .then((dados) => {
    console.log(dados);
  })
  .catch((erro) => {
    console.error("Falha na requisição:", erro);
  });

Aqui,  fetch  já retorna uma promise, e cada  .then()  recebe o valor resolvido da anterior.[mozilla +1]
Relação com  async/await 
 async/await  é uma sintaxe mais “síncrona” por cima de promises:
async function buscarDados() {
  try {
    const res = await fetch("https://api.exemplo.com/dados");
    const dados = await res.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

•	 await  espera a promise ser resolvida (ou rejeitada).[mozilla]
•	Funções  async  sempre retornam uma promise.[mozilla]
Se quiser, posso mostrar exemplos práticos aplicados a chamadas de API, upload de arquivos ou integração com back-end que você possa usar nos seus projetos. 

*/