import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import Alert from "../../../components/Alert/Alert";
import AppLoading from "../../../components/AppLoading/AppLoading";
import Button from "../../../components/Button/Button";
import PostHeader from "../../../components/PostHeader/PostHeader";
import { addBio } from "../../../config/Redux/action";
import styles from './Styles'

const EditBio = (props) => {

    let dispatch = useDispatch();
    const profileData = useSelector((state) => state?.user?.profileData)
    const Loading = useSelector(state => state.user.loading);

    const [bio, setBio] = useState('')

    const _handleAddBio = async () => {
        const data = JSON.stringify({
            "userId": profileData?.user_id,
            "profileId": profileData?.profile_id,
            "bio": bio,
            "overview_text_privacy": "1"
        })

        if (bio === '') {
            Alert('Kindly add bio!')
        }
        else {
            dispatch(addBio(data, props, profileData?.user_id))
        }
    }


    return (
        <SafeAreaView style={styles.mainContiner}>
            {AppLoading.renderLoading(Loading)}
            <PostHeader
                TXT={'Edit bio'}
                {...props} />

            <Text style={styles.bioTxt}>Bio</Text>
            <TextInput
                placeholder="Enter your bio"
                style={styles.bioTxtInput}
                multiline={true}
                onChangeText={(e) => setBio(e)}
                maxLength={101}
            />
            <Text style={styles.bottomTxt}>Try adding a short bio to tell peopole more about yourself .Your Bio is ppublic and limited to 101 characters</Text>

            <View style={styles.btnContiner}>
                <Button
                    BTNNAME={'SAVE'}
                    onPress={() => _handleAddBio()}
                />
            </View>
        </SafeAreaView>
    )
}

export default EditBio;