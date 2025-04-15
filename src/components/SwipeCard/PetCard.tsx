import React, { useState } from "react";
import { View, Text, Image, Animated, ActivityIndicator } from "react-native";
import { Pet } from "@/entities/Pet";
import styles from "./styles";
import { LinearGradient } from 'expo-linear-gradient';

interface PetCardProps {
  pet: Pet;
  position?: Animated.ValueXY;
}

const PetCard: React.FC<PetCardProps> = ({ pet, position }) => {
  const [loading, setLoading] = useState(true);

  const renderAge = (birthdate?: Date) => {
    if (!birthdate) return '? anos';
    const now = new Date();
    let age = now.getFullYear() - birthdate.getFullYear();
    const monthDiff = now.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthdate.getDate())) {
      age--;
    }
    return `${age} ${age === 1 ? 'ano' : 'anos'}`;
  };

  return (
    <Animated.View style={[styles.card, position && { transform: position.getTranslateTransform() }]}>
      {loading && <ActivityIndicator size="large" color="#ff8d6b" style={styles.loader} />}
      <Image
        source={pet.image[0]}
        style={styles.image}
        resizeMode="cover"
        onLoad={() => setLoading(false)}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
        style={styles.gradient}
      />
      <View style={styles.details}>
        <Text style={styles.name}>
          {pet.name}, {renderAge(pet.birthdate)}
        </Text>
        <Text style={styles.breed}>{pet.breed}</Text>
      </View>
    </Animated.View>
  );
};

export default PetCard;
