// // // import { Decrypt } from "./src/decryptText.js";
// // // import { Encrypt } from "./src/encryptText.js"

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

// // Using the keys in Node.js
// const publicKey = readFileSync('public.pem', 'utf8');
// const privateKey = readFileSync('private.pem', 'utf8');

// const encryptedData = publicEncrypt(publicKey, Buffer.from('Hello, world!'));
// console.log('Encrypted data:', encryptedData.toString('base64'));

// const decryptedData = privateDecrypt(privateKey, encryptedData);
// console.log('Decrypted data:', decryptedData.toString());

// --- correct one -- //
// import { readFileSync } from 'fs';
// import { publicEncrypt, constants } from 'crypto';

// // Load public key from file
// const publicKey = readFileSync('public.pem', 'utf8');

// // Data to encrypt
// const dataToEncrypt = "{\"email\":\"testing@gmail.com\", \"password\":\"testing@gmail.com\"}";

// // Encrypt the data using the public key
// const encryptedData = publicEncrypt({
//     key: publicKey,
//     padding: constants.RSA_PKCS1_PADDING
// }, Buffer.from(dataToEncrypt, 'utf8'));

// console.log('Encrypted data in Node.js:', encryptedData.toString('base64'));

// import { readFileSync } from 'fs';
// import { privateDecrypt, constants } from 'crypto';

// // Load private key from file
// const privateKey = readFileSync('private.pem', 'utf8');

// // Example encrypted data from Golang (replace this with the actual encrypted data)
// const encryptedData = 'Qa02vDR2AR0H9dVT+N4ig6W8GeXZ/2GBobZ8pbxD72mojexLPrFcZaQrsJfMW4+xZBFGRZSp5CvqKzH8iM0FUxYc023oO1r3L9oIcvxWrSNFN5IyxaeD12RMWbCJAFyirhcoL/6pcYhsAlVYOmN4eyFBmGvnUwlcieFpEpBzLpYkCk8z/H23e3zTIweKIDVR6KqgoXwxV2BxTzIzFonbHvzUgXXH7zNDfgg2p2oLwSyfb/Rqsg6/oR7ftAcn18KV1wvZ2k/nic83njcck6NDn6XIdMfytNr/liuQPBMQdchClT9/jtrKgxysbBDFWjKrnsdKlRa/YK0MAr/oBM3pMA==';
// const myBuffer = Buffer.from(encryptedData, 'base64');
// // Decrypt the data using the private key
// const decryptedData = privateDecrypt({
//     key: privateKey,
//     padding: constants.RSA_PKCS1_PADDING
// }, myBuffer);

// console.log('Decrypted data in Node.js:', decryptedData.toString('utf8'));