/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  '/': { view: 'pages/homepage', policy: 'sessionAuth', controller: 'PostsController', action: 'fetchPosts' },
  '/login': { view: 'pages/login' }, // Login page
  '/register': { view: 'pages/register' }, // Register page
  '/user/login': 'UserController.login', // Login action
  '/user/logout': 'UserController.logout', // Logout action
  '/user/register': 'UserController.createAccount', // Register action
  '/user/edit': {controller: 'UserController', action: 'editAccount', policy: 'sessionAuth'}, // Edit account action
  '/profile/editPicture':{controller: 'ProfilePictureController', action: 'saveProfilePic', policy: 'sessionAuth'},
  '/messages': {view: 'pages/messages', policy: 'sessionAuth' },
  '/new_post': {view: 'pages/new_post', policy: 'sessionAuth'},
  '/residence_halls': {view: 'pages/residence_halls', policy: 'sessionAuth'},
  '/dining': {view: 'pages/dining', policy: 'sessionAuth'},
  '/supplies': {view: 'pages/supplies', controller: 'SuppliesController', action: 'viewSupplyPage', policy: 'sessionAuth'},
  '/events': {view: 'pages/events', policy: 'sessionAuth'},
  '/sarasota': {view: 'pages/sarasota', policy: 'sessionAuth'},
  '/scheduler': {view: 'pages/scheduler', controller: 'SchedulerController', action: 'fetchEvents', policy: 'sessionAuth'},
  '/scheduler/newEvent': {controller: 'SchedulerController', action: 'createEvent', policy: 'sessionAuth'},
  '/scheduler/fetchEvent': {controller: 'SchedulerController', action: 'fetchEvents', policy: 'sessionAuth'},
  '/orientation': {view: 'pages/orientation', policy: 'sessionAuth'},
  '/new_event': {view: 'pages/new_event', policy: 'sessionAuth'},
  '/aboutUs': {view: 'pages/aboutUs', policy: 'sessionAuth'},
  '/leaderboard': {view: 'pages/leaderboard', controller: 'LeaderboardController', action: 'viewLeaderboard', policy: 'sessionAuth'},
  '/profile': {view: 'pages/profile', policy: 'sessionAuth', controller: 'UserController', action: 'getAccount'}, // Profile page
  '/edit_profile_pic': {view: 'pages/edit_profile_pic', controller: 'ProfilePictureController', action: 'viewProfilePic', policy: 'sessionAuth'},
  '/tasks/complete': {controller: 'TaskController', action: 'completeTask', policy: 'sessionAuth'}, // Complete task action
  '/leaderboard/fetch': {controller: 'LeaderboardController', action: 'fetchLeaderboard', policy: 'sessionAuth'}, // Fetch leaderboard action

  '/supplies/changeCheck': {controller: 'SuppliesController', action: 'changeCheckbox', policy: 'sessionAuth'}, //check or uncheck supplies 
  '/new_post': {view: 'pages/new_post'},

  '/post': {view: 'pages/post'},
  '/post/create': {controller: 'PostsController', action: 'createPost', policy: 'sessionAuth'},
  '/post/fetch': {controller: 'PostsController', action: 'fetchPosts', policy: 'sessionAuth'},
  '/doodle': {view: 'pages/doodle', controller: 'UserDrawingsController', action: 'viewDoodlePage', policy: 'sessionAuth'},
  '/doodle/save': {controller: 'UserDrawingsController', action: 'saveUserDrawing', policy: 'sessionAuth'},
  '/doodle/delete': {controller: 'UserDrawingsController', action: 'deleteUserDrawing', policy: 'sessionAuth'},
  '/doodle/fetch': {controller: 'UserDrawingsController', action: 'getUserDrawingList', policy: 'sessionAuth'},


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.

};
