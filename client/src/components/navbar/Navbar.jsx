import logo from "../../assets/img/base-img/sieve-logo-dark.webp";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Link, useNavigate } from "react-router-dom";

import { signOut } from "../../store/actions/authActions";

const PREFIX = "Navbar";
const classes = {
  root: `${PREFIX}-root`,
  linkStyle: `${PREFIX}-linkStyle`,
  logo: `${PREFIX}-logo`,
  title: `${PREFIX}-title`,
  navbar: `${PREFIX}-navbar`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
  },
  [`&.${classes.linkStyle}`]: {
    color: "#fafafa",
    textDecoration: "none",
    margin: "5px",
    padding: "5px",
  },
  [`&.${classes.logo}`]: {
    width: "30px",
    height: "auto",
    marginRight: "20px",
  },
  [`&.${classes.title}`]: {
    fontFamily: "WindSong",
  },
  [`&.${classes.navbar}`]: {
    zIndex: 9999,
  },
}));

const Navbar = () => {
  const state = useSelector((state) => state);
  const auth = useSelector((state) => state.auth);

  console.log(state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    // logout
    dispatch(signOut());

    navigate("/signin");
  };

  return (
    <Root>
      <AppBar position="static" color="primary" className='navbar'>
        <Toolbar>
          <img src={logo} className='navLogo' alt="Logo" />
          <Typography variant="h4" className='navRoot'>
            <Link className='navLinkStyle' to="/">
              <span className='navTitle'>Sieve</span>
            </Link>
            <Button color="inherit">
            <Link className='navLinkStyle' to="/writeups">
              Writeups
            </Link>
          </Button>
          </Typography>
          {auth._id ? (
            <>
              <Typography variant="subtitle2" className='navRoot'>
                Logged in as {auth.name}
              </Typography>
              <Button color="inherit" onClick={() => handleSignOut()}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link className='navLinkStyle' to="/signin">
                  Sign In
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default Navbar;

