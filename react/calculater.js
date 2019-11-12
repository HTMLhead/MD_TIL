function sum(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function calculate(fn, prev) {
  function excuter(number) {
    fn(number, prev);
  }
  return excuter;
}

const sum100 = calculate(sum, 100);
console.log(sum100(20));
