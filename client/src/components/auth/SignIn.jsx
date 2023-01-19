import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

import { signIn } from "../../store/actions/authActions";

import {
  Typography,
  TextField,
  Button
} from "@mui/material";
import { styled } from "@mui/material/styles";

const PREFIX = "Login";
const classes = {
  formStyle: `${PREFIX}-formStyle`,
  spacing: `${PREFIX}-spacing`,
  formTitle: `${PREFIX}-formTitle`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.formStyle}`]: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000",
    backgroundColor: "#c6c6c6",
    color: "#000",
  },
  [`&.${classes.spacing}`]: {
    marginTop: "20px",
  },
  [`&.${classes.formTitle}`]: {
    color: "#000",
  },
}));


const SignIn = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const [creds, setCreds] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signIn(creds));
    setCreds({
      name: "",
      password: "",
    });
  };

  if (auth._id) {
    return <Navigate to="/cms-dashboard" />;
  }

  return (
    <Root className="formContent">
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <Typography variant="h5" className={ classes.formTitle }>Sign in</Typography>
        <TextField
          className={classes.spacing}
          id="name"
          label="Nickname"
          variant="outlined"
          fullWidth
          value={creds.name}
          onChange={(e) => setCreds({ ...creds, name: e.target.value })}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <TextField
          className={classes.spacing}
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Button
          className={classes.spacing}
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </Root>
  );
};

export default SignIn;

