const bcrypt = require('bcrypt');

let comparePwd = (plainText, hashPwd) => {
    return new Promise(resolve => {
        bcrypt.compare(plainText, hashPwd, (err, isMatch) => {
            if (err) return resolve({ error: true, message: err.message });
            if (!isMatch)  return resolve({ error: true })
            return resolve({ error: false })
        })
    })
}

exports.comparePwd = comparePwd;
/**
 * module.exports = {
 *  comparePwd : comparePwd;
 * }
 */