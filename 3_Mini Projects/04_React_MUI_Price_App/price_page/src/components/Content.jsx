import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import React from "react";
import { contents } from "../data";

const Content = () => {
  return (
    <>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.primary.dark}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {contents.map((content, index) => {
            console.log(contents);
            return (
              <Grid item xs={6} sm={3} key={index}>
                <Typography variant="h6" color="primary.dark" gutterBottom>
                  {content.title}
                </Typography>
                <ul>
                  {content.description.map((desc, index) => (
                    <li key={index}>
                      <Link underline="none" href="#" color="secondary.dark">
                        {desc}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Content;
