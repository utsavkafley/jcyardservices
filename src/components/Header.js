import { Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../images/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      id="home"
      className=" mt-12 px-4 mb-8 sm:px-24 md:px-32 lg:px-72 w-full bg-white text-orange p-4"
    >
      <Grid container spacing={2}>
        <Grid xs={6}>
          <img src={logo} alt="Logo" className="h-36" />
        </Grid>
        <Grid xs={6}>
          <div className="flex flex-col items-end">
            <Typography variant="h2" gutterBottom>
              JC Yard Services
            </Typography>
            <Navbar />
          </div>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
