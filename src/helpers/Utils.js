
const bcrypt = require("bcrypt");

const Helper = {
    isEmailValid: input => {
        let isPatternOK = input.match(/([^\ ]+[\@]{1}[^\ ]+[\.]{1}[a-zA-Z]{2,14})/);
        return undefined != isPatternOK && isPatternOK.length > 0;
    },
    isPasswordStrongEnough: input => {
        // to do
    },
    hashPassword: (rawPassword) => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(parseInt(process.env.salt_round), function (err, salt) {
                if (err) return reject(err)
                bcrypt.hash(rawPassword, salt, function (err, hash) {
                    // Store hash in your password DB.
                    if (err) return reject(err)
                    resolve(hash);
                });
            })
        });
    },

}

module.exports = Helper;