const techList = (arrayTech, name) => {
  if (arrayTech.length === 0) {
    return 'Vazio!';

  }
  const sortArrayTech = arrayTech.sort();
  const arrayTechList = [];

  for (let index = 0; index < sortArrayTech.length; index += 1) {
    arrayTechList.push({
      tech: sortArrayTech[index],
      name: name,
    });
  }
  return arrayTechList;
  
};


module.exports = techList;