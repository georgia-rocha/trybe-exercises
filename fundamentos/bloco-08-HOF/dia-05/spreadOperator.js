/* Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens;
faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas,
usando o spread. */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'malão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['manga', 'granola', 'mel'];

const fruitSalad = (fruit, additional) => {
  const saladaDeFrutas = [...specialFruit, ...additionalItens];
  return saladaDeFrutas;
};

console.log(fruitSalad(specialFruit, additionalItens));
