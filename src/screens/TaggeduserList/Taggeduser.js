import React from "react";
import {SafeAreaView,View,FlatList,TextInput,Image,TouchableOpacity,Text} from 'react-native';
import PostHeader from "../../components/PostHeader/PostHeader";
import { H, IMAGES } from "../../constants/StyleCommon";
import styles from "./Styles";

const TaggedUser = (props)=>{
    
    const postData = props?.route?.params?.item
    
    const headerComponet = () => (
        <View style={styles.searchContiner}>
            <TextInput
                placeholder="Search..."
                style={styles.searchInputStyle} />
            <View style={{ height: H(1) }} />
           
        </View>
    )

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.btnStyle}>
            <View style={styles.nameImgStyle}>
                <Image
                    resizeMode={'cover'}
                    style={styles.profileImageStyle}
                    source={IMAGES.PROFILE_IMAGE} />
                <Text style={styles.nameTxt}>{item?.full_name}</Text>
            </View>
        </TouchableOpacity>
    )

    return(
      <SafeAreaView style={styles.mainContiner}>
        <PostHeader {...props} TXT={'Tag friends'} />
            <FlatList
                data={postData?.tagged_user}
                renderItem={renderItem}
                ListHeaderComponent={headerComponet}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
      </SafeAreaView>
    )
}

export default TaggedUser;