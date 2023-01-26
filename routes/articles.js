const winston = require("winston");
const auth = require("../middleware/auth");
const imageHandler = require("../middleware/imageHandling");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

const path = require('path');

const { Article } = require("../models/article");

router.get("/", async (req, res, next) => {
  try {
    const articles = await Article.find().sort({ date: -1 });

    res.send(articles);
  } catch (error) {
    res.status(500).send("Error: " + error.message);

    winston.error(error.message);
  }
});

router.get('/image', async (req, res) => {
  const url = req.query.path;
  res.sendFile(path.resolve(url));
});

router.post("/", auth, async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3),
    uid: Joi.string(),
    body: Joi.string().required(),
    image: Joi.string(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { name, author, body, date, uid } = req.body;

  // Handle the image using the ../middleware/imageHandling.js middleware
  const image = imageHandler(req.body.image);

  let article = new Article({ name, author, body, image, date, uid });

  article = await article.save();
  res.send(article);
});

router.put("/:id", auth, async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    author: Joi.string().min(3),
    uid: Joi.string(),
    body: Joi.string(),
    image: Joi.string(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(result.error.details[0].message);
  }

  const article = await Article.findById(req.params.id);

  if (!article) {
    return res.status(404).send("Article not found");
  }

  if (article.uid !== req.user._id)
    return res.status(401).send("Article update failed. Not authorized");

  const { name, author, body, image, date, uid } = req.body;

  const updatedArticle = await Article.findByIdAndUpdate(
    req.params.id,
    { name, author, body, date, image, uid },
    { new: true }
  );

  res.send(updatedArticle);
});

// router.patch("/:id", auth, async (req, res) => {
//   const article = await Article.findById(req.params.id);

//   if (!article) return res.status(404).send("Article not found...");

//   if (article.uid !== req.user._id)
//     return res.status(401).send("Article check/uncheck failed. Not authorized");

//   const updatedArticle = await Article.findByIdAndUpdate(
//     req.params.id,
//     {
//       : !article.isComplete,
//     },
//     {
//       new: true,
//     }
//   );

//   res.send(updatedArticle);
// });

router.delete("/:id", auth, async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (!article) {
    return res.status(404).send("Article not found");
  }

  if (article.uid !== req.user._id) {
    return res.status(401).send("Article deletion failed. Not authorized");
  }

  const deletedArticle = await Article.findByIdAndDelete(req.params.id);

  res.send(deletedArticle);
});

module.exports = router;
