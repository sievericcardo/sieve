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

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (article._id) {
      const id = article._id;

      const updatedArticle = {
        name: article.name,
        body: article.body,
        date: article.date,
        author: "Riccardo",
      };

      updateArticle(updatedArticle, id);
    } else {
      var file = article.image;

      getBase64(file).then (
        data => {
          const newArticle = {
            ...article,
            image: data,
            date: new Date(),
          };
    
          addArticle(newArticle);
        }
      );
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
          id="article-body"
          aria-label="minimum height"
          minRows={1}
          label="Writeup body"
          variant="outlined"
          fullWidth
          value={article.body}
          onChange={(e) => setArticle({ ...article, body: e.target.value })}
          style={{ marginBottom: "15px" }}
        />
        <input
          type="file"
          id="uploading"
          name="uploading"
          accept="image/webp"
          className={ classes.imageUpload }
          onChange={(e) => setArticle({ ...article, image: e.target.files[0] })}
        />
        <Button
          className={ classes.submitButton }
          color="primary"
          variant="contained"
          type="submit"
          style={{ borderRadius: "18px" }}
        >
          <Send />
        </Button>
      </form>
    </>
  );
};

export default AddArticle;

