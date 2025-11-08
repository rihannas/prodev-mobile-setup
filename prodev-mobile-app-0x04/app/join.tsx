import React from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { styles } from '@/styles/index';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Navigation / Header */}
        <View style={styles.navGroup}>
          <Ionicons
            name='arrow-back'
            size={25}
            color='#000'
          />
          <Image source={require('@/assets/images/Logo.png')} />
        </View>

        {/* Title */}
        <Text style={styles.largeText}>Create to your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your email and password to join.
        </Text>

        {/* Form */}
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput
              keyboardType='email-address'
              style={styles.inputField}
              placeholder='Enter your email'
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput
                style={{ flex: 1 }}
                placeholder='Enter your password'
                secureTextEntry
              />
              <FontAwesome
                name='eye-slash'
                size={24}
                color='#7E7B7B'
              />
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput
                style={{ flex: 1 }}
                placeholder='Confirm your password'
                secureTextEntry
              />
              <FontAwesome
                name='eye-slash'
                size={24}
                color='#7E7B7B'
              />
            </View>
          </View>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        {/* Social Media Buttons */}
        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
            >
              <Image source={require('@/assets/images/google.png')} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
            >
              <Image source={require('@/assets/images/facebook.png')} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Bottom Text */}
        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Have an account?</Text>
          <Text
            style={styles.subTextJoin}
            onPress={() => router.push('/signin')}
          >
            Sign in now
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
