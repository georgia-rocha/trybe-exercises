const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function adicionandoLi(event) {
    const elemento = document.getElementsByClassName('tech')[0];
    elemento.classList.remove('tech');
    event.target.classList.add('tech'); //target indica alvo(elemento clicado);
    console.log(event.target);
    input.value = '';    
}
firstLi.addEventListener('click', adicionandoLi);
secondLi.addEventListener('click', adicionandoLi);
thirdLi.addEventListener('click', adicionandoLi);

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function alterantoTexto(event) {
    const elemento = document.getElementsByClassName('tech')[0];
    elemento.innerText = event.target.value;
}
input.addEventListener('input', alterantoTexto);

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
function adicionandoDualClick(event) {
  window.location.replace('https://google.com/');    
}
myWebpage.addEventListener('dblclick', adicionandoDualClick);


// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

myWebpage.addEventListener('mouseover', function(event) {
  event.target.style.color = 'red';
});

myWebpage.addEventListener('mouseout', function(event) {
  event.target.style.color = 'unset';
});


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.