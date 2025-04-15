import { Pet } from '@/entities/Pet';
import { Ad } from '@/entities/Ad';
import { MockAdData } from '@/data/repositories/Ad/MockAdData';
import { petService } from '@config/RepositoryInstances';
import { useState } from 'react';


type CardItem = Pet | Ad;

function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function generateCardDeck(pets: Pet[], ads: Ad[]): CardItem[] {

  
  const mixed: CardItem[] = [];
  let adIndex = 0;
  let i = 0;
  const shuffledAds = shuffleArray(ads);

  while (i < pets.length) {
    const interval = Math.floor(Math.random() * 7) + 3; // entre 3 e 9
    for (let j = 0; j < interval && i < pets.length; j++, i++) {
      mixed.push(pets[i]);
    }
    if (adIndex < shuffledAds.length) {
      mixed.push(shuffledAds[adIndex]);
      adIndex++;
    }
  }


  return mixed;
}
