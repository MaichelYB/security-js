// // // import { Decrypt } from "./src/decryptText.js";
// // // import { Encrypt } from "./src/encryptText.js"

// // // let key = "724b092810ec86d7e35c9d067702b31ef90bc43a7b598626749914d6a3e033ed"
// // // // let key = "724b092810ec86d7e35c9d067702b31e"
// // // var garbledStr = await Encrypt("test value", key);
// // // console.log("grabledStr", garbledStr);

// // // try {
// // //     var decryptedStr = await Decrypt(garbledStr, key);
// // //     console.log("Recovered input string:", decryptedStr);
// // //     console.log("Check whether the following text matches the original:", decryptedStr === "test value");
// // //     console.log(decryptedStr)
// // // } catch (e) {
// // //     console.error(e);
// // // }

// import { resolve } from 'path';
// import { publicEncrypt } from 'crypto';
// import { readFile } from 'fs';

// var encryptStringWithRsaPublicKey = function(toEncrypt, relativeOrAbsolutePathToPublicKey, callback) {
//     var absolutePath = resolve(relativeOrAbsolutePathToPublicKey);
//     readFile(absolutePath, 'utf-8', (err, publicKey) => {
//         // The value of `publicKey` is in the callback, not the return value
//         console.log(publicKey);
//         var buffer = Buffer.from(toEncrypt);
//         var encrypted = publicEncrypt(publicKey, buffer);
//         if (err) {
//             callback(err);
//         } else {
//             callback(null, encrypted.toString("base64"));
//         }
//     });
// };

// encryptStringWithRsaPublicKey('hello world', 'public.pem', (err, encrypted) => {
//     // If you're using a callback in a function,
//     // the original function must have a callback as well
//     console.log(encrypted);
//     console.log(Buffer.from(encrypted, 'utf8').toString('hex'));
// }); 

// import { readFileSync } from 'fs';
// import { publicEncrypt } from 'crypto';

// // Load public key
// const publicKey = readFileSync('public_key.pem', 'utf8');

// function encrypt(text, publicKey) {
//     const buffer = Buffer.from(text, 'utf-8');
//     const encrypted = publicEncrypt(publicKey, buffer);
//     return encrypted.toString('base64');
// }

// const plaintext = "Hello, World!";
// const encryptedText = encrypt(plaintext, publicKey);
// console.log("Encrypted text:", encryptedText);

// import { writeFileSync } from 'fs';
// import { generateKeyPair as _generateKeyPair } from 'crypto';

// function generateKeyPair() {
//     return new Promise((resolve, reject) => {
//         _generateKeyPair('rsa', {
//             modulusLength: 4096, // 2048 or 4096, depending on your security requirements
//             publicKeyEncoding: {
//                 type: 'spki',
//                 format: 'pem'
//             },
//             privateKeyEncoding: {
//                 type: 'pkcs8',
//                 format: 'pem',
//             }
//         }, (err, publicKey, privateKey) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve({ publicKey, privateKey });
//             }
//         });
//     });
// }

// async function generateAndSaveKeys() {
//     try {
//         const keyPair = await generateKeyPair();
//         writeFileSync('public_key.pem', keyPair.publicKey);
//         writeFileSync('private_key.pem', keyPair.privateKey);
//         console.log('Keys generated and saved successfully.');
//     } catch (err) {
//         console.error('Error generating keys:', err);
//     }
// }

// generateAndSaveKeys();

// import { writeFileSync } from 'fs';
// import { generateKeyPair, encrypt } from 'trsa';

// const keyPair = generateKeyPair()
// console.log(keyPair);

// writeFileSync('./privateKey', keyPair.privateKey);
// writeFileSync('./publicKey', keyPair.publicKey);

// const message = 'Hallo encrypted World ! ! !';
// const encryptedMessage = encrypt(message, keyPair.publicKey);

// writeFileSync('./encryptedMessage', Buffer.from(encryptedMessage, 'hex'));

// import { generateKeyPairSync, publicEncrypt, constants, privateDecrypt } from 'crypto';

