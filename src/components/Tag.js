import React, { useState } from "react";
import { useGif } from "./hooks/useGif";

function Tag() {
  const { gif, fetchGif } = useGif();
  const [tag, setTag] = useState("");

  return (
    <div className="container tag">
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <input
        type="text"
        placeholder="Search a gif"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <button onClick={() => fetchGif(tag)}>Search</button>
    </div>
  );
}

export default Tag;
