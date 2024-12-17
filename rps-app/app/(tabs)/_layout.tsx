import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/manage_accounts_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          그럼 인공지능과 대결하러 가볼까요?
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.roundedButton}></View>
        <View style={[styles.roundedButton, { backgroundColor: 'rgba(255, 250, 250, 1)' }]}></View>
        <View style={[styles.roundedButton, { backgroundColor: 'rgba(255, 250, 250, 1)' }]}></View>
      </View>

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>시작하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(24, 20, 32, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 339,
    height: 282,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 339,
    height: 282,
    transform: [{ scaleY: 1.2 }, { translateY: -10 }],
  },
  textContainer: {
    width: 514,
    height: 82,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Abel-Regular',
    fontSize: 33,
    textAlign: 'center',
    letterSpacing: -0.82,
    lineHeight: 44 * 1.05,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    marginTop: 30,
  },
  roundedButton: {
    width: 56,
    height: 31,
    backgroundColor: 'rgba(146, 173, 255, 1)',
    borderRadius: 22,
  },
  startButton: {
    width: 341,
    height: 93,
    backgroundColor: 'rgba(146, 173, 255, 1)',
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Abel-Regular',
    fontSize: 33,
    textAlign: 'center',
    letterSpacing: -0.82,
    lineHeight: 44 * 1.05,
  },
});

export default App;
