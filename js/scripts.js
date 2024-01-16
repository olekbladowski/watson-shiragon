'use strict';

import { Cookies } from './modules/Cookies.js';
import { InfoCookies } from './modules/InfoCookies.js';

const cookie = new InfoCookies();

const btnAcceptCookies = document.querySelector('.cookies__close');

btnAcceptCookies.addEventListener('click', (e) => {
    e.preventDefault();
    cookie.setCookie();
});


//json exmample

const user1 = {
    login: 'test',
    firstName: 'Jan',
    lastName: 'Kowalski',
    salary: 5000,
    boss: true,
    role: ['admin', 'user']
}

const userJSON = JSON.stringify(user1);
console.log(userJSON);