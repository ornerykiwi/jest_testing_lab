const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 900000000;
    actual = sum(400000000, 500000000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -27;
    actual = sum(-20, -7);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 10;
    actual = sum(10, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small numbers', () => {
    expected = 5;
    actual = subtract(15, 10);
    expect(actual).toBe(expected);
  })

  test('can subtract two large numbers', () => {
    expected = 100;
    actual = subtract(1000000000, 999999900);
    expect(actual).toBe(expected);
  })

  test('can subtract two negative numbers', () => {
    expected = -29;
    actual = subtract(-37, -8);
    expect(actual).toBe(expected);
  })

  test('can subtract zero', () => {
    expected = 5;
    actual = subtract(5, 0);
    expect(actual).toBe(expected);
  })

});

describe('multiply', () => {

  test('can multiply 2 small numbers', () => {
    expected = 45;
    actual = multiply(9, 5);
    expect(actual).toBe(expected);
  })

  test('can multiply 2 large numbers', () => {
    expected = 900000000;
    actual = multiply(30000, 30000);
    expect(actual).toBe(expected);
  })

  test('can multiply 2 negative numbers', () => {
    expected = 450;
    actual = multiply(-90, -5);
    expect(actual).toBe(expected);
  })

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(12345, 0);
    expect(actual).toBe(expected);
  })

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
