import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import PostHeader from "../../components/PostHeader/PostHeader";
import { addComment } from "../../config/Redux/action";
import { H } from "../../constants/StyleCommon";
import CommentCard from "./CommentCard";
import Input from "./Input";
import styles from './Styles'

const Comments = (props) => {

    let dispatch = useDispatch();
    const item = props?.route?.params?.item

    const userData = useSelector((state) => state?.user?.userData)
    const [comments, setComments] = useState([])


    useEffect(() => {
        setComments(item?.commets)
    }, [])

    const _handldeAddComment = async (e) => {

        const postData = JSON.stringify({
            "userId": userData?.user_id,
            "page": 1,
            "pageSize": 20
        })

        const data = JSON.stringify({
            "post_id": item?.post_id,
            "userId": userData?.user_id,
            "content": e
        })
        dispatch(addComment(data, postData))

        const localCommentdata = {
            "comment_id": Math.floor(Math.random() * 1000) + 1,
            "content": e,
            "created_at": new Date(),
            "post_id": item?.post_id,
            "replies": [],
            "user_id": userData?.user_id,
            "user_name": userData?.full_name,
            "user_profile_image": userData?.profile_image_url
        }
        setComments([...comments, localCommentdata])
    }

    const _renderItem = ({ item }) => {

        return (
            <CommentCard {...props} item={item} />
        )
    }

    return (
        <SafeAreaView style={styles.mainContiner}>
            <PostHeader {...props} TXT={'Comments'} />
            <FlatList
                data={comments}
                renderItem={_renderItem}
            />
            <Input Send={(e) => _handldeAddComment(e)} />
        </SafeAreaView>
    )
}

export default Comments;