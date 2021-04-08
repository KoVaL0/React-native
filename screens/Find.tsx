import * as React from 'react';
import {Button, StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';
import {ChatBlock} from "../components/ChatBlock";
import {store} from "../App";
import {useState} from "react";
import {MenuModal} from "../components/MenuModal";
import {setDialogId, setModal} from "../redux/data/actions";
import {InputFind} from "../components/InputFind";

export default function Find(props: any) {
    const [friend, setFriend] = useState()

    return (
        <View style={styles.container}>
            <InputFind setFriend={(res) => setFriend(res)}/>
            <Text style={{marginVertical: 10, ...styles.title}}>Find user</Text>
            {friend ? (
                <View style={styles.friend}>
                    <View>
                        <Text>{friend.first_name}</Text>
                        <Text>{friend.last_name}</Text>
                    </View>
                    <Button title={"+"} onPress={() => {
                    }}/>
                </View>
            ) : (
                <Text>нет пользователей</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    friend: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
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
    chat: {
        marginVertical: 4,
    },
});
