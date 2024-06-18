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

  test('can divide 2 small numbers', () => {
    expected = 5;
    actual = divide(10, 2);
    expect(actual).toBe(expected);
  })

  test('can divide 2 large numbers', () => {
    expected = 5;
    actual = divide(10000000, 2000000);
    expect(actual).toBe(expected);
  })

  test('can divide 2 negative numbers', () => {
    expected = 50;
    actual = divide(-400, -8);
    expect(actual).toBe(expected);
  })

  test('can divide 0', () => {
    expected = 0;
    actual = divide(0, 5);
    expect(actual).toBe(expected);
  })

  test('can divide by 0', () => {
    expected = Infinity;
    actual = divide(5, 0);
    expect(actual).toBe(expected);
  })

});

describe('modulus', () => {

  test('can find the modulus of two small numbers', () => {
    expected = 0; 
    actual = modulus(6, 6); 
    expect(actual).toBe(expected); 
  })

  test('can find the modulus of two large numbers', () => {
    expected = 14; 
    actual = modulus(1078, 56); 
    expect(actual).toBe(expected); 
  })

  test('can find the modulus of a negative number', () => {
    expected = -2; 
    actual = modulus(-10, 8); 
    expect(actual).toBe(expected); 
  })

  test('can find the modulus of two negative numbers', () => {
    expected = -2; 
    actual = modulus(-10, -8); 
    expect(actual).toBe(expected); 
  })

  test('can find the negative modulus of a numbers', () => {
    expected = 2; 
    actual = modulus(10, -8); 
    expect(actual).toBe(expected); 
  })

  test('can find the 0 modul of a number', () => {
    expected = NaN; 
    actual = modulus(10, 0); 
    expect(actual).toBe(expected); 
  })



});

describe('even', () => {

  test("is number even", () => {
    expected = true;
    actual = even(660);
    expect(actual).toBe(expected)
  })

});

describe('odd', () => {

});
