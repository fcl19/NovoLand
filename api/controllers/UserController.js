const uuidv4 = require('uuid/v4');

module.exports = {
  login: async function(req, res) {
    try {
      const username = req.param('username');
      const password = req.param('password');
      if (!username || !password) {
        return res.send({
          error: 'Username and password required'
        });
      }
      let user = await Users.find({username: username});
      if (!user || user.length === 0) {
        return res.send({
          error: 'User not found'
        });
      }
      user = user[0];
      const validPassword = await sails.helpers.passwords.comparePasswords(password, user.password);
      if (!validPassword) {
        return res.send({
          error: 'Invalid password'
        });
      }
      req.session.sessionID = uuidv4();
      req.session.userId = user.id;
      return res.send({
        success: true
      });
    } catch (err) {
      console.log(err);
      return res.send({
        error: 'Error logging in'
      });
    }
  },
  logout:function(req, res) {
    req.session.userId = undefined;
    return res.send({
      success: true
    });
  },
  createAccount: async function(req, res) {
    try {
      const firstName = req.param('firstName');
      const lastName = req.param('lastName');
      const email = req.param('email');
      const username = req.param('username');
      const password = req.param('password');
      if (!firstName || !lastName || !email || !username || !password) {
        return res.send({
          error: 'All fields required'
        });
      }
      if (firstName === '' || lastName === '' || email === '' || username === '' || password === '') {
        return res.send({
          error: 'All fields required'
        });
      }
      const existingUser = await Users.find({
        or: [{email: email}, {username: username}]
      });
      if (existingUser && existingUser.length > 0) {
        return res.send({
          error: 'User already exists'
        });
      }
      const hash = await sails.helpers.passwords.hashPassword(password);
      await Users.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: hash,
      }).exec((err, user) => {
        if (err) {
          return res.send({
            error: 'Error creating user'
          });
        }
      });
      return res.send({
        success: true
      });
    } catch (err) {
      return res.send({
        error: 'Error creating user'
      });
    }
  },
  getAccount: async function(req, res) {
    try {
      const userId = req.session.userId;
      let accountId = req.param('accountId');
      if (!userId) {
        return res.view('pages/login', {
          error: 'Missing required params'
        });
      }
      if (!accountId) {
        accountId = userId;
      }
      let isSelfEdit = userId === accountId;
      const foundUser = await Users.find({id: accountId});
      if (!foundUser || foundUser.length === 0) {
        return res.view('pages/homepage', {
          error: 'User not found'
        });
      }
      const user = foundUser[0];
      const account = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        interests: user.interests,
        isSelfEdit: isSelfEdit
      };
      return res.view('pages/profile', {
        account: JSON.stringify(account)
      });
    } catch (err) {
      return res.send({
        error: 'Error getting account'
      });
    }
  },
  editAccount: async function(req, res) {
    try {
      const firstName = req.param('firstName');
      const lastName = req.param('lastName');
      const email = req.param('email');
      const interests = req.param('interests');
      const userId = req.session.userId;
      if (!userId) {
        return res.view('pages/login', {
          error: 'Missing required params'
        });
      }
      if (!firstName || !lastName || !email || !interests) {
        return res.send({
          error: 'All fields required'
        });
      }
      if (firstName === '' || lastName === '' || email === '' || interests === '') {
        return res.send({
          error: 'All fields required'
        });
      }
      let existingUser = await Users.find({
        id: userId
      });
      if (!existingUser || existingUser.length === 0) {
        return res.send({
          error: 'User not found'
        });
      }
      existingUser = existingUser[0];
      await Users.update({id: userId}, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        interests: interests
      }).exec((err, user) => {
        if (err) {
          return res.send({
            error: 'Error updating user'
          });
        }
      }
      );
      return res.send({
        success: true
      });
    } catch (err) {
      return res.send({
        error: 'Error updating user'
      });
    }
  },
};
