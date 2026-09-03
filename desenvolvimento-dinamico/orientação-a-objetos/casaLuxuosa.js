// Classe base 'Casa'

class Casa {
    constructor(cor, numQuarto, temGaragem) {
        // propriedades privadas utilizando convenção de underscore
        this._cor = cor;
        this._numQuarto = numQuarto;
        this._temGaragem = temGaragem;
    }


    // Métodos getters e setters para acessar e modificar as propriedades da classe
    get cor() {
        return this._cor;
    }

    set cor(novaCor) {
        this._cor = novaCor;
    }

    get numQuarto() {
        return this._numQuarto;
    }

    set numQuarto(novoNumQuarto) {
        this._numQuarto = novoNumQuarto;
    }

    get temGaragem() {
        return this._temGaragem;
    }

    set temGaragem(novoTemGaragem) {
        this._temGaragem = novoTemGaragem;
    }

    // Método para descrever a casa
    descrever() {
        let descricao = `Esta casa é de cor ${this._cor}, tem ${this._numQuarto} quarto(s)`;
        if (this._temGaragem) {
            descricao += ` e tem uma garagem.`;
        } else {
            descricao += ` e não tem garagem.`;
        }
        return descricao;
    }
}

// classe DERIVADA 'CasaLuxuosa' que herda da classe 'Casa'
class CasaLuxuosa extends Casa {
    constructor(cor, numeroDeQuartos, temGaragem, temPiscina) {
        // Chama o construtor da classe base
        super(cor, numeroDeQuartos, temGaragem);
        // propriedade adicional específica da classe derivada
        this._temPiscina = temPiscina;
    }

    // Getter e setter para a nova propriedade
    get temPiscina() {
        return this._temPiscina;
    }

    set temPiscina(novoTemPiscina) {
        this._temPiscina = novoTemPiscina;
    }

    // Sobrescrita do método descrever para incluir a piscina
    descrever() {
        let descricao = super.descrever(); // Chama o método descrever da classe base
        if (this._temPiscina) {
            descricao += ` Além disso, esta casa possui uma piscina.`;
        } else {
            descricao += ` Esta casa não possui piscina.`;
        }
        return descricao;
    }
}

const minhaCasa = new Casa("azul", 3, true);
const casaLuxuosa = new CasaLuxuosa("branca", 5, true, true);

// manipulação dos objetos e exibição das descrições
console.log(minhaCasa.descrever());
console.log(casaLuxuosa.descrever());


// explicando getters, setters, super, extends, underscore, herança, sobrescrita de métodos, encapsulamento e polimorfismo 
// getters e setters: métodos para acessar e modificar propriedades privadas
// super: permite chamar métodos da classe base
// extends: permite criar classes derivadas
// underscore: convenção para indicar propriedades privadas
// herança: capacidade de uma classe herdar propriedades e métodos de outra classe
// sobrescrita de métodos: capacidade de redefinir métodos em classes derivadas
// encapsulamento: proteção das propriedades privadas
// polimorfismo: capacidade de objetos de diferentes classes responderem ao mesmo método de maneira diferente