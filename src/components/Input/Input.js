import React, { useState } from 'react';
import {
    TextInput,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    widthPercentageToDP as w,
    heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import propTypes from 'prop-types';
import colors from '../../assets/colors/colors';
import fonts from '../../assets/fonts/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, H, IMAGES, W } from '../../constants/StyleCommon';


const CustomeTextInput = props => {
    return (
        <View style={[props.TextInputContainer, { ...props.customStyle }]}>
            <Text style={[props.TextinputTextStyle, props.customeTextStyle]}>
                {props.Text}
            </Text>
            <View
                style={[
                    props.container,
                    props.fill && { borderColor: COLORS.GOOGLEBTNCOLOR, borderWidth: 3 },
                    !props.isValidTextInput && { borderColor: COLORS.PRIMARY, borderWidth: 2 },
                ]}>
                <TextInput
                    placeholder={props.placeholder}
                    placeholderTextColor={COLORS.PLACHOLDERTEXTCOLOR}
                    onChangeText={props.onChangeText}
                    style={[props.textInputStyle, { ...props.customeStyleTextInput }]}
                    secureTextEntry={props.secureTextEntry}
                    value={props.value}
                    // maxLength={props.length ? props.length : null}
                    keyboardType={props.keyboardType}
                    editable={props.editable}
                    maxLength={props.maxLength}
                    multiline={props.multiline}
                    autoCorrect={false}
                    autoComplete="off"
                    onFocus={props.onFocus}
                    onBlur={props.onBlur}
                    autoCapitalize={'none'}
                />

                {props.type === 'password' ? (
                    props.secureTextEntry == true ? (
                        <TouchableOpacity
                            style={{ marginRight: h(0.3) }}
                            onPress={props.onPressEyeIcon}>
                            <Image style={props.eyeImageStyle} source={IMAGES.EYECLOSE} resizeMode={'contain'} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={{ marginRight: h(0.3) }}
                            onPress={props.onPressEyeIcon}>
                            <Image style={props.eyeImageStyle} source={IMAGES.EYE} resizeMode={'contain'} />
                        </TouchableOpacity>
                    )
                ) : (
                    <View style={{ width: w(5.5) }} />
                )}
            </View>
        </View>
    );
};
export default CustomeTextInput;

CustomeTextInput.propTypes = {
    style: propTypes.object,
    customStyle: propTypes.object,
    isValid: propTypes.bool,
    placeholder: propTypes.string,
    placeholderTextColor: propTypes.string,
    onChangeText: propTypes.func,
    textInputStyle: propTypes.object,
    customeStyleTextInput: propTypes.object,
    secureTextEntry: propTypes.bool,
    value: propTypes.string,
    maxLength: propTypes.number,
    fill: propTypes.bool,
    container: propTypes.object,
    TextInputContainer: propTypes.object,
    TextinputTextStyle: propTypes.object,
    keyboardType: propTypes.string,
    customeTextStyle: propTypes.object,
    multiline: propTypes.bool,
    onFocus: propTypes.func,
};

CustomeTextInput.defaultProps = {
    onChangeText: text => console.log(text),
    // onFocus:text=>console.log(text),
    value: '',
    customStyle: {},
    customeStyleTextInput: {},
    customeTextStyle: {},
    secureTextEntry: false,
    length: null,
    placeholder: 'placeholder',
    placeholderTextColor: colors.placeholderTextColor,
    Text: '',
    fill: false,

    keyboardType: 'default',
    container: {
        flexDirection: 'row',
        backgroundColor: colors.whiteColor,
        width: w(84),
        height: h(6),
        borderColor: COLORS.BORDERCOLOR,
        borderWidth: 1,
        borderRadius: h(1.1),
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    container: {
        flexDirection: 'row',
        backgroundColor: colors.whiteColor,
        width: w(84),
        height: h(6),
        borderColor: COLORS.BORDERCOLOR,
        borderWidth: 1,
        borderRadius: h(1.1),
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textInputStyle: {
        paddingLeft: h(1),
        color: colors.placeholderTextColor,
        fontFamily: fonts.textStyle,
        fontSize: RFValue(13),
        fontWeight: '400',
        width: w(64),
        height: h(6.7),
        fontFamily: fonts.normal,
    },
    TextInputContainer: {
        width: w(83),
        alignSelf: 'center',
        height: h(11),
    },
    TextinputTextStyle: {
        color: colors.darkColor,
        fontFamily: fonts.normal,
        fontWeight: '400',
        marginVertical: 4,
        paddingLeft: h(0),
    },
    eyeImageStyle: {
        width: W(8),
        height: H(3)
    }
};
