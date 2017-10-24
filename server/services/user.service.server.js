module.exports = function (app) {
  app.get("/api/user/:uid", findUserById);
  app.get("/api/user", findUsers);
  app.post("/api/user", createUser);
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
    var user = users.find(function (user) {
      return user._id === userId;
    });
    res.json(user);
  }

  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password) {
      findUserByCredentials(res, username, password);
    }
    else if (username) {
     findUserByUsername(res, username);
    }
    res.json(users);
  }

  function createUser(req, res) {
    var user = req.body;
    users.push(user);
    res.json(user)
  }
  function findUserByCredentials (res, username, password) {
      var user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
      if (user) {
        res.json(user);
      } else {
        res.json(null);
      }
    }
  function findUserByUsername(res, username) {
    var user = users.find(function (user) {
      return user.username === username;
    });
    if (user) {
      res.json(user);
    } else {
      res.json(null);
    }
  }

};
