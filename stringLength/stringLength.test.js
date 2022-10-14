const stringLength = require('./stringLength');

test('Hababaa', () => {
    expect(stringLength("Microverse")).toBe(10);
});

test('empty', () => {
    expect(stringLength('Aidan')).toBe(5);
});