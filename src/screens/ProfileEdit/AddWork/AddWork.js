import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';
import Button from "../../../components/Button/Button";
import PostHeader from "../../../components/PostHeader/PostHeader";
import { COLORS, FONTS, H, IMAGES, STYLESHEET, W } from "../../../constants/StyleCommon";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { addWork } from "../../../config/Redux/action";

const AddWork = (props) => {

    let dispatch = useDispatch();
    const userData = useSelector((state) => state?.user?.userData)
    const [selectCheckBox, setSelectCheckBox] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [company, setCompany] = useState('');
    const [postion, setPostion] = useState('');
    const [city, setCity] = useState('');
    const [des, setDes] = useState('')
    const [fromYear, setFromYear] = useState('Year');
    const [toYear, setYear] = useState('Year');
    const [isFrom, setIsFrom] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        if (isFrom) {
            setFromYear(moment(date).format('MM-YYYY'))
        }
        else {
            setYear(moment(date).format('MM-YYYY'))
        }
        hideDatePicker();
    };

    const _handleAddWork = () => {
        const data = JSON.stringify({
            "user_id": userData.user_id,
            "company": company,
            "position": postion,
            "city_town": city,
            "description": des,
            "currently_working_here": selectCheckBox?1:0,
            "privacy": "public",
            "from_date": fromYear,
            "to_date": toYear
        })
        const userId = JSON.stringify({ "user_id": userData.user_id })
        dispatch(addWork(data, props, userId))

    }

    return (
        <SafeAreaView style={styles.mainContiner}>
            <KeyboardAwareScrollView
                automaticallyAdjustContentInsets={false}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <PostHeader TXT={'Add Work'} {...props} />
                <View style={{ height: H(3) }} />
                <TextInput
                    placeholder="Company"
                    style={styles.inputStyle}
                    onChangeText={(e) => setCompany(e)}
                />
                <TextInput
                    placeholder="Position"
                    style={styles.inputStyle}
                    onChangeText={(e) => setPostion(e)}
                />
                <TextInput
                    placeholder="City/Town"
                    style={styles.inputStyle}
                    onChangeText={(e) => setCity(e)}
                />
                <TextInput
                    placeholder="Description"
                    style={styles.desStyle}
                    onChangeText={(e) => setDes(e)}
                    multiline={true}
                />
                <Text style={styles.timeTxt}>Time Period</Text>
                <View style={styles.continerOfWork}>
                    <TouchableOpacity onPress={() => setSelectCheckBox(!selectCheckBox)} >
                        <Image resizeMode={'contain'} style={styles.boxStyle} source={selectCheckBox ? IMAGES.CHECKBOX : IMAGES.UNCHECK} />
                    </TouchableOpacity>
                    <Text style={styles.timeTxt}>I currently work Here</Text>
                </View>
                <View style={styles.dateContiner}>
                    <Text>From</Text>
                    <TouchableOpacity onPress={() => { setIsFrom(true), showDatePicker() }} style={styles.btnStyle}>
                        <Text >{fromYear}</Text>
                    </TouchableOpacity>
                    {!selectCheckBox && (
                        <>
                            <Text>To</Text>
                            <TouchableOpacity onPress={() => { setIsFrom(false), showDatePicker() }} style={styles.btnStyle}>
                                <Text>{toYear}</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <View style={styles.addRelationState}>
                    <Button
                        BTNNAME={'Done'}
                        onPress={() => _handleAddWork()}
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

const styles = STYLESHEET.create({
    mainContiner: {
        flex: 1,
        backgroundColor: COLORS.DARKBACKGROUND
    },
    inputStyle: {
        width: W(90),
        height: H(5.5),
        alignSelf: 'center',
        backgroundColor: COLORS.WHITE,
        borderRadius: H(1),
        paddingHorizontal: H(1),
        color: COLORS.PLACHOLDERTEXTCOLOR,
        marginVertical: H(1)
    },
    desStyle: {
        width: W(90),
        height: H(14),
        alignSelf: 'center',
        backgroundColor: COLORS.WHITE,
        borderRadius: H(1),
        paddingHorizontal: H(1),
        color: COLORS.PLACHOLDERTEXTCOLOR,
        marginVertical: H(1),
        textAlignVertical: 'top'
    },
    addRelationState: {
        position: 'absolute',
        width: W(90),
        alignSelf: 'center',
        bottom: H(2)
    },
    timeTxt: {
        fontFamily: FONTS.MEDIUM,
        color: COLORS.PRIMARY,
        paddingLeft: H(2.5)
    },
    boxStyle: {
        width: W(15),
        height: H(10)
    },
    continerOfWork: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: H(3)
    },
    btnStyle: {
        width: W(20),
        height: H(5),
        backgroundColor: COLORS.LIGHTBACKGROUNDCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: H(0.5),
        marginLeft: H(1)
    }
})
export default AddWork;