module.exports = function (app) {
  app.get("/api/user/hello", helloUser);
  function  helloUser(req, res) {
    res.send("Hello from user service")
  }
};
