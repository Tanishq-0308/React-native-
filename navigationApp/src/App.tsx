import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList={
  Home: undefined;
  Details: {productId: string}
};

const Stack= createNativeStackNavigator<RootStackParamList>()

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          component={Home}
          name='Home'
          options={{
            title:'Trending Products'
          }}
        />
        <Stack.Screen
          component={Details}
          name='Details'
          options={{
            title:'Product Details'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
