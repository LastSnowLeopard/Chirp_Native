import React, { useState } from "react";
import { SafeAreaView, View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import PostHeader from "../../../components/PostHeader/PostHeader";
import { COLORS, H, IMAGES } from "../../../constants/StyleCommon";
import CheckBox from '@react-native-community/checkbox';
import Button from "../../../components/Button/Button";
import styles from './Styles'
import { useSelector } from "react-redux";


const TagPeople = (props) => {

    const friendsList = useSelector((state) => state?.user?.userTagFriends)
    const [freinds, setFriends] = useState(friendsList)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)


    const headerComponet = () => (
        <View style={styles.searchContiner}>
            <View style={styles.inpurContiner}>
                <Image
                    resizeMode={'contain'}
                    style={styles.searchImg}
                    source={IMAGES.SEARCH} />
                <TextInput
                    placeholder="Search..."
                    style={styles.searchInputStyle} />
            </View>
            <View style={{ height: H(1) }} />
            <Text style={styles.sugTxt}>{'All Friends'}</Text>
        </View>
    )


    const _handleChecked = (index, e) => {
        let temp = [...freinds]
        temp[index].checked = e;
        setFriends([...temp])
    }

    const handleTagPeople = () => {



        let temparray = []
        let tempId = []
        freinds.map((item) => {
            if (item.checked === true) {
                temparray.push(item)
                tempId.push(item?.id)
            }
        })
        if (temparray.length === 1) {
            props.route.params.setTagPeople(temparray[0].friend_name, tempId);
            props.navigation.goBack();
        }
        else if (temparray?.length > 1) {
            props.route.params.setTagPeople(temparray[0].friend_name + ' with ' + temparray?.length + " other", tempId);
            props.navigation.goBack();
        }
        else {
            // props.route.params.setTagPeople('');
            props.navigation.goBack();
        }

    };

    const renderItem = ({ item, index }) => (
        <TouchableOpacity disabled onPress={() => _handleChecked(item)} style={styles.btnStyle}>
            <View style={styles.nameImgStyle}>
                <Image
                    resizeMode={'cover'}
                    style={styles.profileImageStyle}
                    source={IMAGES.PROFILE_IMAGE} />
                <Text style={styles.nameTxt}>{item?.friend_name}</Text>
            </View>
            <TouchableOpacity onPress={() => _handleChecked(index, !item.checked)}>
                <Image
                    source={item.checked ? IMAGES.CHECKBOX : IMAGES.UNCHECK}
                    resizeMode={'contain'}
                    style={styles.checkBoxImg}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={styles.mainContiner}>
            <PostHeader {...props} TXT={'Tag Friends'} />
            <View style={{ flex: 1, backgroundColor: COLORS.LIGHTBACKGROUNDCOLOR }}>
                <FlatList
                    data={freinds}
                    renderItem={renderItem}
                    ListHeaderComponent={headerComponet}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
                <View style={{ backgroundColor: COLORS.WHITE }}>
                    <View style={styles.bottomBtn}>
                        <Button onPress={() => handleTagPeople()} BTNNAME={'DONE'} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TagPeople