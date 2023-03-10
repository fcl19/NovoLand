/**
 * Posts.js
 *
 * A table holding post feed.
 */

module.exports = {
    attributes: {
    userId: {
        model: 'users',
        required: true,
    },
    body:{
        type: 'string',
        required: true,
    },
    }
  };