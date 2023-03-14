module.exports = {
    attributes: {
    userId: {
        model: 'users',
        required: true,
    },
    eventName:{
        type: 'string',
        required: true,
    },
    }
  };