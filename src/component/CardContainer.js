import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Title from "./Title";
import Card from "./Card";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 340,
    width: 340
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function SpacingGrid() {
  const classes = useStyles();

  const cards = [
    {
      title: "Contemplative Reptile",
      image:
        "https://animals.net/wp-content/uploads/2017/02/Lizard-2-650x425.jpg",
      type: "Lizard",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
      title: "Fierce Spider",
      image:
        "https://animals.net/wp-content/uploads/2020/03/Spider-5-650x425.jpg",
      type: "Spider",
      description:
        "A Spider is any creature in the taxonomic order Araneae. Researchers place all Spiders in the taxonomic class Arachnida, ..."
    }
  ];

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing="4">
          <Title content="Time to learn hooks" />
        </Grid>
        <Grid container justify="center" spacing="4">
          {cards.map(value => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <Card cardInfo={value} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
