import React from "react";

import { Typography, Button, ButtonGroup } from '@mui/material';
import { Create, Delete, CheckCircle } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import moment from "moment";

import { updateProject, deleteProject } from "../../../hooks/projectHooks";

const PREFIX = "DashboardProject";
const classes = {
  projectStyles: `${PREFIX}-projectStyles`,
  greyStyle: `${PREFIX}-greyStyle`,
  isComplete: `${PREFIX}-isComplete`,
  checked: `${PREFIX}-checked`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.projectStyles}`]: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "left",
    color: "#000",
  },
  [`&.${classes.greyStyle}`]: {
    color: "#010!important",
  },
  [`&.${classes.isComplete}`]: {
    color: "green",
  },
  [`&.${classes.checked}`]: {
    textDecoration: "line-through",
  },
}));

const Project = ({ project, setProject, projects }) => {

  const handleUpdateClick = (id) => {
    const foundProject = projects.find((project) => project._id === id);
    setProject({ ...foundProject });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCheck = (id) => {
    updateProject(id);
  };

  const handleDelete = (id) => {
    deleteProject(id);
  };

  return (
    <>
      <Root className={classes.projectStyles}>
        <div>
          <Typography variant="h4">{project.name}</Typography>
          <Typography variant="body2" className={classes.greyStyle}>
            Text: {project.description}
          </Typography>
          <Typography variant="body2" className={classes.greyStyle}>
            Added: {moment(project.date).fromNow()}
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            <Button onClick={() => handleCheck(project._id)}>
              <CheckCircle color="action" />
            </Button>
            <Button onClick={() => handleUpdateClick(project._id)}>
              <Create color="primary" />
            </Button>
            <Button onClick={() => handleDelete(project._id)}>
              <Delete color="secondary" />
            </Button>
          </ButtonGroup>
        </div>
      </Root>
    </>
  );
};

export default Project;

