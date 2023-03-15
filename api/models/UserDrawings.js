/**
 * UserDrawings.js
 *
 * A table holding user drawings.
 */

module.exports = {
  attributes: {
    userID: {
      model: 'users'
    },
    sketchObject: {
      type: 'json',
      required: true,
    },
    sketchName: {
      type: 'string',
      defaultsTo: 'Untitled',
    },
    sketchPadType: {
      type: 'string',
      defaultsTo: 'p1',
    }
  }
};
