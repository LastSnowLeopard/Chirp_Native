import React from "react";
import { SafeAreaView, View, Text, } from 'react-native';
import Button from "../../components/Button/Button";
import { COLORS, H, W } from "../../constants/StyleCommon";
import { CommonActions } from "@react-navigation/native";
import { SIGNIN } from "../../constants/Navigation";
import { useDispatch } from "react-redux";
import { isLogin } from "../../config/Redux/action";

const Menu = (props) => {

    let dispatch = useDispatch();

    const _handleLogout = () => {
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: SIGNIN }],
            }),
        );
        dispatch(isLogin(false))
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
            <View style={{width:W(90),alignSelf:'center',marginVertical:H(1)}}>
                <Button onPress={() => _handleLogout()} BTNNAME={'Logout'} />
            </View>
        </SafeAreaView>
    )
}

export default Menu;