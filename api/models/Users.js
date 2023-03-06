/**
 * Users.js
 *
 * A table holding user information.
 */

module.exports = {
  attributes: {
    firstName: {
      type: 'string',
      required: true,
    },
    lastName: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    username: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    interests: {
      type: 'string',
      defaultsTo: '',
    },
  }
};
