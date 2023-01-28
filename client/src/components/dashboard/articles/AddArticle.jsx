import React from "react";

import {
  TextField,
  Button,
} from "@mui/material";
import { Send } from "@mui/icons-material";

import { addArticle, updateArticle } from "../../../hooks/articleHooks";

const PREFIX = "AddArticle";
const classes = {
  formStyle: `${PREFIX}-formStyle`,
  submitButton: `${PREFIX}-submitButton`,
  imageUpload: `${PREFIX}-imageUpload`,
};

const AddArticle = ({ article, setArticle }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if (article._id) {
      const id = article._id;

      const updatedArticle = {
        name: article.name,
        description: article.description,
        body: unescape(encodeURIComponent(article.body)),
        image: article.image,
        date: article.date,
        author: "Riccardo",
      };

      updateArticle(updatedArticle, id);
    } else {
      article.body = unescape(encodeURIComponent(article.body));

      const newArticle = {
        ...article,
        date: new Date(),
      };

      addArticle(newArticle);
    }

    setArticle({
      name: "",
      body: "",
    });
  };

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={ classes.formStyle }
        encType='multipart/form-data'
        onSubmit={ handleSubmit }
        style={{ marginBottom: "30px" }}
      >
        <TextField
          id="enter-article"
          variant="outlined"
          label="Writeup title"
          autoFocus
          fullWidth
          value={article.name}
          onChange={(e) => setArticle({ ...article, name: e.target.value })}
          style={{ marginBottom: "15px" }}
        />
        <TextField 
          id="article-image"
          aria-label="minimum height"
          label="Writeup image"
          variant="outlined"
          fullWidth
          value={article.image}
          onChange={(e) => setArticle({ ...article, image: e.target.value })}
          style={{ marginBottom: "15px" }}
        />
        <TextField 
          id="article-description"
          aria-label="minimum height"
          minRows={1}
          label="Writeup description"
          variant="outlined"
          fullWidth
          multiline
          value={article.description}
          onChange={(e) => setArticle({ ...article, description: e.target.value })}
          style={{ marginBottom: "15px" }}
        />
        <TextField 
          id="article-body"
          aria-label="minimum height"
          minRows={4}
          label="Writeup body"
          variant="outlined"
          fullWidth
          multiline
          value={article.body}
          onChange={(e) => setArticle({ ...article, body: e.target.value })}
          style={{ marginBottom: "15px" }}
        />
        <Button
          className={ classes.submitButton }
          color="primary"
          variant="contained"
          type="submit"
          style={{ borderRadius: "18px" }}
        >
          Send &nbsp; <Send />
        </Button>
      </form>
    </>
  );
};

export default AddArticle;

