const capital = require('./capitalize');

test('aidan Aidan', () => {
    const string = 'aidan';
    const capitals = 'Aidan';
    const result = capital(string);
    expect(result).toEqual(capitals);
})