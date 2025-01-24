import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';

export type AppStackParamList={
    Home: undefined;
}

const Stack= createNativeStackNavigator<AppStackParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerTitleAlign:'center',
        }}
    >
        <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
  )
}

export default AppStack