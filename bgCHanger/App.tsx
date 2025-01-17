import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff');

  const generateRandomColor = () => {
    const hexRange= '0123456789ABCDEF';
    let hexColor = '#';
    for (let i=0;i<6;i++){
      hexColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(hexColor);
  }
  return (
    <>
      <StatusBar backgroundColor={randomBackground}/>
      <View style={[styles.container, {backgroundColor:randomBackground}]}>
            <Text style={[styles.colorTxt, {color:randomBackground} ]} selectable={true}>{randomBackground}</Text>
        <TouchableOpacity onPress={()=>generateRandomColor()}>
          <View style={[styles.button]} >
        <Text style={styles.buttonTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  button:{
    borderRadius:12,
    backgroundColor:"#641b4d",
    paddingHorizontal:40,
    paddingVertical:10
  },
  buttonTxt:{
    fontSize:24,
    color:"#ffffff",
    textTransform:"uppercase"
  },
  colorTxt:{
    fontSize:20,
    marginBottom:16,
    backgroundColor:'white',
    padding:10,
    borderRadius:10
  }
});

export default App;
