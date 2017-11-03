module.exports = function (app) {
  var userModel = require("../../model/user/user.model.server");

  app.get("/api/user/:uid", findUserById);
  app.get("/api/user", findUsers);
  app.post("/api/user", createUser);
  app.put("/api/user/:uid", updateUser);
  app.delete("/api/user/:uid", deleteUser);

  var users = [
    {
      _id: '123',
      username: 'alice',
      password: 'alice',
      firstName: 'Alice',
      lastName: 'Wonder',
      email: 'alice@email.com'
    },
    {
      _id: '234',
      username: 'bob',
      password: 'bob',
      firstName: 'Bob',
      lastName: 'Marley',
      email: 'bob@email.com'
    },
    {
      _id: '345',
      username: 'charly',
      password: 'charly',
      firstName: 'Charly',
      lastName: 'Garcia',
      email: 'charly@email.com'
    },
    {
      _id: '456',
      username: 'jannunzi',
      password: 'jannunzi',
      firstName: 'Jose',
      lastName: 'Annunzi',
      email: 'jose@email.com'
    }
  ];

  function findUserById(req, res) {
    var userId = req.params["uid"];
    userModel.findUserById(userId)
      .then(function (user) {
        res.json(user);
      });
  }

  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password) {
      userModel.findUserByCredentials(username, password)
        .then(function (user) {
          res.json(user);
        });
      return;
    }
    else if (username) {
      userModel
        .findUserByUsername(username)
        .then(function (user) {
          res.json(user);
        });
      return;
    }
    res.json(users);
  }

  function createUser(req, res) {
    var user = req.body;
    users.push(user);
    res.json(user)
  }

  function updateUser(req, res) {
    var userId = req.params['uid'];
    var updatedUser = req.body;
    var user = users.find(function (user) {
      return userId === user._id
    });
    var i = users.indexOf(user);
    users[i] = updatedUser;
    res.json(updatedUser);
  }

  function deleteUser(req, res) {
    var userId = req.params['uid'];
    var user = users.find(function (user) {
      return userId === user._id
    });
    var i = users.indexOf(user);
    users.splice(i, 1);
    res.json(users);
  }
};
