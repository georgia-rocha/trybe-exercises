function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const calendarioDez = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function criandoDiasDoMes() {
    let diasDoMes = document.querySelector('#days');
    for (let index = 0; index < calendarioDez.length; index += 1){
        let dia = calendarioDez[index];
        let diaItem = document.createElement('li');

        if (dia === 24 || dia === 31) {
            diaItem.className = 'holiday';
            diaItem.innerHTML = dia;
            diasDoMes.appendChild(diaItem);
        } else if (dia === 4 || dia === 11 || dia === 18){
            diaItem.className = 'day holiday';
            diaItem.innerHTML = dia;
            diasDoMes.appendChild(diaItem);
        }else if (dia === 25){
            diaItem.className = 'day friday';
            diaItem.innerHTML = dia;
            diasDoMes.appendChild(diaItem);
        } else {
            diaItem.className = 'day';
            diaItem.innerHTML = dia;
            diasDoMes.appendChild(diaItem);

        }
    }
}
criandoDiasDoMes();

function criandoBotao(Feriado) {
    let botaoContainer = document.querySelector('.buttons-container');
    let novoBotao = document.createElement('button');
    let novoBotaoId = 'btn-holiday';
    novoBotao.innerHTML = 'Feriado';
    novoBotaoId.id = 'btn-holiday';   
    
    botaoContainer.appendChild(novoBotao);
}
criandoBotao('Feriado');

/* function mudandoCorBotao(event) {
    let trocandoCor = document.getElementsByClassName('holiday');
    novoBotao.addE
    
} */