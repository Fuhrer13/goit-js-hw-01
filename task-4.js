let credit = 23580;
let pricePerDroid = 3000;
let totalPrice;
const quantity = prompt(' Количество дроидов которые вы хотите купить?');

if (quantity === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = pricePerDroid * quantity;
}

if ((credit - totalPrice) <= 0) {
    console.log('Недостаточно средств на счету!');
} else {
    credit = credit - totalPrice;
    console.log(`Вы купили ${quantity} дроида(ов), на счету осталось ${credit}`);
}
