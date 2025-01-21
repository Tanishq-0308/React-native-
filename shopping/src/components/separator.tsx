import { StyleSheet, View } from 'react-native'
import React from 'react'

const separator = () => {
  return (
    <View style={styles.separator}>
    </View>
  )
}

export default separator

const styles = StyleSheet.create({
    separator:{
        height:0.8,
        backgroundColor:'#cad5e2'
    }
})