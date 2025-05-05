function printSomething<T>(something: T[]): T {
  return something[0];
}

const something = [1, 2, 3, 4, 5];
const something2 = ['a', 'b', 'c', 'd', 'e'];
const something3 = [true, false, true, false, true];

printSomething(something);
printSomething(something2);
printSomething(something3);
