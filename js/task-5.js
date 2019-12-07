const china = {
    name: 'китай',
    delivery: 100
};

const chile = {
    name: 'чили',
    delivery: 250
};

const australia = {
    name: 'австралия',
    delivery: 170
};

const india = {
    name: 'индия',
    delivery: 180
};

const jamaica = {
    name: 'ямайка',
    delivery: 120
};

let country = prompt('Enter your country')
let userAnswer = country;

if (userAnswer === null) {
    alert('Try again');
    
} else (userAnswer = country.toLowerCase())
switch (userAnswer) {
        case 'китай':
            alert(`Доставка в ${china.name} будет стоить ${china.delivery} кредитов`);
            break;
        case 'чили':
            alert(`Доставка в ${chile.name} будет стоить ${chile.delivery} кредитов`);
            break;
        case 'австралия':
            alert(`Доставка в ${australia.name} будет стоить ${australia.delivery} кредитов`);
            break;
        case 'индия':
            alert(`Доставка в ${india.name} будет стоить ${india.delivery} кредитов`);
            break;
        case 'ямайка':
            alert(`Доставка в ${jamaica.name} будет стоить ${jamaica.delivery} кредитов`);
            break;
        default:
            alert(`В вашей стране доставка не доступна`);
            break;
    }


