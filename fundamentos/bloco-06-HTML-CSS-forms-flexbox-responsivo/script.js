window.onload = () => {
const titulo = document.getElementById('titulo');
titulo.style.marginLeft = '15px';

const quadro = document.getElementById('quadro');
quadro.style.border = '3px solid black';
quadro.style.margin = '10px';

const formatandoGeral = document.getElementById('alterarFormato');
formatandoGeral.style.margin = '10px';

const botoes = document.getElementById('buttons');
botoes.style.marginLeft = '15px';


function validacaoText() {
    const nome = document.getElementById('nome');
    const invalidName = nome.value.length < 10 || nome.value.length > 40;
    
    const email = document.getElementById('email');
    const invalidEmail = email.value.length < 10 || email.value.length > 50;
    
    const resposta = document.getElementById('resposta');
    const invalidResposta = resposta.value.length > 500;
    
    if (invalidName || invalidEmail || invalidResposta) {
        return false;
    } else {
        return true;
    }
}

const botaoEnviar = document.getElementById('botaoEnviar');
botaoEnviar.addEventListener('click', function(event){
    event.preventDefault();
    const validacao = validacaoText();
    if (validacao === false) {
        alert('Dados inválidos');
    } else {
        alert ('Dados enviados com sucesso!')
    }
})

let opcao2Selecionada = false;
const fotos = document.getElementById('opcao2');
const checkbox2 = document.getElementById('fotosumiu');
fotos.addEventListener('click', function (){
    if (opcao2Selecionada === false){
        opcao2Selecionada = true;
    } else {
        opcao2Selecionada = false;
    }
    mostraCheckbox()
})
function mostraCheckbox() {
    if (opcao2Selecionada === false){
        checkbox2.style.display = 'none';
    } else {
        checkbox2.style.display = 'block';
    }
}
}