/* Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
 4. Crie e execute uma função que corrija o texto da tag <h1>.
 5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console. */
document.querySelectorAll(".center-content p");
const paragrafo = document.querySelectorAll(".center-content p")[1];
paragrafo.innerText = 'Com 27 anos';

function mudandoQuadradoAmarelo() {
    const quadrado = document.getElementsByClassName('main-content')[0];
    quadrado.style.backgroundColor = 'rgb(76,164,109)';
}
mudandoQuadradoAmarelo();

function mudandoQuadradoVermelho() {
    const quadrado2 = document.getElementsByClassName('center-content')[0];
    quadrado2.style.backgroundColor = 'rgb(255,255,255)';
}
mudandoQuadradoVermelho();

function corrigindoTexto() {
    const alterandoTexto = document.getElementsByTagName('h1')[0];
    alterandoTexto.innerText = 'Atividade de javaScript';    
}
corrigindoTexto();

function alterandoParagrafo() {
    const paragraph = document.getElementsByTagName('p')[0];
    paragraph.innerHTML = paragraph.innerHTML.toUpperCase();   
}
alterandoParagrafo();

function paragrafos() {
    const paragraphs = document.getElementsByTagName('p');
    for (let index = 0; index < paragraphs.length; index += 1){
        console.log(paragraphs[index].innerHTML);
    }  
}paragrafos();




     