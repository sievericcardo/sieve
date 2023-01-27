import React, { useState, useEffect } from "react";

import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Article from "./Article";
import { getArticles } from "../../../hooks/articleHooks";

const PREFIX = "DashboardListArticles";
const classes = {
  articleStyle: `${PREFIX}-articleStyle`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.articleStyle}`]: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000",
    backgroundColor: '#fff',
    color: '#000',
    marginTop: '0.2em',
  },
}));

const ListArticles = ({ setArticle }) => {
  const [articles, setArticles] = useState();

  var length = 0;

  // Use Effect will be called when our components renders
  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!articles) {
    length = 0
  } else {
    length = articles.length
  }

  return (
    <>
      <Root className={classes.articleStyle}>
        <Typography variant="h5">
          {length > 0 ? "My writeups" : "No writeup yet"}
        </Typography>
        {articles &&
          articles.map((article) => {
            return (
              <Article
                article={article}
                key={article._id}
                setArticle={setArticle}
              />
            );
          })}
      </Root>
    </>
  );
};

export default ListArticles;
