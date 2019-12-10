let input;
let total = 0;

do {
  input = prompt();
  const newNumber = Number(input);
  total = total + newNumber;
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
