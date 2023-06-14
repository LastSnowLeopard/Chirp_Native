import React, { useState } from "react";
import { View, Text, SafeAreaView } from 'react-native';
import PostHeader from "../../../components/PostHeader/PostHeader";
import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../../constants/StyleCommon";
import DropDownPicker from 'react-native-dropdown-picker';
import { useSelector, useDispatch } from "react-redux";
import Button from "../../../components/Button/Button";
import { addRelation } from "../../../config/Redux/action";

const AddRelationShip = (props) => {

    let dispatch = useDispatch();
    const friendsList = useSelector((state) => state?.user?.userTagFriends)
    const userData = useSelector((state) => state?.user?.userData)

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Father', value: 'Father' },
        { label: 'Mother', value: 'Mother' },
        { label: 'Brother', value: 'Brother' },
        { label: 'Sister', value: 'Sister' },
        { label: 'GrandMother', value: 'GrandMother' },
        { label: 'GrandFather', value: 'GrandFather' },
    ]);

    const [openMember, setOpenMemwber] = useState(false);
    const [valueMemwber, setValueMemwber] = useState(null);
    const [itemsMemwber, setItemsMemwber] = useState(friendsList);
    const [friendId, setFriendId] = useState('')

    const addRelationShip = () => {
        const data = JSON.stringify({
            "user_id": userData.user_id,
            "relationship": value,
            "relation_person_id": friendId,
            "privacy": "public"
        })
        const userId = JSON.stringify({ "user_id": userData.user_id })
        dispatch(addRelation(data, props,userId))
    }

    return (
        <SafeAreaView style={styles.mainContiner}>
            <PostHeader TXT={'Add RealtionShip'} {...props} />
            <View style={styles.middleContiner}>
                <DropDownPicker
                    open={open}
                    value={value}
                    placeholder={'Select Relation'}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={styles.styleDrop}
                    dropDownContainerStyle={styles.dropDownStyle}
                    textStyle={styles.txtStyle}
                    zIndex={3000}
                    zIndexInverse={1000}


                />
                <View style={{ height: H(1) }} />
                <View style={{ zIndex: -1000 }}>
                    <DropDownPicker
                        open={openMember}
                        value={valueMemwber}
                        placeholder={'Family Member'}
                        items={itemsMemwber}
                        schema={{
                            label: 'friend_name',
                            value: 'friend_name'
                        }}
                        setOpen={setOpenMemwber}
                        setValue={setValueMemwber}
                        setItems={setItemsMemwber}
                        onSelectItem={(item) => setFriendId(item?.friend_id)}
                        style={styles.styleDrop}
                        dropDownContainerStyle={styles.dropDownStyle}
                        textStyle={styles.txtStyle}
                    // zIndex={1000}
                    // zIndexInverse={3000}
                    />
                </View>
                <View style={styles.addRelationState}>
                    <Button
                        BTNNAME={'Done'}
                        onPress={() => addRelationShip()}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = STYLESHEET.create({
    mainContiner: {
        flex: 1,
        backgroundColor: COLORS.LIGHTBACKGROUNDCOLOR,
    },
    middleContiner: {
        width: W(95),
        alignSelf: 'center',
        flex: 1,
    },
    txtStyle: {
        color: COLORS.BLACK,
        fontFamily: FONTS.MEDIUM,
        fontSize: RFVALUE(12)
    },
    dropDownStyle: {
        marginTop: H(2),
        borderColor: COLORS.WHITE
    },
    styleDrop: {
        marginTop: H(2),
        borderColor: COLORS.WHITE
    },
    addRelationState: {
        position: 'absolute',
        width: W(90),
        alignSelf: 'center',
        bottom: H(2)
    }
})

export default AddRelationShip;

