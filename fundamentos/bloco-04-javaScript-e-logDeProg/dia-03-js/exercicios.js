/* 1ª Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10. */
let fatorial = 1;
for (let index = 10; index > 1; index -= 1){
    fatorial *= index;
}console.log(fatorial);

/* 2ª Inverter a palavras */
let palavra = 'georgia';
let palavraInvertida = '';
for (let index = 0; index < palavra.length; index += 1) {
    palavraInvertida += palavra[palavra.length - 1 - index]
}console.log(palavraInvertida);

/* 3ª Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse
 array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */

 let array = ['java', 'javascript', 'python', 'html', 'css'];
 let maiorPalavra = '';
 let menorPalavra = 'aaaaaaaaaaaa';

 for (let index = 0; index < array.length; index += 1){
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index]
    }
 }

 for (let index = 0; index < array.length; index += 1){
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index]
    }
 }
 console.log(menorPalavra);
 console.log(maiorPalavra);

 /* 4ª Um número primo é um número inteiro maior do que 1 que possui somente dois divisores,
ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne 
o maior número primo entre 2 e 50. */
 
let maiorNumeroPrimo = 0;
for (let index = 2; index <= 50; index += 1) {
    let primo = true;
    for (let index2 = 2; index2 < index; index2 += 1) {
        if(index % index2 === 0) {
            primo = false;
        }
    }
    if (primo){
        maiorNumeroPrimo = index;
    }
}
console.log(maiorNumeroPrimo);

