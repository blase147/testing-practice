const calculator = require('./calculator');

describe('plus', () => {
    test('1+2 = 3', () => {
        const A = 1;
        const B = 2;
        const sum = 3;
        const result = calculator.add(A, B);
        expect(result).toEqual(sum);
    }) 

    test('3+2 = 5', () => {
        const A = 3;
        const B = 2;
        const sum = 5;
        const result = calculator.add(A, B);
        expect(result).toEqual(sum);
    }) 

    test('10+2 = 12', () => {
        const A = 10;
        const B = 2;
        const sum = 12;
        const result = calculator.add(A, B);
        expect(result).toEqual(sum);
    }) 
})

describe('minus', () => {
    test('3-2 = 1', () => {
        const A = 3;
        const B = 2;
        const sum = 1;
        const result = calculator.substract(A, B);
        expect(result).toEqual(sum);
    }) 

    test('30-2 = 28', () => {
        const A = 30;
        const B = 2;
        const sum = 28;
        const result = calculator.substract(A, B);
        expect(result).toEqual(sum);
    }) 

    test('10-2 = 8', () => {
        const A = 10;
        const B = 2;
        const sum = 8;
        const result = calculator.substract(A, B);
        expect(result).toEqual(sum);
    }) 
})

describe('division', () => {
    test('30/2 = 15', () => {
        const A = 30;
        const B = 2;
        const sum = 15;
        const result = calculator.divide(A, B);
        expect(result).toEqual(sum);
    }) 

    test('20/2 = 10', () => {
        const A = 20;
        const B = 2;
        const sum = 10;
        const result = calculator.divide(A, B);
        expect(result).toEqual(sum);
    }) 

    test('10-10 = 1', () => {
        const A = 10;
        const B = 10;
        const sum = 1;
        const result = calculator.divide(A, B);
        expect(result).toEqual(sum);
    }) 
})

describe('times', () => {
    test('3*2 = 6', () => {
        const A = 3;
        const B = 2;
        const sum = 6;
        const result = calculator.multiply(A, B);
        expect(result).toEqual(sum);
    }) 

    test('30*2 = 60', () => {
        const A = 30;
        const B = 2;
        const sum = 60;
        const result = calculator.multiply(A, B);
        expect(result).toEqual(sum);
    }) 

    test('10*2 = 20', () => {
        const A = 10;
        const B = 2;
        const sum = 20;
        const result = calculator.multiply(A, B);
        expect(result).toEqual(sum);
    }) 
})