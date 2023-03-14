/**
 * EventSchedule.js
 *
 * @description :: A model definition for storing event schedule data.
 */


module.exports = {
    attributes: {
      id: {
        type: 'number',
        autoIncrement: true
      },
      subject: {
        type: 'string',
        required: true
      },
      description: {
        type: 'string',
        required: true
      },
      eventDate: {
        type: 'string',
        required: true
      },
      startTime: {
        type: 'string',
        required: false,
        allowNull: true
      },
      endTime: {
        type: 'string',
        required: false,
        allowNull: true
      },
      allDayEvent: {
        type: 'boolean',
        defaultsTo: false
      },
      location: {
        type: 'string',
        required: false,
      },
      isPrivate: {
        type: 'boolean',
        defaultsTo: false
      },
      datesToExclude: {
        type: 'json',
        defaultsTo: []
      },
      reoccuring: {
        type: 'string',
        isIn: ['NO', 'D', 'W', 'M'], // NOT REOCCURING, DAILY, WEEKLY, MONTHLY
        defaultsTo: 'NO'
      }
    },
  
  
  };
  