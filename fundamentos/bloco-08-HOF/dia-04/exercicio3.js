// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a,
// maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;
  
  function containsA() {
    let totalDeLetrasA = 0;
    names.forEach((name) => {
        const letrasDoName = name.split('');
        totalDeLetrasA += letrasDoName.reduce((letrasA, currentLetra) => {
            if (currentLetra.toLowerCase() === 'a') {
                return letrasA + 1;
            }
            return letrasA;
        }, 0);
    })
    return totalDeLetrasA;
  }
  console.log(containsA());