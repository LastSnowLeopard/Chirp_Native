import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Image, Platform } from 'react-native';
import { COLORS, H, IMAGES, PLATFORM, W } from "../../constants/StyleCommon";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { useSelector } from "react-redux";
import { IMAGEBASEURL } from "../../config/api/HttpUtils";
const Input = (props) => {

    const userData = useSelector((state) => state?.user?.userData)
    const [comment, setComment] = useState('')

    const AndroidView = () => {
        return (
            // <KeyboardAwareScrollView 
            //  style={{flex:1}}
            // >
            <KeyboardAvoidingView
                behavior='height' >
                <View style={styles.container}>
                    <Image style={styles.profileImgStyle} resizeMode={'cover'} source={userData?.profile_image_url === undefined || userData?.profile_image_url === null ? IMAGES.PROFILE_IMAGE : { uri: IMAGEBASEURL + userData?.profile_image_url }} />
                    <View style={styles.inputStyle}>
                        <TextInput
                            placeholder="Write a Comment"
                            keyboardType="twitter"
                            autoFocus={true}
                            style={styles.input}
                            value={comment}
                            onChangeText={(e) => setComment(e)}
                        />
                        <TouchableOpacity
                            onPress={() => { props.Send(comment), setComment('') }}
                            style={styles.button}>
                            <Image style={styles.sendBtn} resizeMode={'contain'} source={IMAGES.SEND} />
                        </TouchableOpacity>
                    </View>
                </View>
                </KeyboardAvoidingView>
        )
    }

    const iosView = () => {
        return (
            <KeyboardAvoidingView
                behavior='position'>
                <View style={styles.container}>
                    <Image style={styles.profileImgStyle} resizeMode={'cover'} source={userData?.profile_image_url === undefined || userData?.profile_image_url === null ? IMAGES.PROFILE_IMAGE : { uri: IMAGEBASEURL + userData?.profile_image_url }} />
                    <View style={styles.inputStyle}>
                        <TextInput
                            placeholder="Write a Comment"
                            keyboardType="twitter"
                            autoFocus={true}
                            style={styles.input}
                            value={comment}
                            onChangeText={(e) => setComment(e)}
                        />
                        <TouchableOpacity
                            onPress={() => { props.Send(comment), setComment('') }}
                            style={styles.button}>
                            <Image style={styles.sendBtn} resizeMode={'contain'} source={IMAGES.SEND} />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }


    return (
        <>
            {PLATFORM.OS === 'android' ?
                AndroidView() :
                iosView()
            }

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#EEE',
        alignItems: 'center',
        paddingLeft: 15,
        height: H(9)
    },
    input: {
        flex: 1,
        height: H(7),
        fontSize: 15,
    },
    button: {
        height: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inactive: {
        color: '#CCC',
    },
    text: {
        color: '#3F51B5',
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        textAlign: 'center',
        fontSize: 15,
    },
    sendBtn: {
        width: W(9),
        height: H(6)
    },
    inputStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        width: W(80),
        height: H(6),
        paddingLeft: H(1),
        borderColor: COLORS.PRIMARY,
        borderRadius: H(0.7),
        marginLeft: H(1)
    },
    profileImgStyle: {
        width: W(11),
        height: W(11),
        borderRadius: W(11)
    }
});

export default Input;