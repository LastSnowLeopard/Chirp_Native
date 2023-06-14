import React from "react";
import { View, Text, Image, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from "../../components/Button/Button";
import HeaderLogo from "../../components/HeaderLogo/Headerlogo";
import { H, IMAGES } from "../../constants/StyleCommon";
import styles from "./Styles";
import { SIGNIN } from "../../constants/Navigation";


const InviteSent = (props) => {

    return (
        <LinearGradient colors={['#FAF6F6', '#F7F1F1', '#F5EEEE']} style={styles.continer}>
            <SafeAreaView style={styles.middleContiner}>
                <View style={styles.logoAfterontiner}>
                    <HeaderLogo {...props} />
                    <View style={{ height: H(10) }} />
                    <Image
                        source={IMAGES.SENT}
                        resizeMode={'contain'}
                        style={styles.checkStyle}
                    />
                    <Text style={styles.txtstyle}>We have sent an password reset link to your email.
                        Please check your email to reset your password.</Text>
                    <View style={{ height: H(4) }} />
                    <Button onPress={() => props.navigation.navigate(SIGNIN)} BTNNAME={'Login'} />
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default InviteSent