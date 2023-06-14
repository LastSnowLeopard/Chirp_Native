import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import PostHeader from "../../components/PostHeader/PostHeader";
import SmBtn from "../../components/SmallBtn/SmallBtn";
import { H, IMAGES } from "../../constants/StyleCommon";
import styles from './Styles'
const Scan = (props) => {

    const [activeBtn, setIsActiveBtn] = useState(1)

    return (
        <SafeAreaView style={styles.mainContainer}>
            <PostHeader TXT={'Scan'} {...props} />
            <View style={styles.continer}>

                <SmBtn
                    TXT={'My QR'}
                    icon={false}
                    isDark={activeBtn === 1 ? false : true}
                    onPress={() => { setIsActiveBtn(1) }}
                />
                <SmBtn
                    TXT={'Scan QR'}
                    icon={false}
                    onPress={() => { setIsActiveBtn(2) }}
                    isDark={activeBtn === 2 ? false : true}
                />

            </View>
            {
                activeBtn === 1 && (
                    <View>
                        <Image
                            resizeMode={'contain'}
                            style={styles.profileImg}
                            source={IMAGES.PROFILE_IMAGE}
                        />
                        <Text style={styles.nameStyle}>Muhammad Ali</Text>
                        <Image
                            resizeMode={'contain'}
                            source={IMAGES.QRCODECAPITAL}
                            style={styles.qrCodeimg}
                        />
                        <Text style={styles.desTxt}>Let Someone scan your QR Code to add you as Friend</Text>
                        <View style={{ height: H(4.5) }} />
                        <TouchableOpacity style={styles.btn}>
                            <Image
                                source={IMAGES.SHARERED}
                                resizeMode={'contain'}
                                style={styles.shareImg}
                            />
                            <Text style={styles.btnTxt}>Share</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Image
                                source={IMAGES.BOOKMARK}
                                resizeMode={'contain'}
                                style={styles.shareImg}
                            />
                            <Text style={styles.btnTxt}>Save</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            {
                activeBtn === 2 && (
                    <View>
                        <Text style={styles.txtStyle}>Scan the QR code to add Friend</Text>
                        <Text style={styles.desTxt}>Scan QR Code shared by your friend
                            to add him in your friend List </Text>

                        <View style={styles.qrCodebox}>

                        </View>
                        <View style={{ height: H(2) }} />
                        <Text style={styles.desTxt}>If you are unable to connect after scanning
                            the QR code please contact Support </Text>
                    </View>
                )
            }
        </SafeAreaView>
    )
}

export default Scan;