import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../modules/login";
import Profile from "../modules/login/profile/screens/Profile";

const {Screen, Navigator, Group} = createNativeStackNavigator()

export function StackNavigator(){
    return(
        <Navigator>
            <Group
                screenOptions = {{
                    headerTintColor: 'navy'
                }}>
                    <Screen name = "Login" component = {Login}/>
                    <Screen name = "Profile" component = {Profile}/>
                </Group>
        </Navigator>
    )
}