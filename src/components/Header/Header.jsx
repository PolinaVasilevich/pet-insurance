import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { RouteNames } from "../../router";

const Header = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={RouteNames.HOME}> Pet App</Link>
          </Typography>

          <Link to={`${RouteNames.REGISTRATION}/${currentStep}`}>
            <Button color="inherit">Get my quote</Button>
          </Link>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
