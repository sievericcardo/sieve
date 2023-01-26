const winston = require("winston");
const auth = require("../middleware/auth");
const imageHandler = require("../middleware/imageHandling");
const Joi = require("joi");
const express = require("express");
const router = express.Router();
const path = require('path');

const { Project } = require("../models/project");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ date: -1 });

    res.send(projects);
  } catch (error) {
    res.status(500).send("Error: " + error.message);

    winston.error(error.message);
  }
});

router.get('/image', async (req, res) => {
  const url = req.query.path;
  res.sendFile(path.resolve(url));
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).send("The project with the given ID was not found.");
    }

    res.send(project);
  } catch (error) {
    res.status(500).send("Error: " + error.message);

    winston.error(error.message);
  }
});

router.post("/", auth, async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3),
    uid: Joi.string(),
    description: Joi.string(),
    body: Joi.string(),
    image: Joi.string(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { name, author, description, body, date, uid } = req.body;

  // Handle the image using the ../middleware/imageHandling.js middleware
  const image = imageHandler(req.body.image);

  // Create a new Project object mapping the request body to the Project model
  // name: name, author: author, description: description, body: body, image: imagePath, date: date, uid: uid

  let project = new Project({ name, author, description, body, image, date, uid });

  project = await project.save();
  res.send(project);
});

router.put("/:id", auth, async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3),
    uid: Joi.string(),
    description: Joi.string(),
    body: Joi.string(),
    image: Joi.string(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(result.error.details[0].message);
  }

  const project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).send("Project not found");
  }

  if (project.uid !== req.user._id)
    return res.status(401).send("Project update failed. Not authorized");

  const { name, author, body, date, uid } = req.body;

  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    { name, author, body, date, uid },
    { new: true }
  );

  res.send(updatedProject);
});

// router.patch("/:id", auth, async (req, res) => {
//   const project = await Project.findById(req.params.id);

//   if (!project) return res.status(404).send("Project not found...");

//   if (project.uid !== req.user._id)
//     return res.status(401).send("Project check/uncheck failed. Not authorized");

//   const updatedProject = await Project.findByIdAndUpdate(
//     req.params.id,
//     {
//       isComplete: !project.isComplete,
//     },
//     {
//       new: true,
//     }
//   );

//   res.send(updatedProject);
// });

router.delete("/:id", auth, async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).send("Project not found");
  }

  if (project.uid !== req.user._id) {
    return res.status(401).send("Project deletion failed. Not authorized");
  }

  const deletedProject = await Project.findByIdAndDelete(req.params.id);

  res.send(deletedProject);
});

module.exports = router;
