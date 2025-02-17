import React, { useState } from 'react';
import Tts from 'react-native-tts';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';



const falar = (text) => {
  if(!text.length === 0) return
  Tts.setDefaultLanguage('pt-Br');
  Tts.speak(text, {
    androidParams: {
      KEY_PARAM_PAN: -1,
      KEY_PARAM_VOLUME: 1,
      KEY_PARAM_STREAM: 'STREAM_MUSIC',
    },  
  });
}

function App() {
  const [text, setText] = useState('');

  return (
    <SafeAreaView >
      <TextInput placeholder='Digite o texto para falar' onChangeText={(text) => setText(text)} />
      <Button title='Clique para falar' onPress={() => falar(text)} /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default App;
