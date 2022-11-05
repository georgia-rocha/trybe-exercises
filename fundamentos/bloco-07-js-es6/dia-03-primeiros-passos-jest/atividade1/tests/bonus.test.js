const searchEmployee = require('../src/bonus.js');

describe('Testa a função searchEmployee', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testa se searchEmployee ("id, firstName") retorna o primeiro nome do usuário da id consultada', () => {
    const atual = searchEmployee('1256-4', 'firstName');
    const expected = 'Linda';

    expect(atual).toBe(expected);
  });
  it('Testa  se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    const atual = searchEmployee('1256-4', 'lastName');
    const expected = 'Bezos';

    expect(atual).toBe(expected);
  });
  it('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    const atual = searchEmployee('1256-4', 'specialities');
    expect(atual).toContain('Hooks', 'Context API', 'Tailwind CSS');
  });
  it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    expect(() => { searchEmployee('1988-8', 'specialities') }).toThrow();
  });
  it('Testa a mensagem do erro para ID inexistente', () => {
    expect(() => { searchEmployee('1988-8', 'specialities') }).toThrowError(new Error('ID não identificado'));
  });
  it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    expect(() => { searchEmployee() }).toThrow();
  });
  it('Testa a mensagem do erro para informação inexistente', () => {
    expect(() => { searchEmployee('4678-2', 'shift') }).toThrowError(new Error('Informação indisponível'));
  });
});