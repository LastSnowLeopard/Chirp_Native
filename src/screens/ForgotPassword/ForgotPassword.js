import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Alert from "../../components/Alert/Alert";
import Button from "../../components/Button/Button";
import HeaderLogo from "../../components/HeaderLogo/Headerlogo";
import Heading from "../../components/Heading/Heading";
import CustomeTextInput from "../../components/Input/Input";
import SubHeading from "../../components/SubHeading/SubHeading";
import { H, IMAGES } from "../../constants/StyleCommon";
import Validations from "../../utils/Validations/Validation";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import styles from "./Styles";
import AppLoading from "../../components/AppLoading/AppLoading";
import { useSelector, useDispatch } from "react-redux";
import { forgotPassword } from "../../config/Redux/action";

const ForgotPassword = (props) => {

    let dispatch = useDispatch();
    const Loading = useSelector(state => state.user.loading);
    const [email, setEmail] = useState('');


    const _handleForgot = async () => {

        if (email === '') {
            Alert('Email is required!');
            return;
        }

        else {
            const data = {
                email: email,
            }
            dispatch(forgotPassword(data, props))
        }
    }

    return (
        // <LinearGradient colors={['#FAF6F6', '#F7F1F1', '#F5EEEE']} style={styles.continer}>
        <SafeAreaView style={styles.middleContiner}>
            {AppLoading.renderLoading(Loading)}
            <KeyboardAwareScrollView
                automaticallyAdjustContentInsets={false}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>

                <View style={styles.logoAfterontiner}>
                    <HeaderLogo {...props} />
                    <Heading TEXT={`Reset your \nPassword`} />
                    <SubHeading TEXT={'Enter your email.'} />
                    <Text style={styles.txtstyle}>{'we will send a link on your email to resend your password'}</Text>
                    <CustomeTextInput
                        Text={'Email'}
                        placeholder={'Enter your email'}
                        fill={Validations.isEmail(email) ? true : false}
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                        isValidTextInput={
                            email == '' ? true : Validations.isEmail(email) ? true : false
                        }
                    />
                    <View style={{ height: H(4) }} />
                    <Button onPress={() => _handleForgot()} BTNNAME={'Send'} />
                </View>

            </KeyboardAwareScrollView>
        </SafeAreaView>
        // </LinearGradient>
    )
}

export default ForgotPassword