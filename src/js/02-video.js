// HTML містить < iframe > з відео для Vimeo плеєра.Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і,
// після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.

// Ознайомся з документацією бібліотеки Vimeo плеєра.
// Додай бібліотеку як залежність проекту через npm.
// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.


import Player from '@vimeo/player';
// console.log(Player);
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function ({seconds}) {
    localStorage.setItem("videoplayer-current-time", seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));
    
const getLStime = localStorage.getItem("videoplayer-current-time");
const parsedLStime = JSON.parse(getLStime);

if (parsedLStime) {
player.setCurrentTime(parsedLStime)
}
