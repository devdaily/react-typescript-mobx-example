import * as Cookies from 'js-cookie'

export default function setDevCookies() {
    Cookies.set('uid', '1028001515', { domain: '.baidu.com' })
    Cookies.set('skey', 'XBED862FAF', { domain: '.baidu.com' })
}