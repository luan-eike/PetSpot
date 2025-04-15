import React from 'react';
import { View, Text, Image } from 'react-native';
import { Pet } from '@/entities/Pet';
import styles from './styles';

interface PetCardListProps {
  pet: Pet;
}

const PetCardList: React.FC<PetCardListProps> = ({ pet }) => {
  const renderAge = () => {
    if (pet.age === undefined) return '? anos';
    return `${pet.age} ${pet.age === 1 ? 'ano' : 'anos'}`;
  };

  return (
    <View style={styles.card}>
      <Image source={pet.image[0]} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{pet.name}</Text>
        <Text style={styles.breed}>{pet.breed}</Text>
      </View>
    </View>
  );
};

export default PetCardList;
