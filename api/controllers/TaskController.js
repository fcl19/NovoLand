module.exports = {
  completeTask: async function(req, res) {
    try {
      const userID = req.session.userId; // Get user ID
      const taskID = req.param('code'); // Get task ID
      if (!userID || !taskID) { // Check if user ID and task ID are provided
        return res.send({
          error: 'User ID and task ID required'
        });
      }
      const user = await Users.find({id: userID}); // Find user
      if (!user || user.length === 0) { // Check if user exists
        return res.send({ // Return error if user doesn't exist
          error: 'User not found'
        });
      }
      let task = await Tasks.find({code: taskID}); // Find task
      if (!task || task.length === 0) { // Check if task exists
        return res.send({ // Return error if task doesn't exist
          error: 'Task not found'
        });
      }
      task = task[0];
      const userTask = await UserTasks.find({ // Find user task
        taskID: task.id,
        userID: userID
      });
      if (userTask && userTask.length > 0) { // Check if user task exists
        return res.send({ // Return error if user task exists
          error: 'User has already completed task'
        });
      }
      await UserTasks.create({ // Create new user task
        taskID: task.id,
        userID: userID
      });
      return res.send({ // Return success
        success: true
      });
    } catch (err) {
      return res.send({
        error: 'Error completing task'
      });
    }
  }
};
