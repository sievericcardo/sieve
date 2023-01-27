const winston = require("winston");
const auth = require("../middleware/auth");
const imageHandler = require("../middleware/imageHandling");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

const path = require('path');

const { Media } = require("../models/media");

router.get("/", async (req, res, next) => {
  try {
    const medias = await Media.find().sort({ date: -1 });

    res.send(medias);
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
    altText: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3),
    uid: Joi.string(),
    image: Joi.string(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { altText, author, date, uid } = req.body;

  const image = imageHandler(req.body.image);

  let media = new Media({ altText, author, image, date, uid });

  media = await media.save();
  res.send(media);
});

router.put("/:id", auth, async (req, res) => {
  const schema = Joi.object({
    altText: Joi.string().min(3).required(),
    author: Joi.string().min(3),
    uid: Joi.string(),
    image: Joi.string(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(result.error.details[0].message);
  }

  const media = await Media.findById(req.params.id);

  if (!media) {
    return res.status(404).send("Media not found");
  }

  if (media.uid !== req.user._id)
    return res.status(401).send("Media update failed. Not authorized");

  const { altText, author, image, date, uid } = req.body;

  const updatedMedia = await Media.findByIdAndUpdate(
    req.params.id,
    { altText, author, date, image, uid },
    { new: true }
  );

  res.status(200).send(updatedMedia);
});

router.delete("/:id", auth, async (req, res) => {
  const media = await Media.findById(req.params.id);

  if (!media) {
    return res.status(404).send("Media not found");
  }

  if (media.uid !== req.user._id) {
    return res.status(401).send("Media deletion failed. Not authorized");
  }

  const deletedMedia = await Media.findByIdAndDelete(req.params.id);

  res.status(200).send(deletedMedia);
});

module.exports = router;
