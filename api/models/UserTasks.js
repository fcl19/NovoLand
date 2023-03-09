/**
 * UserTasks.js
 *
 * A table holding tasks that user has completed.
 */

module.exports = {
  attributes: {
    taskID: {
      type: 'integer',
      required: true,
    },
    userID: {
      model: 'users'
    },
  }
};
