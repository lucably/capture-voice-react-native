import React from 'react';
import { SafeAreaView } from 'react-native';
import { Tts, VoiceRecognition } from './components';

function Page() {

  return (
    <SafeAreaView>
        <VoiceRecognition />
        <Tts />
    </SafeAreaView>
  );
}

export default Page;
