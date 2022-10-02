window.onload = () => {

let pai = document.getElementById('pai');
let filhoDoMeio = document.createElement('section');
filhoDoMeio.id = 'filhoDoMeio';
pai.appendChild(filhoDoMeio);
console.log(pai.appendChild(filhoDoMeio));

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);
console.log(elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta));

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let neto = document.createElement('section');
neto.id = 'neto';
primeiroFilhoDoFilho.appendChild(neto);
console.log(primeiroFilhoDoFilho.appendChild(neto));

document.getElementById('neto').parentElement.parentElement.nextElementSibling;
console.log(document.getElementById('neto').parentElement.parentElement.nextElementSibling);

let pai = document.getElementById('pai');
let todosOsFilhos = pai.childNodes;
/*     for (let index = 0; index < todosOsFilhos.length; index += 1) */
    for (let index = todosOsFilhos.length - 1; index >= 0; index -= 1){
        let filhosAtuais = todosOsFilhos[index];
        if (filhosAtuais.id !== 'elementoOndeVoceEsta') {
            filhosAtuais.remove();
        }
    }
    let segundoEUltimo = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();
    


}