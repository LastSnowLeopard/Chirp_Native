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
import { FORGOTPASSWORD, HOME, SIGNUP, TAB } from "../../constants/Navigation";
import AppLoading from "../../components/AppLoading/AppLoading";
import SocailLogin from "../../components/Socaillogin/SocailLogin";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../config/Redux/action";
import { CommonActions } from "@react-navigation/native";
const Signin = (props) => {

    let dispatch = useDispatch();
    const Loading = useSelector(state => state.user.loading);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSecurTextEntry, setisSecurTextentery] = useState(true);


    const _handleSignin = async () => {

        if (email === '') {
            Alert('Email is required!');
            return;
        }

        if (password === '') {
            Alert('Password is required!');
            return;
        }
        else {
            const data = {
                email: email,
                password: password
            }
            dispatch(login(data, props, CommonActions))
        }
    }

    return (
        // <LinearGradient colors={} style={styles.continer}>
        <SafeAreaView style={styles.middleContiner}>
            {AppLoading.renderLoading(Loading)}
            <KeyboardAwareScrollView
                automaticallyAdjustContentInsets={false}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>

                <View style={styles.logoAfterontiner}>
                    <HeaderLogo {...props} />
                    <Heading TEXT={`Welcome \nBack!`} />
                    <SubHeading TEXT={'Login to your account'} />
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
                    <CustomeTextInput
                        Text={'Password'}
                        placeholder={'Enter your password'}
                        fill={Validations.isValidPassword(password) ? true : false}
                        type={'password'}
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                        secureTextEntry={isSecurTextEntry}
                        onPressEyeIcon={() => setisSecurTextentery(!isSecurTextEntry)}
                        isValidTextInput={password == '' ? true : Validations.isValidPassword(password) ? true : false}
                    />
                    <TouchableOpacity onPress={() => props.navigation.navigate(FORGOTPASSWORD)} style={styles.forgotBtn}>
                        <Text style={styles.forgotBtnTxt}>Forgot?</Text>
                    </TouchableOpacity>
                    <View style={{ height: H(2) }} />
                    <Button onPress={() => _handleSignin()} BTNNAME={'Login now'} />
                    <View style={{ height: H(2) }} />
                    <SocailLogin {...props} />
                    <View style={styles.donotHaveAccountTextContiner}>
                        <Text style={styles.doNotTextStyle}>
                            <TouchableOpacity style={styles.doNotTextStyle} disabled>
                                <Text style={styles.doNotTextStyle}>
                                    {`Don't have an account ?`}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate(SIGNUP)}>
                                <Text style={styles.signUpTextStyle}> {'Sign up'}</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>

            </KeyboardAwareScrollView>
        </SafeAreaView>
        // </LinearGradient>
    )
}

export default Signin