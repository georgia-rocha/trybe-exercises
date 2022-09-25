/* Exercícios de For */
let carros = ['kicks','onix', 'argo', 'hb20', 'monza'];
for (index = 0; index < carros.length; index += 1) {
    console.log(carros[index]);
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}
/* Exercícios de For/of */
let numeros = [1,2,3,4,5];
for (let numero of numeros) {
    console.log(numero);
}

let word = 'Hello';
for (let palavra of word) {
    console.log(palavra);
}

/* Por fim, com o for/of, nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma: */

let arrNumeros = [10,20,30,40,50];
for ( let soma of arrNumeros) {
    soma += 1;
    console.log(soma);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let nomes of names) {
    console.log(nomes);
}

/* While */

function test(x) {
    let i = 0;
    while (i < 6) {
        if (i == 3){
            break;
        }
        i += 1;
        console.log(i);
    }
    return 1 * x;
}
console.log(test(20));

/* Atividades */


/* 1ª Percorra o array imprimindo todos os valores nele contidos com a função console.log(); */

/* for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
} */

/* 2ª Some todos os valores contidos no array e imprima o resultado; */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}console.log(soma);

/* 3ª Calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos. */
let media = soma / numbers.length;
console.log(media);

/* 4ª Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a
 mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”; */
 if (media > 20) {
    console.log('Valor maior que 20');
 } else {
    console.log('Valor menor ou igual a 20');
 }

 /* 5ª Utilizando for, descubra qual o maior valor contido no array e imprima-o; */
let maiorNumero = 0;
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > maiorNumero) {
       maiorNumero = numbers[index]
    }
 } console.log({maiorNumero});

/* 6ª Descubra quantos valores ímpares existem no array e imprima o resultado.
Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”; */
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpar = [];
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        numerosImpar.push(numbers[index]);
    }
} console.log(numerosImpar);

/* 7ª Utilizando for, descubra qual o menor valor contido no array e imprima-o; */
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 20;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero){
        menorNumero = numbers[index]
    }
}console.log(menorNumero);

/* 8ª Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado; */

for (let index = 1; index <= 25; index += 1){
    console.log(index);
}

/* 9ª Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2. */
for (let index = 1; index <= 25; index += 1){
    console.log(index / 2);
}

/* 10ª Ordene o array numbers em ordem crescente e imprima seus valores; */
let numberOrdem = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numberOrdem.sort(function(a,b){
    if (a > b) return 1;
    else if (a < b) return -1;
    return 0;
});
console.log(numberOrdem);

numberOrdem = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numberOrdem.sort(function(a,b){
    if (a < b) return 1;
    else if (a > b) return -1;
    return 0;
});
console.log(numberOrdem);


numberOrdem = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberMultiplicacao = [];
for (let index = 0; index < numberOrdem.length; index += 1) {
        if (index === numberOrdem.length - 1){
            numberMultiplicacao.push(numberOrdem[index] * 2)
        }
        else { numberMultiplicacao.push(numberOrdem[index] * numberOrdem[index +1])
        }
    } console.log(numberMultiplicacao);