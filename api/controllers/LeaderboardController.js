module.exports = {
  viewLeaderboard: async function(req, res) {
    try {
      let leaderboardIDMin = req.param('leaderboardIDMin'); // Get leaderboard ID min
      let leaderboardIDMax = req.param('leaderboardIDMax'); // Get leaderboard ID max
      if (!leaderboardIDMin) {
        leaderboardIDMin = 0; // Set leaderboard ID min to 0 if not provided
      }
      const users = await Users.find().populate('tasks'); // Find users populated with tasks
      if (!leaderboardIDMax) {
        leaderboardIDMax = users[users.length - 1].id; // Set leaderboard ID max to last user if not provided
      }
      let requestingUser = await Users.find({id: req.session.userId}).populate('tasks'); // Find requesting user
      requestingUser = requestingUser[0];
      const tasks = await Tasks.find(); // Find tasks
      const leaderboard = []; // Create leaderboard array
      for (let i = 0; i < users.length; i++) { // Loop through users
        const user = users[i];
        if (user.id >= leaderboardIDMin && user.id <= leaderboardIDMax) { // Check if user is in leaderboard range
          let isTaskMaster = false; // Create isTaskMaster variable
          if (user.tasks.length >= tasks.length) { // Check if user has completed all tasks (Add greater than just in case duplicate records are created)
            isTaskMaster = true; // Set isTaskMaster to true if user has completed all tasks
          }
          const userTasks = [];
          for (let j = 0; j < user.tasks.length; j++) { // Loop through user tasks
            const userTask = tasks.find(task => task.id === user.tasks[j].taskID); // Find task in tasks array
            if (userTask) { // Check if task exists
              userTasks.push(userTask); // Add task to userTasks array
            }
          }
          leaderboard.push({
            id: user.id,
            username: user.username,
            tasks: userTasks,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isTaskMaster: isTaskMaster,
            taskCompletionPercentage: Math.round(((user.tasks.length > tasks.length ? tasks.length : user.tasks.length) / tasks.length) * 100)
          }); // Add user to leaderboard
        }
      }
      if (!leaderboard) { // Check if leaderboard exists
        return res.send({ // Return error if leaderboard doesn't exist
          error: 'Leaderboard not found'
        });
      }
      leaderboard.sort((a, b) => { // Sort leaderboard in alphabetical order
        return b.taskCompletionPercentage - a.taskCompletionPercentage;
      });
      const tasksToComplete = [];
      for (let j = 0; j < tasks.length; j++) { // Loop through tasks
        const task = tasks[j];
        const foundTask = requestingUser.tasks.find(userTask => userTask.taskID === task.id); // Find task in userTasks array
        if (!foundTask) { // Check if task doesn't exist
          tasksToComplete.push({task: task, isCompleted: false}); // Add task to tasksToComplete array
        } else {
          tasksToComplete.push({task: task, isCompleted: true});
        }
      }
      return res.view('pages/leaderboard', {
        leaderboard: JSON.stringify(leaderboard),
        tasksToComplete: JSON.stringify(tasksToComplete)
      });
    } catch (err) {
      return res.send({
        error: 'Error fetching leaderboard'
      });
    }
  },
  fetchLeaderboard: async function(req, res) {
    try {
      let leaderboardIDMin = req.param('leaderboardIDMin'); // Get leaderboard ID min
      let leaderboardIDMax = req.param('leaderboardIDMax'); // Get leaderboard ID max
      if (!leaderboardIDMin) {
        leaderboardIDMin = 0; // Set leaderboard ID min to 0 if not provided
      }
      const users = await Users.find().populate('tasks'); // Find users populated with tasks
      if (!leaderboardIDMax) {
        leaderboardIDMax = users[users.length - 1].id; // Set leaderboard ID max to last user if not provided
      }
      let requestingUser = await Users.find({id: req.session.userId}).populate('tasks'); // Find requesting user
      requestingUser = requestingUser[0];
      const tasks = await Tasks.find(); // Find tasks
      const leaderboard = []; // Create leaderboard array
      for (let i = 0; i < users.length; i++) { // Loop through users
        const user = users[i];
        if (user.id >= leaderboardIDMin && user.id <= leaderboardIDMax) { // Check if user is in leaderboard range
          let isTaskMaster = false; // Create isTaskMaster variable
          if (user.tasks.length >= tasks.length) { // Check if user has completed all tasks (Add greater than just in case duplicate records are created)
            isTaskMaster = true; // Set isTaskMaster to true if user has completed all tasks
          }
          const userTasks = [];
          for (let j = 0; j < user.tasks.length; j++) { // Loop through user tasks
            const userTask = tasks.find(task => task.id === user.tasks[j].taskID); // Find task in tasks array
            if (userTask) { // Check if task exists
              userTasks.push(userTask); // Add task to userTasks array
            }
          }
          leaderboard.push({
            id: user.id,
            username: user.username,
            tasks: userTasks,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isTaskMaster: isTaskMaster,
            taskCompletionPercentage: Math.round(((user.tasks.length > tasks.length ? tasks.length : user.tasks.length) / tasks.length) * 100)
          }); // Add user to leaderboard
        }
      }
      if (!leaderboard) { // Check if leaderboard exists
        return res.send({ // Return error if leaderboard doesn't exist
          error: 'Leaderboard not found'
        });
      }
      leaderboard.sort((a, b) => { // Sort leaderboard in alphabetical order
        return b.taskCompletionPercentage - a.taskCompletionPercentage;
      });
      const tasksToComplete = [];
      for (let j = 0; j < tasks.length; j++) { // Loop through tasks
        const task = tasks[j];
        const foundTask = requestingUser.tasks.find(userTask => userTask.taskID === task.id); // Find task in userTasks array
        if (!foundTask) { // Check if task doesn't exist
          tasksToComplete.push({task: task, isCompleted: false}); // Add task to tasksToComplete array
        } else {
          tasksToComplete.push({task: task, isCompleted: true});
        }
      }
      return res.send({
        leaderboard: leaderboard,
        tasksToComplete: tasksToComplete
      });
    } catch (err) {
      return res.send({
        error: 'Error fetching leaderboard'
      });
    }
  }
};
