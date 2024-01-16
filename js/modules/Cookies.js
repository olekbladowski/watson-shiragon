export class Cookies{
    constructor() {
        this.checkCookiesEnabled();
    }

    checkCookiesEnabled() {
        if (!navigator.cookieEnabled) {
            alert('Cookies are disabled in your browser. Please enable them to continue.');
        }
    }

    setCookie(cookieOptions) {
        
        const options = {
            name: cookieOptions.name || 'test',
            value: cookieOptions.value || 'wartosc testowa',
            days: cookieOptions.days,
            domain: cookieOptions.domain,
            path: cookieOptions.path,
            secure: cookieOptions.secure || false
        };
        const cookieName = encodeURIComponent(options.name);
        const cookieValue = encodeURIComponent(options.value);
        
        let cookieSettingsTab = [];
        cookieSettingsTab.push(`${cookieName}=${cookieValue}`);
        
        if(typeof options.days === 'number') {
            const date = new Date();
            date.setTime(date.getTime() + (options.days * 24 * 60 * 60 * 1000));
            cookieSettingsTab.push(`expires=${date.toGMTString()}`);
        }  

        if(options.domain) {
            cookieSettingsTab.push(`domain=${options.domain}`);
        }

        if (options.path) {
            cookieSettingsTab.push(`path=${options.path}`);
        }

        if (options.secure && typeof options.secure === 'boolean') {
            cookieSettingsTab.push('secure');
        }

        console.log(cookieSettingsTab);
        let cookieResult = cookieSettingsTab.join('; ');
        document.cookie = cookieResult;
    }

    getCookie(name) {
        const cookies = document.cookie.split('; ');

        for (let cookie of cookies) {
            const cookieName = cookie.split('=')[0];
            const cookieValue = cookie.split('=')[1];
            if (decodeURIComponent(cookieName) === name) {
                return decodeURIComponent(cookieValue);
            }
        }
    }

    removeCookie(name) {
        const options = {
            name: name,
            days: -1
        };

        this.setCookie(options);
    }
}