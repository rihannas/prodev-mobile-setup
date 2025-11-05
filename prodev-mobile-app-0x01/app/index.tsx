import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type='title'>index</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText type='subtitle'>Entry Screen - Awesome</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.largeText}>
          Typescript is great if you practice more
        </ThemedText>
        <ThemedText style={styles.mediumText}>
          React Native provides you a single codebase for cross platforms
        </ThemedText>
        <ThemedText style={styles.smallText}>ALX is awesome</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#90caf9',
  },
  largeText: {
    fontSize: 30,
    color: '#f44336',
    marginBottom: 5,
    fontWeight: '700',
    fontVariant: ['small-caps'],
  },
  mediumText: {
    fontSize: 20,
    color: '#9c27b0',
    marginBottom: 10,
    fontWeight: '500',
    textAlign: 'right',
  },
  smallText: {
    fontSize: 15,
    color: '#2196f3',
    fontWeight: '400',
    textAlign: 'center',
  },
});
