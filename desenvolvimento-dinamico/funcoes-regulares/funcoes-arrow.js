// arrow functions

// exemplo basico de um arrow function que soma dois numeros

let somar = (a,b) => {
    return a + b;
};

console.log(somar(5,3)); // 8


let dobrar = n => n * 2;

console.log(dobrar(5));


// callback
let numeros = [1,2,3,4,5];

let numerosDobrados = numeros.map( n => n * 2 );

console.log(numerosDobrados); // [2,4,6,8,10]


let saudacao = (nome, idade) => {
    let mensagem = `Olá, meu nome é ${nome}, eu tenho ${idade} anos.`;
    return mensagem;
};

console.log(saudacao("Mateus", 29)); // Olá, meu nome é Mateus, eu tenho 29 anos.