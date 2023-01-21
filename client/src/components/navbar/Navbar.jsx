import logo from "../../assets/img/base-img/sieve-logo-dark.webp";

import React, { useState, useEffect } from "react";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Link, useNavigate } from "react-router-dom";

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
    padding: "0px!important",
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
  const [ loggedIn, setLoggedIn ] = useState(false);
  // const state = useSelector((state) => state);
  // const auth = useSelector((state) => state.auth);
  const name = localStorage.getItem("user");

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSignOut = () => {
    // logout
    localStorage.clear();
    setLoggedIn(false);

    navigate("/signin");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  return (
    <Root>
      <AppBar position="static" color="dark" className='navbar'>
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
          {loggedIn? (
            <>
              <Button color="inherit">
                <Link className='navLinkStyle' to="/cms/dashboard">
                  Backend
                </Link>
              </Button>
              <Typography variant="subtitle2" className='navRoot'>
                Logged in as {name}
              </Typography>
              <Button color="inherit" onClick={() => handleSignOut()}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link className='navLinkStyle' to="/auth/signin">
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

