const jwt = require('jsonwebtoken');
const { secret } = require('../../config');

module.exports = {
    generateToken: function(data) {
        const options = {
            expiresIn: '30m'
        };
        return jwt.sign({ ...data }, secret, options);
    }
};