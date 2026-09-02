// exemplosArrays.js

// criar um array 

let array1 = [];
let array2 = new Array(); // outra forma de criar um array, a diferença é que podemos passar o tamanho do array como parâmetro. segundo a professora, mais recomendado para o mercado
let array3 = ['maça', 'banana', 'uva']; // podemos criar um array já com elementos dentro

console.log('Array 1:', array1);
console.log('Array 2:', array2);
console.log('Array 3:', array3);

// adicionando elementos ao array
//array1 = ['teste'];
//array2 = ['teste2'];
//array3 = ['teste3'];

console.log('\nArray após adicionar elementos:', array1);
array1.push('el1');
array2.push('el2');
array3.push('el3');
console.log('\nNovo Array 1:', array1);
console.log('Novo Array 2:', array2);
console.log('Novo Array 3:', array3);


// acessar elemntos de um array
let primeiroElemento = array1[0];
let erro = array1[1];
let segundoElemento = array2[0];
let terceiroElemento = array3[3];

console.log('\nPrimeiro elemento:', primeiroElemento);
console.log('Erro:', erro);
console.log('Segundo elemento:', segundoElemento);
console.log('Terceiro elemento:', terceiroElemento); 

// modificar elementos de um array
array1[0] = 'novo elemento';
console.log('Array 1 após modificação:', array1);