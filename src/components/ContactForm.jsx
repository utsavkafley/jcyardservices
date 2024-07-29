import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { services } from "./services-list";
const ContactForm = () => {
  return (
    <section id="contact" className="p-4 mb-12 sm:px-24 md:px-32 lg:px-72">
      <Typography variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <form className="p-12 flex flex-col space-y-8 bg-slate-300">
        <Grid container xs={12}>
          <Grid item xs={6} className="pr-4">
            <TextField
              style={{ width: "100%", margin: "5px" }}
              type="text"
              variant="outlined"
              label="first name"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              style={{ width: "100%", margin: "5px" }}
              type="text"
              variant="outlined"
              label="last name"
            />
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={6} className="pr-4">
            <TextField
              style={{ width: "100%", margin: "5px" }}
              type="text"
              variant="outlined"
              label="email"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              style={{ width: "100%", margin: "5px" }}
              type="text"
              variant="outlined"
              label="phone"
            />
          </Grid>
        </Grid>
        <FormControl>
          <InputLabel id="service-label">Select a service</InputLabel>
          <Select labelId="service-label" label="Select a service">
            {services.map((service, index) => (
              <MenuItem value={service.title}>{service.title}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline
          rows={4}
        />
        <div className="flex items-center">
          <button
            type="submit"
            className="bg-slate-600 text-white p-2 px-4 rounded hover:bg-orange"
          >
            Send
          </button>
          <button
            type="reset"
            className="bg-slate-600 text-white p-2 px-4 ml-4 rounded hover:bg-orange"
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
