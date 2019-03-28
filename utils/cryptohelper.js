// taken from: https://codeforgeek.com/2018/10/encrypt-and-decrypt-data-in-node-js/
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = Buffer.from('uIFe/FCtqxaOWY5UkHlV6IjaEueEIXYvr1O8k3xXiUo=','base64');
// to get a new key just run: console.log(crypto.randomBytes(32).toString('base64'));

export function encrypt(text) {
    const iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return `${iv.toString('hex')}${encrypted.toString('hex')}`
}

export function decrypt(encrypted) {
    const ivtext = encrypted.substr(0, 32);
    const encryptedData = encrypted.substr(32);
    let iv = Buffer.from(ivtext, 'hex');
    let encryptedText = Buffer.from(encryptedData, 'hex');

    let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}