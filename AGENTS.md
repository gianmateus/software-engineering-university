# AGENTS.md — Repositório de estudos (Faculdade de Eng. de Software · Descomplica)

Guia para o Codex quando eu (Mateus) peço exercícios de programação para praticar.

---

## 1. O que é este repositório

Códigos das aulas da faculdade. Cada pasta é uma matéria/tema. As aulas **teóricas** normalmente não geram código; as **práticas** sim.

Estrutura atual:

```
desenvolvimento-dinamico/
  constantes-e-variaveis/       var, let, const, escopo, hoisting
  operadores-e-operacoes/       aritméticos, atribuição, lógicos, ternário, tabela verdade
  instrucoes-e-repeticao/       if/else, switch, for, while, do...while, blocos, rótulos (labels), break/continue
  funcoes-regulares/            declaração, parâmetros, return, anônimas, arrow, callback, map
  arrays/                       criar, push, acesso por índice, modificar
  trabalhando-com-string/       substring, replace, concat, template literals / interpolação
  json/                         objeto, acesso . e [], aninhamento, add/editar/delete, for...in, JSON.stringify / JSON.parse
  orientação-a-objetos/         class, constructor, this, métodos, extends, super, herança, getters/setters, encapsulamento (_), polimorfismo, sobrescrita
exceções/                       throw new Error, try/catch, error.message, console.error, validação
exercicios/                     <-- exercícios gerados pelo Codex ficam AQUI
```

Linguagem: **JavaScript puro**, rodando em Node (`node arquivo.js`). Sem frameworks, sem `package.json`, sem libs externas. Português nos comentários e enunciados.

Nível: **iniciante**. Objetivo é evoluir na lógica e nos fundamentos, não decorar API.

---

## 2. Para que serve este arquivo

Quando eu pedir exercícios ("me dá exercícios", "quero praticar arrays", "manda uns desafios", etc.), o Codex **cria um arquivo `.js` dentro de `exercicios/`** com questões para eu resolver sozinho, cheias de comentários que me guiam sem entregar a resposta.

A ideia: **não travar**. Cada questão vem com o caminho da matéria pra consultar, link da documentação e uma dica. Eu resolvo; depois posso pedir correção.

---

## 3. Fluxo quando eu peço exercícios

1. **Descobrir o escopo.** Se eu não disser o tema, pergunte OU escolha entre as matérias da seção 7 (só as que eu já vi). Nunca use assunto que não está na seção 7, a menos que eu diga explicitamente "já vi X na teoria, pode usar".
2. **Definir quantidade e dificuldade.** Padrão: **5 questões**, em dificuldade crescente (as 2 primeiras fáceis, 2 médias, 1 desafio). Posso pedir mais/menos.
3. **Criar o arquivo** em `exercicios/` seguindo a convenção de nome (seção 4) e o template (seção 5).
4. **Criar o gabarito** correspondente em `exercicios/gabaritos/` (seção 8). O gabarito **não sobe pro GitHub** (está no `.gitignore`).
5. **Me avisar** o nome do arquivo criado e como rodar (`node exercicios/NN-....js`).
6. **Não resolver** as questões no arquivo de exercício. Só stubs e comentários.

---

## 4. Onde salvar e como nomear

- Exercícios: `exercicios/NN-materia-topico.js`
  - `NN` = número sequencial com 2 dígitos (olhe o que já existe em `exercicios/` e continue a contagem).
  - `materia-topico` = kebab-case curto. Ex.: `03-arrays-filtragem.js`, `07-oo-heranca.js`.
- Gabarito: `exercicios/gabaritos/NN-materia-topico.gabarito.js` (mesmo `NN` e nome).

---

## 5. Estrutura obrigatória do arquivo de exercício

Todo arquivo gerado segue exatamente este formato. Ele deve **rodar sem erro** com `node` antes mesmo de eu resolver (só imprime o cabeçalho; as respostas são stubs).

