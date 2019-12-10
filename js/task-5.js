const deliveryChina = 100;
const deliveryChile = 250;
const deliveryAustralia = 170;
const deliveryIndia = 80;
const deliveryJamaica = 120;

const china = 'китай';
const chile = 'чили';
const australia = 'австралия';
const india = 'индия';
const jamaica = 'ямайка';

let country = prompt('Enter your country');

if (country === null) {
  alert('Try again');
} else {
  country = country.toLowerCase();
  switch (country) {
    case 'китай':
      alert(`Доставка в ${china} будет стоить ${deliveryChina} кредитов`);
      break;
    case 'чили':
      alert(`Доставка в ${chile} будет стоить ${deliveryChile} кредитов`);
      break;
    case 'австралия':
      alert(
        `Доставка в ${australia} будет стоить ${deliveryAustralia} кредитов`,
      );
      break;
    case 'индия':
      alert(`Доставка в ${india} будет стоить ${deliveryIndia} кредитов`);
      break;
    case 'ямайка':
      alert(`Доставка в ${jamaica} будет стоить ${deliveryJamaica} кредитов`);
      break;
    default:
      alert(`В вашей стране доставка не доступна`);
      break;
  }
}
