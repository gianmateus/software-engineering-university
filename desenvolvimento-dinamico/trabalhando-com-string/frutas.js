// Exemplo de uso de método slice()
// Temos uma string com várias frutas

let frutas = "maçã, banana, laranja, uva, abacaxi";
console.log("String frutas: ", frutas);
console.log("Tamanho da string frutas: ", frutas.length);

// Queremos obter uma parte da string, por exemplo, apenas "banana" e "laranja"
let parteFrutas = frutas.slice(6, 21);
console.log("Parte da string frutas: ", parteFrutas);

// Exemplo de uso de método trim()
// temos uma string comm espaços em branco no início e no final
let frutaComEspaco = "             abacate             ";

// Queremos remover os espaços em branco do início e do final da string
let frutaSemEspaco = frutaComEspaco.trim();
console.log("Fruta sem espaços em branco: ", frutaSemEspaco);

// Exemplo de uso de metodo split()
// temos uma strin com várias frutas separadas por vírgula
let listaDeFrutas = "maçã,banana,laranja,uva,abacaxi";

// queremos dividir a string em um array de substrings, usando a vírgula como separador
let arrayDeFrutas = listaDeFrutas.split(",");
console.log("Array de frutas: ", arrayDeFrutas);

// testando cada fruta separadamente 
