import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import FastImage from "react-native-fast-image";
import PostHeader from "../../../components/PostHeader/PostHeader";
import { H, IMAGES, W } from "../../../constants/StyleCommon";
import styles from './Styles'

const API_KEY = '6cX50ib0c43HB86oAsGuaWM27kIjAnRm&q'
const Gif = (props) => {

    const [gifhy, setGifhy] = useState([])

    const fetchGif = async (q) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=${API_KEY}&limit=10`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setGifhy(data?.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    const handleGif = (item) => {
        props.route.params.setGif(item)
        props.navigation.goBack()
    }

    const _rendergif = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handleGif(item)}>
                <FastImage
                    resizeMode={'contain'}
                    source={{ uri: item?.user?.avatar_url }}
                    style={{ width: W(20), height: H(10) }}
                />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.mainContiner}>
            <PostHeader TXT={'Select GIF'} {...props} />
            <View style={styles.searchContiner}>
                <Image
                    resizeMode={'contain'}
                    style={styles.searchIcon}
                    source={IMAGES.SEARCH} />
                <TextInput
                    placeholder="Search"
                    onChangeText={(e) => fetchGif(e)}
                />
            </View>
            <FlatList
                data={gifhy}
                numColumns={5}
                showsVerticalScrollIndicator={false}
                renderItem={_rendergif}
            />
        </SafeAreaView>
    )
}

export default Gif