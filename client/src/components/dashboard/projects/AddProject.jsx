import React from "react";

import { TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";

import { addProject, updateProject } from "../../../hooks/projectHooks";

const PREFIX = "DashboardAddProject";
const classes = {
  formStyle: `${PREFIX}-formStyle`,
  submitButton: `${PREFIX}-submitButton`,
};

const AddProject = ({ project, setProject }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if (project._id) {
      const id = project._id;

      const updatedProject = {
        name: project.name,
        body: unescape(encodeURIComponent(project.body)),
        description: project.description,
        image: project.image,
        date: project.date,
        author: "Riccardo",
      };

      updateProject(updatedProject, id);
    } else {

      project.body = unescape(encodeURIComponent(project.body));

      const newProject = {
        ...project,
        date: new Date(),
      };

      addProject(newProject);
    }

    setProject({
      name: "",
      body: "",
      author: "Riccardo"
    });
  };

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={ classes.formStyle }
        encType='multipart/form-data'
        onSubmit={ handleSubmit }
        style={{ marginBottom: "30px" }}
      >
        <TextField
          id="enter-project"
          variant="outlined"
          label="Project title"
          autoFocus
          fullWidth
          value={project.name}
          onChange={(e) => setProject({ ...project, name: e.target.value })}
          style={{ marginBottom: "15px" }}
        />
        <TextField 
          id="project-image"
          aria-label="minimum height"
          minRows={4}
          label="Project image"
          variant="outlined"
          fullWidth
          value={project.image}
          onChange={(e) => setProject({ ...project, image: e.target.value })}
          style={{ marginBottom: "15px" }}
        />
        <TextField 
          id="project-desc"
          aria-label="minimum height"
          minRows={1}
          label="Project description"
          variant="outlined"
          fullWidth
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
          style={{ marginBottom: "15px" }}
        />
        <TextField 
          id="project-body"
          aria-label="minimum height"
          minRows={4}
          label="Project body"
          variant="outlined"
          fullWidth
          value={project.body}
          onChange={(e) => setProject({ ...project, body: e.target.value })}
          style={{ marginBottom: "15px" }}
        />
        <Button
          className={ classes.submitButton }
          color="primary"
          variant="contained"
          type="submit"
          style={{ borderRadius: "18px" }}
        >
          Send &nbsp; <Send />
        </Button>
      </form>
    </>
  );
};

export default AddProject;

