import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CardsController from '@/components/SwipeCard/CardsController';
import { Pet } from '@/entities/Pet';
import { Ad } from '@/entities/Ad';
import { MockAdData } from '@/data/repositories/Ad/MockAdData';
import { generateCardDeck } from '@/utils/generateCardDeck';
import styles from './styles';
import { UserSession } from '@services/User/UserSession';
import { petService } from '@/config/RepositoryInstances';

console.log('🐾 ID do usuário atual:', UserSession.getCurrentUserId());

const pets = petService.getPetsExcludingCurrentUser();
console.log('🐾 Pets visíveis na HomeScreen:', pets);

const initialDeck = generateCardDeck(pets, MockAdData);
console.log('🐾 Deck final (pets + ads):', initialDeck);

type CardItem = Pet | Ad;

const HomeScreen: React.FC = () => {
  const [cards, setCards] = useState<CardItem[]>(initialDeck);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCard = currentIndex < cards.length ? cards[currentIndex] : null;
  console.log('🔢 currentIndex:', currentIndex);
  console.log('🎴 currentCard:', currentCard);

  const handleSwipe = (direction: 'left' | 'right') => {
    console.log(`Swiped ${direction} on`, cards[currentIndex]);
    setCurrentIndex((prev) => {
      if (prev + 1 < cards.length) return prev + 1;
      return prev;
    });
  };

  return (
    <View style={styles.container}>
      {currentCard ? (
        <CardsController item={currentCard} onSwipe={handleSwipe} />
      ) : (
        <Text style={styles.noMoreCards}>🐾 Fim dos cards por enquanto!</Text>
      )}
    </View>
  );
};

export default HomeScreen;