// // Generate RSA key pair
// const { publicKey, privateKey } = generateKeyPairSync('rsa', {
//     modulusLength: 2048, // key length
//     publicKeyEncoding: {
//         type: 'spki',
//         format: 'pem'
//     },
//     privateKeyEncoding: {
//         type: 'pkcs8',
//         format: 'pem',
//     }
// });

// console.log(privateKey)

// // Example data to encrypt
// const plaintext = "Hello, World!";

// // Encrypt with public key
// const encryptedData = publicEncrypt({
//     key: publicKey,
//     padding: constants.RSA_PKCS1_OAEP_PADDING, // Use OAEP padding
//     oaepHash: 'sha256',
// }, Buffer.from(plaintext, 'utf8'));

// console.log("Encrypted:", encryptedData.toString('base64'));

// // Decrypt with private key
// const decryptedData = privateDecrypt({
//     key: privateKey,
//     padding: constants.RSA_PKCS1_OAEP_PADDING, // Use OAEP padding
//     oaepHash: 'sha256',
// }, encryptedData);

// console.log("Decrypted:", decryptedData.toString('utf8'));

// import { publicEncrypt, privateDecrypt } from 'crypto';
// import { readFileSync } from 'fs';

// // Paste the generated public and private keys here
// const publicKeyPEM = `-----BEGIN PUBLIC KEY-----
// MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwzAnU5rtqZvB6sqBpNfR
// n5ZLlGgumQGJn3FYJlVap9H1LeYQQwopt8YZNe8+1j/i9akx1FkaxL+DnZV47Zq8
// 3ebF0E5hzHX8nCFLwI4BCrRYyHQ3T/eLO08geN5BJFTGFLqfIDvW8W7evuJd3N6M
// vH9ql8WDZ+XkC+xEMsH9QZqpiZbkGUD2VUp8VzLzA+VJ/2a/wgUE1/9qK9gbHONr
// bT5L+HsPbJZULlM8VpWWPpP13zBUWmCOj7ir3g4VWz2vjrlv5ZfGaxx9+6Wc8PIZ
// gKsLVj+VH1Ccg+O0LVMU6/DC5tlx23ftKvO0cXFGzT+pxOZS/cT/CM9L9GEn8K1C
// eQIDAQAB
// -----END PUBLIC KEY-----`;

