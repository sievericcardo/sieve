import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Writeup from "./Writeup";
import { getWriteups } from "../../../store/actions/writeupActions";

const PREFIX = "DashboardListWriteups";
const classes = {
  writeupStyle: `${PREFIX}-writeupStyle`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.writeupStyle}`]: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000",
    backgroundColor: '#fff',
    color: '#000',
    marginTop: '0.2em',
  },
}));

const ListWriteups = ({ writeup, setWriteup }) => {
  const writeups = useSelector((state) => state.writeups);
  const dispatch = useDispatch();

  var length = 0

  // Use Effect will be called when our components renders
  useEffect(() => {
    dispatch(getWriteups());
  }, [dispatch]); // this is to avoid it making continually rendering
  
  if (!writeups) {
    length = 0
  } else {
    length = writeups.length
  }

  return (
    <>
      <Root className={classes.writeupStyle}>
        <Typography variant="h5">
          {length > 0 ? "My writeups" : "No writeup yet"}
        </Typography>
        {writeups &&
          writeups.map((writeup) => {
            return (
              <Writeup
                writeup={writeup}
                key={writeup._id}
                setWriteup={setWriteup}
                writeups={writeups}
              />
            );
          })}
      </Root>
    </>
  );
};

export default ListWriteups;
