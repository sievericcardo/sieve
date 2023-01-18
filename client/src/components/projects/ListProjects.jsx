import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import Project from './Project';
import { getProjects } from '../../store/actions/projectActions';

const PREFIX = 'ListProjects';
const classes = {
  root: `${PREFIX}-root`,
  paper: `${PREFIX}-paper`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
    marginTop: '0.7em',
  },
  [`&.${classes.paper}`]: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ListProjects = ({ project, setProject }) => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  var length = 0;

  if (!projects) {
    length = 0
  } else {
    length = projects.length
  }

  // Use Effect will be called when our components renders
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]); // this is to avoid it making continually rendering

  return (
    <Root className={classes.root}>
    {length > 0 ? (
      <Grid container spacing={3}>
        {projects &&
          projects.map((project) => {
            return (
              <Grid item xs={6}>
                <Project
                  project={project}
                  key={project._id}
                  setProject={setProject}
                />
              </Grid>
            );
          })}
      </Grid>
    ) : ""}
    </Root>
  );
}

export default ListProjects;
