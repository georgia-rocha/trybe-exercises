const {encode, decode} = require('../src/encode.js');

describe('testa a função encode e decode', () => {
    it ('a função encode é definida', () => {
        expect(encode).toBeDefined();
    });
    it('encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });
    it('converte apenas a vogal a no número 1', () => {
        expect(encode('ana')).toBe('1n1');
    });
    it('converte apenas e vogal a no número 2', () => {
        expect(encode('ele')).toBe('2l2');
    });
    it('converte apenas i vogal a no número 3', () => {
        expect(encode('xixi')).toBe('x3x3');
    });
    it('converte apenas o vogal a no número 4', () => {
        expect(encode('oco')).toBe('4c4');
    });
    it('converte apenas u vogal a no número 5', () => {
        expect(encode('uv')).toBe('5v');
    });
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
        expect(encode('trybe').length).toBe(5);
    });

    it ('a função decode é definida', () => {
        expect(decode).toBeDefined();
    });
    it('decode é uma função', () => {
        expect(typeof decode).toEqual('function');
    });
    it('converte apenas o número 1 na vogal a', () => {
        expect(decode('1n1')).toBe('ana');
    });
    it('converte apenas o número 2 na vogal e', () => {
        expect(decode('2l2')).toBe('ele');
    });
    it('converte apenas o número 3 na vogal i', () => {
        expect(decode('x3x3')).toBe('xixi');
    });
    it('converte apenas o número 4 na vogal o', () => {
        expect(decode('4c4')).toBe('oco');
    });
    it('converte apenas o número 5 na vogal a', () => {
        expect(decode('5v')).toBe('uv');
    });
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
        expect(decode('trybe').length).toBe(5);
    });
});