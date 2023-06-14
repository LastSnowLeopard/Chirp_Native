import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import PostHeader from "../../../components/PostHeader/PostHeader";
import { COLORS, STYLESHEET, H, W, RFVALUE, FONTS, IMAGES } from "../../../constants/StyleCommon";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Button from "../../../components/Button/Button";
const GOOGLE_PLACES_API_KEY = 'AIzaSyBs1PwgporJKABPGMbInlSiA6FKyDEEQJI';
import { useSelector, useDispatch } from "react-redux";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { addCity } from "../../../config/Redux/action";


const AddCity = (props) => {

    let dispatch = useDispatch();
    const friendsList = useSelector((state) => state?.user?.userTagFriends)
    const userData = useSelector((state) => state?.user?.userData)

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [selectedDate, setSelectedDate] = useState('Select Date moved');
    const [location, setLocation] = useState('');
    const [latLng, setlatlng] = useState('')

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

    const _handleLocation = (data, detail) => {
        setLocation(detail.name)
        setlatlng(detail.geometry.location.lat, detail.geometry.location.lng);
    }

    const _handleAddCity = () => {
        const data = JSON.stringify({
            "user_id": userData.user_id,
            "city": location,
            "latlng": latLng,
            "privacy": "public",
            "date_moved": selectedDate
        })
        const userId = JSON.stringify({ "user_id": userData.user_id })
        dispatch(addCity(data, props, userId))
    }

    return (
        <SafeAreaView style={styles.mainContinter}>
            <PostHeader TXT={'Add City'} {...props} />
            <View style={styles.middleContiner}>
                <TouchableOpacity onPress={() => showDatePicker()} style={styles.btnMove}>
                    <Text style={styles.txtStyle}>{selectedDate}</Text>
                </TouchableOpacity>
                <GooglePlacesAutocomplete
                    enablePoweredByContainer={false}
                    autoFocus={true}
                    minLength={2}
                    style={{ color: '#000000', }}
                    textInputProps={{ placeholderTextColor: COLORS.PLACHOLDERTEXTCOLOR }}
                    poweredByContainer={{ color: 'black' }}
                    placeholder={'Search location'}
                    fetchDetails={true}
                    renderLeftButton={() => <Image resizeMode={'contain'} style={styles.searchImg} source={IMAGES.SEARCH} />}
                    query={{
                        key: GOOGLE_PLACES_API_KEY,
                        language: 'en',
                    }}
                    styles={{
                        textInputContainer: {
                            width: W(90),
                            height: H(5),
                            borderRadius: H(0.5),
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            backgroundColor: '#EAEAEA',
                            alignSelf: 'center',
                            alignItems: 'center',
                            paddingLeft: H(2),
                            marginTop: H(1.5)
                        },
                        textInput: {
                            marginLeft: 0,
                            marginRight: 0,
                            height: 38,
                            color: 'rgba(0, 0, 0, 0.5)',
                            fontSize: RFVALUE(12),
                            backgroundColor: '#EAEAEA',
                            fontFamily: FONTS.REGULAR
                        },

                    }}
                    onPress={(data, detail) => _handleLocation(data, detail)}
                    onFail={error => console.error(error)}
                    nearbyPlacesAPI={'GoogleReverseGeocoding'}
                    GooglePlacesSearchQuery={{
                        rankby: 'distance',
                    }}
                    GooglePlacesDetailsQuery={{ fields: ['geometry', 'formatted_address'] }}
                    debounce={300}

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
                        onPress={() => _handleAddCity()}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = STYLESHEET.create({
    mainContinter: {
        flex: 1,
        backgroundColor: COLORS.DARKBACKGROUND
    },
    subLocationTxt: {
        fontFamily: FONTS.MEDIUM,
        color: 'grey',
        fontSize: RFVALUE(12),
        paddingLeft: H(1)
    },
    middleContiner: {
        flex: 1,
        backgroundColor: COLORS.LIGHTBACKGROUNDCOLOR
    },
    searchImg: {
        width: W(5),
        height: H(3)
    },
    addRelationState: {
        position: 'absolute',
        width: W(90),
        alignSelf: 'center',
        bottom: H(2)
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
    }
})
export default AddCity;