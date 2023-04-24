/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

const User = ({name}) => {
  return (
    <View>
      <Text>this is a prop with {name}</Text>
    </View>
  )
}


function App(){
  
  const name = "Iron man";

  return (
    <View>
      <Text>Press the button</Text>
      <Button title='This is the button'/>
      <User name={name}/>
    </View>
  );
}



export default App;
