import cookie from 'react-cookies';

export default class Cookie {
    static write(key, value) {
        cookie.save(key, value, {
            path: '/',
            secure: true
        });
    };

    static read(key) {
        return cookie.load(key);
    };
}
