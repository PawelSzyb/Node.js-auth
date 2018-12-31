const displayRegisterPage = (req, res) => {
  res.render("register");
};

const loginUser = (req, res) => {
  console.log(req.body);
  res.send("login");
};

const displayLoginPage = (req, res) => {
  res.render("login");
};

module.exports = {
  displayRegisterPage,
  displayLoginPage,
  loginUser
};
