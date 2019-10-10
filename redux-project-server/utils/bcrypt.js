const bcrypt = require('bcrypt');

const plainPass = 'password1508';

bcrypt.genSalt(10, (err, salt) => {
    if (err) console.error(err);
    bcrypt.hash(plainPass, salt, (err, encrypted) => {
        if (err) console.error(err);
        console.log(`encrypted - ${encrypted}`);
    })
})

// const encryptedPass = '$2b$10$hD7A/gGtcp5ZcEoe/ifUVOSxgkQHwe3ysJd6ooyQjdLWh1.XIaHDG';
bcrypt.compare(plainPass, encryptedPass, (err, result) => {
    if (err) console.error(err);
    console.log(`result - ${result}`)
})