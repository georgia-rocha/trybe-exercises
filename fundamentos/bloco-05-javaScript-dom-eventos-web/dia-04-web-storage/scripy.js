window.onload = function () {
    tela.style.background = localStorage.getItem("background");
}
const corDeTela = document.getElementById('corDeTela');
let tela = document.querySelector('body');

corDeTela.addEventListener('click', function (event) {
    
    if(corDeTela.value === 'white') {
       tela.style.background = 'white';
       localStorage.setItem("background", "white");
    } else if (corDeTela.value === 'black'){
       tela.style.background = 'black';
       localStorage.setItem("background", "black");
    } else if (corDeTela.value === 'blue') {
        tela.style.background = 'blue';
        localStorage.setItem("background", "blue");
    } else if (corDeTela.value === 'pink') {
        tela.style.background = 'pink';
        localStorage.setItem("background", "pink");
    } else {
        tela.style.background = 'red';
        localStorage.setItem("background", "red");
    }
})
