// src/screens/Event/EventScreen.tsx

import React from 'react';
import { View, Text, FlatList} from 'react-native';
import { Event } from '@/entities/Event';
import { MockEventData } from '@/data/repositories/Event/MockEventData';
import EventCardList from '@screens/Event/EventCard/EventCardList';
import styles from './styles';
import { handleConfirm } from './useEvent';

const EventScreen: React.FC = () => {

  const renderItem = ({ item }: { item: Event }) => (
    <EventCardList event={item} onConfirm={() => handleConfirm(item)} />
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
