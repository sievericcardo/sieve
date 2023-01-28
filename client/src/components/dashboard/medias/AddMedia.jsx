import React from "react";

import { TextField, Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import { addMedia, updateMedia } from "../../../hooks/mediaHooks";

const PREFIX = "DashboardAddMedia";

const classes = {
  formStyle: `${PREFIX}-formStyle`,
  submitButton: `${PREFIX}-submitButton`,
  imageUpload: `${PREFIX}-imageUpload`,
};

const Root = styled("form")(({ theme }) => ({
  [`&.${classes.formStyle}`]: {
    maxWidth: "70vw",
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  [`&.${classes.submitButton}`]: {
    marginLeft: "20px",
  },
  [`&.${classes.imageUpload}`]: {
    color: "#4d3f5a",
    padding: "10px",
    margin: "10px",
  },
}));

const AddMedia = ({ media, setMedia }) => {

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

    if (media._id) {
      const id = media._id;

      const updatedMedia = {
        altText: media.altText,
        date: media.date,
        author: "Riccardo",
      };

      updateMedia(updatedMedia, id);
    } else {
      var file = media.image;

      getBase64(file).then (
        data => {
          const newMedia = {
            ...media,
            image: data,
            author: "Riccardo",
            date: new Date(),
          };
    
          addMedia(newMedia);
        }
      );
    }

    setMedia({
      alt: "",
      author: "Riccardo",
    });
  };

  return (
    <>
      <Root
        noValidate
        autoComplete="off"
        className={ classes.formStyle }
        encType='multipart/form-data'
        onSubmit={ handleSubmit }
        style={{ marginBottom: "30px"}}
      >
        <TextField 
          id="media-alt"
          aria-label="minimum height"
          minRows={1}
          label="Media alt"
          variant="outlined"
          fullWidth
          value={media.alt}
          onChange={(e) => setMedia({ ...media, altText: e.target.value })}
        />
        <input
          type="file"
          id="uploading"
          name="uploading"
          accept="image/webp"
          className={ classes.imageUpload }
          onChange={(e) => setMedia({ ...media, image: e.target.files[0] })}
          style={{ margin: "0.2em", padding: "0.2em" }}
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
      </Root>
    </>
  );
};

export default AddMedia;

