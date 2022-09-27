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

/* 9ª Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
Use a sintaxe meuObjeto.chave. Valor esperado no console: */
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Seja bem vinda, ' + info.personagem + '.');

/* 10ª Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida,
imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:  */

info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrente = 'sim';
console.log(info);

/* 11ª Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: */
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
for (let index in info) {
  console.log(index);
}
/* Agora mostre todos os valores das chaves do objeto. Valor esperado no console: */
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
for (let index in info) {
  console.log(info[index]);
}
/* 12ª Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro*/
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
for(let index in info){
  if (index === 'recorrente' && info[index] === 'Sim' && info2 === 'Sim'){
    console.log('Ambos recorrente');
  } else {
    console.log(info[index] + ' e ' + info2[index]);
  }
}
/* 13ª Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, 
e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”. */
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + '"' + leitor.livrosFavoritos[0].titulo + '".');

/* 14ª Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações: */
leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
);console.log(leitor.livrosFavoritos);

/* 15ª Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros 
favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código. */
  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos!');
