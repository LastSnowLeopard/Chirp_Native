import React from "react";
import { SafeAreaView, View, Text, Image } from 'react-native';
import PostHeader from "../../../components/PostHeader/PostHeader";
import { COLORS, FONTS, H, IMAGES, PLATFORM, RFVALUE, W } from "../../../constants/StyleCommon";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const GOOGLE_PLACES_API_KEY = 'AIzaSyBs1PwgporJKABPGMbInlSiA6FKyDEEQJI';
import styles from './Styles';

const SearchLocation = (props) => {

    const handleLocation = (data, details) => {
        props.route.params.setLocation(data, details);
        props.navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.mainContiner}>
            <PostHeader {...props} TXT={'Add your location'} />
            <View style={styles.middleContiner}>
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
                            height: H(6),
                            borderRadius: H(1),
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            backgroundColor: '#EAEAEA',
                            alignSelf: 'center',
                            alignItems: 'center',
                            paddingLeft: H(2),
                            marginTop: H(1.5),
                            padding: H(1),
                            flexDirection: 'row',
                            //   backgroundColor:'red'

                        },
                        textInput: {
                            marginLeft: 0,
                            marginRight: 0,
                            height: 38,
                            color: 'rgba(0, 0, 0, 0.5)',
                            fontSize: RFVALUE(12),
                            backgroundColor: '#EAEAEA',
                            fontFamily: FONTS.REGULAR,
                            marginTop: PLATFORM.OS === 'android' && H(1)

                        },

                    }}
                    onPress={(data, detail) => handleLocation(data, detail)}
                    onFail={error => console.error(error)}
                    nearbyPlacesAPI={'GoogleReverseGeocoding'}
                    GooglePlacesSearchQuery={{
                        rankby: 'distance',
                    }}
                    GooglePlacesDetailsQuery={{ fields: ['geometry', 'formatted_address'] }}
                    debounce={300}

                />

            </View>
        </SafeAreaView>
    )
}

export default SearchLocation;