import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Main from '../screens/Main';
import Profile from '../screens/Profile';
import {BottomTabParamList, TabOneParamList, TabTwoParamList} from '../types';
import {Feather} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {Fontisto} from '@expo/vector-icons';
import {Alert} from "react-native";
import {useState} from "react";
import {MenuModal} from "../components/MenuModal";
import {store} from "../App";
import {setModal} from "../redux/data/actions";
import Dialogs from "../screens/Dialogs";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Main"
            tabBarOptions={{activeTintColor: Colors[colorScheme].tint}}>
            <BottomTab.Screen
                name="Main"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="user" color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof AntDesign>['name']; color: string }) {
    return <AntDesign size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator({navigation}: any) {
    // @ts-ignore
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={Main}
                options={{
                    headerTitle: 'Главная',
                    headerLeft: () => (
                        <Feather
                            style={{paddingLeft: 10}}
                            name="menu"
                            size={24}
                            color="black"
                            onPress={() => store.dispatch(setModal(true))}
                        />
                    ),
                    headerRight: () => (
                        <Fontisto name="zoom" size={24} color="black" style={{paddingRight: 10}}/>
                    ),
                }}
            />
            <TabOneStack.Screen
                // @ts-ignore
                name="Dialogs"
                component={Dialogs}
                options={{
                    headerTitle: 'Главная',
                    headerLeft: () => (
                        <AntDesign
                            style={{paddingLeft: 10}}
                            name="arrowleft"
                            size={24}
                            color="black"
                            onPress={() => navigation.navigate("TabOneScreen")}
                        />
                    ),
                    headerRight: () => (
                        <Fontisto name="zoom" size={24} color="black" style={{paddingRight: 10}}/>
                    ),
                }}/>
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator({navigation}: any) {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={Profile}
                options={{
                    headerTitle: 'Профиль',
                    headerLeft: () => (
                        <AntDesign
                            style={{paddingLeft: 10}}
                            name="arrowleft"
                            size={24}
                            color="black"
                            onPress={() => navigation.navigate("TabOneScreen")}
                        />
                    ),
                    headerRight: () => (
                        <Fontisto name="zoom" size={24} color="black" style={{paddingRight: 10}}/>
                    ),
                }}

            />
        </TabTwoStack.Navigator>
    );
}
