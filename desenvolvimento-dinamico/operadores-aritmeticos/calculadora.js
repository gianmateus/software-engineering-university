function calculadora(num1, num2) {

    // Operações Aritméticas básicas
    let adicao = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let modulo = num1 % num2;
    let exponencial = num1 ** num2;

    // Incremento e Decremento
    // Vamos incrementar num1
    let incrementar = num1;
    incrementar++;

    // Vamos decrementar num2
    let decrementar = num2;
    decrementar--;




    console.log(`Adição (${num1} + ${num2}) = ${adicao}`);
    console.log(`Subtração (${num1} - ${num2}) = ${subtracao}`);
    console.log(`Multiplicação (${num1} * ${num2}) = ${multiplicacao}`);
    console.log(`Divisão (${num1} / ${num2}) = ${divisao}`);
    console.log(`Módulo (${num1} % ${num2}) = ${modulo}`);
    console.log(`Exponencial (${num1} ** ${num2}) = ${exponencial}`);
    console.log(`Incremento (${num1})++ = ${incrementar}`);
    console.log(`Decremento (${num2})-- = ${decrementar}`);
}

// Executando a função calculadora
calculadora(10, 5);
// NaN = Not a number, ou seja, não é um número. Isso acontece quando tentamos realizar uma operação matemática com um valor que não é numérico.



// Anotações e dicas sobre essa matéria:
// 1. Operadores Aritméticos são símbolos que representam operações matemáticas básicas, como adição, subtração, multiplicação, divisão, módulo e exponenciação.
// 2. Incremento e Decremento são operadores que aumentam ou diminuem o valor de uma variável em 1.
// 3. O operador de incremento (++) pode ser usado antes ou depois da variável, mas o resultado será diferente dependendo da posição do operador.
// 4. O operador de decremento (--) também pode ser usado antes ou depois da variável, com resultados diferentes dependendo da posição do operador.
// 5. É importante lembrar que o JavaScript é uma linguagem de tipagem dinâmica, ou seja, não é necessário declarar o tipo de uma variável antes de usá-la.
