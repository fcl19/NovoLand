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
  '/messages': {view: 'pages/messages', policy: 'sessionAuth' },
  '/new_post': {view: 'pages/new_post', policy: 'sessionAuth'},
  '/residence_halls': {view: 'pages/residence_halls', policy: 'sessionAuth'},
  '/dining': {view: 'pages/dining', policy: 'sessionAuth'},
  '/supplies': {view: 'pages/supplies', policy: 'sessionAuth'},
  '/events': {view: 'pages/events', policy: 'sessionAuth'},
  '/sarasota': {view: 'pages/sarasota', policy: 'sessionAuth'},
  '/scheduler': {view: 'pages/scheduler', policy: 'sessionAuth'},
  '/new_event': {view: 'pages/new_event', policy: 'sessionAuth'},
  '/leaderboard': {view: 'pages/leaderboard', controller: 'LeaderboardController', action: 'viewLeaderboard', policy: 'sessionAuth'},
  '/profile': {view: 'pages/profile', policy: 'sessionAuth', controller: 'UserController', action: 'getAccount'}, // Profile page
  '/tasks/complete': {controller: 'TaskController', action: 'completeTask', policy: 'sessionAuth'}, // Complete task action
  '/leaderboard/fetch': {controller: 'LeaderboardController', action: 'fetchLeaderboard', policy: 'sessionAuth'}, // Fetch leaderboard action
  '/supplies/changeCheck': {controller: 'SuppliesController', action: 'changeCheckbox', policy: 'sessionAuth'}, //check or uncheck supplies 
  '/new_post': {view: 'pages/new_post'},
  '/post': {view: 'pages/post'},
  '/post/create': {controller: 'PostsController', action: 'createPost', policy: 'sessionAuth'},
  '/post/fetch': {controller: 'PostsController', action: 'fetchPosts', policy: 'sessionAuth'},


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
