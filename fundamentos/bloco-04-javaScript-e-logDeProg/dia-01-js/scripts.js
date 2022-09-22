const myName='Georgia';
const birthCity='Maceió';
let birthYear= 1997;

console.log('Meu nome é ' + myName + ', nasci em ' + birthCity + ', nasci em ' + birthYear);
console.log(myName + ' ' + birthCity + ' ' + birthYear);

birthYear= 2023;
console.log(birthYear);

const base= 5;
const heigth= 8;
const area= base * heigth;

console.log(area);

const perimeter= base * 2 + heigth * 2;
console.log(perimeter);

const notaCandidata= 50;

if (notaCandidata >= 80) {
    console.log('Parabéns, você foi aprovada!');
}
else if (notaCandidata < 80 && notaCandidata >= 60){
    console.log('Você está na nossa lista de espera');
}
else {
    console.log('Você foi reprovada(o)');
}
/* Operadores Lógicos */

const currentHour= 20;
let message='';

if (currentHour >= 22){
    console.log('Não deveríamos comer nada, é hora de dormir');
}
else if (currentHour >= 18 && currentHour < 22){
    console.log('Rango da noite, vamos jantar :D');
}
else if (currentHour >= 14 && currentHour < 18){
    console.log('Vamos fazer um bolo pro café da tarde?” ');
}
else if (currentHour <= 14 && currentHour > 11){
    console.log('Hora do almoço!!!” na variável');
}
else if (currentHour <= 11 && currentHour > 4){
    console.log('Hmmm, cheiro de café recém-passado” na variável');
}
console.log(message);

let weekday= 'sábado';

if (weekday === 'quarta-feira' || weekday === 'segunda-feira' || weekday === 'terça-feira' || weekday === 'quinta-feira' || weekday === 'sexta-feira'){
    console.log('Oba, mais um dia de aprendizado na Trybe >:D')
}
else {
    console.log('FINALMENTE, descanso merecido UwU')
}

let statusDeVaga= 'rosa';

switch (statusDeVaga) {
    case 'aprovada':
        console.log('Parabéns, você foi aprovada(o)!');
        break;

    case 'lista':
        console.log('Você está na nossa lista de espera');
        break;

    case 'reprovada':
        console.log('Você foi reprovada(0)');
        break

    default:
        console.log('Informação incorreta');
}

/* Exercícios */
const a = 8;
const b = 5;

console.log('Soma: ' + a + b);
console.log('Subtração '+ a - b);
console.log('Multiplicação ' + a * b);
console.log('Divisão ' +  a / b);
console.log('Módulo ' + a % b);

if (a < b){
    console.log("'b' é maior que 'a'");
}
else {
    console.log("'a' é maior que 'b'");
}

const c = 12;

if (a > b && a > c){
    console.log(a);
}
else if (b > a && b > c){
    console.log(b);
}
else {
    console.log(c);
}

const numero = 56;

if (numero > 0){
    console.log('positive');
}
else if (numero < 0){
    console.log('negative');
}
else {
    console.log('zero');
}

const ladoA = 50;
const ladoB = 45;
const ladoC = 85;

if (ladoA + ladoB + ladoC === 180) {
    console.log(true);
}
else if (ladoA + ladoB + ladoC <= 0) {
    console.log('Erro');
}
else {
    console.log(false);
}

const chessPiece = 'bispo';

switch (chessPiece.toLocaleLowerCase()) {
    case 'rei':
        console.log('Rei: Uma casa para qualquer direção.');
        break;
    case 'bispo':
        console.log('Bispo: Diagonal.');
        break;
    case 'rainha':
        console.log('Rainha: Diagonal, horazontal e vertical.');
        break;
    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;
    case 'torre':
        console.log('Torre -> Horizontal e vertical.');
        break;
    case 'peão':
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    default:
        console.log('Erro, peça inválida!');
        break;
    }

    let notas = 50;

    if (notas < 0 || notas > 100) {
        console.log("Erro, nota incorreta");
    }
    else if (notas >= 90) {
        console.log('Sua nota é ' + 'A.');
    }
    else if (notas >= 80) {
        console.log('Sua nota é ' + 'B');
    }
    else if (notas >= 70) {
        console.log('Sua nota é ' + 'C');
    }
    else if (notas >= 60) {
        console.log('Sua nota é ' + 'D');
    }
    else if (notas >= 50) {
        console.log('Sua nota é ' + 'E');
    }
    else {
        console.log('Sua nota é ' + 'F')
    }

const primeira = 11;
const segunda = 23;
const terceira = 34;

let resposta = false;

if ((primeira % 2 === 0 || segunda % 2 === 0 || terceira % 2 === 0)) {
  resposta = true;
};
console.log(resposta);

const custoProduto = 9;
const valorDeCompra = 15;

if (custoProduto >= 0 && valorDeCompra >= 0) {
  const custoTotalProduto = custoProduto * 0.2;
  const lucro = (valorDeCompra - custoTotalProduto) * 1000;
  console.log(lucro);
} else {
  console.log("Erro, os valores não podem ser negativos");
}

let inss;
let ir;
let salario = 1500.10;

if (salario <= 1556.94) {
    inss = salario * 0.08;
}
else if (salario <= 2594.92) {
    inss = salario * 0.09;
}
else if (salario <= 5189.82) {
    inss = salario * 0.11;
}
else {
    inss = 570.88;
}
let salarioBase = salario - inss;

if (salarioBase <= 1903.98) {
    ir = 0;
}
else if (salarioBase <= 2826.65) {
    ir = (salarioBase * 0.075) - 142.80;
}
else if (salarioBase <= 3751.05) {
    ir = (salarioBase * 0.15) - 354.80;
}
else if (salarioBase <= 4664.68) {
    ir = (salarioBase * 0.225) - 636.13;
}
else {
    ir = (salarioBase * 0.275) - 869.36;
}
console.log('Salário liquído: ' + (salarioBase - ir));