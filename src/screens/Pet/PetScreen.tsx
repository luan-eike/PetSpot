import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Pet } from '@/entities/Pet';
import PetCardList from '@screens/Pet/PetCard/PetCardList';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { petService } from '@/config/RepositoryInstances';


const PetScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus Pets</Text>
      <FlatList 
        data={petService.getPetsFromCurrentUser()}
        renderItem={({ item }: { item: Pet }) => (
          <PetCardList pet={item} />
          
        )}
         
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        
      />

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => console.log('➕ Adicionar pet')}
        // aqui é onde retorna quando clica em adicionar pet na tela de meus pets
      >
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
      
    </View>

  );
};

export default PetScreen;
