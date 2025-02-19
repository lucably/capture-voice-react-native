import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Camera, Tts, VoiceRecognition } from './components';

function Page() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Camera />
      <ScrollView>
        <Tts />
        <VoiceRecognition />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Page;
