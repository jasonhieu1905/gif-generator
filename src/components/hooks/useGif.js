import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
const API_KEY = process.env.REACT_APP_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    const urlFetch = tag ? `${url}&tag=${tag}` : url;

    const { data } = await axios.get(urlFetch);
    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);
  
  return { gif, fetchGif };
}
