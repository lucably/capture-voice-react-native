import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Voice from '@react-native-community/voice';

const VoiceRecognition = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    Voice.onSpeechStart = () => setIsListening(true);
    Voice.onSpeechEnd = () => setIsListening(false);
    Voice.onSpeechResults = (event) => {
      setText(event.value ? event.value[0] : '');
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      await Voice.start('pt-BR');
      setText('');
    } catch (error) {
      console.error('Erro ao iniciar reconhecimento de voz:', error);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (error) {
      console.error('Erro ao parar reconhecimento de voz:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textListen}>
        {isListening ? 'Ouvindo...' : 'Pressione para falar'}
      </Text>
      <TouchableOpacity
        onPress={isListening ? stopListening : startListening}
        style={styles.touchableOpacity}>
        <Text style={styles.textSpeakAndStop}>
          {isListening ? 'Parar' : 'Falar'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.outputText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    touchableOpacity: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    textListen: {
        fontSize: 18, 
        marginBottom: 20 
    },
    textSpeakAndStop: { 
        color: 'white', 
        fontSize: 16 
    },
    outputText: { 
        marginTop: 20, 
        fontSize: 16 
    },
  });

export default VoiceRecognition;