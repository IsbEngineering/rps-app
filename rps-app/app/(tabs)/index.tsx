import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* 배경 뷰 */}
      <View style={styles.backgroundView} />

      {/* 이미지 뷰 */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/6836871.png')} // 이미지 파일 경로
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* "안녕하세요. 공학동아리입니다." 텍스트 */}
      <Text style={styles.titleText}>안녕하세요. 공학동아리입니다.</Text>

      {/* "어릴적 즐겨왔던 가위바위보 게임 기억하시나요?" 텍스트 */}
      <Text style={styles.subtitleText}>
        어릴적 즐겨왔던 가위바위보{'\n'}게임 기억하시나요?
      </Text>

      {/* 둥근 코너 뷰들 */}
      <View style={styles.roundedBlueView} />
      <View style={styles.roundedPinkView} />
      <View style={styles.roundedPinkView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(24, 20, 32, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundView: {
    position: 'absolute',
    width: 834,
    height: 1194,
    backgroundColor: 'rgba(24, 20, 32, 1)',
  },
  imageContainer: {
    width: 324,
    height: 282,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    transform: [{ scaleY: 1.15 }, { translateY: -0.07 }],
  },
  titleText: {
    width: 514,
    height: 82,
    fontSize: 33,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'PassionOne-Regular',
    lineHeight: 44,
    letterSpacing: -0.82,
  },
  subtitleText: {
    width: 423,
    height: 81,
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'PalanquinDark-Regular',
    lineHeight: 44,
    letterSpacing: -0.62,
  },
  roundedBlueView: {
    width: 56,
    height: 31,
    backgroundColor: 'rgba(146, 173, 255, 1)',
    borderRadius: 22,
    marginVertical: 5,
  },
  roundedPinkView: {
    width: 40,
    height: 31,
    backgroundColor: 'rgba(255, 250, 250, 1)',
    borderRadius: 22,
    marginVertical: 5,
  },
});

export default App;
