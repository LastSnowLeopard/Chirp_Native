import React from "react";
import { SafeAreaView, View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import { useSelector } from "react-redux";
import PostHeader from "../../../components/PostHeader/PostHeader";
import { H } from "../../../constants/StyleCommon";
import styles from './Styles'

const FeelingActivity = (props) => {

    const feelingList = useSelector((state) => state.user.feelingList)

    const hankdeFeelingActivty = (data, ) => {
        props.route.params.setFeelingActivity(data);
        props.navigation.goBack();
    };

    const headerComponet = () => (
        <View style={styles.searchContiner}>
            <TextInput
                placeholder="Search..."
                style={styles.searchInputStyle} />
            <View style={{ height: H(1) }} />
        </View>
    )

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>hankdeFeelingActivty(item)} activeOpacity={0.8} style={styles.cardContiner}>
            <Image resizeMode={'contain'} style={styles.iconStyle} source={{ uri: item?.feelings_icon_url }} />
            <Text style={styles.feelingTxt}>{item?.feelings_name?.toUpperCase()}</Text>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={styles.mainContiner}>
            <PostHeader TXT={'Feeling'} {...props} />
            <FlatList
                data={feelingList}
                ListHeaderComponent={headerComponet}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

export default FeelingActivity;