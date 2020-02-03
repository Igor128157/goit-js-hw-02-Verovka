let input;

let total = 0;

const numbers = [];

do {
  input = prompt("Введите любое число");

  if (input !== null) {
    numbers.push(+input);
  }
} while (input !== null);

if (numbers.length !== 0) {
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
}

alert(`Общая сумма чисел равна  ${total}`);