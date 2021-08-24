import React from 'react';
import './styles.css';
import { useState } from 'react';

const gameDB = {
  Storyline: [
    { name: 'SimCity', rating: '4/5' },
    { name: 'Tamagotchi ', rating: '3.5/5' },
  ],
  Action: [
    {
      name: 'Donkey Kong',
      rating: '5/5',
    },
    {
      name: 'Galaga',
      rating: '4.5/5',
    },
  ],
  Adventure: [
    {
      name: 'Dungeons & Dragons',
      rating: '3.5/5',
    },
    {
      name: 'Fallout',
      rating: '5/5',
    },
  ],
};
export default function App() {
  const [selectedGenre, setGenre] = useState("Adventure");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎮 Games Recommendation </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Games. Select a genre to get started{" "}
      </p>

      <div>
          {Object.keys(gameDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          ></button>
      