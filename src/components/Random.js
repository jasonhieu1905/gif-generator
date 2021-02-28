import React, { useEffect } from "react";
import { useGif } from "./hooks/useGif";

function Random() {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <button onClick={fetchGif}>Random a Gif</button>
    </div>
  );
}

export default Random;