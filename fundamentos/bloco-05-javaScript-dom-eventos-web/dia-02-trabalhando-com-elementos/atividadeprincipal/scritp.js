const body = document.getElementsByTagName('body');
const h1 = document.createElement('h1');
h1.innerText = 'Exercício - JavaScript Dom';
document.body.appendChild(h1);

const main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

const section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

const paragrafo = document.createElement('p');
paragrafo.innerHTML = 'teste da atividade';
section.appendChild(paragrafo);

const section1 = document.createElement('section');
section1.className = 'left-content';
main.appendChild(section1);

const section2 = document.createElement('section');
section2.className = 'right-content';
main.appendChild(section2);

const img = document.createElement('img');
img.src ='https://picsum.photos/200';
img.className = 'small-image';
section1.appendChild(img);

const listaUl = document.createElement('ul');
section2.appendChild(listaUl);
let arrayNumeros = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
/* for (let index = 0; index < arrayNumeros.length; index += 1)  */
for(let index in arrayNumeros){
    const listaLi = document.createElement('li');
    listaLi.innerText = arrayNumeros[index];
    listaLi.className = 'lista-li';
    listaUl.appendChild(listaLi);
}
for (let index = 1; index <= 3; index += 1){
const h3 =document.createElement('h3');
h3.innerHTML = 'Criando tags' + index;
main.appendChild(h3);
}

const tituloH1 = document.querySelector('h1');
tituloH1.className = 'title';

const descrevendoH3 = document.querySelectorAll('h3');
for (let index = 0; index < 3; index += 1) {
    descrevendoH3[index].className = 'description';
}

const removendoLeft = document.getElementsByClassName('left-content')[0];
main.removeChild(removendoLeft);

const centralizandoRight = document.getElementsByClassName('right-content')[0];
centralizandoRight.style.marginRight='auto';

const trocandoCorDaSection = document.getElementsByClassName('center-content')[0];
trocandoCorDaSection.parentNode.style.backgroundColor = 'green';

const removendoLi = document.getElementsByTagName('ul')[0];
console.log(removendoLi);
removendoLi.lastChild.remove();
removendoLi.lastChild.remove();
/* let listaDeNumeros = document.getElementsByClassName('lista-li');
const numeros = ["Nove", "Dez"]
for(let i = 0; i < numeros.length; i+= 1) {
    for(let index = 0; index < listaDeNumeros.length; index += 1) {
        let elementos = listaDeNumeros[index];
        
        if (elementos.innerHTML === numeros[i]){
            listaUl.removeChild(elementos);
        }
}
} */