import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Event } from '@/entities/Event';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

interface EventCardListProps {
  event: Event;
  onConfirm: () => void;
}

const EventCardList: React.FC<EventCardListProps> = ({ event, onConfirm }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(new Date(date));
  };

  return (
    <View style={styles.card}>
      <Image source={event.image?.[0]} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.4)']}
        style={{ ...styles.image, position: 'absolute' }}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{event.name}</Text>
        <Text style={styles.date}>{formatDate(event.date)}</Text>
        <Text style={styles.location}>{event.address?.toString() ?? 'Endereço não informado'}</Text>
        {event.description && (
          <Text style={styles.description}>{event.description}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={onConfirm}>
        <Text style={styles.buttonText}>Confirmar Presença</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventCardList;