```js
/* =============================================================
 * EXERCÍCIOS · <Matéria> — <Tópico>
 * Gerado para praticar. Data: <AAAA-MM-DD>
 *
 * Como usar:
 *   1. Resolva cada questão no espaço indicado (// SUA RESPOSTA).
 *   2. Rode com:  node exercicios/NN-materia-topico.js
 *   3. Descomente os testes (console.log) de cada questão para conferir.
 *   4. Quando terminar, me peça: "corrige o exercício NN".
 *
 * Consulte sempre que precisar (sem medo, faz parte):
 *   - Minha aula: <caminho/para/pasta-ou-arquivo-da-materia>
 *   - Documentação (MDN): <link principal do tópico>
 * ============================================================= */

console.log("=== Exercícios: <Matéria> — <Tópico> ===\n");


/* -------------------------------------------------------------
 * QUESTÃO 1  [fácil]
 * Enunciado: <descrição clara e curta do que fazer>
 *
 * Conceitos usados: <ex: push, índice de array>
 * Consulte: <caminho da minha aula> | MDN: <link específico do método/tópico>
 * Dica: <1 frase que destrava sem dar a resposta>
 * Saída esperada: <o que deve aparecer no console>
 * ------------------------------------------------------------- */

function questao1(/* parâmetros se fizer sentido */) {
  // SUA RESPOSTA AQUI

}

// Teste (descomente para conferir):
// console.log(questao1(...));   // esperado: ...


/* -------------------------------------------------------------
 * QUESTÃO 2  [fácil]
 * ...mesmo padrão...
 * ------------------------------------------------------------- */

// ...e assim por diante até a última questão.
```

Regras de conteúdo dos comentários:

- **Enunciado** objetivo, sem enrolação, com exemplo de entrada/saída quando ajudar.
- **Consulte**: sempre apontar (a) o caminho real da minha aula neste repo e (b) um link MDN específico (não a home do MDN).
- **Dica**: destrava, não resolve. Nada de pseudocódigo linha a linha.
- **Saída esperada**: sempre que a questão produzir saída determinística.
- Marcar dificuldade: `[fácil]`, `[médio]`, `[desafio]`.
- Cada questão deve ser **executável isoladamente** (função + teste comentado). Sem depender da questão anterior.
- Se o tópico for OO/classes, o stub pode ser um esqueleto de `class` com métodos vazios e `// SUA RESPOSTA`.

---

## 6. Regras de conteúdo dos exercícios

- **Só matérias da seção 7.** Se um exercício "bom" precisar de algo que não vi (ex.: `reduce`, destructuring, `async`), ou eu autorizo, ou o Codex escolhe outra abordagem com o que eu já sei.
- Progressão real de dificuldade dentro do arquivo.
- Exercícios de **lógica**, não de decorar nomes de método. Pode misturar temas já vistos (ex.: arrays + funções + string).
- Nada de I/O externo, rede, arquivo, `prompt()` de browser. Só `console.log` e funções puras.
- Cenários concretos e variados (não sempre "some dois números"): notas de aluno, carrinho de compras, semáforo, catálogo de imóveis, playlist, etc.
- Se eu pedir "continua" ou "mais um pouco disso", incrementar a dificuldade a partir do último arquivo daquele tema.

---

## 7. Matérias que já estudei (fonte para gerar exercícios)

Use isto como o universo permitido. Caminho = onde eu consulto; link = doc pra estudar.

