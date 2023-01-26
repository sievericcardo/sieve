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

import { url } from '../../api';

const Root = styled(Card)({
  backgroundColor: 'rgba(50, 115, 220, 0.3)',
});


const  Project = ({ project }) => {
  const imageUrl = `${url}/projects/image?path=${project.image}`

  return (
    <Root sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Project Image"
        height="140"
        image={ imageUrl }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold' }}>
          { project.name }
        </Typography>
        <Typography variant="body2" color="text.primary">
          { project.description }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Root>
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
