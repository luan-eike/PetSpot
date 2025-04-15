import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const settingsOptions = [
  { id: 'account', name: 'Conta' },
  { id: 'notifications', name: 'Notificações' },
  { id: 'privacy', name: 'Privacidade' },
  { id: 'theme', name: 'Tema' },
  { id: 'feedback', name: 'Feedback' },
  { id: 'languages', name: 'Idiomas' },
  { id: 'about', name: 'Sobre o App' },
  { id: 'support', name: 'Suporte' },
  { id: 'logout', name: 'Sair' },
];

const SettingsMainScreen = () => {
  const navigation = useNavigation();

  const handleOptionPress = (optionId: string) => {
    // Exemplo de navegação. Certifique-se de configurar as rotas corretamente no navigator.
    if (optionId !== 'logout') {
      navigation.navigate(`Settings${capitalize(optionId)}Screen` as never);
    } else {
      // Lógica de logout aqui
      console.log('Logout realizado');
    }
  };

  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {settingsOptions.map(option => (
          <TouchableOpacity
            key={option.id}
            style={styles.option}
            onPress={() => console.log('Teste')}
            // AQUI É ONDE CARREGA A TELA CONFIGURAÇÕES E FAZ UM LOOP COM TODOS OS BOTÕES
            >
            <Text style={styles.optionText}>{option.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SettingsMainScreen;
