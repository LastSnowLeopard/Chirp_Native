import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import AppLoading from "../../../components/AppLoading/AppLoading";
import Button from "../../../components/Button/Button";
import PostHeader from "../../../components/PostHeader/PostHeader";
import { addUserHobby } from "../../../config/Redux/action";
import { COLORS, IMAGES, W } from "../../../constants/StyleCommon";
import styles from './Styles'

const EditHobby = (props) => {

    let dispatch = useDispatch();
    const Loading = useSelector(state => state.user.loading);
    const hobbyList = useSelector((state) => state.user.hobbyList)
    const userData = useSelector((state) => state?.user?.userData)
    const [hobby, setHobby] = useState(hobbyList)

    const selectChip = (index, item) => {
        let temp = [...hobby]
        temp[index].selected = !item?.selected
        setHobby([...temp])
    }


    const _handleHobby = () => {

        let tempArray = []
        hobby.map((item) => {
            if (item?.selected === true) {
                const newData = {
                    "userId": userData?.user_id,
                    "public_hobby_id": item?.hobby_id,
                    "hobby_name": item?.hobby_name
                }
                tempArray.push(newData)
            }
        })

        const data = JSON.stringify({
            hobbiesData: tempArray,
            "hobby_deletion_ids": []
        })

        const userId = JSON.stringify({
            "userId": userData?.user_id
        })
        dispatch(addUserHobby(data, props, userId))

    }

    return (
        <SafeAreaView style={styles.mainContiner}>
            <PostHeader {...props} TXT={'Add Hobbies'} />
            {AppLoading.renderLoading(Loading)}
            <View style={styles.txtImageContiner}>
                <Image
                    resizeMode={'contain'}
                    style={styles.golbeImg}
                    source={IMAGES.GLOABE} />
                <Text style={styles.txtStyle}>Hobbies are public</Text>
            </View>
            <Text style={styles.addHobbiesTxt}>Add Hobbies</Text>
            <Text style={styles.pargraphTxt}>What do you love to do? Choose from the popular hobbies below</Text>
            <View style={styles.chipMainContiner}>
                {hobby.map((item, index) => {
                    return (
                        <TouchableOpacity onPress={() => selectChip(index, item)} style={[styles.chipContiner, { backgroundColor: item?.selected === true ? COLORS.PRIMARY : COLORS.WHITE }]}>
                            <Image style={styles.iconStyle} resizeMode={'contain'} source={{ uri: item?.hobby_icon_url }} />
                            <Text style={[styles.txtChip, { color: item?.selected === true ? COLORS.WHITE : COLORS.BLACK }]}>{item?.hobby_name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View style={styles.btnContiner}>
                <Button
                    BTNNAME={'SAVE'}
                    onPress={() => _handleHobby()}
                />
            </View>
        </SafeAreaView>
    )
}

export default EditHobby;