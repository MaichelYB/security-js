import { publicEncrypt, constants } from 'crypto';

export function Encrypt(publicKey, dataToEncrypt) {
    if (publicKey == "" || dataToEncrypt == "") {
        console.log("empty public key or data to encrypt")
        return
    }

    // Encrypt the data using the public key
    const encryptedData = publicEncrypt({
        key: publicKey,
        padding: constants.RSA_PKCS1_PADDING
    }, Buffer.from(dataToEncrypt, 'utf8'));

    console.log('Encrypted data in Node.js:', encryptedData.toString('base64'));
    return encryptedData.toString('base64');
}