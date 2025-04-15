import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from '@/screens/Home/HomeScreen';
import PetsScreen from '@/screens/Pet/PetScreen';
import EventsScreen from '@/screens/Event/EventScreen';
import SettingsScreen from '@screens/Settings/SettingsMainScreen';
import { Ionicons } from '@expo/vector-icons';
import { PetRepository } from '@/data/repositories/Pet/PetRepository';
import { initializeMockData } from '@/config/bootstrap';
import { UserSession } from '@services/User/UserSession';

export default function App() {
  const Tab = createBottomTabNavigator();
  const petRepository = new PetRepository();

  useEffect(() => {
    UserSession.setCurrentUserId(1); 
    initializeMockData(petRepository);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName: any;

              if (route.name === 'Início') iconName = 'home-outline';
              else if (route.name === 'Meus Pets') iconName = 'paw-outline';
              else if (route.name === 'Eventos') iconName = 'calendar-outline';
              else if (route.name === 'Ajustes') iconName = 'settings-outline';

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#ff8d6b',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <Tab.Screen name="Início" component={HomeScreen} />
          <Tab.Screen name="Meus Pets" component={PetsScreen} />
          <Tab.Screen name="Eventos" component={EventsScreen} />
          <Tab.Screen name="Ajustes" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}