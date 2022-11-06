/* O primeiro será um array de respostas corretas (soluções);
O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos.
Para isso, essa função usará os seguintes critérios:
Uma resposta correta adiciona 1 ponto à pontuação final;
A ausência de uma resposta não altera a pontuação (quando for “N.A”);
Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante.
Utilize os seguintes arrays: */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparandoRespostas = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
    if (RIGHT_ANSWERS === STUDENT_ANSWERS) {
        return 1;
    } else if (STUDENT_ANSWERS === 'N.A') {
        return 0
    }
    return -0.5;
};
const verificandoPontuacao = (RIGHT_ANSWERS, STUDENT_ANSWERS, action) => {
    let nota = 0;
    for (let i = 0; i < RIGHT_ANSWERS.length; i += 1) {
        const validacao = action(RIGHT_ANSWERS[i], STUDENT_ANSWERS[i]);
        nota += validacao;

    }
    return `Resultado final: ${nota} pontos`;
}
console.log(verificandoPontuacao(RIGHT_ANSWERS, STUDENT_ANSWERS, comparandoRespostas));
