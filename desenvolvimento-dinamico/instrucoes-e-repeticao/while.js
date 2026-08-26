// Imagine que você est-a fazendo exercicios fisicos para se manter saudável.
// Você decide fazer flexões até ficar cansado.

// Aqui, usaremos um loop while para simular esse processo:

let quantidadeDeFlexoes = 0;
let cansaco = false;

while (!cansaco) {
    quantidadeDeFlexoes++;
    console.log("Eu fiz", quantidadeDeFlexoes, "flexões.");

    // Simulando que você fica cansado após 10 flexões
    if (quantidadeDeFlexoes === 10) {
        cansaco = true;
        console.log("Estou cansado! Vou parar de fazer flexões.");
    }
}