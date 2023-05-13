import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import StarIcon from "@mui/icons-material/StarBorder";
import { cardData } from "../data.js";
import { Box, Button, CardActions } from "@mui/material";
//! Merhaba
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
              <Card sx={{ mt: 2 }}>
                <CardHeader
                  title={
                    <Typography color="secondary" fontWeight="bold">
                      {card.title}
                    </Typography>
                  }
                  subheader={card.subheader}
                  align="center"
                  // titleTypographyProps={{ align: "center" }}
                  // subheaderTypographyProps={{ align: "center" }}
                  action={
                    card.title === "Pro" ? <StarIcon color="secondary" /> : null
                  }
                  sx={{ backgroundColor: "primary.main" }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h4">
                      ${card.price}
                    </Typography>
                    <Typography variant="h6" color="primary.dark">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {card.description.map((desc, index) => (
                      <li key={index}>
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                        >
                          {desc}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    color="secondary"
                    fullWidth
                    variant={card.buttonVariant}
                  >
                    {card.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Cards;
