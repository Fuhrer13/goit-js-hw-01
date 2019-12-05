const ADMIN_PASSWORD = "password";
const password = prompt('Ведите пароль!');
let message;


if (password === null) {
   message = 'Отменено пользователем!';
} else if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);