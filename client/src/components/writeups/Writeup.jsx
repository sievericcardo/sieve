import React from 'react';
// import ReactMarkdown from 'react-markdown';

// import clsx from 'clsx';

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

// import { Button, CardActionArea, CardActions } from '@material-ui/core';

import { Link } from "react-router-dom";

// import moment from "moment";

import { url } from '../../api/index';

const PREFIX = 'Writeup';
const classes = {
  root: `${PREFIX}-root`,
  media: `${PREFIX}-media`,
  expand: `${PREFIX}-expand`,
  expandOpen: `${PREFIX}-expandOpen`,
  avatar: `${PREFIX}-avatar`,
  text: `${PREFIX}-text`,
  linkStyle: `${PREFIX}-linkStyle`,
  plat: `${PREFIX}-plat`,
}

const Root = styled(Card)(({ theme }) => ({
  [`&.${classes.root}`]: {
    maxWidth: 345,
    color: '#000!important',
    backgroundColor: '#726DA8',
    margin: '1em',
  },
  [`&.${classes.media}`]: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  [`&.${classes.expand}`]: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  [`&.${classes.expandOpen}`]: {
    transform: 'rotate(180deg)',
  },
  [`&.${classes.avatar}`]: {
    backgroundColor: red[500],
  },
  [`&.${classes.text}`]: {
    color: '#fff!important',
  },
  [`&.${classes.linkStyle}`]: {
    color: "#fcfcfc",
    textDecoration: "none",
    margin: "5px",
    padding: "5px",
  },
  [`&.${classes.plat}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 1em',
    padding: '0 1em',
  },
}));

const Writeup = ({ writeup, setWriteup }) => {
  const imageUrl = `${url}/medias/image?path=${writeup.image}`;
  const link = `/writeups/${writeup._id}`;
  // const text = decodeURIComponent(escape(writeup.body )).substring(0, "50") + '...';

  return (
    <Root className={classes.mainClass} sx={{ maxWidth: 345 }}>
      {/* <img src="http://127.0.0.1:5000/api/medias/image?path=./uploads/img/2021/10/image-b10e82470f5df913980cea7f82d249069ceaa4f7.webp" /> */}
      <CardActionArea>
        <Link className={classes.linkStyle} to={ link }>
          <CardMedia
            // component="img"
            // height="140"
            className={classes.media}
            image={ imageUrl }
            title={ writeup.name }
            alt={ writeup.name }
          />
        </Link>
        <CardContent className={classes.cardContent}>
          <Link className={classes.linkStyle} to={ link }>
            <Typography gutterBottom variant="h5" component="div">
              { writeup.name }
            </Typography>
          </Link>
          <Typography variant="h6" color="text.secondary" className={classes.plat}>
            { writeup.platform }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* <ReactMarkdown>{ text }</ReactMarkdown> */}
            { writeup.description }
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Root>
  );
};

export default Writeup;
