import React, { useState, useEffect } from "react";

import { styled } from "@mui/material/styles";
import {
  ImageList,
  useMediaQuery,
} from "@mui/material";

import Article from './Article';
import { getArticles } from '../../hooks/articleHooks';
import DynamicLoader from "../ui/DynamicLoader";

const PREFIX = "ListArticles";
const classes = {
  root: `${PREFIX}-root`,
  imageList: `${PREFIX}-imageList`,
  title: `${PREFIX}-title`,
  titleBar: `${PREFIX}-titleBar`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
    color: "#000!important",
    marginTop: "1.7em",
  },
  [`&.${classes.imageList}`]: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  [`&.${classes.title}`]: {
    // color: theme.palette.primary.dark,
    color: "#000!important",
  },
  [`&.${classes.titleBar}`]: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const ListArticles = () => {
  const [ articles, setArticles ] = useState({
    name: "",
    description: "",
    author: "Riccardo"
  });
  const small = useMediaQuery('(max-width:600px)');
  const large = useMediaQuery('(min-width:1000px)');

  // Use Effect will be called when our components renders
  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var length = 0;

  if (!articles) {
    length = 0
  } else {
    length = articles.length
  }

  return (
    <Root className={classes.root}>
    {length > 0 ? (
      <ImageList 
        className={classes.imageList}
        cols={large ? 5 : (small ? 1 : 2)}
      >
        {articles &&
          articles.map((article) => {
            return (
              <Article
                article={article}
                key={article._id}
              />
            );
          })}
      </ImageList>
      ) : <DynamicLoader />}
    </Root>
  );
}

export default ListArticles;
