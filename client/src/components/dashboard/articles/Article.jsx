import React from "react";

import { Typography, Button, ButtonGroup } from "@mui/material";
import { Create, Delete, CheckCircle } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import moment from "moment";

import { updateArticle, deleteArticle } from "../../../hooks/articleHooks";

const PREFIX = "DashboardArticle";
const classes = {
  articleStyles: `${PREFIX}-articleStyles`,
  greyStyle: `${PREFIX}-greyStyle`,
  isComplete: `${PREFIX}-isComplete`,
  checked: `${PREFIX}-checked`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.articleStyles}`]: {
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

const Article = ({ article, setArticle }) => {

  const handleUpdateClick = () => {
    setArticle(article); // Using the article passed as prop from the list to do

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCheck = (id) => {
    updateArticle(id);
  };

  const handleDelete = (id) => {
    deleteArticle(id);
  };

  return (
    <>
      <Root className={classes.articleStyles}>
        <div>
          <Typography variant="h4">{article.name}</Typography>
          <Typography variant="body2" className={classes.greyStyle}>
            Text: {article.description}
          </Typography>
          <Typography variant="body2" className={classes.greyStyle}>
            Added: {moment(article.date).fromNow()}
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            <Button onClick={() => handleCheck(article._id)}>
              <CheckCircle color="action" />
            </Button>
            <Button onClick={() => handleUpdateClick()}>
              <Create color="primary" />
            </Button>
            <Button onClick={() => handleDelete(article._id)}>
              <Delete color="secondary" />
            </Button>
          </ButtonGroup>
        </div>
      </Root>
    </>
  );
};

export default Article;
