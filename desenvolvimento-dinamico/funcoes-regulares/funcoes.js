function soma(a, b) {
    return a + b;
}

let resultado = soma(13, 29);

console.log("O resultado da soma é: " + resultado);
console.log("O resultado da soma é: " + soma(2, 29));


// Definindo uma função regular usando a palavra-chave function
function saudacao(nome) {
    console.log("Olá, " + nome + "! Bem-vindo(a) à Faculdade Descomplica!");
}

saudacao("Mateus");


function mensagem() {
    console.log("Está é uma mensagem de boas vindas!");
}

saudacao("Mateus");
mensagem();