const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { use } = require("../routes/auth.routes");

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
