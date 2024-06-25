const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// login controller

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user === null) {
      return res.json({ message: "User not found" });
    }
    // compare the password using bcrypt
    const validPassword = bcrypt.compareSync(password, user.password);
    const userId = user._id;
    if (validPassword) {
      // login the user using jwt
      jwt.sign(
        { userId },
        process.env.TOKEN_SECRET,
        { expiresIn: "3m" },
        (err, token) => {
          if (err) {
            console.log("Error signing in:", err);
            return res.json({ message: "Error signing in", error: err });
          }
          return res.json({ message: "User signed in", token, userId });
        }
      );
    } else {
      return res.json({ message: "Invalid password" });
    }
  } catch (error) {
    console.log(error);
  }
};

// signup controller
exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const exist = await User.findOne({ email });
    if (exist !== null) {
      return res.json({ message: "User already exists" });
    }
    const name = email.split("@")[0];
    // hashed password using bcrypt
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(12));
    const user = new User({
      email,
      name,
      password: hashedPassword,
    });
    await user
      .save()
      .then(() => {
        console.log("Success sign up new user");
        return res.json({
          message: "User sign in successful",
          user: user,
        });
      })
      .catch((err) => {
        console.log("Trouble signing in:", err);
        res.json({
          message: "Trouble signing in",
          error: err,
        });
      });
  } catch (error) {
    console.log(error);
  }
};
