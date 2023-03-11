module.exports = {
    saveProfilePic: async function(req, res) {
        try {
            const userId = req.session.userId;
            const profilePicNum = req.param('profilePic');;

            return res.view('pages/profile'); //can't get this to go back to the profile picture after trying to save pic
            
        } catch (error) {
            return res.send({ // Return error if user doesn't exist
                error: 'Error changing profile picture'
            });
        }
    }

}
    