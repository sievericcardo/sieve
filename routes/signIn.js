const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

const { User } = require("../models/user");

router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await User.findOne({ name: req.body.name });
  if (!user) {
    return res.status(400).send("Invalid nickname or password");
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send("Invalid nickname or password");
  }

  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, jwtSecretKey)

  res.send({ image: user.image, token: token });
});

module.exports = router;
