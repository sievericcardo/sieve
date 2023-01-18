import React from 'react';

import { Typography } from '@mui/material';
import { AllInclusive } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const PREFIX = 'Project';
const classes = {
  projects: `${PREFIX}-projects`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.projects}`]: {
    color: '#000',
  }
}));

const  Project = ({ project, setProject }) => {
  return (
    <Root className={ classes.projects }>
      <Typography variant="h4"><AllInclusive /> {project.name}</Typography>
      <Typography variant="body2">
        {project.body}
      </Typography>
    </Root>
  );
}

export default Project;
