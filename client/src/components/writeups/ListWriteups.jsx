import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ImageList } from "@mui/material";
import { styled } from "@mui/material/styles";

import Writeup from './Writeup';
import { getWriteups } from '../../store/actions/writeupActions';

const PREFIX = 'ListWriteups';
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

const ListWriteups = ({ setWriteup }) => {
  const dispatch = useDispatch();
  const writeups = useSelector((state) => state.writeups);

  var length = 0;

  if (!writeups) {
    length = 0
  } else {
    length = writeups.length
  }

  // Use Effect will be called when our components renders
  useEffect(() => {
    dispatch(getWriteups());
  }, [dispatch]); // this is to avoid it making continually rendering

  return (
    <Root className={classes.root}>
    {length > 0 ? (
      <ImageList className={classes.imageList} cols={2.5}>
        {writeups &&
          writeups.map((writeup) => {
            return (
              <Writeup
                writeup={writeup}
                key={writeup._id}
                setWriteup={setWriteup}
              />
            );
          })}
      </ImageList>
      ) : ""}
    </Root>
  );
};

export default ListWriteups;
