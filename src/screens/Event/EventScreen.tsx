// src/screens/Event/EventScreen.tsx

import React from 'react';
import { View, Text, FlatList, ToastAndroid, Platform } from 'react-native';
import { Event } from '@/entities/Event';
import EventCardList from '@screens/Event/EventCard/EventCardList';
import { MockEventData } from '@/data/repositories/Event/MockEventData';
import styles from './styles';

const EventScreen: React.FC = () => {
  const handleConfirm = (eventName: string) => {
    const message = `Presença confirmada para ${eventName}!`;
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      console.log(message); // alternativa para iOS
    }
  };

  const renderItem = ({ item }: { item: Event }) => (
    <EventCardList event={item} onConfirm={() => handleConfirm(item.name)} />
    // aqui é o que retorn quando clica em confirmar presença na tela de eventos da comunidade
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Eventos da Comunidade</Text>
      <FlatList
        data={MockEventData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default EventScreen;
