const User = require("../models/UserModel");

exports.signup = async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const newUser = await User.create({
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {};
