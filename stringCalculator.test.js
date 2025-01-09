const StringCalculator = require('./stringCalculator');

describe('String Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('returns 0 for an empty string', () => {
        expect(calculator.add('')).toBe(0);
    });

    test('returns the number itself for a single number', () => {
        expect(calculator.add('1')).toBe(1);
    });

    test('returns the sum of two numbers', () => {
        expect(calculator.add('1,2')).toBe(3);
    });

    test('handles newlines as delimiters', () => {
        expect(calculator.add('1\n2,3')).toBe(6);
    });

    test('handles custom delimiters', () => {
        expect(calculator.add('//;\n1;2')).toBe(3);
    });

    test('throws an exception for negative numbers', () => {
        expect(() => calculator.add('-1,2,-3')).toThrow('negative numbers not allowed -1, -3');
    });
});
