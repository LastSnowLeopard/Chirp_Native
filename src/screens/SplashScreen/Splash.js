import { CommonActions } from '@react-navigation/native';
import { Animated, View, StatusBar, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';
import { COLORS, IMAGES } from '../../constants/StyleCommon';
import { SIGNIN, TAB } from '../../constants/Navigation';
import { useSelector } from 'react-redux';
const SplashScreen = props => {

    const isLogin = useSelector((state) => state.user.isLogin)
    const [splashBackAnim, setSplashBackAnim] = useState(new Animated.Value(0));
    const [splashOverlayAnim, setSplashOverlayAnim] = useState(new Animated.Value(0));


    useEffect(() => {
        setTimeout(() => {
            Animated.sequence([
                Animated.timing(splashBackAnim, {
                    toValue: 1,
                    duration: 1200,
                    useNativeDriver: true,
                }),
                Animated.timing(splashOverlayAnim, {
                    toValue: 1,
                    duration: 1200,
                    useNativeDriver: true,
                }),
            ]).start(async () => {
                reset(true);
            });
        }, 3000);
    }, []);

    reset = async () => {
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: isLogin ? TAB : SIGNIN }],
            }),
        );
    };

    return (

        <View style={styles.containerFluid}>
            <StatusBar backgroundColor={COLORS.PRIMARY} />
            <Animated.View
                style={[
                    styles.overlay,
                    {
                        opacity: splashOverlayAnim,
                    },
                ]}>
                <Image
                    source={IMAGES.APPLOGO}
                    resizeMode={'contain'}
                    style={styles.applogoStyle}
                />

            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerFluid: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
        alignItems: 'center',
        justifyContent: 'center'
    },
    applogoStyle: {
        width: w(60),
        height: h(60)
    },
    overlay: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default SplashScreen;
