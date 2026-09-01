// Criação de strings com nomes de animais
let animal1 = "Elefante";
let animal2 = "Girafa";
let animal3 = "Zebra";

// Exemplo do método sbstring()
// Pega parte da string 'Elefante', começando do índice 3 até o índice 7

let parteAnimal1 = animal1.substring(3, 7);
console.log('resultado substring: ' + parteAnimal1);

// exemplo do método replace()
// substitui a substring 'ra' por 're' em 'girafa'

let novoAnimal2 = animal2.replace('ra', 're');
console.log('nome do novo animal: ' + novoAnimal2);

// exemplo de métdo concat()
// concatena as string 'elefante', 'girafa' e 'zebra' com espaços entre elas

let animaisJuntos = animal1.concat(' ', animal2, ' ', animal3);
console.log('animais juntos: ' + animaisJuntos);