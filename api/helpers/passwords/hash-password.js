// api/helpers/passwords/hashPassword.js
/**
 * hashPassword.js
 *
 * A helper to hash a password.
 * @param {string} password
 * @returns {string} The hashed password.
 * @example const hashedPassword = await sails.helpers.passwords.hashPassword('password');
 * @see https://sailsjs.com/documentation/concepts/helpers
  */

module.exports = {
  friendlyName: 'Hash password',
  description: 'Hash a password.',
  inputs: {
    password: {
      type: 'string',
      example: 'password',
      description: 'The password to hash.',
      required: true
    }
  },
  fn: async function(inputs, exits) {
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(inputs.password, salt);
    return exits.success(hash);
  }
};
