const hydrate = (string) => {
    const splitString = string.split('');
    let coposAgua = 0;

    for(let index = 0; index < splitString.length; index += 1) {
        const parserdCharacter = parseInt(splitString[index]);

        if(parserdCharacter) {
            coposAgua += parserdCharacter;
        }
    }
    let copos = 'copo';

    if (coposAgua > 1) {
        copos = 'copos';
    }
    return `${coposAgua} ${copos} de água`
}

module.exports = hydrate;