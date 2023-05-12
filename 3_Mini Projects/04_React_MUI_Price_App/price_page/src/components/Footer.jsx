import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React from "react";

const Footer = () => {
  return (
    <>
      <Typography
        variant="body2"
        color="secondary"
        align="center"
        sx={{ mt: 5 }}
      >
        {"Copyright © "}
        <Link
          rel="stylesheet"
          href="https://github.com/muhammedvuslat"
          color="inherit"
        >
          My Github
        </Link>
      </Typography>
    </>
  );
};

export default Footer;
