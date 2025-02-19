import React, { useState } from 'react';
import Tts from 'react-native-tts';

import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text
} from 'react-native';


const speak = (text) => {
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

function TtsComponent() {
  const [text, setText] = useState('');
  
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.textInput} placeholder='Digite o texto que queira que o APP fale' onChangeText={(text) => setText(text)} />
      <TouchableOpacity
        onPress={() => speak(text)}
        style={styles.touchableOpacity}>
        <Text style={styles.textSpeak}>
          Clique para falar o texto digitado acima
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  touchableOpacity: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  textSpeak: { 
    color: 'white', 
    fontSize: 16 
  },
  textInput: {
    borderWidth: 1,
    marginBottom: 10,
    marginHorizontal: 10,
  }
});

export default TtsComponent;
