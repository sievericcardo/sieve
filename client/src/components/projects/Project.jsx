import React from 'react';

import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/assets/img/base-img/steghide-is-fun.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { project.name }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { project.body }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

    // Old block of code for the project component
    /* <Root className={ classes.projects }>
      <Typography variant="h4"><AllInclusive /> {project.name}</Typography>
      <Typography variant="body2">
        {project.body}
      </Typography>
    </Root> */

export default Project;
