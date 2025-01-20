import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type DetailProps= NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({route}:DetailProps) => {

    const {productId}= route.params

    const navigation= useNavigation<NativeStackScreenProps<RootStackParamList>>()
  return (
    <View style={styles.container}>
      <Text style={styles.smallTxt}>Details: {productId}</Text>
      <Button title='Go back to first screen'
        onPress={()=> navigation.popToTop()}
      />
    </View>
  )
}

export default Details

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