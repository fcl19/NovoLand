module.exports = {
  saveProfilePic: async function(req, res) {
    try {
      const userId = req.session.userId;
      const profilePicNum = req.param('profilePic');
      if (!userId) { // User not logged in
        return res.view('pages/login', {
          error: 'Missing required params'
        });
      }
      if (!profilePicNum) { //Check for missing params
        return res.send({
          error: 'All fields required'
        });
      }
      if (profilePicNum === '') { //Check for empty params
        return res.send({
          error: 'All fields required'
        });
      }
      let existingUser = await Users.find({ //Check if user exists
        id: userId
      });
      if (!existingUser || existingUser.length === 0) { //Return error if user doesn't exist
        return res.send({
          error: 'User not found'
        });
      }
      existingUser = existingUser[0];
      await Users.update({id: userId}, { //Update user
        profileImagePath: profilePicNum
      });
      return res.send({
        success: true
      }); //can't get this to go back to the profile picture after trying to save pic
    } catch (error) {
      return res.send({ // Return error if user doesn't exist
        error: 'Error changing profile picture'
      });
    }
  },
  viewProfilePic: async function(req, res) {
    try {
      const userId = req.session.userId;
      if (!userId) { // User not logged in
        return res.view('pages/login', {
          error: 'Missing required params'
        });
      }
      const userProfile = await Users.find({id: userId});
      if (!userProfile || userProfile.length === 0) { // User not found
        return res.view('pages/login', {
          error: 'User not found'
        });
      }
      return res.view('pages/edit_profile_pic', {
        profileimage: userProfile[0].profileImagePath
      });
    } catch (error) {
      return res.send({ // Return error if user doesn't exist
        error: 'Error changing profile picture'
      });
    }
  }
};

