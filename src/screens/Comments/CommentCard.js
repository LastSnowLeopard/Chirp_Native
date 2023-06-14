import moment from "moment";
import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { IMAGEBASEURL } from "../../config/api/HttpUtils";
import { IMAGES } from "../../constants/StyleCommon";
import styles from './Styles'
const CommentCard = (props) => {
    const { item } = props
    return (
        <View style={styles.mainCardContiner}>
            <Image
                resizeMode={'cover'}
                style={styles.imgStyle}
                source={item?.user_profile_image === null || item?.user_profile_image === undefined ? IMAGES.PROFILE_IMAGE : { uri: IMAGEBASEURL + item?.user_profile_image }} />
            <View style={styles.rightContiner}>
                <View style={styles.darkContiner}>
                    <Text style={styles.userNameTxt}>{item?.user_name}</Text>
                    <Text style={styles.commentTxt}>{item?.content}</Text>
                </View>
                <View style={styles.bottomContiner}>
                    <Text style={styles.timeTxt}>{moment(item?.created_at).fromNow()}</Text>
                    <TouchableOpacity>
                        <Text style={styles.timeTxt}>Like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.timeTxt}>Reply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default CommentCard;