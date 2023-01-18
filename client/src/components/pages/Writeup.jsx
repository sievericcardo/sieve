import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Single post component
import axios from "axios";
import { useParams } from "react-router-dom";

import { styled } from "@mui/material/styles";

import { url } from '../../api/index';

const PREFIX = "Writeup";
const classes = {
  mainContent: `${PREFIX}-mainContent`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.mainContent}`]: {
    width: "75vw",
    margin: "auto",
    paddingTop: "3em",
  },
}));

const  Writeup = () => {
  // Get ID from URL
  const { id } = useParams();
  const [writeup, setWriteup] = useState([]);

  useEffect(()=> {
      axios.get(`${url}/writeups/${id}`)
      .then(res => {
          console.log(res)
          setWriteup(res.data)
      })
      .catch(err =>{
          console.log(err)
      })
  }, [id]);

  return (
    <Root className={classes.mainContent}>
      {/* <ReactMarkdown>{ decodeURIComponent(escape(atob(writeup.body))) }</ReactMarkdown> */}
      <ReactMarkdown>{ decodeURIComponent(escape(writeup.body)) }</ReactMarkdown>
    </Root>
  );
};

export default Writeup;
