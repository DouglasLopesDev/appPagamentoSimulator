import React from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen'
import {InstallmentScreen} from './screens/InstallmentScreen';
import {PasswordScreen} from './screens/PasswordScreen';

const Stack = createNativeStackNavigator();

export default function App() {  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'GetNet Demo'}} />
        <Stack.Screen name="InstallmentScreen" component={InstallmentScreen}  options={{title: 'Parcelas'}} />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen}  options={{title: 'Confirmação de Senha'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}