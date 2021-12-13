const UserController = require('./controllers/UserController.js')

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers 
  },
  {
    endpoint: '/users',
    method: 'POST'
  }
];

