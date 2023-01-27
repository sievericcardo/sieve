import React, { useState, useEffect } from 'react';

import { Grid, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

import Project from './Project';
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
  const [ projects, setProjects ] = useState();
  const large = useMediaQuery('(min-width:1000px)');

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

  return (
    <Root className={classes.root}>
    {length > 0 ? (
      <Grid container spacing={2}>
        {projects &&
          projects.map((project) => {
            return (
              <Grid item xs={12} md={large ? 2 : 4} sm={6} key={project._id}>
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
