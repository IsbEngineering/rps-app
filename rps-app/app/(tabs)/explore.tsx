import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const WelcomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            {/* 메인 뷰 */}
            <View style={styles.mainView}>
                {/* 이미지 */}
                <Image
                    source={require('./assets/manage_accounts.png')} // 이미지 경로 변경 필요
                    style={styles.image}
                />

                {/* 텍스트 */}
                <Text style={styles.title}>
                    인공지능과 대결하게 된다면 어떨까요?
                </Text>

                {/* 하단 원형 뷰 */}
                <View style={styles.paginationContainer}>
                    <View style={styles.paginationBlue} />
                    <View style={styles.paginationWhite} />
                    <View style={styles.paginationWhite} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(24, 20, 32)', // #181420
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainView: {
        width: width * 0.9, // 메인 컨텐츠 뷰
        height: height * 0.9,
        alignItems: 'center',
    },
    image: {
        width: 339,
        height: 282 * 1.2, // transform(d: 1.2) 반영
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        width: 514,
        height: 82,
        fontSize: 33,
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Abel-Regular', // 폰트 추가 필요
        letterSpacing: -0.82,
        lineHeight: 44,
        marginBottom: 20,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },
    paginationBlue: {
        width: 56,
        height: 31,
        backgroundColor: 'rgb(146, 173, 255)', // #92ADFF
        borderRadius: 22,
    },
    paginationWhite: {
        width: 40,
        height: 31,
        backgroundColor: 'rgb(255, 250, 250)', // #FFFAFA
        borderRadius: 22,
    },
});

export default WelcomeScreen;
