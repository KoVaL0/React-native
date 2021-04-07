import * as React from 'react';
import {Button, StyleSheet} from 'react-native';

import {Feather} from '@expo/vector-icons';
import {Text, View} from '../components/Themed';
import {Avatar} from "../components/Avatar";
import {VideoBlock} from "../components/VideoBlock";
import {store} from "../App";
import {useEffect, useState} from "react";

export default function Profile(props) {
    const [user, setUser] = useState(store.getState().data.user)

    const handlerClickExit = async () => {
        await props.navigation.navigate("Login")
        store.dispatch(setUser(null))
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileBlock}>
                <Avatar img={"https://xakep.ru/wp-content/uploads/2013/12/085647.jpg"}
                        style={{width: 100, height: 100, marginRight: 20,}}/>
                <View>
                    <Text style={styles.title}>{user?.first_name}</Text>
                    <Text style={styles.title}>{user?.last_name}</Text>
                    <Text>{user?.phone}</Text>
                </View>
                <Feather style={styles.settings} name="settings" size={24} color="black"/>
            </View>
            <Button title={"Выход"} onPress={() => handlerClickExit()}/>
            <Text>Ваши видео</Text>
            <View style={styles.galleryContainer}>
                <View style={styles.videoContainer}>
                    <VideoBlock style={styles.videoBlock}
                                img={"https://automobile-zip.ru/wp-content/uploads/0/6/c/06c6a0880699aeabe1101974424b2745.jpeg"}/>
                    <VideoBlock style={styles.videoBlock}
                                img={"https://automobile-zip.ru/wp-content/uploads/0/6/c/06c6a0880699aeabe1101974424b2745.jpeg"}/>
                    <VideoBlock style={styles.videoBlock}
                                img={"https://automobile-zip.ru/wp-content/uploads/0/6/c/06c6a0880699aeabe1101974424b2745.jpeg"}/>
                    <VideoBlock style={styles.videoBlock}
                                img={"https://automobile-zip.ru/wp-content/uploads/0/6/c/06c6a0880699aeabe1101974424b2745.jpeg"}/>
                    <VideoBlock style={styles.videoBlock}
                                img={"https://automobile-zip.ru/wp-content/uploads/0/6/c/06c6a0880699aeabe1101974424b2745.jpeg"}/>
                </View>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    profileBlock: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        padding: 10,
        width: "100%",
    },
    videoContainer: {
        width: "100%",
        flexDirection: "row",
        alignContent: "flex-start",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        backgroundColor: "rgba(241,241,241,0.66)",
        borderRadius: 10,
    },
    videoBlock: {
        marginBottom: 10,
        marginHorizontal: 5,
    },
    galleryContainer: {
        justifyContent: "center",
    },
    settings: {
        alignSelf: "flex-start",
        marginLeft: "auto",
    }
});
