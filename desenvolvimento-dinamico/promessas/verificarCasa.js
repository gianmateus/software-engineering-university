// Função que simula uma oeração assíncrona de verificação de status de uma casa
function verificarStatusDacasa(casa) {

    return new Promise((resolve, reject) => {

        //Simulando uma operação assíncrona que leva 2 segundos para ser concluída
        setTimeout(() => {
            const sucesso = Math.random() > 0.5; // Simula sucesso ou falha aleatoriamente
            if (sucesso) {
                resolve(`A casa localizada em ${casa.endereco} está em bom estado.`);
            } else {
                reject(`A casa localizada em ${casa.endereco} está em mau estado.`);
            }
        }, 2000);
    });
}

// Classe 'Casa'
class Casa {
    constructor(endereco, cor, numeroDeQuartos, temGaragem) {
        this.endereco = endereco;
        this.cor = cor;
        this.numeroDeQuartos = numeroDeQuartos;
        this.temGaragem = temGaragem;
    }

    // Método para descrever a casa
    descrever() {
        let descricao = `Casa localizada em ${this.endereco}, de cor ${this.cor}, com ${this.numeroDeQuartos} quartos`;

        descricao += this.temGaragem ? " e possui garagem." : " e não possui garagem,";

        return descricao;
    }

    // Método para verificar o status da casa
    verificarStatus() {

        verificarStatusDacasa(this)
        .then((resultado) => {
            console.log(resultado); // resultado positivoi
        })
        .catch((erro) => {
            console.error(erro);
        })
    }
}

// Criação de uma objeto (Instância da classe Casa)
const minhaCasa = new Casa("Rua A, 123", "azul", 3, true);

// Manipulação do objeto e exibição da descrição
console.log(minhaCasa.descrever());

// Verificação do status da casa utilizando a promessa
minhaCasa.verificarStatus();

// Casa de falha
const casaInvalida = new Casa("", 0, "verde", 2, false);
console.log(casaInvalida.descrever());
casaInvalida.verificarStatus();