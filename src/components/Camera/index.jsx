import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

const CameraScreen = () => {
  const device = useCameraDevice('back');
  const {  requestPermission  } = useCameraPermission()

  const checkPermissions = async () => {
    await requestPermission()
  };

  useEffect(() => {
    checkPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Camera video style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 400,
  },
});

export default CameraScreen;
