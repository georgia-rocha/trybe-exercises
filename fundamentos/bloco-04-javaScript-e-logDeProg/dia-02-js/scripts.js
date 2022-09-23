/* Exercícios de introdução à JavaScript - Dia 2 - Array e loop For */
/* Percorra o array imprimindo todos os valores nele contidos com a função console.log(); */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index])
}
/* Some todos os valores contidos no array e imprima o resultado; */

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (let index = 0; index < numbers.length; index += 1) {
   resultado += numbers[index];
}
console.log(resultado);

/* Calcule e imprima a média aritmética dos valores contidos no array;

A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos. */

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
let media = soma / numbers.length;
console.log(media);
/* Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: 
“valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20” */
if (media > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}
/* Utilizando for, descubra qual o maior valor contido no array e imprima-o; */

let xablau = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = xablau[0];

for (let index = 0; index < xablau.length; index += 1) {
    if (xablau[index] > maiorNumero) {
        maiorNumero = xablau[index];
    }
}
console.log(maiorNumero);
/*  Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, 
imprima a mensagem: “nenhum valor ímpar encontrado”;*/

let valores = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < valores.length; index += 1) {
  if (valores[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

/* Utilizando for, descubra qual o menor valor contido no array e imprima-o; */
let arrayNumeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = arrayNumeros[0];

for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] < menorNumero) {
        menorNumero = arrayNumeros[index];
    }
}
console.log(menorNumero);

/* Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado; */

let number = [];
for (let index = 0; index <= 25; index += 1) {
    number.push(index);
}
console.log(number);

/* Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2. */

let numb = [];
for (let index = 0; index <= 25; index += 1) {
    numb.push(index);
}
for (let index2 = 0; index2 < numb.length; index2 += 1) {
    console.log(numb[index2] / 2);
}
