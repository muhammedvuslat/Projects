import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";

const Content = () => {
  return (
    <>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.primary.dark}`,
          borderBottom: (theme) => `1px solid ${theme.palette.primary.dark}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid></Grid>
      </Container>
    </>
  );
};

export default Content;
