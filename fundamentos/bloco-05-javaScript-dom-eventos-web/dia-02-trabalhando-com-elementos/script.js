/* Acesse o elemento elementoOndeVoceEsta.
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai.
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de pai. */
const elementoOndeVoceEsta = document.querySelector('elementoOndeVoceEsta');

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild
primeiroFilhoDoFilho.innerHTML = 'primeiro filho do filho';

const primeiroFilho = pai.firstElementChild;

const primeiroFilho1 = elementoOndeVoceEsta.previousElementSibling;

const atencao = elementoOndeVoceEsta.nextSibling;

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

const terceiroFilho1 = pai.lastElementChild.previousElementSibling;