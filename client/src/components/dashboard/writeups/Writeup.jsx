import React from "react";
import { useDispatch } from "react-redux";

import { Typography, Button, ButtonGroup } from '@mui/material';
import { Create, Delete, CheckCircle } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import moment from "moment";

import { checkWriteup, deleteWriteup } from "../../../store/actions/writeupActions";

const PREFIX = "DashboardWriteup";
const classes = {
  writeupStyles: `${PREFIX}-writeupStyles`,
  greyStyle: `${PREFIX}-greyStyle`,
  isComplete: `${PREFIX}-isComplete`,
  checked: `${PREFIX}-checked`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.writeupStyles}`]: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "left",
    color: "#000",
  },
}));

const Writeup = ({ writeup, setWriteup, writeups }) => {
  const dispatch = useDispatch();

  const handleUpdateClick = (id) => {
    const foundWriteup = writeups.find((writeup) => writeup._id === id);
    // foundWriteup.body = decodeURIComponent(escape(atob(foundWriteup.body)));
    // foundWriteup.body = atob(foundWriteup.body);
    foundWriteup.body = decodeURIComponent(escape(foundWriteup.body));

    setWriteup({ ...foundWriteup });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCheck = (id) => {
    dispatch(checkWriteup(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteWriteup(id));
  };

  return (
    <>
      <Root className={classes.writeupStyles}>
        <div>
          <Typography variant="subtitle1">{writeup.name}</Typography>
          <Typography variant="body2" className='greyStyle'>
            Text: {writeup.platform}
          </Typography>
          <Typography variant="body2" className='greyStyle'>
            Added: {moment(writeup.date).fromNow()}
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            <Button onClick={() => handleCheck(writeup._id)}>
              <CheckCircle color="action" />
            </Button>
            <Button onClick={() => handleUpdateClick(writeup._id)}>
              <Create color="primary" />
            </Button>
            <Button onClick={() => handleDelete(writeup._id)}>
              <Delete color="secondary" />
            </Button>
          </ButtonGroup>
        </div>
      </Root>
    </>
  );
};

export default Writeup;

