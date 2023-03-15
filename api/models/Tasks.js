/**
 * Tasks.js
 *
 * A table holding leaderboard tasks.
 */

module.exports = {
  attributes: {
    code: {
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    taskDescription: {
      type: 'string',
      required: true,
    },
    taskPoints: {
      type: 'integer',
      required: true,
    },
    taskElement: {
      type: 'string',
      defaultsTo: '<i class="fa fa-star fa-3x"></i>',
    }
  }
};
