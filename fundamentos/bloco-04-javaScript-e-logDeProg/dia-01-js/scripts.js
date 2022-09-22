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

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a < b){
    console.log(b)
}
else {
    console.log(a)
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