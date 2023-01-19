import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import {
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { signUp } from "../../store/actions/authActions";

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
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent refresh of the browser

    dispatch(signUp(user));
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  if (auth._id) {
    return <Navigate to="/" />;
  }

  return (
    <Root className="formContent">
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
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
        />
        <TextField
          className={classes.spacing}
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
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