const jwt = require('jsonwebtoken');

const KEY = 'HELLO MERNSTACK_1508';

const signPromise = objData => {
    return new Promise(resolve => {
        try {
            jwt.sign(objData, KEY, (err, token) => {
                if (err) resolve({ error: true, message: err.message });
                resolve({ error: false, token });
            })
        } catch (error) {
            return resolve({ error: true, message: error.message });
        }
    })
}

const verifyPromise = token => {
    return new Promise(resolve => {
        try {
            jwt.verify(token, KEY, (err, data) => {
                if (err) resolve({ error: true, message: err.message });
                return resolve({ error: false, data });
            })
        } catch (error) {
            return resolve({ error: true, message: error.message });
        }
    })
}

// let userObj = {
//     username: 'abc'
// };
// signPromise(userObj)
//     .then(encryptedString => console.log({ encryptedString }))
//     .catch(err => console.log({ message: err.message }))

//IIFE
// (async function run(obj) {
//     let encryptedString = await signPromise(obj);
//     console.log({  encryptedString})
// })(userObj)


module.exports = {
    signPromise, verifyPromise
}