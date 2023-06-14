import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import IMAGES from "../../../assets/images/images";
import PostHeader from "../../../components/PostHeader/PostHeader";
import styles from './Styles'

const Privacy = (props) => {

    const handlePrivacy = (data) => {
        props.route.params.setPrivacy(data);
        props.navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.mainContiner}>
            <PostHeader {...props} TXT={'Privacy'} />
            <View style={styles.middleContiner}>
                <Text style={styles.headingTxt}>Who can see your post?</Text>
                <Text style={styles.subHeadingTxt}>Your post will appear in Feed, on your profile and in search results.</Text>
                <TouchableOpacity onPress={()=>handlePrivacy('public')} style={styles.btnContiner}>
                    <Image
                        resizeMode={'contain'}
                        style={styles.globeImg}
                        source={IMAGES.GLOABE} />
                    <Text style={styles.txtStyle}>Public</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handlePrivacy('friends_only')} style={styles.btnContiner}>
                    <Image
                        resizeMode={'contain'}
                        style={styles.globeImg}
                        source={IMAGES.FRIENDPRIVACY} />
                    <Text style={styles.txtStyle}>Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handlePrivacy('only_me')} style={styles.btnContiner}>
                    <Image
                        resizeMode={'contain'}
                        style={styles.globeImg}
                        source={IMAGES.ONLYME} />
                    <Text style={styles.txtStyle}>Only me</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Privacy;