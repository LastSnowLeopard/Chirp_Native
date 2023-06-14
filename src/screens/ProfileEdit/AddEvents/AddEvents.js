import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import PostHeader from "../../../components/PostHeader/PostHeader";
import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../../constants/StyleCommon";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from 'react-native-dropdown-picker';
import moment from "moment";
import Button from "../../../components/Button/Button";
import { useSelector,useDispatch } from "react-redux";
import { addEvent } from "../../../config/Redux/action";

const AddEvents = (props) => {
    
    let dispatch = useDispatch();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const userData = useSelector((state) => state?.user?.userData)
    const [selectedDate, setSelectedDate] = useState('Select Event Date');
    const [des, setDes] = useState('')
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Graduted', value: 'Graduted' },
        { label: 'Prmoted', value: 'Prmoted' },
        { label: 'Married', value: 'Married' },
        { label: 'Job', value: 'Job' },

    ]);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(moment(date).format('MM-YYYY'))
        hideDatePicker();
    };

const _handleAddEvents =() =>{

    const data = JSON.stringify({
            "user_id":userData.user_id,
            "content":value,
            "location_lat_lng":"",
            "location":"",
            "post_type":"event",
            "life_event_id":"1",
            "event_date":selectedDate,
            "privacy":"public"
    })
    const userId = JSON.stringify({ "user_id": userData.user_id })
    dispatch(addEvent(data,props,userId))
}

    return (
        <SafeAreaView style={styles.mainContiner}>
            <PostHeader TXT={'Add Events'} {...props} />
            <View style={styles.middleCotnier}>
                <TouchableOpacity onPress={() => showDatePicker()} style={styles.btnMove}>
                    <Text style={styles.txtStyle}>{selectedDate}</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder="Description"
                    style={styles.inputStyle}
                    onChangeText={(e) => setDes(e)}
                />
                <DropDownPicker
                    open={open}
                    value={value}
                    placeholder={'Select Event'}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={styles.styleDrop}
                    dropDownContainerStyle={styles.dropDownStyle}
                    textStyle={styles.txtStyle}
                    zIndex={3000}
                    zIndexInverse={1000}
                />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            <View style={styles.addRelationState}>
                    <Button
                        BTNNAME={'Done'}
                        onPress={() => _handleAddEvents()}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = STYLESHEET.create({
    mainContiner: {
        flex: 1,
        backgroundColor: COLORS.DARKBACKGROUND
    },
    btnMove: {
        width: W(90),
        height: H(5.5),
        backgroundColor: COLORS.PRIMARY,
        borderRadius: H(1),
        alignSelf: 'center',
        marginVertical: H(1),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: H(5)
    },
    txtStyle: {
        color: COLORS.WHITE,
        fontFamily: FONTS.MEDIUM,
        fontSize: RFVALUE(14)
    },
    txtStyle: {
        color: COLORS.BLACK,
        fontFamily: FONTS.MEDIUM,
        fontSize: RFVALUE(12)
    },
    dropDownStyle: {
        marginTop: H(2),
        borderColor: COLORS.WHITE
    },
    styleDrop: {
        marginTop: H(2),
        borderColor: COLORS.WHITE
    },
    middleCotnier: {
        width: W(90),
        alignSelf: 'center',
        flex:1
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
    addRelationState: {
        position: 'absolute',
        width: W(90),
        alignSelf: 'center',
        bottom: H(2)
    },
})
export default AddEvents;