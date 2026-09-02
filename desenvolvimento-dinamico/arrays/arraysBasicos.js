let frutas = ['maçã', 'banana', 'laranja', 'uva'];

console.log('Array inicial: ' + frutas);
console.log('Comprimento do array: ' + frutas.length);

// push() - adiciona um elemento no final do array
let novoComprimento = frutas.push('manga', 'abacate');
console.log('\nArray atualizado push: ' + frutas);
console.log('Novo comprimento do array: ' + novoComprimento);

// pop() - remove o último elemento do array
let ultimaFruta = frutas.pop();
console.log('\nArray atualizado pop: ' + frutas);
console.log('Última fruta removida: ' + ultimaFruta);
console.log('Comprimento do array após pop: ' + frutas.length);

// shift() - remove o primeiro elemento do array
let primeiraFruta = frutas.shift();
console.log('\nArray atualizado shift: ' + frutas);
console.log('Primeira fruta removida: ' + primeiraFruta);
console.log('Comprimento do array após shift: ' + frutas.length);