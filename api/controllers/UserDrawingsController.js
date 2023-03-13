/*
  This controller is used to handle the user's drawings
*/
module.exports = {
  saveUserDrawing: async function(req, res) {
    try {
      const userID = req.session.userId; // Get user ID
      const sketchObject = req.param('sketchObject'); // Get sketch object
      const sketchPadType = req.param('sketchPadType'); // Get sketch pad type
      let sketchName = req.param('sketchName'); // Get sketch name
      let drawingID = req.param('drawingID'); // Get drawing ID
      if (!userID || !sketchObject) { // Check if user ID and sketch object are provided
        return res.send({
          error: 'User ID and sketch object required'
        });
      }
      if (!sketchName) { // Check if sketch name is provided
        sketchName = 'Untitled'; // Set sketch name to 'Untitled' if not provided
      } else {
        sketchName = sketchName.trim(); // Trim sketch name
        if (sketchName.length === 0) { // Check if sketch name is empty
          sketchName = 'Untitled'; // Set sketch name to 'Untitled' if empty
        }
      }
      if (!drawingID || parseInt(drawingID) === 0) { // Check if drawing ID is provided
        let newDrawing = await UserDrawings.create({ // Create new user drawing
          userID: userID,
          sketchObject: sketchObject,
          sketchName: sketchName,
          sketchPadType: sketchPadType
        }).fetch();
        if (newDrawing) { // Check if user drawing was created
          drawingID = newDrawing.id; // Set drawing ID to new user drawing ID
        }
      } else {
        await UserDrawings.update({ // Update user drawing
          id: drawingID
        }, {
          sketchObject: sketchObject,
          sketchName: sketchName,
          sketchPadType: sketchPadType
        });
      }
      let userDrawings = await UserDrawings.find({ // Find user drawing
        userID: userID,
      });
      if (!userDrawings || userDrawings.length === 0) { // Check if user drawing exists
        userDrawings = []; // Set user drawing to empty array if it doesn't exist
      } else {
        userDrawings.sort((a, b) => { // Sort user drawings by ID
          return b.updatedAt - a.updatedAt;
        });
      }
      return res.send({ // Return success
        success: true,
        drawingID: drawingID,
        userDrawingIDs: JSON.stringify(userDrawings.map((userDrawing) => {
          return {
            id: userDrawing.id,
            name: userDrawing.sketchName,
            dateChanged: userDrawing.createdAt
          };
        }))
      });
    } catch (err) {
      return res.send({
        error: 'Error saving drawing'
      });
    }
  },
  deleteUserDrawing: async function(req, res) {
    try {
      const userID = req.session.userId; // Get user ID
      const drawingID = req.param('drawingID'); // Get drawing ID
      if (!userID || !drawingID) { // Check if user ID and drawing ID are provided
        return res.send({
          error: 'User ID and drawing ID required'
        });
      }
      const userDrawing = await UserDrawings.find({ // Find user drawing
        id: drawingID,
        userID: userID
      });
      if (!userDrawing || userDrawing.length === 0) { // Check if user drawing exists
        return res.send({ // Return error if user drawing doesn't exist
          error: 'Drawing not found'
        });
      }
      await UserDrawings.destroy({ // Destroy user drawing
        id: drawingID
      });
      let userDrawings = await UserDrawings.find({ // Find user drawing
        userID: userID,
      });
      if (!userDrawings || userDrawings.length === 0) { // Check if user drawing exists
        userDrawings = []; // Set user drawing to empty array if it doesn't exist
      } else {
        userDrawings.sort((a, b) => { // Sort user drawings by ID
          return b.updatedAt - a.updatedAt;
        });
      }
      return res.send({ // Return success
        success: true,
        userDrawingIDs: JSON.stringify(userDrawings.map((userDrawing) => {
          return {
            id: userDrawing.id,
            name: userDrawing.sketchName,
            dateChanged: userDrawing.createdAt
          };
        }))
      });
    } catch (err) {
      return res.send({
        error: 'Error deleting drawing'
      });
    }
  },
  getUserDrawingList: async function(req, res) {
    try {
      const userID = req.session.userId; // Get user ID
      if (!userID) { // Check if user ID is provided
        return res.send({
          error: 'User ID required'
        });
      }
      const userDrawings = await UserDrawings.find({ // Find user drawings
        userID: userID
      });
      userDrawings.sort((a, b) => { // Sort user drawings by ID
        return b.updatedAt - a.updatedAt;
      });
      return res.send({ // Return user drawings
        userDrawings: JSON.stringify(userDrawings.map((userDrawing) => {
          return {
            id: userDrawing.id,
            name: userDrawing.sketchName,
            dateChanged: userDrawing.createdAt
          };
        }))
      });
    } catch (err) {
      return res.send({
        error: 'Error getting drawing list'
      });
    }
  },
  viewDoodlePage: async function(req, res) {
    try {
      const userID = req.session.userId; // Get user ID
      let drawingID = req.param('drawingID'); // Get drawing ID
      if (!userID) { // Check if user ID and drawing ID are provided
        return res.send({
          error: 'User ID and drawing ID required'
        });
      }
      if (!drawingID) { // Check if drawing ID is provided
        drawingID = 0; // Set drawing ID to 0 if not provided
      } else {
        drawingID = parseInt(drawingID);
      }
      let drawing;
      const userDrawings = await UserDrawings.find({ // Find user drawings
        userID: userID
      });
      userDrawings.sort((a, b) => { // Sort user drawings by ID
        return b.updatedAt - a.updatedAt;
      });
      if (drawingID === 0) { // Check if drawing ID is 0
        if (userDrawings && userDrawings.length > 0) { // Check if user drawings exist
          drawing = userDrawings[0]; // Set drawing to first user drawing
          drawingID = drawing.id; // Set drawing ID to first user drawing ID
        } else {
          drawing = null; // Set drawing to null if user drawings don't exist
        }
      } else {
        drawing = userDrawings.find((userDrawing) => { // Find user drawing
          return userDrawing.id === drawingID;
        });
        drawingID = drawing.id; // Set drawing ID to user drawing ID
        if (!drawing) { // Check if user drawing exists
          drawing = null; // Set drawing to null if user drawing doesn't exist
        }
      }
      return res.view('pages/doodle', { // Return doodle page
        drawing: JSON.stringify(drawing),
        drawingID: drawingID,
        userDrawingIDs: JSON.stringify(userDrawings.map((userDrawing) => {
          return {
            id: userDrawing.id,
            name: userDrawing.sketchName,
            dateChanged: userDrawing.createdAt
          };
        }))
      });
    } catch (err) {
      return res.send({
        error: 'Error viewing doodle page'
      });
    }
  }
};
