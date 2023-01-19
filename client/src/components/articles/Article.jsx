import React from 'react';

import { styled } from '@mui/material/styles';

import clsx from 'clsx';

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import {
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';

// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

import moment from "moment";

import { url } from '../../api/index';

const PREFIX = 'Article';
const classes = {
  root: `${PREFIX}-root`,
  media: `${PREFIX}-media`,
  expand: `${PREFIX}-expand`,
  expandOpen: `${PREFIX}-expandOpen`,
  avatar: `${PREFIX}-avatar`,
  text: `${PREFIX}-text`,
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
}));

const  Article = ({ article, setArticle }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const imageUrl = `${url}/articles/image?path=${article.image}`

  return (
    <Root className={classes.root}>
      <CardHeader className={ classes.text }
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={ article.name }
        subheader={ moment(article.date).fromNow() }
      />
      <CardMedia
        className={classes.media}
        image={ imageUrl }
        title={ article.name }
      />
      <CardContent className={ classes.text }>
        <Typography variant="body2" component="p">
          { article.body.substring(0, "50") }...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={ classes.text }>
          <Typography paragraph>{ article.body }</Typography>
        </CardContent>
      </Collapse>
    </Root>
  );
}

export default Article;