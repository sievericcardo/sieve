import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import {
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// import { signUp } from "../../store/actions/authActions";
import { signUp } from '../../hooks/authHooks';

const PREFIX = "SignUp";
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

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent refresh of the browser

    // dispatch(signUp(user));
    console.log(user);
    signUp(user);
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/" />;
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
        <Typography variant="h5">Sign up</Typography>
        <TextField
          className={classes.spacing}
          id="name"
          label="Nickname"
          variant="outlined"
          fullWidth
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <TextField
          className={classes.spacing}
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <TextField
          className={classes.spacing}
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Button
          className={classes.spacing}
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </Root>
  );
};

export default SignUp;
