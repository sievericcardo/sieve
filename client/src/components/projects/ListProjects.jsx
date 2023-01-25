import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import Project from './Project';
// import { getProjects } from '../../store/actions/projectActions';
import { getProjects } from '../../hooks/projectHooks';

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

const ListProjects = () => {
  // const dispatch = useDispatch();
  // const projects = useSelector((state) => state.projects);
  const [ projects, setProjects ] = useState();

  var length = 0;

  // Use Effect will be called when our components renders
  useEffect(() => {
    getProjects().then((res) => {
      setProjects(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!projects) {
    length = 0
  } else {
    length = projects.length
  }

  console.log(projects);
  console.log(getProjects());

  return (
    <Root className={classes.root}>
    {length > 0 ? (
      <Grid container spacing={3}>
        {projects &&
          projects.map((project) => {
            return (
              <Grid item xs={2}>
                <Project
                  project={project}
                  key={project._id}
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
