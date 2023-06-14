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
import { HOME, SIGNIN, TAB } from "../../constants/Navigation";
import AppLoading from "../../components/AppLoading/AppLoading";
import SocailLogin from "../../components/Socaillogin/SocailLogin";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../config/Redux/action";
import { CommonActions } from "@react-navigation/native";

const Signup = (props) => {

    let dispatch = useDispatch();
    const Loading = useSelector(state => state.user.loading);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSecurTextEntry, setisSecurTextentery] = useState(true);


    const _handleSignup = async () => {
        if (Validations.isValidName(fullName) === false) {
            if (fullName === '') {
                Alert('Full name is required!');
                return;
            } else {
                Alert('Please enter valid name');
                return;
            }
        }
        if (Validations.isEmail(email) === false) {
            if (email === '') {
                Alert('Email is required!');
                return;
            } else {
                Alert('Please enter a valid email');
                return;
            }
        }
        if (Validations.isValidPassword(password) === false) {
            if (password === '') {
                Alert('Password is required!');
                return;
            } else {
                Alert('Password must be 8 characters or more, contain 1 uppercase and lower case letter, 1 number, and 1 special character.');
                return;
            }
        } else {

            const data = {
                full_name: fullName,
                email: email,
                password: password
            }
            dispatch(signup(data, props, CommonActions))
        }
    }

    return (
        // <LinearGradient colors={['#FAF6F6', '#F7F1F1', '#F5EEEE']} style={styles.continer}>
        <SafeAreaView style={styles.logoAfterontiner}>
            {AppLoading.renderLoading(Loading)}
            <View style={styles.middleContiner}>
                <KeyboardAwareScrollView
                    automaticallyAdjustContentInsets={false}
                    enableOnAndroid={true}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                  
                        <HeaderLogo {...props} />
                        <Heading TEXT={`Welcome`} />
                        <SubHeading TEXT={'Create an account'} />
                        <CustomeTextInput
                            Text={'Full Name'}
                            placeholder={'Full Name'}
                            fill={Validations.isValidName(fullName) ? true : false}
                            isValidTextInput={fullName == '' ? true : Validations.isValidName(fullName) ? true : false}
                            onChangeText={(e) => setFullName(e)}
                            value={fullName}
                        />
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
                        <View style={{ height: H(2) }} />
                        <Button onPress={() => _handleSignup()} BTNNAME={'Create account'} />
                        <View style={{ height: H(2) }} />
                        <SocailLogin {...props} />
                        <View style={styles.donotHaveAccountTextContiner}>
                            <Text style={styles.doNotTextStyle}>
                                <TouchableOpacity style={styles.doNotTextStyle} disabled>
                                    <Text style={styles.doNotTextStyle}>
                                        {`Already have an account ?`}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => props.navigation.navigate(SIGNIN)}>
                                    <Text style={styles.signUpTextStyle}> {'Log in'}</Text>
                                </TouchableOpacity>
                            </Text>
                        </View>
                  

                </KeyboardAwareScrollView>
            </View>
            </SafeAreaView>
        // </LinearGradient>
    )
}

export default Signup