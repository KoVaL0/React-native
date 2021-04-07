import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import {RootStackParamList} from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Dialogs from "../screens/Dialogs";
import {Feather, Fontisto} from "@expo/vector-icons";
import {store} from "../App";
import {setModal, setUser} from "../redux/data/actions";
import Login from "../screens/Login";
import Registration from "../screens/Registration";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {check} from "../api/users";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    const [auth, setAuth] = useState(store.getState().data.user)

    store.subscribe(()=>{
        setAuth(store.getState().data.user)
    })

    return (
        <Stack.Navigator>
            {auth ? (
                <>
                    <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
                    <Stack.Screen name="Register" component={Registration} options={{headerShown: false}}/>
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                    <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
                </>
            ) : (
                <>
                    <Stack.Screen name="Register" component={Registration} options={{headerShown: false}}/>
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                </>
            )}
        </Stack.Navigator>
    );
}
