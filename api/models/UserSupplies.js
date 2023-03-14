module.exports = {
    attributes: {
      suppliesID: {
        model: 'supplies'
      },
      userID: {
        model: 'users'
      },
      checked:{
          type: 'boolean',
          defaultsTo: false,  
      }
    }
  };
  