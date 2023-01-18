import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Project from "./Project";
import { getProjects } from "../../../store/actions/projectActions";

const PREFIX = "DashboardListProjects";
const classes = {
  projectStyle: `${PREFIX}-projectStyle`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.projectStyle}`]: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000",
    backgroundColor: "#fff",
    color: "#000",
    marginTop: "0.2em",
  },
}));

const ListProjects = ({ project, setProject }) => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  var length = 0

  // Use Effect will be called when our components renders
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]); // this is to avoid it making continually rendering
  
  if (!projects) {
    length = 0
  } else {
    length = projects.length
  }

  return (
    <>
      <Root className={classes.projectStyle}>
        <Typography variant="h5">
          {length > 0 ? "My projects" : "No project yet"}
        </Typography>
        {projects &&
          projects.map((project) => {
            return (
              <Project
                project={project}
                key={project._id}
                setProject={setProject}
                projects={projects}
              />
            );
          })}
      </Root>
    </>
  );
};

export default ListProjects;
