const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

/* const modificaLesson2 = () => {
    lesson2.turno = 'noite';
}
modificaLesson2()
console.log(lesson2);

const keysDoObjeto = () => {
    return Object.keys(lesson2);
}
console.log(keysDoObjeto()); */

/* const tamanhoDoObjeto = () => Object.keys(lesson3).length
console.log(tamanhoDoObjeto()); */

/* const valueDoObjeto = () => Object.values(lesson2)

console.log(valueDoObjeto()); */

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3 });
console.log(allLessons);

/* const numerosDeEstudantes = (obj) => {
    let total = 0;
    const arrayKeys = Object.keys(obj);
    for (index in arrayKeys) {
        total += obj[arrayKeys[index]].numeroEstudantes;
    }
    return total;
};
console.log(numerosDeEstudantes(allLessons)); */

/* const estudantesMatematica = (obj) => {
    let totalDeAlunos = 0;
    const arrayKeys = Object.keys(obj);
    for (index in arrayKeys) {
        if (obj[arrayKeys[index]].materia === 'Matemática') {
        totalDeAlunos += obj[arrayKeys[index]].numeroEstudantes;
    }
}
    return totalDeAlunos;
};
console.log(estudantesMatematica(allLessons)); */

const relatorio = (allLessons, professor ) => {
    let relatorioProfessor = {};
    let aulas = [];
    let estudantes = 0;
    const arrayKeys = Object.keys(allLessons);
    for (index in arrayKeys) {
        if (allLessons[arrayKeys[index]].professor === professor) {
            aulas.push(allLessons[arrayKeys[index]].materia)
            estudantes += allLessons[arrayKeys[index]].numeroEstudantes
        }
        relatorioProfessor.professor = professor;
        relatorioProfessor.aulas = aulas;
        relatorioProfessor.estudantes = estudantes;
    } 
   /*  let relatorioProfessor = {
        professor,
        aulas,
        estudantes,
    }; */
    return relatorioProfessor;
}
console.log(relatorio(allLessons, 'Maria Clara'));