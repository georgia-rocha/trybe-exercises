//Utilize o reduce para transformar uma matriz em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(arrays) {
    return arrays.reduce((acc, curr) => {
        return acc.concat(curr);
    }, []);
  }
  console.log(flatten(arrays));