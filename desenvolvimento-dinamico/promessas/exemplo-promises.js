function exemploOperacaoAssicrona() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
        const sucesso = true
    
        if (sucesso) {
            resolve("Operação bem-sucedida");
        } else {
            reject("Operação falhou");
        }
        }, 2000);
    });
}

exemploOperacaoAssicrona()
.then((resultado) => {
    console.log("Sucesso:", resultado);
})
.catch((erro) => {
    console.error("Erro:", erro);
});