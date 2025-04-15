import React, { useState } from "react";
import { View, Image, Text, ActivityIndicator } from "react-native";
import styles from './styles';
import { Ad } from "@/entities/Ad";
import { LinearGradient } from 'expo-linear-gradient';

interface AdCardProps {
  ad: Ad;
}

const AdCard: React.FC<AdCardProps> = ({ ad }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.card}>
      {loading && <ActivityIndicator size="large" color="#ff8d6b" style={styles.loader} />}
      <Image
        source={ad.image[0]}
        style={styles.image}
        resizeMode="cover"
        onLoad={() => setLoading(false)}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
        style={styles.gradient}
      />
      <Text style={styles.name}>{ad.text}</Text>
    </View>
  );
};

export default AdCard;
