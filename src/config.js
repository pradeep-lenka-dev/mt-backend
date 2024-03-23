const crypto = require('crypto');

const secret_key = crypto.randomBytes(32).toString('hex');
process.env.JWT_SECRET = secret_key
console.info("process.env.JWT_SECRET----------->",process.env.JWT_SECRET)

module.exports = secret_key