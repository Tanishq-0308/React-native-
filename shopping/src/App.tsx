import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './screens/Home';
import Details from './screens/Details';

export type RootParamList= {
  Home:undefined;
  Details:{product: Product}
};

const Stack= createNativeStackNavigator<RootParamList>()
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title:'Trending Products'
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            title:'Product Details'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
