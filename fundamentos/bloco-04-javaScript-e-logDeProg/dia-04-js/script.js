/* 1 ª Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo */
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
let player = {
    name : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals: {
        golden : 2,
        silver : 3,
    }
}
console.log(player.name + '' + player.lastName + 'tem ' + player.age + 'e tem ' + player.medals.silver + ' medalhas de prata e ' + player.medals.golden + ' medalhas de ouro.');

/* 2ª Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome,
 substituindo o xxxxx pelo nome em questão. */
 let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for(let index in names) {
    console.log("Olá, " + names[index]);
  }
/* 
  3ª Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto. */
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (let index in car) {
    console.log(index + ', ' + car[index]);
  }

/*   4ª Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, 
  a e b, definidas no começo com os valores que serão operados. Faça programas para:

  Adição (a + b)
  Subtração (a - b)
  Multiplicação (a * b)
  Divisão (a / b)
  Módulo (a % b) */

  const a = 15;
  const b = 5;

  function adicao(a,b) {
    return a + b
  } console.log(adicao(a,b));

  function subtracao(a,b) {
    return a - b
  }console.log(subtracao(a,b));

  function multiplicacao(a,b) {
    return a * b
  }console.log(multiplicacao(a,b));

  function divisao(a,b) {
    return a / b
  }console.log(divisao(a,b));

  function modulo(a,b) {
    return a % b
  }console.log(modulo(a,b));

 /*  5ª Faça um programa que retorne o maior de dois números. Defina, no começo do programa,
   duas constantes com os valores que serão comparados. */

   function comparacao(a,b) {
    if ( a > b){
        return a + ' é maior que ' + b;
    } else if ( b > a) {
        return b + ' é maior que ' + a;
    } else {
        return 'os números são iguais'
    }
   }console.log(comparacao(a,b));

 /*   6ª Faça um programa que retorne o maior de três números. Defina, no começo do programa, 
   três constantes com os valores que serão comparados. */

   const number1 = 10;
   const number2 = 20;
   const number3 = 30;
   function maiorDeTres(number1, number2, number3){
    if (number1 > number2 && number1 > number3) {
        return number1
    } else if (number2 > number1 && number2 > number3){
        return number2
    } else {
        return number3
    }
   }console.log(maiorDeTres(number1,number2,number3));
/* 
   7ª Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, 
   “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”. */
   function positivoOuNegativo(numero){
    if(numero > 0){
        return 'positivo'
    } else if (numero < 0){
    return 'negativo'
    } else {
    return 'zero'
    } 
}console.log(positivoOuNegativo(20));

/* 8ª Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se 
os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve
 retornar uma mensagem de erro. */

const lado1 = 90;
const lado2 = 45;
const lado3 = 45;
function ladoDoTriangulo(lado1,lado2,lado3){
    let soma = lado1 + lado2 +lado3;
    let ladosPositivos = lado1 > 0 && lado2 > 0 && lado3 > 0;

    if (ladosPositivos){
        if (soma === 180) {
        return 'true'
    } else {
        return 'false'
    } 
    } else {
        return 'erro'
    }
}console.log(ladoDoTriangulo(lado1,lado2,lado3));