// const privateKeyPEM = `-----BEGIN RSA PRIVATE KEY-----
// MIIEpAIBAAKCAQEAwzAnU5rtqZvB6sqBpNfRn5ZLlGgumQGJn3FYJlVap9H1LeYQ
// Qwopt8YZNe8+1j/i9akx1FkaxL+DnZV47Zq83ebF0E5hzHX8nCFLwI4BCrRYyHQ3
// T/eLO08geN5BJFTGFLqfIDvW8W7evuJd3N6MvH9ql8WDZ+XkC+xEMsH9QZqpiZbk
// GUD2VUp8VzLzA+VJ/2a/wgUE1/9qK9gbHONrbT5L+HsPbJZULlM8VpWWPpP13zBU
// WmCOj7ir3g4VWz2vjrlv5ZfGaxx9+6Wc8PIZgKsLVj+VH1Ccg+O0LVMU6/DC5tlx
// 23ftKvO0cXFGzT+pxOZS/cT/CM9L9GEn8K1CeQIDAQABAoIBAG4A9/AYebQJdjcm
// XJ5S1K5Ad6Jl9iJylmTJxkACW/y/fIEKh3Z+k0iXmq19HXHHjz6FLf3c0XDN9uJh
// N/SK9T9QqQ+6K7kwrAr72+Z0oF6AFH47sV6LlPXsrG77ZSsTunTlTg/+6u8ON1T8
// XVfxyZMLK6msA5s6hO16QYPMoq4mIz1qNWZ7bPV7P1yQ8jJ0e0NV+R88p+TtZZNn
// xLgJzQQYqfZOkI4D5TtnHklJWESICRxWbZQgKq7U6GIGbKJXcKFm98tdSZ1lR0R3
// 0zJ9dfbAviPc5qPyH9qgmKNy/+G7r6lkSTyReWb2AQElq+txUW2X/fbMZiDt1xPy
// 2l4u2FECgYEA/DR6Jt2lTxGX1QgRj6/bURkQmC+P3JSv5F0dBCUc3hSxHH3VUezo
// Jkc7x6Y06lW3ePfKtPwO4JYUw7/jJNzESnMbyCNQZQ4D4hYzZBslT/VJGbyzhKpj
// +eOvL+/ePC3xAKy+hW1tyWUBgUjR7Gnuz5A/d5dUU5y1w3BVshqP9iUCgYEAxd/p
// vqLLuHtThcFqf2OVrfgQfS+lTtZ80huhfxXcq4Cg2l19ekv97KEC2NzSAsWUOJZS
// K8i/XlJ5BWCrU5kG7Y1qobp5I8UimPYa+/BF/AqEnMVOWz3SK17MluHwZPHyXuJz
// oJh9VrA7dfkBRvc9s6+luab4pnbu/tA2M92NXMECgYEAiN9A03m8bGAvYY5PHyqT
// C1Sb0VmGh3J/V+3V9qC/jJ7xYgAcgIxtx5Wq/EJ3H+Df2H+L1PVKSylTkAkM8YtJ
// 8O0A6JZsxyNwKZIkc+Zn7FfnRrOZW5X2FwI2c6ik9v4C0L0RGRLv3cPlw4A7J1eU
// uO/zJZ6XX0Bu9ZUmfG+/ooECgYEAxDJgVH3v4NnfwVjyNEajj6bR9b7dqDzxXQzA
// +FEq+1NmX00kZk25i2F9cRLmujANQ5rhLkxOqlZ6wUMZGvT9Y7LF9l+lHdH2Q5Dg
// CpNeHJ3rWZ8bUY0fVxSFwCF7F0J0/Yq6dMTbZDBHBR5F5iLwXmOxD+6CgYBCyf5p
// D6Pc4ewEVzzI1OcVfyEkEYrj7Pj9T/KlPL5/hcWkFbplQsgf5ZpAFmzkLmHWlph0
// bcMT9BnK6GgyWVxQVJnWi7yP7FvdGm28A8DR6rvHJRXhmp2tg56Mg/JS8CQw+Wc2
// dDz6WvnWxNBbDQ8cWTLFZG7AYJ+KR9bLHBLpAQKBgGDL3+xYR8IYwPsW6I9QKsEr
// vAk48CZuhpwCzpZ7xVrSRRk2t3Z1rZlXpB/N0jwHwIabjJl8O2eqXG7eN9bRxrPL
// z6Bp4e3l7xPv8/nl8SHQOej+67LhsGRt/dlP+gjFAz1RgqCJcRJcZ71h9vUqg6pV
// QVvqxbTAF3OxlINdBmMa
// -----END RSA PRIVATE KEY-----`;

// // Using the keys in Node.js
// const publicKey = readFileSync('public.pem', 'utf8');
// const privateKey = readFileSync('private.pem', 'utf8');

// const encryptedData = publicEncrypt(publicKey, Buffer.from('Hello, world!'));
// console.log('Encrypted data:', encryptedData.toString('base64'));

// const decryptedData = privateDecrypt(privateKey, encryptedData);
// console.log('Decrypted data:', decryptedData.toString());

import { readFileSync } from 'fs';
import { publicEncrypt, constants } from 'crypto';

// Load public key from file
const publicKey = readFileSync('public.pem', 'utf8');

// Data to encrypt
const dataToEncrypt = "{\"email\":\"testing@gmail.com\", \"password\":\"testing@gmail.com\"}";

// Encrypt the data using the public key
const encryptedData = publicEncrypt({
    key: publicKey,
    padding: constants.RSA_PKCS1_PADDING
}, Buffer.from(dataToEncrypt, 'utf8'));

console.log('Encrypted data in Node.js:', encryptedData.toString('base64'));