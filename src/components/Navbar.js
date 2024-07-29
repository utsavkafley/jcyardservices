import { Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <nav className="text-slate-800">
      <div className="flex flex-col sm:flex-row sm:gap-4">
        <a
          href="#home"
          className="border-b-4 border-slate-600 hover:border-orange mb-2 sm:mb-0"
        >
          <Typography variant="h5" gutterBottom>
            About us
          </Typography>
        </a>
        <a
          href="#home"
          className="border-b-4 border-slate-600 hover:border-orange mb-2 sm:mb-0"
        >
          <Typography variant="h5" gutterBottom>
            Our Services
          </Typography>
        </a>
        <a
          href="#home"
          className="border-b-4 border-slate-600 hover:border-orange mb-2 sm:mb-0"
        >
          <Typography variant="h5" gutterBottom>
            Gallery
          </Typography>
        </a>
        <a
          href="#home"
          className="border-b-4 border-slate-600 hover:border-orange mb-2 sm:mb-0"
        >
          <Typography variant="h5" gutterBottom>
            Contact us
          </Typography>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
