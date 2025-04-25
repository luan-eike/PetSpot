// src/screens/Event/EventScreen.tsx

import React from 'react';
import { View, Text, FlatList, ToastAndroid, Platform } from 'react-native';
import { Event } from '@/entities/Event';
import EventCardList from '@screens/Event/EventCard/EventCardList';
import { MockEventData } from '@/data/repositories/Event/MockEventData';
import styles from './styles';

const EventScreen: React.FC = () => {
  const handleConfirm = async (eventJson: Record<string, any>) => {
  
    const resposta = await fetch('http://192.168.15.9:5000/api/eventos/1/confirmar',
      {
        method: 'POST', 
        headers: {'Content-Type': 'application/json',}, 
        body: JSON.stringify({ "id_user": eventJson['creatorId'], "id_evento": eventJson['id'] })
      }
    )
    const message = await resposta.json();
    console.log(message) //mostra o retorno no log
    ToastAndroid.show(message['erro'], ToastAndroid.SHORT); //mostra na tela do celular se dar erro
  }

  const renderItem = ({ item }: { item: Event }) => (
    <EventCardList event={item} onConfirm={() => handleConfirm(item)} />
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
