// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:
// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. 
// Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const LS_KEY = "feedback-form-state";
const { email, message } = form.elements;
let data = JSON.parse(localStorage.getItem(LS_KEY)) || {};


form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);
getFormInformation()

function handlerInput(evt) {
    data[evt.target.name] = evt.target.value;
    localStorage.setItem(LS_KEY, JSON.stringify({ data }));
    
console.log(data);
}

function handlerSubmit(evt) {
    evt.preventDefault();
    // console.log(`Send form`);
    console.log({ email: email.value, message: message.value});
    evt.target.reset();
    localStorage.removeItem(LS_KEY);
}

function getFormInformation() {
    if (data) {
        email.value = data.email || '';
        message.value = data.message || '';
    }
}


