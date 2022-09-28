/* Atividades de funções */
/* 1º Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for. */
function verificaPalindrome(palavra){
    for (let index in palavra){
        if (palavra[index] != palavra[(palavra.length - 1) - index]){
            return false;
        }
    }
    return true;
}console.log(verificaPalindrome('arara'));

/* 2ª Crie uma função que receba um array de inteiros e retorne o índice do maior valor. */
function maiorIndiceInteiro(array){
    let maiorIndice = 0;
    for (let index in array){
        if (array[maiorIndice] < array[index]){
            maiorIndice = /* array[ */index/* ] */;
        }   
    }
    return maiorIndice;
}
console.log(maiorIndiceInteiro([2,3,6,7,10,1]));
