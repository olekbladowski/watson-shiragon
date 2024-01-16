import {Cookies} from './Cookies.js';

export class InfoCookies extends Cookies{
    constructor() {
        super();
        this.infoPlace = document.querySelector('.cookies');

        if (!this.getCookie('cookiesAccepted')) {
            this.showInfo();
        }
    }

    showInfo() {
        this.infoPlace.classList.remove('hidden');
    }

    hideInfo() {
        this.infoPlace.classList.add('hidden');
    }

    setCookie() {
        super.setCookie({
            name: 'cookiesAccepted',
            value: 'yes',
            days: 365
        });
        this.hideInfo();
    }
}