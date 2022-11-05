/* const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true); */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
    for (let index = 1; index < array.length; index += 1) {
        for (let index2 = 0; index2 < array.length; index2 += 1) {
            if (array[index] < array[index2]) {
                let arrayOrdened = array[index];
                array[index] = array[index2];
                array[index2] = arrayOrdened;
            }

        }
    } return array;
}
console.log(sortOddsAndEvens(oddsAndEvens));

/* const fatorial = n => {
    let result = 1;
    for (let index = 2; index <= n; index += 1) {
        result *= index;
    }
    return result;
};
const print =fatorial(5);
console.log(`Esse é o fatorial ${print}`); */

/* const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5)); */