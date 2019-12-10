const credit = 23580;
const pricePerDroid = 3000;
let totalPrice;
let quantity = prompt(' Количество дроидов которые вы хотите купить?');

if (quantity === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = pricePerDroid * quantity;

  if (credit - totalPrice <= 0) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${totalPrice /
        pricePerDroid} дроида(ов), на счету осталось ${credit - totalPrice}`,
    );
  }
}
