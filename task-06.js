let input;

let total = 0;

const numbers = [];

do {
  input = prompt("Введите любое число");

  if (Number.isNaN(+input)) {
    alert('Было введено не число, попробуйте еще раз');
  }

  if (!Number.isNaN(+input)) {
    numbers.push(+input)
  }
  
} while (input !== null);

if (numbers.length != 0) {

  for (number of numbers) {
  total += number;
  }
}

alert(`Общая сумма чисел равна  ${total}`);