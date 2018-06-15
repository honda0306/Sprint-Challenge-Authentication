const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');

module.exports = {
    generateToken: function(data) {
        const options = {
            expiresIn: '2h'
        };
        return jwt.sign({ ...data }, mysecret, options);
    }
};