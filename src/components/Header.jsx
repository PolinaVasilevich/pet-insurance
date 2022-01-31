import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { RouteNames } from "../router";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentStep } = useSelector((state) => state.signUpForm);
  const user = useSelector((state) => state.user);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={RouteNames.HOME}> Pet App</Link>
          </Typography>

          {user.username ? (
            <Link to={RouteNames.CHECKOUT}>
              <Button color="inherit">{user.username}</Button>
            </Link>
          ) : null}

          <Link to={`${RouteNames.REGISTRATION}/${currentStep}`}>
            <Button color="inherit">Get my quote</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
