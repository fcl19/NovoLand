/**
 * Users.js
 *
 * A table holding user information.
 */

module.exports = {
  attributes: {
    firstName: { // First name
      type: 'string',
      required: true,
    },
    lastName: { // Last name
      type: 'string',
      required: true,
    },
    email: { // Email
      type: 'string',
      required: true,
    },
    username: { // Username
      type: 'string',
      required: true,
    },
    password: { // Password
      type: 'string',
      required: true,
    },
    interests: { // Interests
      type: 'string',
      defaultsTo: '',
    },
    tasks: {
      collection: 'usertasks',
      via: 'userID',
    },
    profileImagePath: { // Profile image path
      type: 'string',
      defaultsTo: 'images/pictures/ppIcon.png',
    },
  }
};
