const CryptoJS = require('crypto-js');

// +++++++++++ This is generated from secret key in Java Code. This should be used for encryption and decryption. This does not change untill we change secret key in Java code  +++++++++++ 
let encryptedBase64Key = 'JCFOUFNlY3VyaXR5U15AIQ==';
let parsedBase64Key = CryptoJS.enc.Base64.parse(encryptedBase64Key);

// Encryption process
function Encrypt(data) {
    // this is Base64-encoded encrypted data
    let encryptedData = CryptoJS.AES.encrypt(data, parsedBase64Key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    console.log('encryptedData = ' + encryptedData);
    return encryptedData;
}
// Decryption process
function Decrypt(encryptedData) {
    let decryptedData = CryptoJS.AES.decrypt(encryptedData, parsedBase64Key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    // console.log('decryptedData = ' + decryptedData);
    return decryptedData
}

let plainText = "Hello NP Family";
const encrytptedData = Encrypt(plainText);
const decrytptedData = Decrypt(encrytptedData);
console.log("Decrypted Data :- ", decrytptedData.toString(CryptoJS.enc.Utf8));
