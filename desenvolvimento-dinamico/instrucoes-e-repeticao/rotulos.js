// Imagine que voce esta orgizando uma festa de aniversario.
// Os blocos de codigo sao como diferentes areas da festa, onde diferentes atividades acontecem.
// Por exemplo, voce pode ter uma area para dancar, uma area para jogos e uma area para comer.

{
    // area para dancar
    console.log("Hora de dançar!");
    // Aqui vao as intrucoes para a pista de dança
} 

{
    // area para jogos
    console.log("vamos jogar");
    // aqui vao as intrucoes para os jogos
}

{
    // area para comer
    console.log("hora de comer");
    // aqui vao as instrucoes para buffet
}

// os rotulos sao como etiquetas que voce coloca em diferentes atividades durante a festa, para ifentifica-las

// imagine que voce tem uma competicao de dança e uma competicao de jogos acontecendo ao mesmo tempo.

danca:
for (let i = 0; i < 3; i++) {
    jogos:
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            console.log("A competicao de dança foi interrompida!")
            break danca;
        }
        console.log("Competidor " + (i+1) + " esta dançando enquanto o competidor " + (j+1) + " esta jogando")
    }
}