| Tema | O que eu já vi | Consultar no repo | Documentação (MDN) |
|---|---|---|---|
| Variáveis e escopo | `var`, `let`, `const`, escopo global/função/bloco, hoisting | `desenvolvimento-dinamico/constantes-e-variaveis/` | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types |
| Operadores | aritméticos, atribuição (`+=`, `-=`...), comparação, lógicos (`&&`, `||`, `!`), ternário, tabela verdade | `desenvolvimento-dinamico/operadores-e-operacoes/` | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators |
| Condicionais | `if/else`, `else if`, `switch/case/break/default` | `desenvolvimento-dinamico/instrucoes-e-repeticao/` | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else |
| Repetição | `for`, `while`, `do...while`, blocos `{}`, rótulos (labels), `break`/`continue` | `desenvolvimento-dinamico/instrucoes-e-repeticao/` | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for |
| Funções | declaração `function`, parâmetros, `return`, funções anônimas, arrow `=>`, callback, `.map()` | `desenvolvimento-dinamico/funcoes-regulares/` | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions |
| Arrays | criar (`[]`, `new Array()`), `push`, acesso por índice, modificar por índice, `.map()` | `desenvolvimento-dinamico/arrays/` | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array |
| Strings | `substring`, `replace`, `concat`, template literals `` `${}` `` | `desenvolvimento-dinamico/trabalhando-com-string/` | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String |
| Objetos / JSON | objeto literal, acesso `.` e `[]`, aninhamento, add/editar, `delete`, `for...in`, `JSON.stringify`, `JSON.parse` | `desenvolvimento-dinamico/json/` | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON |
| Orientação a objetos | `class`, `constructor`, `this`, métodos, `extends`, `super`, herança, getters/setters, encapsulamento (convenção `_`), polimorfismo, sobrescrita de método, método "abstrato" com `throw` | `desenvolvimento-dinamico/orientação-a-objetos/` | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes |
| Exceções | `throw new Error()`, `try/catch`, `catch (error)`, `error.message`, `console.error`, validação de dados | `exceções/` | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch |

**Ainda não vi (não usar sem eu autorizar):** `for...of`, `forEach`, `filter`, `reduce`, `find`, spread/rest, destructuring, `Map`/`Set`, módulos `import/export`, Promises/`async`/`await`, `class` fields privados `#`, regex, DOM.

Quando eu disser que vi um assunto novo na teoria, o Codex **adiciona uma linha nessa tabela** (tema, o que vi, e link MDN) antes de gerar os exercícios.

---

## 8. Gabarito

Para cada arquivo de exercício, gerar também `exercicios/gabaritos/NN-materia-topico.gabarito.js`:

- Uma solução limpa e comentada por questão, no estilo iniciante (sem truque avançado).
- Comentário explicando **por que** funciona, não só o código.
- Esse arquivo **é ignorado pelo git** (via `.git/info/exclude`) — é rede de segurança pra quando eu travar de verdade, não vai pro GitHub.
- O Codex só me mostra o gabarito se eu pedir ("mostra o gabarito da 3"). Antes disso, na correção, prioriza dica.

---

## 9. Git — o que sobe e o que não sobe

**Sobe pro GitHub:** códigos de aula e os arquivos de `exercicios/*.js` (é a prova da minha prática).

**NÃO sobe (fica só local):** qualquer coisa ligada a uso de IA/assistente é ignorada via **`.git/info/exclude`** (arquivo local do git, nunca vai pro GitHub — diferente do `.gitignore`, que é versionado). Lista atual:

- `AGENTS.md` (este arquivo)
- `.Codex/`, `.omc/`
- `exercicios/gabaritos/` (gabaritos gerados por IA)
- `.ia-notas/` (rascunhos, prompts, anotações de IA)

O `.gitignore` versionado só tem coisa normal de dev (`.DS_Store`, `.idea/`, `node_modules/`, `.env`) — nada que revele uso de IA.

Ao criar um novo tipo de artefato de IA, adicionar a `.git/info/exclude` antes de mais nada. Nunca commitar nada dessa lista. Se eu não pedir commit, não commitar.

---

## 10. Quando eu peço correção

Eu digo algo como "corrige o exercício 03" ou "vê a questão 2 do 03".

1. Ler `exercicios/NN-....js` com as minhas respostas.
2. Para cada questão: dizer se passa na saída esperada; se não, apontar **onde** está o erro e **qual conceito revisar** (com o caminho da aula e link), sem reescrever tudo de cara.
3. Se eu pedir a solução, aí sim mostrar (pode usar o gabarito).
4. Elogiar o que está bom e sugerir 1 melhoria de estilo por vez (nomes, `const` vs `let`, evitar repetição). Sem despejar tudo.
5. Não editar minhas respostas sem eu pedir.

---

## 11. Comandos úteis

```bash
node exercicios/NN-materia-topico.js      # roda um exercício
node desenvolvimento-dinamico/<pasta>/<arquivo>.js   # roda um código de aula
node --check exercicios/NN-....js         # só verifica sintaxe
```

---

**Última atualização:** 2026-09-04
