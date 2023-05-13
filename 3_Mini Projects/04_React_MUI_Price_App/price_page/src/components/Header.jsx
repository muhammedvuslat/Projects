import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";

const Header = () => {
  return (
    <>
      <Container>
        <Typography
          sx={{ mt: 2 }}
          component="h1"
          variant="h4"
          align="center"
          // color="primary.dark"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          component="p"
          variant="h5"
          align="center"
          color="secondary.dark"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          adipisci fugiat accusantium aliquam impedit autem, ratione nisi quidem
          et a.
        </Typography>
      </Container>
    </>
  );
};

export default Header;
