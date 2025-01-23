import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.contianer}>
        <ActivityIndicator size="large" color='#1d9bf0'/>
      <Text>Loading</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    contianer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})