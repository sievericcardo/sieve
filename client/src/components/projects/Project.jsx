import React from 'react';

import { Link } from "react-router-dom";

import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { url } from '../../api';

const Root = styled(Card)({
  backgroundColor: 'rgba(50, 115, 220, 0.3)',
  marginTop: '1.4rem',
  marginBottom: '1rem',
});


const  Project = ({ project }) => {
  const imageUrl = `${url}/projects/image?path=${project.image}`
  const projectUrl = `/project/${project._id}`

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
        { project.description.substring(0, "80") }...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={projectUrl}>
            Learn More
          </Link>
        </Button>
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
