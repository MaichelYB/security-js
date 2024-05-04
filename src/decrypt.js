import { privateDecrypt, constants } from 'crypto';

export function Decrypt(privateKey, dataToDecrypt) {
    if (privateKey == "" || dataToDecrypt == "") {
        console.log("empty public key or data to encrypt")
        return
    }

    // Encrypt the data using the public key
    const decryptedData = privateDecrypt({
        key: privateKey,
        padding: constants.RSA_PKCS1_PADDING
    }, Buffer.from(dataToDecrypt, 'utf8'));

    console.log('Encrypted data in Node.js:', dataToDecrypt.toString('base64'));
    return dataToDecrypt.toString('base64')
}