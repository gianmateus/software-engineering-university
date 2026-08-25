const externo = "Olá, eu sou uma constante global!";

function exemploVar() {
    if (true) {
        var mensagem = "Olá, Faculdade Descomplica! Escopo externo!";
    }
    console.log(mensagem);
}

exemploVar();


var mensagem = "Olá, Faculdade Descomplica!"
console.log(mensagem);

function exemploLet() {
    if (true) {
        let mensagem = "Olá, Faculdade Descomplica! Eu sou uma let...";
        console.log(mensagem);
    }
}
exemploLet();

let mensagem1 = "Olá, Descomplica! Let externo!";
console.log(mensagem1);


function exemploConstante() {
    const mensagem = "Olá, Faculdade Descomplica! Eu sou uma constante...";
    console.log(mensagem);
}

exemploConstante();

console.log(externo);


