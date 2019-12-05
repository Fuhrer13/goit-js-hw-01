let input;
let total = 0;

do { 
	input = +prompt();
	total += input;
}
while(input);
alert(`Общая сумма чисел равна ${total}`);
 