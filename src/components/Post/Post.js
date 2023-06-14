import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useSelector } from "react-redux";
import { IMAGEBASEURL } from "../../config/api/HttpUtils";
import { CREATEPOST } from "../../constants/Navigation";
import { IMAGES, W } from "../../constants/StyleCommon";
import CreatePost from "../CreatePostBtn/CreatePost";
import SignlePost from "../Signlepost/SignlePost";
import styles from './Styles'

const Post = (props) => {


    const userData = useSelector((state) => state?.user?.userData)


    const _renderItem = ({ item }) => {

        return (
            <SignlePost {...props} item={item} />
        )
    }

    const headerComponent = () => {
        return (
            <CreatePost {...props} />
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={props?.postData}
                renderItem={_renderItem}
                ListHeaderComponent={headerComponent}
            />
        </View>
    )
}

export default Post;