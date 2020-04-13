// src/components/LikeCounter.js
import React, { useState } from "react"; // <- note the added import of useState
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!
  console.log("what are these?", numLikes, set_numLikes);

  const increaseNumLike = () => {
    console.log("test like button: ");
    set_numLikes(numLikes + 1);
  };
  return (
    <IconButton
      aria-label="add to favorites"
      color="secondary"
      onClick={increaseNumLike}
    >
      <FavoriteIcon />
      <b>{numLikes}</b>
    </IconButton>
  );
}
