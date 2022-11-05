function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verificaInput(value1, value2);
    verificaNumero(value1, value2);
    const result = Number(value1) + Number(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  } catch (error) {
    return document.getElementById('result').innerHTML = `Erro: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

const verificaNumero = (value1, value2) => {
  if (typeof Number(value1) !== 'number' || typeof Number(value2) !== 'number') {
    throw new Error ('Os valores devem ser numéricos!');
  }
}

const verificaInput = (value1, value2) => {
  if (!value1 || !value2) {
    throw new Error ('Os campos devem ser preenchidos!');
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}