import React from "react";
import { useDispatch } from "react-redux";

import { Typography, Button, ButtonGroup } from '@mui/material';
import { Create, Delete, CheckCircle } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import moment from "moment";

import { checkMedia, deleteMedia } from "../../../store/actions/mediaActions";

const PREFIX = "DashboardMedia";
const classes = {
  mediaStyles: `${PREFIX}-mediaStyles`,
  greyStyle: `${PREFIX}-greyStyle`,
  isComplete: `${PREFIX}-isComplete`,
  checked: `${PREFIX}-checked`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.mediaStyles}`]: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "left",
    color: "#000",
  },
  [`&.${classes.greyStyle}`]: {
    color: "#010!important",
  },
  [`&.${classes.isComplete}`]: {
    color: "green",
  },
  [`&.${classes.checked}`]: {
    textDecoration: "line-through",
  },
}));

const Media = ({ media, setMedia }) => {
  const dispatch = useDispatch();

  const handleUpdateClick = () => {
    setMedia(media); // Using the media passed as prop from the list to do

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCheck = (id) => {
    dispatch(checkMedia(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteMedia(id));
  };

  return (
    <>
      <Root className={classes.mediaStyles}>
        <div>
          <Typography variant="h4">{media.image}</Typography>
          <Typography variant="body2" className={classes.greyStyle}>
            Text: {media.altText}
          </Typography>
          <Typography variant="body2" className={classes.greyStyle}>
            Added: {moment(media.date).fromNow()}
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            <Button onClick={() => handleCheck(media._id)}>
              <CheckCircle color="action" />
            </Button>
            <Button onClick={() => handleUpdateClick()}>
              <Create color="primary" />
            </Button>
            <Button onClick={() => handleDelete(media._id)}>
              <Delete color="secondary" />
            </Button>
          </ButtonGroup>
        </div>
      </Root>
    </>
  );
};

export default Media;
