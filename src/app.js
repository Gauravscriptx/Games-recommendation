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
