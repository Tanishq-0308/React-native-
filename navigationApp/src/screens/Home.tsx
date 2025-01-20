import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type HomePorps=NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomePorps) => {
  return (
    <View style={styles.container}>
        <Text style={styles.smallTxt}>Home Screen</Text>
        <Button
            title='Go to details'
            // onPress={()=> navigation.navigate('Details',{
            //     productId:'86'
            // })}

            // onPress={()=> navigation.navigate('Details')}

            onPress={()=> navigation.push('Details',{
                productId:'86'
            })}
        >

        </Button>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    
        padding: 12,
        backgroundColor: '#FFFFFF',
      },
      smallTxt:{
        color:'#000000'
      }
})