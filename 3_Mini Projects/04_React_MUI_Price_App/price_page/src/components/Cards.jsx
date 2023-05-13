import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import StarIcon from "@mui/icons-material/StarBorder";
import { cardData } from "../data.js";

const Cards = () => {
  return (
    <>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {cardData.map((card, index) => (
            <Grid
              item
              key={card.title}
              xs={12}
              sm={card.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={card.title}
                  subheader={card.subheader}
                  align="center"
                  // titleTypographyProps={{ align: "center" }}
                  // subheaderTypographyProps={{ align: "center" }}
                  action={
                    card.title === "Pro" ? <StarIcon color="secondary" /> : null
                  }
                  sx={{ backgroundColor: "primary.main" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Cards;
