import React from "react";

import { TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";

// import { addProject, updateProject } from "../../../store/actions/projectActions";
import { addProject, updateProject } from "../../../hooks/projectHooks";

const PREFIX = "DashboardAddProject";
const classes = {
  formStyle: `${PREFIX}-formStyle`,
  submitButton: `${PREFIX}-submitButton`,
};

const AddProject = ({ project, setProject }) => {
  // const dispatch = useDispatch();

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (project._id) {
      const id = project._id;

      const updatedProject = {
        name: project.name,
        body: project.body,
        description: project.description,
        date: project.date,
        author: "Riccardo",
      };

      updateProject(updatedProject, id);
      // dispatch(updateProject(updatedProject, id));
    } else {
      var file = project.image;

      getBase64(file).then (
        data => {
          const newProject = {
            ...project,
            image: data,
            date: new Date(),
          };
    
          console.log(newProject);
          addProject(newProject);
          // dispatch(addProject(newProject));
        }
      );
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
        <input
          type="file"
          id="uploading"
          name="uploading"
          accept="image/webp,image/jpg,image/jpeg,image/png"
          className={ classes.imageUpload }
          onChange={(e) => setProject({ ...project, image: e.target.files[0] })}
        />
        <Button
          className={ classes.submitButton }
          color="primary"
          variant="contained"
          type="submit"
          style={{ borderRadius: "18px" }}
        >
          <Send />
        </Button>
      </form>
    </>
  );
};

export default AddProject;

