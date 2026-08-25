// Exemplos de operadores lógicos em javascript

// Operador E lógico (&&)

const a = true;
const b = false;

const resultadoE1 = a && b; // false
const resultadoE2 = a && true; // true

console.log(`true && false: ${resultadoE1}`); // false
console.log(`true && true: ${resultadoE2}`); // true

// Operador OU lógico (||)

const resultadoOU1 = a || b; 
const resultadoOU2 = b || false;

console.log(`true || false: ${resultadoOU1}`); // true
console.log(`false || false: ${resultadoOU2}`); // false

// Operador NÃO lógico (!)

const resultadoNao1 = !a;
const resultadoNao2 = !b;

console.log(`!true: ${resultadoNao1}`); // false
console.log(`!false: ${resultadoNao2}`); // true

// Combinação de operadores lógicos

const resultadoCombo1 = (a || b) && !b;
const resultadoCombo2 = !(a && b) || a;

console.log(`(true || false) && !false: ${resultadoCombo1}`); // true
console.log(`!(true && false) || true: ${resultadoCombo2}`); // true